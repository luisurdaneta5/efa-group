import React, { Component } from "react";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import Slider from "react-slick/lib/slider";
import "./styles.css";

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
		<div
			style={{
				marginTop: "6.2%",
			}}
		>
			<Slider {...settings}>
				{banners.map((banner) => (
					<div key={banner.id}>
						<img src={banner.url} style={{ width: "100%", height: "70vh" }} />
					</div>
				))}
			</Slider>
		</div>
	);
};
