import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

export const TabComponet = ({ description, reviews }) => {
	function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<Tab label='Descripcion' {...a11yProps(0)} />
					<Tab label='Reseñas' {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				{description()}
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Box sx={{ mb: 4 }}>{reviews()}</Box>
				<Box sx={{ mb: 4 }}>{reviews()}</Box>
				<Box sx={{ mb: 4 }}>{reviews()}</Box>
			</TabPanel>
		</Box>
	);
};
