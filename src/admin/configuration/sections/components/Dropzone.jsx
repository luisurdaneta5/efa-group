import { Box, Divider, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "@mui/icons-material/Image";

const thumbsContainer = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	marginTop: 16,
};

const thumb = {
	display: "inline-flex",
	borderRadius: 2,
	border: "1px solid #eaeaea",
	marginBottom: 8,
	marginRight: 8,
	width: "500px",
	padding: 4,
	boxSizing: "border-box",
};

const thumbInner = {
	display: "flex",
	minWidth: 0,
	overflow: "hidden",
};

const img = {
	display: "block",
	width: "100%",
	height: "100%",
};

export const Dropzone = (props) => {
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"image/*": [],
		},
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const thumbs = files.map((file) => (
		<div style={thumb} key={file.name}>
			<div style={thumbInner}>
				<img
					src={file.preview}
					style={img}
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(file.preview);
					}}
				/>
			</div>
		</div>
	));

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return (
		<Box component='section' className='container'>
			<Box
				{...getRootProps({ className: "dropzone" })}
				sx={{
					displey: "flex",
					backgroundColor: "rgb(246, 249, 252)",
					border: "1.5px dashed #E3E9EF",
					borderRadius: "10px",
					padding: "32px 0px",
				}}
			>
				<Grid container spacing={2}>
					<Grid item lg={6}>
						{" "}
						<input {...getInputProps()} />
						<Box
							component='p'
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontSize: "16px",
								fontWeight: 500,
								color: "#7D879C",
							}}
						>
							Arrastre y suelte el logo aqui
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Divider
								sx={{
									width: "20%",
									color: "#DAE1E7",
								}}
							>
								<Typography
									sx={{
										fontSize: "18px",
										color: "#DAE1E7",
									}}
								>
									o
								</Typography>
							</Divider>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								mt: 3,
							}}
						>
							<Button
								variant='outlined'
								color='primary'
								sx={{
									textTransform: "capitalize",
								}}
							>
								Seleccionar Imagen
							</Button>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								mt: 5,
							}}
						>
							<Typography
								sx={{
									fontSize: "12px",
								}}
							>
								Subir una imagen de 280*280
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						lg={6}
						sx={{
							padding: "10px",
						}}
					>
						{thumbs == "" ? (
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									border: "1px solid silver",
									padding: "50px",
									borderRadius: "10px",
								}}
							>
								<ImageIcon
									sx={{
										fontSize: "100px",
									}}
								/>
								<Typography variant='body1' color='initial'>
									Imagen no seleccionado aun
								</Typography>
							</Box>
						) : (
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Box component='aside' style={thumbsContainer}>
									{thumbs}
								</Box>
							</Box>
						)}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
