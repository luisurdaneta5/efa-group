import {
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
	WhatsApp,
} from "@mui/icons-material";
import {
	Box,
	FormControl,
	Grid,
	Input,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Button,
} from "@mui/material";

export const SocialNetworksSection = () => {
	return (
		<Box
			sx={{
				mt: 3,
			}}
		>
			<Box></Box>
			<Grid container spacing={2}>
				<Grid item lg={6}>
					<FormControl fullWidth>
						<InputLabel>Facebook</InputLabel>
						<OutlinedInput
							label='Facebook'
							id='input-with-icon-adornment'
							startAdornment={
								<InputAdornment position='start'>
									<Facebook />
								</InputAdornment>
							}
							size='small'
						/>
					</FormControl>
				</Grid>
				<Grid item lg={6}>
					<FormControl fullWidth>
						<InputLabel>Twitter</InputLabel>
						<OutlinedInput
							label='Twitter'
							id='input-with-icon-adornment'
							startAdornment={
								<InputAdornment position='start'>
									<Twitter />
								</InputAdornment>
							}
							size='small'
						/>
					</FormControl>
				</Grid>
				<Grid item lg={6} sx={{ mt: 2 }}>
					<FormControl fullWidth>
						<InputLabel>Instagram</InputLabel>
						<OutlinedInput
							label='Instagram'
							id='input-with-icon-adornment'
							startAdornment={
								<InputAdornment position='start'>
									<Instagram />
								</InputAdornment>
							}
							size='small'
						/>
					</FormControl>
				</Grid>
				<Grid item lg={6} sx={{ mt: 2 }}>
					<FormControl fullWidth>
						<InputLabel>Whatsapp</InputLabel>
						<OutlinedInput
							label='Whatsapp'
							id='input-with-icon-adornment'
							startAdornment={
								<InputAdornment position='start'>
									<WhatsApp />
								</InputAdornment>
							}
							size='small'
						/>
					</FormControl>
				</Grid>
			</Grid>
			<Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
				<Button variant='contained' color='primary'>
					Guardar
				</Button>
			</Box>
		</Box>
	);
};
