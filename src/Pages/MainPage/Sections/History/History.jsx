import {Box, Container, Typography} from "@mui/material";
import "./History.css"
import historyImage from "../../../../assets/images/tree.png";
import siteText from "../../../../assets/text/staticTextUA.json"

function History() {
    const historyText = siteText.main_page.history

    return (
        <>
            <Container id="history">
                <Box id="history-image" component="img" src={historyImage}></Box>
                <Box id="history-content">
                    <Box id="history-title">
                        {historyText.title}
                    </Box>
                    <Box id="history-text">
                        {historyText.text.map((paragraph, index) => (
                            <Typography key={index} component="p">
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default History;