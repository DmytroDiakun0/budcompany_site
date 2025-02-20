import {Box, Button, Container, TextField} from "@mui/material";
import "./ContactUsPage.css";
import siteText from "../../assets/text/staticTextUA.json";

function ContactUsPage() {
    const contactUsText = siteText.contact_us_page;

    return (
        <>
            <Container id="contact-us">
                <Container id="contact-us-title">
                    {contactUsText.title}
                </Container>
                <Box component="form">
                    <Box id="name-field">
                        <TextField id="name"
                                   label={contactUsText.form_fields.name}
                                   variant="outlined" />
                    </Box>
                    <Box id="phone-number-field">
                        <TextField id="phone_number"
                                   label={contactUsText.form_fields.phone_number}
                                   variant="outlined" />
                    </Box>
                    <Box id="message-text-field">
                        <TextField id="message_text"
                                   label={contactUsText.form_fields.message_text}
                                   variant="outlined"
                                   multiline
                                   rows={10}
                                   fullWidth/>
                    </Box>
                    <Box id="submit-button-container">
                        <Button id="submit-button"
                                type="submit"
                                variant="contained"
                                color="success">
                            {contactUsText.submit_button}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default ContactUsPage;