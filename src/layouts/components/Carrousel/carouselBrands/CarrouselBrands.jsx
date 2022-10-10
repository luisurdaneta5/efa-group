import { Box, IconButton, Paper } from "@mui/material";
import Slider from "react-slick/lib/slider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dahua from "../../../../assets/images/brands/dahua.png";
import hikvision from "../../../../assets/images/brands/hikvision.png";
import hilook from "../../../../assets/images/brands/hilook.png";
import tplink from "../../../../assets/images/brands/tplink.png";
import mercusys from "../../../../assets/images/brands/mercusys.png";

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

export const CarrouselBrands = () => {
	const settings = {
		autoplay: true,
		autoplayspeed: 2000,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,

		adaptiveHeight: true,
	};
	return (
		<div className='multi'>
			<Slider {...settings} className='slick-slide-padding'>
				<Paper
					sx={{
						height: "103.5px",
						padding: "30px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mt: 1,
						}}
					>
						<img src={hikvision} alt='' width='100%' />
					</Box>
				</Paper>
				<Paper
					sx={{
						height: "103.5px",
						padding: "30px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<img src={hilook} alt='' width='70%' />
					</Box>
				</Paper>
				<Paper
					sx={{
						height: "103.5px",
						padding: "30px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<img src={dahua} alt='' width='70%' />
					</Box>
				</Paper>
				<Paper
					sx={{
						height: "103.5px",
						padding: "30px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mt: -1,
						}}
					>
						<img src={tplink} alt='' width='80%' />
					</Box>
				</Paper>
				<Paper
					sx={{
						height: "103.5px",
						padding: "30px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mt: 2,
						}}
					>
						<img src={mercusys} alt='' width='100%' />
					</Box>
				</Paper>
			</Slider>
		</div>
	);
};
