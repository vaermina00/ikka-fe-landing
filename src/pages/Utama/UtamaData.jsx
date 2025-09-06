import { Box, Grid, Card, CardContent, Typography, Button, } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, } from "recharts";

const data = [
    { year: 2021, score: 100 },
    { year: 2022, score: 103.4 },
    { year: 2023, score: 98.4 },
    { year: 2024, score: 105.7 },
    { year: 2025, score: 103.98 },
];

export default function UtamaData() {
    return (
        <Box
            sx={{
                p: 4,
                width: "100vw",
                position: "relative",
                left: "50%",
                right: "50%",
                ml: "-50vw",
                boxSizing: "border-box",
            }}
        >
            {/* Row 1: Title */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="body1"
                        align="center"
                        sx={{ mb: 2, textDecoration: "underline" }}
                    >
                        <b>Instrumen IKKA 2025</b> merupakan instrumen untuk mengukur Indeks
                        Keselamatan dan Ketenteraman Awam Negara
                    </Typography>
                </Grid>

                {/* Row 2: Main Index + Skor Indeks */}
                <Grid item xs={12} md={8}>
                    <Card
                        sx={{
                            bgcolor: "#1976d2",
                            color: "white",
                            borderRadius: 3,
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CardContent
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                                Indeks Keselamatan dan Ketenteraman Awam
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                2025
                            </Typography>
                            <Typography variant="h3" fontWeight="bold">
                                103.98
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Berbanding skor 100 pada tahun asas 2021
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{ mb: 2, textDecoration: "underline" }}
                    >
                        Skor Indeks
                    </Typography>
                    <Grid container spacing={1} justifyContent="center">
                        {["2025", "2024", "2023", "2022", "2021", "2020"].map((year) => (
                            <Grid item xs={6} key={year}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        bgcolor: "#1976d2",
                                        "&:hover": { bgcolor: "#125ea2" },
                                        borderRadius: 2,
                                        boxShadow: 2,
                                    }}
                                >
                                    {year}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Legend */}
                    <Box sx={{ mt: 3 }}>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            sx={{ mb: 1, textDecoration: "underline" }}
                        >
                            Petunjuk
                        </Typography>

                        {/* Color blocks with labels */}
                        <Box>
                            {/* Labels: Menurun / Meningkat */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 0.5,
                                }}
                            >
                                <Typography variant="caption" sx={{ color: "#e53935" }}>
                                    Menurun
                                </Typography>
                                <Typography variant="caption" sx={{ color: "#8e24aa" }}>
                                    Meningkat
                                </Typography>
                            </Box>

                            {/* Color bars */}
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(6, 1fr)",
                                    gap: 0.5,
                                    alignItems: "center",
                                }}
                            >
                                {["#e53935", "#fb8c00", "#43a047", "#1e88e5", "#8e24aa", "#6a1b9a"].map(
                                    (color, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                height: 12,
                                                bgcolor: color,
                                                borderRadius: 1,
                                            }}
                                        />
                                    )
                                )}
                            </Box>

                            {/* Tick labels aligned under each block */}
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(6, 1fr)",
                                    mt: 0.5,
                                    textAlign: "center",
                                }}
                            >
                                {[80, 90, 100, 110, 120, 150].map((val) => (
                                    <Typography key={val} variant="caption">
                                        {val}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Box>


                </Grid>

                {/* Row 3: Teras + Trend */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ height: "100%" }}>
                        <Typography align="center" sx={{ mb: 2 }}>
                            Instrument IKKA terdiri dari <b>5 teras</b>, <b>32 komponen</b> dan{" "}
                            <b>181 indikator</b>
                        </Typography>
                        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
                            {[
                                { title: "TERAS 1", desc: "Perlembagaan dan Undang-undang" },
                                { title: "TERAS 2", desc: "Tatakelola dan Integriti Agensi Penguatkuasaan" },
                                { title: "TERAS 3", desc: "Pengukuhan Keselamatan Sempadan" },
                                { title: "TERAS 4", desc: "Keselamatan Sosial dan Ekonomi" },
                                { title: "TERAS 5", desc: "Perlindungan Aset Keselamatan Negara" },
                            ].map((t, idx) => (
                                <Grid item xs={12} sm={6} md={2} key={idx}>
                                    <Card
                                        sx={{
                                            bgcolor: "#e3f2fd",
                                            borderRadius: 3,
                                            height: "230px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            p: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                flexGrow: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    textDecoration: "underline",
                                                    color: "#1976d2",
                                                }}
                                            >
                                                {t.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ my: 1 }}>
                                                {t.desc}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: "#1976d2",
                                                "&:hover": { bgcolor: "#125ea2" },
                                                borderRadius: 2,
                                                mt: "auto",
                                            }}
                                        >
                                            Lihat {t.title}
                                        </Button>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            sx={{ mb: 2, textDecoration: "underline" }}
                        >
                            Tren Indeks
                        </Typography>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={data}>
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="score" fill="#1976d2" barSize={40} />
                                <Line type="monotone" dataKey="score" stroke="#d32f2f" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
