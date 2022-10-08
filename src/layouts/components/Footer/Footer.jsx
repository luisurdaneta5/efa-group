import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./styles.css";

export const Footer = () => {
	return (
		<footer>
			<Box
				sx={{
					background: "#0c0e30",
					mt: 10,
				}}
			>
				<Container maxWidth='lg' sx={{ padding: "1rem" }}>
					<Grid
						container
						spacing={5}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							paddingTop: "80px",
							paddingBottom: "80px",
						}}
					>
						<Grid item lg={4} xl={4}>
							<Box>
								<Link to='/'>
									<img
										width='50%'
										src='/assets/images/logo-letra.png'
										alt=''
									/>
								</Link>
							</Box>
							<Typography
								variant='body1'
								sx={{ color: "#AEB4BE", mt: 2 }}
							>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Auctor libero id et, in
								gravida. Sit diam duis mauris nulla cursus. Erat
								et lectus vel ut sollicitudin elit at amet.
							</Typography>
						</Grid>
						<Grid
							item
							lg={3}
							xl={3}
							sx={{
								display: "flex",
								flexDirection: "column",
								paddingLeft: "24px",
								paddingTop: "24px",
							}}
						>
							<Box>
								<Typography
									sx={{
										fontSize: "25px",
										fontWeight: 600,
										marginbottom: "20px",
										lineHeight: "1",
										color: "white",
									}}
								>
									Atencion al cliente
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									mt: 2,
									mb: 4,
								}}
							>
								<Link to={"/support"} className={"footer-link"}>
									Centro de Ayuda
								</Link>
								<Link to={"/support"} className={"footer-link"}>
									Como Comprar
								</Link>
								<Link to={"/support"} className={"footer-link"}>
									Rastrea tu Orden
								</Link>
								<Link to={"/support"} className={"footer-link"}>
									Terms & Condiciones
								</Link>
							</Box>
						</Grid>

						<Grid item lg={3} xl={3}>
							<Box>
								<Typography
									sx={{
										fontSize: "25px",
										fontWeight: 600,
										marginbottom: "20px",
										lineHeight: "1",
										color: "white",
									}}
								>
									Contactanos
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									marginTop: "20px",
								}}
							>
								<Typography className={"typography"}>
									70 Washington Square South, New York, NY
									10012, United States
								</Typography>
								<Typography className={"typography"}>
									Email: admin@admin.com
								</Typography>
								<Typography className={"typography"}>
									Phone: +1 1123 456 780
								</Typography>
							</Box>
							<Box sx={{ display: "flex", mt: 2 }}>
								<a
									target='_blank'
									href={"https://facebook.com"}
								>
									<i
										className='fa-brands fa-facebook-f'
										style={{
											color: "white",
											fontSize: "15px",
										}}
									></i>
								</a>

								<a target='_blank' href={"https://twitter.com"}>
									<i
										className='fa-brands fa-twitter'
										style={{
											color: "white",
											fontSize: "15px",
											marginLeft: "20px",
										}}
									></i>
								</a>

								<a
									target='_blank'
									href={"https://instagram.com"}
								>
									<i
										className='fa-brands fa-instagram'
										style={{
											color: "white",
											fontSize: "15px",
											marginLeft: "20px",
										}}
									></i>
								</a>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};
