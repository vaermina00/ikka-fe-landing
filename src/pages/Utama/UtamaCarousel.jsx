// src/components/QuotesCarousel.jsx
import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
    {
        text: "Keselamatan negara, asasnya adalah perlembagaan persekutuan dan rukun negara. Jadi, kita perlu faham tentang ini. Walaupun dalam keadaan-keadaan tertentu, kita lihat seperti tidak bersepadu; namun sebenarnya perpaduan kita adalah dalam keadaan yang sangat baik. Ianya ditonjolkan dalam Indeks Perpaduan. Kita boleh guna Indeks Perpaduan bagi melihat tahap perpaduan dalam negara kita.",
        author: "YBHG. DATO’ INDERA NORIDAH ABD RAHIM",
        designation: "Mantan Ketua Setiausaha, Kementerian Perpaduan Negara (KPN)",
        image: "https://ikk.gov.my/wp-content/uploads/2025/07/Screenshot-2025-07-27-104952.png",
    },
    {
        text: "Keselamatan negara, asasnya adalah perlembagaan persekutuan dan rukun negara. Jadi, kita perlu faham tentang ini. Walaupun dalam keadaan-keadaan tertentu, kita lihat seperti tidak bersepadu; namun sebenarnya perpaduan kita adalah dalam keadaan yang sangat baik. Ianya ditonjolkan dalam Indeks Perpaduan. Kita boleh guna Indeks Perpaduan bagi melihat tahap perpaduan dalam negara kita.",
        author: "YBHG. DATO’ INDERA NORIDAH ABD RAHIM",
        designation: "Mantan Ketua Setiausaha, Kementerian Perpaduan Negara (KPN)",
        image: "https://ikk.gov.my/wp-content/uploads/2023/11/tta17.webp",
    },
    {
        text: "Keselamatan negara, asasnya adalah perlembagaan persekutuan dan rukun negara. Jadi, kita perlu faham tentang ini. Walaupun dalam keadaan-keadaan tertentu, kita lihat seperti tidak bersepadu; namun sebenarnya perpaduan kita adalah dalam keadaan yang sangat baik. Ianya ditonjolkan dalam Indeks Perpaduan. Kita boleh guna Indeks Perpaduan bagi melihat tahap perpaduan dalam negara kita.",
        author: "YBHG. DATO’ INDERA NORIDAH ABD RAHIM",
        designation: "Mantan Ketua Setiausaha, Kementerian Perpaduan Negara (KPN)",
        image: "https://ikk.gov.my/wp-content/uploads/2023/11/tta16.webp",
    },
];

const cardVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

const imageVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
};

const QuotesCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % quotes.length);
        }, 100000);
        return () => clearInterval(interval);
    }, []);

    const { text, author, designation, image } = quotes[current];

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                    style={{ width: "100%" }}
                >
                    <Card
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        {/* Left: Quote */}
                        <CardContent
                            sx={{
                                flex: 0.64,
                                pr: 2,
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    whiteSpace: "pre-line",
                                    mb: 3,
                                    fontSize: "1rem"
                                }}
                            >
                                "{text}"
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                                - {author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {designation}
                            </Typography>
                        </CardContent>
                        {/* Right: Image */}
                        <motion.div
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.8 }}
                            style={{
                                flex: 0.35,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                src={image}
                                alt={author}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    aspectRatio: "1 / 1",
                                    borderRadius: 3,
                                    p: 2,
                                }}
                            />
                        </motion.div>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </Box>
    );
};

export default QuotesCarousel;
