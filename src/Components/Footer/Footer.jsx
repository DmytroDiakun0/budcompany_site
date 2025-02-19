import {Box, Container, Link} from "@mui/material";
import "./Footer.css"
import siteText from "../../assets/text/staticTextUA.json"

function Footer() {
    const footerText = siteText.footer;

    return (
        <>
            <Box id="footer">
                <Container id="footer-content">
                    <Box id="copyright-text">
                        {footerText.copyright_text}
                    </Box>
                    <Link id="policy-link" href="/policy" underline="none">
                        {footerText.policy_link}
                    </Link>
                </Container>
            </Box>
        </>
    )
}

export default Footer;