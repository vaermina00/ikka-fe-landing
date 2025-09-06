import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const slides = [
    {
        title: "Explore the Mountains",
        description:
            "Experience breathtaking views and fresh air. Experience breathtaking views and fresh air.",
        image: "https://picsum.photos/id/1018/400/300",
    },
    {
        title: "Relax at the Beach",
        description: "Feel the sand between your toes.",
        image: "https://picsum.photos/id/1025/400/300",
    },
    {
        title: "City Adventures",
        description: "Discover the hidden gems in the city.",
        image: "https://picsum.photos/id/1035/400/300",
    },
];

// MUI arrow components
function NextArrow(props) {
    const { onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            style={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
            }}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
            }}
        >
            <ArrowBackIosNewIcon />
        </IconButton>
    );
}

export default function UtamaCarousel() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div sx={{ paddingBottom: 4 }}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 2,                   // equivalent to 16px
                                p: 2,                     // padding
                                bgcolor: "#f5f5f5",       // background color
                                minHeight: 250,            // min height in px
                                boxSizing: "border-box",
                            }}
                        >
                            {/* Left: Text */}
                            <Box sx={{ textAlign: "left" }}>
                                <h2 style={{ margin: 0 }}>{slide.title}</h2>
                                <p style={{ marginTop: 8 }}>{slide.description}</p>
                            </Box>

                            {/* Right: Image */}
                            <Box sx={{ textAlign: "right", padding:1}}>
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    style={{
                                        width: "100%",
                                        borderRadius: 12,
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Box>
                    </div>
                ))}
            </Slider>

        </div>
    );
}
