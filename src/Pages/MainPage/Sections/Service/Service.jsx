import {Box, Container} from "@mui/material";
import "./Service.css";
import siteText from "../../../../assets/text/staticTextUA.json";
import serviceImage1 from "../../../../assets/images/services-1.jpg"
import serviceImage2 from "../../../../assets/images/services-2.jpg"
import serviceImage3 from "../../../../assets/images/services-3.jpg"
import serviceImage4 from "../../../../assets/images/services-4.jpg"
import serviceImage5 from "../../../../assets/images/services-5.jpg"
import serviceImage6 from "../../../../assets/images/services-6.jpg"

function Service() {
    const serviceText = siteText.main_page.service;

    return (
        <>
            <Container id="service">
                <Container id="service-title">
                    {serviceText.title}
                </Container>
                <Container id="service-items">
                    <Box class="service-item">
                        <Box class="service-item-image" component="img" src={serviceImage1}></Box>
                        <Box class="service-item-text">{serviceText.text[0]}</Box>
                    </Box>
                    <Box class="service-item">
                        <Box class="service-item-image" component="img" src={serviceImage2}></Box>
                        <Box class="service-item-text">{serviceText.text[1]}</Box>
                    </Box>
                    <Box class="service-item">
                        <Box class="service-item-image" component="img" src={serviceImage3}></Box>
                        <Box class="service-item-text">{serviceText.text[2]}</Box>
                    </Box>
                    <Box class="service-item">
                        <Box class="service-item-image" component="img" src={serviceImage4}></Box>
                        <Box class="service-item-text">{serviceText.text[3]}</Box>
                    </Box>
                    <Box class="service-item">
                        <Box class="service-item-image" component="img" src={serviceImage5}></Box>
                        <Box class="service-item-text">{serviceText.text[4]}</Box>
                    </Box>
                    <Box class="service-item">
                        <Box class="service-item-image" component="img" src={serviceImage6}></Box>
                        <Box class="service-item-text">{serviceText.text[5]}</Box>
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default Service;