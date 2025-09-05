import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
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
                <Toolbar
                    disableGutters
                    sx={{
                        gap: 3,
                    }}
                >
                    <Button color="inherit" component={Link} to="/">Utama</Button>
                    <Button color="inherit" component={Link} to="/teras-kdn">Teras KDN</Button>
                    <Button color="inherit" component={Link} to="/tentang-kajian">Tentang Kajian</Button>
                    <Button color="inherit" component={Link} to="/aktiviti-kajian">Aktiviti Kajian</Button>
                    <Button color="inherit" component={Link} to="/agensi">Agensi</Button>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
    );
}
