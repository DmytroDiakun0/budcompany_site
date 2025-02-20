import {Box, Button, Container, Typography} from "@mui/material";
import "../../../../assets/styles/Article.css"
import apartmentImage from "../../../../assets/images/house-repairing.jpg";
import siteText from "../../../../assets/text/staticTextUA.json";

function ApartmentRepair() {
    const apartmentRepairText = siteText.repair_page.pages;

    return (
        <>
            <Container class="article">
                <Box class="article-image" component="img" src={apartmentImage}></Box>
                <Container class="article-title">
                    {apartmentRepairText.content[0].title}
                </Container>
                <Box class="article-content">
                    {apartmentRepairText.content[0].text.map((paragraph, index) => (
                        <Typography key={index} component="p">
                            {paragraph}
                        </Typography>
                    ))}
                    <Container class="article-controls">
                        <Button variant="contained" color="success" href="/repair">
                            {apartmentRepairText.see_other_link}
                        </Button>
                        <Button variant="contained" color="success" href="/contact_us">
                            {apartmentRepairText.order_link}
                        </Button>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default ApartmentRepair;