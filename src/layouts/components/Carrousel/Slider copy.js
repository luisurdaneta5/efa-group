import React from "react";
import { Carousel } from "react-bootstrap";

const images = [
	{
		original: "https://diarmagroup.com/resources/assets/img/slider/1.jpg",
	},
	{
		original: "https://diarmagroup.com/resources/assets/img/slider/2.jpg",
	},
];

export const Slider = () => {
	return (
		<div
			style={{
				marginTop: "6.2%",
			}}
		>
			<Carousel controls={true} pause={"hover"} interval={3000}>
				{images.map((image) => (
					<Carousel.Item key={image.original}>
						<img
							className='d-block w-100'
							src={image.original}
							alt='First slide'
						/>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};
