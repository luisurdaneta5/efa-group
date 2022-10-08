import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	color: "black",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("lg")]: {
			width: "60ch",
		},
	},
}));
export const SearchBar = () => {
	return (
		<Search
			sx={{
				border: 0,
				borderRadius: 5,
				background: "#e8e8e8",
				display: "flex",
				":hover": {
					border: 1,
					borderColor: "blue",
				},
			}}
		>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase placeholder='Buscar Producto' />
		</Search>
	);
};
