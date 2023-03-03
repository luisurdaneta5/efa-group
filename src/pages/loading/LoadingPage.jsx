import { Box, Typography } from "@mui/material";
import CircularProgress, {
	circularProgressClasses,
} from "@mui/material/CircularProgress";
import React from "react";

function FacebookCircularProgress(props) {
	return (
		<Box
			sx={{
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				position: "absolute",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<Box sx={{ position: "relative" }}>
				<CircularProgress
					variant='determinate'
					sx={{
						color: (theme) =>
							theme.palette.grey[
								theme.palette.mode === "light" ? 200 : 800
							],
					}}
					size={40}
					thickness={4}
					{...props}
					value={100}
				/>
				<CircularProgress
					variant='indeterminate'
					disableShrink
					sx={{
						color: "primary",

						animationDuration: "550ms",
						position: "absolute",
						left: 0,
						[`& .${circularProgressClasses.circle}`]: {
							strokeLinecap: "round",
						},
					}}
					size={40}
					thickness={4}
					{...props}
				/>
			</Box>
			<Typography variant='body1' color='initial'>
				Cargando...
			</Typography>
		</Box>
	);
}

export const LoadingPage = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<FacebookCircularProgress />
		</Box>
	);
};
