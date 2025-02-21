import siteText from "../../assets/text/staticTextUA.json";
import "./BuildPage.css"
import {Box, Container, Link} from "@mui/material";
import buildImage1 from "../../assets/images/house-build1.jpg";
import buildImage2 from "../../assets/images/cottege-build1.jpg";

function BuildPage() {
    const buildPageText = siteText.build_page;

    return (
        <>
            <Container id="build-title">
                {buildPageText.title}
            </Container>
            <Container id="build">
                <Link class="build-item" href="#/build/house" underline="none">
                    <Box class="build-item-image" component="img" src={buildImage1}></Box>
                    <Box class="build-item-text">{buildPageText.categories[0]}</Box>
                </Link>
                <Link class="build-item" href="#/build/cottage" underline="none">
                    <Box class="build-item-image" component="img" src={buildImage2}></Box>
                    <Box class="build-item-text">{buildPageText.categories[1]}</Box>
                </Link>
            </Container>
        </>
    )
}

export default BuildPage;