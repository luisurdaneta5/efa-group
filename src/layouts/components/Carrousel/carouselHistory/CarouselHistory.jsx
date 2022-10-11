import { Box, Card, IconButton, Paper } from "@mui/material";
import Slider from "react-slick/lib/slider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./styles.css";

const PreviousBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<IconButton className='iconButton'>
				<ArrowBackIcon />
			</IconButton>
		</div>
	);
};

const NextBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<IconButton className='iconButton'>
				<ArrowForwardIcon />
			</IconButton>
		</div>
	);
};

export const CarouselHistory = ({ products }) => {
	const settings = {
		autoplay: false,
		autoplayspeed: 2000,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <NextBtn />,
		prevArrow: <PreviousBtn />,
		adaptiveHeight: true,
	};
	return (
		<div className='multi'>
			<Slider {...settings} className={"slick-slide-padding"}>
				{products.map((product) => (
					<Box key={product.id}>
						<img src={product.images} alt='' width={"70%"} />
					</Box>
				))}
			</Slider>
		</div>
	);
};
