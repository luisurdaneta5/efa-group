import React, { Component } from "react";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import Slider from "react-slick/lib/slider";
import "./styles.css";

const images = [
	{
		original: "https://diarmagroup.com/resources/assets/img/slider/1.jpg",
	},
	{
		original: "https://diarmagroup.com/resources/assets/img/slider/2.jpg",
	},
];

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

export const Carousel = () => {
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
		<div
			style={{
				marginTop: "6.2%",
			}}
		>
			<Slider {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img
							src={image.original}
							style={{ width: "100%", height: "70vh" }}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};
