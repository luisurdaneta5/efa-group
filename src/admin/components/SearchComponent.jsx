import { Search } from "@mui/icons-material";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { useDispatch } from "react-redux";
import {
    startLoadingCategories,
    startLoadingExchanges,
    startLoadingExchangesPending,
    startLoadingOrdersComplete,
    startLoadingOrdersPending,
    startLoadingProducts,
    startLoadingReviews,
    startLoadingUsers,
} from "../../store/slices/ui/thunks";

export const SearchComponent = ({ placeholder, search, handleChange, module }) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (e.charCode == 13 && module === "users") {
            dispatch(startLoadingUsers(search));
        }

        if (e.charCode == 13 && module === "categories") {
            dispatch(startLoadingCategories(search));
        }

        if (e.charCode == 13 && module === "products") {
            dispatch(startLoadingProducts(search));
        }

        if (e.charCode == 13 && module === "orders") {
            dispatch(startLoadingOrdersPending(search));
        }

        if (e.charCode == 13 && module === "ordersComplete") {
            dispatch(startLoadingOrdersComplete(search));
        }

        if (e.charCode == 13 && module === "reviews") {
            dispatch(startLoadingReviews(search));
        }

        if (e.charCode == 13 && module === "exchanges") {
            dispatch(startLoadingExchangesPending(search));
        }

        if (e.charCode == 13 && module === "exchangesHistory") {
            dispatch(startLoadingExchanges(search));
        }
    };
    return (
        <FormControl
            size="small"
            sx={{
                width: "50%",
                backgroundColor: "white",
            }}
        >
            <OutlinedInput
                size="small"
                id="input-with-icon-adornment"
                placeholder={placeholder}
                startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                }
                value={search}
                onChange={handleChange}
                name="search"
                onKeyPress={handleSubmit}
            />
        </FormControl>
    );
};
