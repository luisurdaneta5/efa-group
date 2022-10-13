import { LayoutComponent } from "../../layouts/LayoutComponent";
import Container from "@mui/material/Container";
import { Box, Typography, Grid } from "@mui/material";
import label1 from "../../assets/images/about/timeline-4.jpg";
import store from "../../assets/images/about/tienda.jpg";
import "./styles.css";

export const AboutPage = () => {
	return (
		<LayoutComponent>
			<Container
				maxWidth='xl'
				className='animate__animated animate__fadeIn'
				sx={{
					mt: 20,
				}}
			>
				<Box
					sx={{
						padding: "40px",
					}}
				>
					<Grid container className='timeline'>
						<Grid item lg={6} className='timeline-0'>
							<img
								src={label1}
								alt=''
								style={{
									margin: "auto",
									display: "block",
									borderRadius: 5,
								}}
								width='90%'
							/>
						</Grid>
						<Grid
							item
							lg={6}
							sx={{
								borderLeft: "4px dotted silver",
							}}
						>
							<Box
								sx={{
									padding: "50px",
								}}
							>
								<Typography
									sx={{
										fontWeight: "bold",
									}}
								>
									Mision
								</Typography>
								<Typography>
									Somos una empresa dedicada a la venta de
									productos de medicamentos y productos de
									consumo masivo de alta calidad, ofreciendo
									salud y bienestar de nuestros clientes con
									un servicio profesional, amigable,
									personalizado y eficaz.
								</Typography>
							</Box>
						</Grid>
					</Grid>
					<Grid container className='timeline'>
						<Grid item lg={6}>
							<Box
								sx={{
									padding: "50px",
									textAlign: "right",
								}}
							>
								<Typography
									sx={{
										fontWeight: "bold",
									}}
								>
									Vision
								</Typography>
								<Typography>
									Posicionarnos en el mercado venezolano en
									temas relacionados a la salud, siendo
									distinguidos en servicios a domicilio y
									atención al público, creando un ambiente
									laboral cómodo y seguro; y generando a su
									vez sostenibilidad económica para todos en
									el equipo
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							lg={6}
							className='timeline-1'
							sx={{
								borderLeft: "4px dotted silver",
							}}
						>
							<img
								src={label1}
								alt=''
								style={{
									margin: "auto",
									display: "block",
									borderRadius: 5,
								}}
								width='90%'
							/>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Grid
						container
						spacing={2}
						sx={{
							padding: "60px",
							width: "100%",
							backgroundColor: "#f2f3f5",
						}}
					>
						<Grid
							item
							lg={12}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<img
								src={store}
								alt=''
								width='80%'
								style={{
									borderRadius: "5px",
								}}
							/>
						</Grid>
						<Grid item lg={6} sx={{ mt: 2 }}>
							<Typography>Historia</Typography>
							<Typography>
								Antes de su apertura física en el 2019, nació
								esta empresa como una idea de emprendimiento
								familiar, de poder ayudar a la población
								marabina en conseguir aquellos productos que
								tanto necesitaban y no eran sencillos de ubicar;
								y luego de reuniones y negociaciones con aliados
								y proveedores, surgió a comienzos del dicho año
								un supermercado, ferretería y farmacia
								totalmente virtual, con el nombre de Prime Mart,
								y cuyo lema era: ¡De todo y para todos!
								Contábamos con apenas 2 empleados y sin una
								locación fija; luego en vista de la buena
								aceptación y demanda, se fue expandiendo hasta
								llegar al punto de necesitar un punto comercial
								para poder atender a todos sus clientes. Fue así
								como el 2 de octubre del 2019, abrimos al
								público en el Centro Comercial Plaza 75 como
								Prime Mart Farmacia, enfocando el objetivo hacia
								el área de supermercado y farmacia.
							</Typography>
							<Typography sx={{ mt: 5 }}>
								Antes de su apertura física en el 2019, nació
								esta empresa como una idea de emprendimiento
								familiar, de poder ayudar a la población
								marabina en conseguir aquellos productos que
								tanto necesitaban y no eran sencillos de ubicar;
								y luego de reuniones y negociaciones con aliados
								y proveedores, surgió a comienzos del dicho año
								un supermercado, ferretería y farmacia
								totalmente virtual, con el nombre de Prime Mart,
								y cuyo lema era: ¡De todo y para todos!
								Contábamos con apenas 2 empleados y sin una
								locación fija; luego en vista de la buena
								aceptación y demanda, se fue expandiendo hasta
								llegar al punto de necesitar un punto comercial
								para poder atender a todos sus clientes. Fue así
								como el 2 de octubre del 2019, abrimos al
								público en el Centro Comercial Plaza 75 como
								Prime Mart Farmacia, enfocando el objetivo hacia
								el área de supermercado y farmacia.
							</Typography>
						</Grid>
						<Grid item lg={6} sx={{ mt: 5 }}>
							<Typography>
								Hoy en día, podemos decir que mantenemos ese
								calor de hogar y de familia en la calidad de
								servicio que prestamos, siendo los mejores en el
								mercado farmacéutico en servicio delivery y
								ofreciendo una gran variedad de productos desde
								medicamentos especializados para patologías poco
								comunes hasta medicamentos de uso común y
								continuo en la población. Las ventajas que
								tenemos como farmacia es que contamos con una
								gran red de proveedores, por lo tanto, nos
								facilita ofrecer variedad de productos, lo cual
								es difícil encontrar en otras farmacias de la
								ciudad inclusive del país.
							</Typography>
							<Typography sx={{ mt: 5 }}>
								Actualmente contamos con un equipo de
								farmacéuticos dedicados únicamente a la atención
								al público vía telefónica y redes sociales para
								garantizar la accesibilidad de los medicamentos
								a todos los sectores e incluso ciudades del
								país, incluyendo el servicio a domicilio en
								Maracaibo y San Francisco, aunque también
								realizamos envíos a nivel nacional de ciertos
								productos, de la mano de empresas de envíos
								existentes en el país.
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
