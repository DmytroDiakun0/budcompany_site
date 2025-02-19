import {Box, Container} from "@mui/material";
import "./Partners.css"
import siteText from "../../../../assets/text/staticTextUA.json"
import partnerImage1 from "../../../../assets/images/google-logo.png";
import partnerImage2 from "../../../../assets/images/Samsung-logo.png";
import partnerImage3 from "../../../../assets/images/Audi-Logo.png";
import partnerImage4 from "../../../../assets/images/EPAM-logo.png";
import partnerImage5 from "../../../../assets/images/apple-logo.png";
import partnerImage6 from "../../../../assets/images/softserve-logo.png";
import partnerImage7 from "../../../../assets/images/arcelormittal-logo.png";
import partnerImage8 from "../../../../assets/images/atb-logo.png";
import partnerImage9 from "../../../../assets/images/epicenter-logo.png";
import partnerImage10 from "../../../../assets/images/Eva-logo.png";
import partnerImage11 from "../../../../assets/images/rgk-logo.png";
import partnerImage12 from "../../../../assets/images/microsoft-logo.png";

function Partners() {
    const partnersText = siteText.main_page.partners;

    return (
        <>
            <Container id="partners">
                <Container id="partners-title">
                    {partnersText.title}
                </Container>
                <Container id="partners-items">
                    <Box class="partners-item" component="img" src={partnerImage1}></Box>
                    <Box class="partners-item" component="img" src={partnerImage2}></Box>
                    <Box class="partners-item" component="img" src={partnerImage3}></Box>
                    <Box class="partners-item" component="img" src={partnerImage4}></Box>
                    <Box class="partners-item" component="img" src={partnerImage5}></Box>
                    <Box class="partners-item" component="img" src={partnerImage6}></Box>
                    <Box class="partners-item" component="img" src={partnerImage7}></Box>
                    <Box class="partners-item" component="img" src={partnerImage8}></Box>
                    <Box class="partners-item" component="img" src={partnerImage9}></Box>
                    <Box class="partners-item" component="img" src={partnerImage10}></Box>
                    <Box class="partners-item" component="img" src={partnerImage11}></Box>
                    <Box class="partners-item" component="img" src={partnerImage12}></Box>
                </Container>
            </Container>
        </>
    )
}

export default Partners;