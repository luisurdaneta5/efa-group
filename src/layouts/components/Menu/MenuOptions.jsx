import React, { useEffect, useRef, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
	Box,
	Button,
	ClickAwayListener,
	Container,
	Grow,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Typography,
} from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";

export const MenuOptions = (props) => {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	const prevOpen = React.useRef(open);
	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<>
			<Paper elevation={2} className={"css-1e2nl9k "}>
				<Container
					maxWidth='lg'
					sx={{ display: "flex", justifyContent: "space-between" }}
				>
					<Box className={"css-udnl1f"}>
						<Button
							variant='text'
							color='inherit'
							className={"css-ww2vzv"}
							ref={anchorRef}
							id='composition-button'
							aria-controls={
								open ? "composition-menu" : undefined
							}
							aria-expanded={open ? "true" : undefined}
							aria-haspopup='true'
							onClick={handleToggle}
						>
							<DashboardIcon fontSize='small' />

							<p className={"css-dttbdp"}>Categorias</p>

							<ChevronRightIcon
								fontSize='small'
								className={"dropdown-icon css-1k33q06"}
							/>
						</Button>
						<Popper
							open={open}
							anchorEl={anchorRef.current}
							role={undefined}
							placement='bottom-start'
							transition
							disablePortal
							className={"css-v5drnb"}
						>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{
										transformOrigin:
											placement === "bottom-start"
												? "left top"
												: "left bottom",
									}}
								>
									<Paper>
										<ClickAwayListener
											onClickAway={handleClose}
										>
											<MenuList
												autoFocusItem={open}
												id='composition-menu'
												aria-labelledby='composition-button'
												onKeyDown={handleListKeyDown}
												sx={{
													boxShadow:
														"rgb(43 52 69 / 10%) 0px 4px 16px;",
												}}
											>
												<MenuItem onClick={handleClose}>
													<Box>
														<Camera className='svg-size' />
													</Box>
													<Box
														sx={{
															ml: 2,
														}}
													>
														Camaras CCTV
													</Box>
												</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
					</Box>

					<Box sx={{ display: "flex" }}>
						<MenuItem>
							<Link className={"links"} to={`/`}>
								Inicio
							</Link>
						</MenuItem>
						<MenuItem>
							<Link className={"links"} to={`/about-us`}>
								Quienes Somos
							</Link>
						</MenuItem>
						<MenuItem>
							<Link className={"links"} to={`/`}>
								Contactanos
							</Link>
						</MenuItem>
					</Box>
				</Container>
			</Paper>
		</>
	);
};
