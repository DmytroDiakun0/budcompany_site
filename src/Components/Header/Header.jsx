import {AppBar, Box, Container, Link, Toolbar} from "@mui/material";
import siteLogo from "../../assets/images/site-logo.png";
import "./Header.css"
import siteText from "../../assets/text/staticTextUA.json"

function Header() {
    const headerText = siteText.header;

    return (
        <>
            <Box id="header">
                <Container>
                    <AppBar id="header-content" position="static">
                        <Toolbar id="menu-content">
                            <Box id="site-logo-container">
                                <Box id="site-logo" component="img" src={siteLogo}></Box>
                            </Box>
                            <Container id="main-menu">
                                <Link className="main-menu-link" href="/budcompany_site" underline="none" color="inherit">{headerText.main_link}</Link>
                                <Link className="main-menu-link" href="/repair" underline="none" color="inherit">{headerText.repair_link}</Link>
                                <Link className="main-menu-link" href="/build" underline="none" color="inherit">{headerText.build_link}</Link>
                            </Container>
                            <Link id="contact-us-link" href="/contact_us" underline="none" color="inherit">{headerText.contact_us_link}</Link>
                        </Toolbar>
                    </AppBar>
                </Container>
            </Box>
        </>
    )
}

export default Header;