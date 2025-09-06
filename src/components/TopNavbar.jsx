import React from "react";
import { AppBar, Toolbar, Typography, Box, Divider, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function TopNavbar() {
    return (
        <Box>
            {/* First Bar: Logo + Title */}
            <AppBar
                position="static"
                elevation={0}
                sx={{ bgcolor: "white", color: "black", p: "10px 250px" }}
            >
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{ width: 60, height: 50, mr: 2 }}
                    />
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            SISTEM IKKA
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#64748b" }}>
                            Indeks Keselamatan Kebangsaan • Kementerian/Agensi Kerajaan
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider />

            {/* Second Bar: Navigation */}
            <AppBar
                position="static"
                elevation={0}
                sx={{ bgcolor: "white", color: "black", px: "250px" }}
            >
                <Toolbar disableGutters sx={{ gap: 3 }}>
                    {[
                        { label: "Utama", path: "/" },
                        { label: "Teras KDN", path: "/teras-kdn" },
                        { label: "Tentang Kajian", path: "/tentang-kajian" },
                        { label: "Aktiviti Kajian", path: "/aktiviti-kajian" },
                        { label: "Agensi", path: "/agensi" },
                    ].map((item) => (
                        <Button
                            key={item.path}
                            component={NavLink}
                            to={item.path}
                            sx={{
                                fontWeight: "normal",
                                color: "black",
                                "&.active": {
                                    fontWeight: "bold",
                                    color: "#1976d2", // active color
                                },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
    );
}
