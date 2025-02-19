import {Container} from "@mui/material";
import "./Motto.css";
import siteText from "../../../../assets/text/staticTextUA.json";

function Motto() {
    const mottoText = siteText.main_page.motto;

    return (
        <>
            <Container id="motto" fontFamily="roboto">
                <Container id="motto-title">{mottoText.title}</Container>
                <Container id="motto-text">{mottoText.text}</Container>
            </Container>
        </>
    )
}

export default Motto;