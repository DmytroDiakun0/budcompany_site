import {Box, Container} from "@mui/material";
import "./Statistics.css"
import siteText from "../../../../assets/text/staticTextUA.json"
import statisticsImage from "../../../../assets/images/blocks.png";

function Statistics() {
    const statisticsText = siteText.main_page.statistics;

    return (
        <>
            <Container id="statistics">
                <Box class="statistics-item">
                    <Box class="statistics-item-title">
                        {statisticsText[0].title}
                    </Box>
                    <Box class="statistics-item-text">
                        {statisticsText[0].text}
                    </Box>
                </Box>
                <Box class="statistics-item">
                    <Box class="statistics-item-title">
                        {statisticsText[1].title}
                    </Box>
                    <Box class="statistics-item-text">
                        {statisticsText[1].text}
                    </Box>
                </Box>
                <Box class="statistics-item">
                    <Box class="statistics-item-title">
                        {statisticsText[2].title}
                    </Box>
                    <Box class="statistics-item-text">
                        {statisticsText[2].text}
                    </Box>
                </Box>
                <Box class="statistics-item">
                    <Box id="statistics-image" component="img" src={statisticsImage}></Box>
                </Box>
            </Container>
        </>
    );
}

export default Statistics;