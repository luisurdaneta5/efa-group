import React, { Component } from "react";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import Slider from "react-slick/lib/slider";
import "./styles.css";
import { Box } from "@mui/material";

const PreviousBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowLeft className='sgv-color' />
		</div>
	);
};

const NextBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowRight className='sgv-color' />
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
				marginTop: "6.2%",
			}}
		>
			<Slider {...settings}>
				{banners.map((banner) => (
					<Box key={banner.id}>
						<Box
							component='img'
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
