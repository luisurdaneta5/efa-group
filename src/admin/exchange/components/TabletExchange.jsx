import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Chip, IconButton, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../helpers/formatNumbers";

function createData(id, name, date, bank, amount, conversion, status, tasa) {
    return { id, name, date, bank, amount, conversion, status, tasa };
}

export const TabletExchange = ({ exchanges, search }) => {
    const { isLoading } = useSelector((state) => state.ui);

    const rows = exchanges.map((exchange) => {
        return createData(exchange.id, exchange.user.name, exchange.date, exchange.bank, exchange.amount, exchange.conversion, exchange.status, exchange.tasa);
    });

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead
                    sx={{
                        backgroundColor: "#f3f5f9",
                    }}
                >
                    <TableRow>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Cliente
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Fecha
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Status
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Monto
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Conversion
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Tasa del dia
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Banco
                        </TableCell>
                        <TableCell align="center" sx={{ color: "#2B3445" }}>
                            Opciones
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                                <LinearProgress />
                            </TableCell>
                        </TableRow>
                    ) : rows.length == 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center" sx={{ borderBottom: "none" }}>
                                No se encontro ningun resultado
                            </TableCell>
                        </TableRow>
                    ) : (
                        rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="left" width="14%">
                                    {row.name}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{
                                        fontSize: "13px",
                                    }}
                                    width="10%"
                                >
                                    {moment(row.date).format("DD/MM/YYYY")}
                                </TableCell>

                                <TableCell
                                    align="center"
                                    sx={{
                                        fontSize: "14px",
                                    }}
                                    width="15%"
                                >
                                    {row.status == 0 && (
                                        <Chip
                                            label="Pendiente"
                                            sx={{
                                                backgroundColor: "#FFEAEA",
                                                color: "#E94560",
                                                width: "100%",
                                            }}
                                        />
                                    )}

                                    {row.status == 1 && (
                                        <Chip
                                            label="Confirmado"
                                            sx={{
                                                backgroundColor: "#d4edda",
                                                color: "#155724",
                                                width: "100%",
                                            }}
                                        />
                                    )}

                                    {row.status == 2 && (
                                        <Chip
                                            label="Rechazado"
                                            sx={{
                                                backgroundColor: "#FFEAEA",
                                                color: "#E94560",
                                                width: "100%",
                                            }}
                                        />
                                    )}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{
                                        fontSize: "14px",
                                    }}
                                >
                                    {formatNumber(row.amount, "EN-US", "USD")}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{
                                        fontSize: "14px",
                                    }}
                                >
                                    {formatNumber(row.conversion, "ES-VE", "VES")}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{
                                        fontSize: "14px",
                                    }}
                                >
                                    {formatNumber(row.tasa, "ES-VE", "VES")}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{
                                        fontSize: "14px",
                                    }}
                                >
                                    {row.bank}
                                </TableCell>

                                <TableCell
                                    align="center"
                                    sx={{
                                        fontSize: "13px",
                                        color: "#7D879C",
                                        fontWeight: 600,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link to={`/admin/dashboard/exchange/details/${row.id}`}>
                                            <IconButton>
                                                <VisibilityIcon sx={{ fontSize: "19px" }} />
                                            </IconButton>
                                        </Link>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
