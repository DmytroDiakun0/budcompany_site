import siteText from "../../../../assets/text/staticTextUA.json";
import "../../../../assets/styles/Article.css"
import {Box, Button, Container, Typography} from "@mui/material";
import cottageImage from "../../../../assets/images/cottege-build2.jpg";

function CottageBuild() {
    const cottageBuildText = siteText.build_page.pages;

    return (
        <>
            <Container class="article">
                <Box class="article-image" component="img" src={cottageImage}></Box>
                <Container class="article-title">
                    {cottageBuildText.content[1].title}
                </Container>
                <Box class="article-content">
                    {cottageBuildText.content[1].text.map((paragraph, index) => (
                        <Typography key={index} component="p">
                            {paragraph}
                        </Typography>
                    ))}
                    <Container class="article-controls">
                        <Button variant="contained" color="success" href="/build">
                            {cottageBuildText.see_other_link}
                        </Button>
                        <Button variant="contained" color="success" href="/contact_us">
                            {cottageBuildText.order_link}
                        </Button>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default CottageBuild;