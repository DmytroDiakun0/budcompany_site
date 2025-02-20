import siteText from "../../../../assets/text/staticTextUA.json";
import "../../../../assets/styles/Article.css"
import {Box, Button, Container, Typography} from "@mui/material";
import houseImage from "../../../../assets/images/house-build2.png";

function HouseBuild() {
    const houseBuildText = siteText.build_page.pages;

    return (
        <>
            <Container class="article">
                <Box class="article-image" component="img" src={houseImage}></Box>
                <Container class="article-title">
                    {houseBuildText.content[0].title}
                </Container>
                <Box class="article-content">
                    {houseBuildText.content[0].text.map((paragraph, index) => (
                        <Typography key={index} component="p">
                            {paragraph}
                        </Typography>
                    ))}
                    <Container class="article-controls">
                        <Button variant="contained" color="success" href="/build">
                            {houseBuildText.see_other_link}
                        </Button>
                        <Button variant="contained" color="success" href="/contact_us">
                            {houseBuildText.order_link}
                        </Button>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default HouseBuild;