import React from "react";
import { Box, Typography, Button, TextField, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function ComingSoon() {
    return (
        <Box
            sx={{
                paddingTop: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f8fafc",
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 6,
                    borderRadius: 4,
                    textAlign: "center",
                    maxWidth: 600,
                    bgcolor: "white",
                }}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    🚀 Coming Soon
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                    This page is under Development. Stay tuned!
                </Typography>
            </Paper>
        </Box>
    );
}
