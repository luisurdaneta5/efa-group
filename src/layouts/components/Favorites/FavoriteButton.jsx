import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { startLoadingFavs } from "../../../store/slices/ui";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const FavoriteButton = ({ uid, product, favId }) => {
	const dispatch = useDispatch();
	const { user, userData } = useSelector((state) => state.auth);
	const { favs } = userData;

	const status = favs.some((fav) => {
		return fav.userId === uid && fav.productId === product;
	});

	const [favorite, setFavorite] = useState(status);

	const handleChange = () => {
		Fetch.put("/favorites/updated", { favId, favorite, uid, product })
			.then((res) => {
				setFavorite(!favorite);
				toast.success(res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				dispatch(startLoadingFavs(uid));
			})
			.catch((err) => {
				toast.error(err.res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	};

	return (
		<Box className='fav-icon-contained'>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					alignContent: "flex-end",
				}}
			>
				<Checkbox
					{...label}
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite />}
					sx={{
						"&.Mui-checked": {
							color: "#D23F57",
						},
					}}
					checked={favorite}
					onClick={() => handleChange()}
				/>
			</Box>
		</Box>
	);
};
