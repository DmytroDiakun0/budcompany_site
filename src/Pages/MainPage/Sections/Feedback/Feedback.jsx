import {Box, Container} from "@mui/material";
import "./Feedback.css"
import siteText from "../../../../assets/text/staticTextUA.json"
import feedbackImage1 from "../../../../assets/images/face-1.png";
import feedbackImage2 from "../../../../assets/images/face-2.png";
import feedbackImage3 from "../../../../assets/images/face-3.png";
import feedbackImage4 from "../../../../assets/images/face-4.png";

function Feedback() {
    const feedbackText = siteText.main_page.feedback;

    return (
        <>
            <Container id="feedback">
                <Container id="feedback-title">
                    {feedbackText.title}
                </Container>
                <Container id="feedback-items">
                    <Box class="feedback-item">
                        <Box class="feedback-item-image" component="img" src={feedbackImage1}></Box>
                        <Box class="feedback-item-content">
                            <Box class="feedback-item-title">
                                {feedbackText.content[0].name}
                            </Box>
                            <Box class="feedback-item-text">
                                {feedbackText.content[0].text}
                            </Box>
                        </Box>
                    </Box>
                    <Box class="feedback-item">
                        <Box class="feedback-item-image" component="img" src={feedbackImage2}></Box>
                        <Box class="feedback-item-content">
                            <Box class="feedback-item-title">
                                {feedbackText.content[1].name}
                            </Box>
                            <Box class="feedback-item-text">
                                {feedbackText.content[1].text}
                            </Box>
                        </Box>
                    </Box>
                    <Box class="feedback-item">
                        <Box class="feedback-item-image" component="img" src={feedbackImage3}></Box>
                        <Box class="feedback-item-content">
                            <Box class="feedback-item-title">
                                {feedbackText.content[2].name}
                            </Box>
                            <Box class="feedback-item-text">
                                {feedbackText.content[2].text}
                            </Box>
                        </Box>
                    </Box>
                    <Box class="feedback-item">
                        <Box class="feedback-item-image" component="img" src={feedbackImage4}></Box>
                        <Box class="feedback-item-content">
                            <Box class="feedback-item-title">
                                {feedbackText.content[3].name}
                            </Box>
                            <Box class="feedback-item-text">
                                {feedbackText.content[3].text}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default Feedback;