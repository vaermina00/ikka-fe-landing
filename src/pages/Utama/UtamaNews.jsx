import React from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Margin, Padding } from "@mui/icons-material";
import { px } from "framer-motion";

// Sample news data
const newsData = [
    {
        title: "Peluncuran IKK bersama YAB Dato Sri Anwar Ibrahim Perdana Menteri Malaysia",
        description: "Indeks Keselamatan Kebangsaan (IKK) telah diluncurkan oleh YAB Dato’ Seri Anwar Ibrahim, Perdana Menteri Malaysia pada 30 Julai 2024 bertempat di Putrajaya International Convention Centre (PICC), bersempena perasmian Majlis Bulan Keselamatan Negara Tahun 2024.",
        image: "https://ikk.gov.my/wp-content/uploads/2025/07/Screenshot-2025-07-30-013358.png",
        link: "https://www.facebook.com/share/1YLtWAupC9/",
    },
    {
        title: "Townhall IKK 2024",
        description: "YM Raja Dato’ Nushirwan Zainal Abidin, Ketua Pengarah Keselamatan Negara (KP MKN) pada Jumaat (27 September 2024) telah turut serta dalam Dialog Awam Indeks Keselamatan Negara (IKK) 2023 di Putrajaya.",
        image: "https://ikk.gov.my/wp-content/uploads/2025/07/Screenshot-2025-07-30-003912.png",
        link: "https://www.facebook.com/share/1HzgJNrwSr/",
    },
    {
        title: "IKK diperkenalkan",
        description: "Majlis Keselamatan Negara (MKN) dengan kerjasama Universiti Teknologi Mara (UiTM) sedang membangunkan Indeks Keselamatan Kebangsaan (IKK), yang menjadi penanda aras keberkesanan dasar, strategi dan pelaksanaan pengurusan keselamatan secara menyeluruh di negara ini.",
        image: "https://ikk.gov.my/wp-content/uploads/2025/07/Screenshot-2025-07-30-005409.png",
        link: "https://www.astroawani.com/berita-malaysia/indeks-keselamatan-kebangsaan-diperkenalkan-hujung-tahun-ini-357319",
    },
    {
        title: "IKK kenalpasti kekuatan dan kelemahan keselamatan kebangsaan",
        description: "IKK adalah satu ukuran yang bertujuan untuk menilai tahap keselamatan dan ketenteraman awam di Malaysia dan projek ini sedang dibangunkan oleh Majlis Keselamatan Negara (MKN) dengan kerjasama Universiti Teknologi Mara (UiTM). Indeks ini akan menjadi penanda aras kepada keberkesanan dasar, strategi dan pelaksanaan pengurusan keselamatan secara menyeluruh di negara ini.",
        image: "https://ikk.gov.my/wp-content/uploads/2025/07/Screenshot-2025-07-30-004827.png",
        link: "https://www.mkn.gov.my/web/ms/2023/11/19/ikk-penting-untuk-kenalpasti-kekuatan-dan-kelemahan-aspek-keselamatan/",
    },
    {
        title: "IKK diiktiraf IEP",
        description: "Keselamatan negara merupakan aspek utama yang diberikan penekanan serius, bukan sahaja di Malaysia, malahan di seantero dunia. Negara kini perlu sentiasa bersiap siaga bukan sahaja daripada ancaman tradisional seperti peperangan dan pemberontakan; malahan juga ancaman bukan tradisional seperti penyakit berjangkit atau wabak, banjir, perubahan iklim, ancaman siber dan lain-lain.",
        image: "https://ikk.gov.my/wp-content/uploads/2025/07/Screenshot-2025-07-30-004541.png",
        link: "https://berita.rtm.gov.my/laporan-khas/kolum/senarai-berita-kolumnis/senarai-artikel/indeks-keselamatan-kebangsaan-diiktiraf-iep-dilancar-bulan-ini",
    },
    {
        title: "MKN kenal pasti 66 ancaman baharu keselamatan negara",
        description: "Isu pencerobohan pendatang asing tanpa izin (Pati) dan pelarian, keselamatan siber serta perpaduan rakyat Malaysia antara 66 cabaran dan ancaman baharu kepada keselamatan negara.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/11/mkn344_1626067019.jpg",
        link: "https://www.hmetro.com.my/mutakhir/2021/07/729645/mkn-kenal-pasti-66-ancaman-baharu-keselamatan-negara",
    },
];

// Custom left arrow
const PrevArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            left: -20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            bgcolor: "white",
            "&:hover": { bgcolor: "primary.main", color: "white" },
        }}
    >
        <ArrowBackIosNewIcon />
    </IconButton>
);

// Custom right arrow
const NextArrow = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            bgcolor: "white",
            "&:hover": { bgcolor: "primary.main", color: "white" },
        }}
    >
        <ArrowForwardIosIcon />
    </IconButton>
);

export default function NewsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 960, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <Box sx={{ p: 4, position: "relative" }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 4 }}
            >
                Berita Terkini
            </Typography>
            <Slider {...settings}>
                {newsData.map((news, index) => (
                    <Box
                        key={index}
                        sx={{
                            px: 1.5,
                            paddingBottom: 2,
                            boxSizing: "border-box",
                        }}
                    >
                        <Card
                            sx={{
                                height: 450,
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: 3,
                                borderRadius: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={news.image}
                                alt={news.title}
                            />
                            <CardContent
                                sx={{
                                    flexGrow: 1,
                                    overflow: "hidden",
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    {news.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 4,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {news.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ p: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={() => window.open(news.link, "_blank")}
                                >
                                    Read More
                                </Button>
                            </Box>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
