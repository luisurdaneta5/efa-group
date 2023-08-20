import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick/lib/slider";
import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import "./styles.css";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowLeft className="sgv-color" />
        </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowRight className="sgv-color" />
        </div>
    );
};

export const Carousel = ({ banners }) => {
    const settings = {
        arrows: true,
        autoplay: true,
        autoplayspeed: 2000,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextBtn />,
        prevArrow: <PreviousBtn />,
        dotsClass: "slick-dots custom-indicator",
    };
    return (
        <Box
            sx={{
                marginTop: "0px",
            }}
        >
            <Slider {...settings}>
                {banners.map((banner) => (
                    <Box key={banner.id}>
                        <Box
                            component="img"
                            src={banner.url}
                            sx={{
                                width: "100%",
                                height: {
                                    xs: "40vh",
                                    sm: "40vh",
                                    md: "70vh",
                                    lg: "70vh",
                                    xl: "70vh",
                                },
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
