import { Stack, Typography, Box, Divider } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{ p: "30px 250px", bgcolor: "#0b1026", color: "white" }}
        >
            {/* Top Section with Flexbox */}
            <Box
                sx={{
                    display: "flex",
                    gap: 4, // spacing between columns
                }}
            >
                {/* Column 1: Bigger width */}
                <Box sx={{ flex: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Sistem IKKA
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#9aa6c0" }}>
                        Platform pengukuran dan pelaporan Indeks Keselamatan Kebangsaan.
                    </Typography>
                </Box>

                {/* Column 2: Equal width */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Pautan
                    </Typography>
                    <Stack spacing={1}>
                        <Typography variant="body1">Modul</Typography>
                        <Typography variant="body1">KPI</Typography>
                        <Typography variant="body1">Proses</Typography>
                    </Stack>
                </Box>

                {/* Column 3: Equal width */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Sumber
                    </Typography>
                    <Stack spacing={1}>
                        <Typography variant="body1">Dokumentasi</Typography>
                        <Typography variant="body1">Soalan Lazim</Typography>
                        <Typography variant="body1">Demo</Typography>
                    </Stack>
                </Box>

                {/* Column 4: Equal width */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Hubungi
                    </Typography>

                    <Stack spacing={1}>
                        <Typography variant="body1">sokongan@ikka.gov.my</Typography>
                        <Typography variant="body1">03-1234 5678</Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 3, borderColor: "#ffffff33" }} />

            {/* Bottom Section: Copyright */}
            <Typography variant="body1">
                © 2025 Sistem IKKA. Semua hak cipta terpelihara.
            </Typography>
        </Box>
    );
}
