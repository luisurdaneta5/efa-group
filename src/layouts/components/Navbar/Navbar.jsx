import React, { useEffect } from "react";
import {
	Typography,
	Box,
	IconButton,
	Tooltip,
	Avatar,
	Container,
} from "@mui/material";

//componentes dependientes
import { SearchBar } from "../Search/SearchBar";
import { BadgeN } from "../Badge/BadgeN";
import { MenuOptions } from "../Menu/MenuOptions";
import { ButtonOption } from "../Buttons/ButtonOption";

import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

export const Navbar = () => {
	const { isLoading, uid, displayName } = useSelector((state) => state.auth);

	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
	});

	const isSticky = (e) => {
		const header = document.querySelector(".headerSection");
		const box = document.querySelector(".boxsection");
		const scrollTop = window.scrollY;

		if (scrollTop >= 40) {
			header.classList.add("isSticky");
			box.classList.remove("hidden");
		} else {
			header.classList.remove("isSticky");
			box.classList.add("hidden");
		}
	};

	return (
		<div className={"divStyle"}>
			<Container
				maxWidth='lg'
				sx={{
					marginRight: "auto",
					boxSizing: "border-box",
					display: "flex",
					alignItems: "center",
					height: "100%",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<i
							className='fab fa-whatsapp'
							style={{
								width: "1em",
								height: "1em",
								display: "inline-block",
								fontSize: "1.25rem",
							}}
						></i>
						<Typography
							variant=''
							sx={{
								ml: "10px",
								lineHeight: 1.5,
								textTransform: "none",
								whiteSpace: "normal",
								justifyContent: "center",
							}}
						>
							+584127646787
						</Typography>
					</Box>
					<Box
						sx={{
							ml: "20px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<i
							className='fa-regular fa-envelope'
							style={{
								width: "1em",
								height: "1em",
								display: "inline-block",
								fontSize: "1.25rem",
							}}
						></i>
						<Typography
							variant=''
							sx={{
								ml: "10px",
								lineHeight: 1.5,
								textTransform: "none",
								whiteSpace: "normal",
							}}
						>
							admin@admin.com
						</Typography>
					</Box>
				</Box>

				<Box>FAQ's</Box>
			</Container>

			<Box
				className={"headerSection"}
				sx={{
					position: "relative",
					zIndex: 1,
					height: "90px",
					background: "#fff",
					transition: "height 250ms ease-in-out",
				}}
			>
				<Container
					maxWidth='lg'
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Link to='/'>
							<img
								height='80'
								display='block'
								src={logo}
								alt=''
							/>
						</Link>

						<Box className={"boxsection hidden"} color='inherit'>
							<ButtonOption />
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							ml: 10,
						}}
					>
						<Box
							sx={{
								position: "relative",
								flex: "5 0 0",
								maxWidth: "1000px",
								marginLeft: "auto",
								marginWidth: "auto",
							}}
						>
							<SearchBar />
						</Box>
					</Box>

					<Box sx={{ display: "flex", alignItems: "center" }}>
						{!isLoading ? (
							<Box
								sx={{
									display: "flex",
									flexGrow: 0,
								}}
							>
								<BadgeN icon={"fa-solid fa-bag-shopping"} />

								<Tooltip title='Abrir Opciones'>
									<IconButton aria-label=''>
										<Link to={"/dashboard"}>
											<Avatar
												sx={{
													width: {
														xs: 50,
														md: 60,
														lg: 50,
													},
													height: {
														xs: 50,
														md: 60,
														lg: 50,
													},
												}}
												alt={displayName}
												src={`/assets/images/users/yo.jpg`}
											/>
										</Link>
									</IconButton>
								</Tooltip>
							</Box>
						) : (
							<BadgeN icon={"fa-regular fa-user"} />
						)}
					</Box>
				</Container>
			</Box>

			<MenuOptions />
		</div>
	);
};
