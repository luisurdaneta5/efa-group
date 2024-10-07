import { Box, Container, Paper, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { startLoadingConfig } from "../../store/slices/config";
import { BankSection } from "./sections/BankSection";
import { BannerSection } from "./sections/BannerSection";
import { BannerText } from "./sections/BannerText";
import { EmailsNotifications } from "./sections/EmailsNotifications";
import { ExchangeSection } from "./sections/ExchangeSection";
import { GeneralSection } from "./sections/GeneralSection";
import { SocialNetworksSection } from "./sections/SocialNetworksSection";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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

export const ConfigPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    useEffect(() => {
        dispatch(startLoadingConfig(id));
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <LayoutAdminComponent>
            <Container maxWidth="lg">
                <Paper className="paper">
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="GENERAL" {...a11yProps(0)} />
                                <Tab label="REDES SOCIALES" {...a11yProps(1)} />
                                <Tab label="DIVISA Y IMPUESTOS" {...a11yProps(2)} />
                                <Tab label="BANNER SLIDER" {...a11yProps(3)} />
                                <Tab label="BANNER TEXT" {...a11yProps(4)} />
                                <Tab label="NOTIFICACIONES EMAIL" {...a11yProps(5)} />
                                <Tab label="CUENTAS BANCARIAS" {...a11yProps(6)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <GeneralSection />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <SocialNetworksSection />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <ExchangeSection />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <BannerSection />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <BannerText />
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <EmailsNotifications />
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <BankSection />
                        </TabPanel>
                    </Box>
                </Paper>
            </Container>
        </LayoutAdminComponent>
    );
};
