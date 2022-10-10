import React, { useEffect, useRef, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Button,
	ClickAwayListener,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Grow,
	Box,
} from "@mui/material";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";

import "./style.css";

export const ButtonOption = () => {
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
			<Button
				variant='text'
				color='inherit'
				className={""}
				ref={anchorRef}
				id='composition-button'
				aria-controls={open ? "composition-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup='true'
				onClick={handleToggle}
				sx={{ color: "black", ml: 2, mt: 0 }}
			>
				<DashboardIcon fontSize='small' />

				<ExpandMoreIcon fontSize='small' />
			</Button>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement='bottom-start'
				transition
				disablePortal
				sx={{
					width: "270px",
				}}
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						sx={{
							transformOrigin:
								placement === "bottom-start"
									? "left top"
									: "left bottom",
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id='composition-menu'
									aria-labelledby='composition-button'
									onKeyDown={handleListKeyDown}
									sx={{
										mt: 1,
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
		</>
	);
};
