import { Box, Card, IconButton, Paper } from "@mui/material";
import Slider from "react-slick/lib/slider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./styles.css";
import { Link } from "react-router-dom";

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
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<Box className='multi'>
			<Slider {...settings} className={"slick-slide-padding"}>
				{products.map((product) => (
					<Box key={product.product.id}>
						<Link to={`/product/${product.product.id}`}>
							<img src={product.product.img} alt='' width={"70%"} />
						</Link>
					</Box>
				))}
			</Slider>
		</Box>
	);
};
