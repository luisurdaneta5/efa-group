import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLoadingProducts } from "../../../store/slices/ui";

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
        [theme.breakpoints.up("sm")]: {
            width: "30ch",
        },
        [theme.breakpoints.up("md")]: {
            width: "50ch",
        },
        [theme.breakpoints.up("lg")]: {
            width: "60ch",
        },
    },
}));
export const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search == "") {
            dispatch(startLoadingProducts());
            navigate(`/search`);
        } else {
            dispatch(startLoadingProducts(search));
            navigate(`/search/${search}`);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
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
                <StyledInputBase
                    placeholder="Buscar Producto"
                    name="search"
                    value={search}
                    onChange={handleChange}
                    autoComplete="off"
                    sx={{
                        marginLeft: "0 !important",
                    }}
                />
            </Search>
        </form>
    );
};
