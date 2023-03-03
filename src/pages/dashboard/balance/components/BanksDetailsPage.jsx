import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { formatNumber } from "../../../../helpers/formatNumbers";
import { useForm } from "../../../../hooks/useForm";

export const BanksDetailsPage = ({ account, amount }) => {
	const { exchangeRate } = useSelector((state) => state.config.money);
	const exChange = formatNumber(exchangeRate, "ES-VE", "VES");
	const amountVes = formatNumber(exchangeRate * amount, "ES-VE", "VES");

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				mt: 2,
				mb: 2,
			}}
		>
			<Box width='30%'>
				<img src={account.img} alt='' width='100%' />
			</Box>
			<Box sx={{ ml: 5 }}>
				<Box>
					<Typography
						variant='body1'
						color='initial'
						sx={{
							fontSize: "20px",
						}}
					>
						{account.account}
					</Typography>
				</Box>
				<Box>
					<Typography
						variant='body1'
						color='initial'
						sx={{
							fontSize: "15px",
						}}
					>
						Beneficiario: {account.titular}
					</Typography>
				</Box>
				<Box>
					<Typography
						variant='body1'
						color='initial'
						sx={{
							fontSize: "15px",
						}}
					>
						C.I: {account.dni}
					</Typography>
				</Box>

				<Box>
					<Typography
						variant='body1'
						color='initial'
						sx={{
							fontSize: "15px",
						}}
					>
						Tasa de Cambio:
						<Box
							component='span'
							sx={{
								color: "red",
								fontWeight: "500",
								ml: 2,
							}}
						>
							{exChange}
						</Box>
						<br />
						Monto a transferir:
						<Box
							component='span'
							sx={{
								color: "red",
								fontWeight: "500",
								ml: 2,
							}}
						>
							{amountVes}
						</Box>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
