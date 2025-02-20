import {Box, Button, Container, Typography} from "@mui/material";
import houseImage from "../../../../assets/images/building-repairing.jpg";
import "../../../../assets/styles/Article.css";
import siteText from "../../../../assets/text/staticTextUA.json";

function HouseRepair() {
    const houseRepairText = siteText.repair_page.pages;

    return (
        <>
            <Container class="article">
                <Box class="article-image" component="img" src={houseImage}></Box>
                <Container class="article-title">
                    {houseRepairText.content[1].title}
                </Container>
                <Box class="article-content">
                    {houseRepairText.content[1].text.map((paragraph, index) => (
                        <Typography key={index} component="p">
                            {paragraph}
                        </Typography>
                    ))}
                    <Container class="article-controls">
                        <Button variant="contained" color="success" href="/repair">
                            {houseRepairText.see_other_link}
                        </Button>
                        <Button variant="contained" color="success" href="/contact_us">
                            {houseRepairText.order_link}
                        </Button>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default HouseRepair;