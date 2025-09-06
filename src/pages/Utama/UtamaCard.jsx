import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupsIcon from "@mui/icons-material/Groups";
import GavelIcon from "@mui/icons-material/Gavel";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BalanceIcon from "@mui/icons-material/Balance";
import ForestIcon from "@mui/icons-material/Forest";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LanguageIcon from "@mui/icons-material/Language";

const items = [
    {
        number: "1",
        title: "Kedaulatan dan Keutuhan Wilayah",
        description:
            "Kedaulatan negara dan keutuhan wilayah merupakan teras kepada kestabilan dan keselamatan sesebuah negara.",
        icon: <PublicIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "2",
        title: "Kestabilan Sosiopolitik",
        description:
            "Kestabilan sosiopolitik adalah penting dalam mewujudkan suasana aman dan harmoni dalam kalangan rakyat Malaysia.",
        icon: <HandshakeIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "3",
        title: "Kesepaduan Nasional",
        description:
            "Kesepaduan nasional merupakan teras kekuatan dan keselamatan negara. Kesepaduan negara akan terhasil melalui ikatan perpaduan.",
        icon: <GroupsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "4",
        title: "Tadbir Urus Yang Baik",
        description:
            "Tadbir urus yang baik akan membolehkan negara melaksanakan dasar dengan cekap, mendapat pengiktirafan antarabangsa dan memenuhi ekspektasi rakyat.",
        icon: <GavelIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "5",
        title: "Keutuhan Ekonomi",
        description:
            "Keutuhan ekonomi bermaksud negara mempunyai ekonomi yang mampan serta berdaya tahan terhadap ancaman dalam dan luar negara.",
        icon: <TrendingUpIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "6",
        title: "Keadilan Sosial",
        description:
            "Nilai teras ini mesti dipertahankan selaras dengan Perlembagaan dengan mengambil kira taraf kemajuan sosioekonomi kaum yang berbeza.",
        icon: <BalanceIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "7",
        title: "Pembangunan Mampan",
        description: "Pembangunan mampan adalah pembangunan yang memenuhi keperluan semasa serta masa hadapan bagi mencapai keseimbangan pembangunan ekonomi, sosial, demografi dan alam sekitar.",
        icon: <ForestIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "8",
        title: "Keselamatan Rakyat",
        description: "Perkembangan idea dan persekitaran keselamatan dunia menyaksikan perubahan daripada pendekatan keselamatan berpaksikan negara (state centric security) kepada pendekatan keselamatan berpaksikan insan (people centric security).",
        icon: <VerifiedUserIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
    {
        number: "9",
        title: "Pengiktirafan Antarabangsa",
        description: "Sikap pragmatik, berprinsip dan berkecuali Malaysia selama ini, telah menjamin pengiktirafan dan kerjasama ekonomi, politik dan keselamatan yang berterusan dengan kuasa-kuasa besar serantau dan antarabangsa.",
        icon: <LanguageIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    },
];

export default function UtamaCard() {
    return (
        <Box sx={{ paddingBottom: 4 }}>
            {/* Title Section */}
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 2 }}
            >
                Apa itu IKK?
            </Typography>
            <Typography
                variant="body1"
                align="justify"
                sx={{ mb: 6, color: "text.secondary" }}
            >
                Indeks Keselamatan Kebangsaan (IKK) merupakan mekanisme penting untuk
                mengukur keberkesanan pelaksanaan Dasar Keselamatan Negara. Ia
                menyeluruh, merentas sektor, dan menjadi sistem amaran awal dalam usaha
                meningkatkan keselamatan negara.
            </Typography>
            <Grid container spacing={4}>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            style={{ height: "100%" }}
                        >
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    bgcolor: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flexGrow: 1,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", mb: 1, color: "black" }}
                                    >
                                        {item.number}. {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3 }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Box sx={{ textAlign: "right", mt: "auto" }}>
                                        {item.icon}
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
