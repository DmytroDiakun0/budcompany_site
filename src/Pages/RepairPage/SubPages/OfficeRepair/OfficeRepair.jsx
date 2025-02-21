import siteText from "../../../../assets/text/staticTextUA.json";
import "../../../../assets/text/staticTextUA.json"
import {Box, Button, Container, Typography} from "@mui/material";
import officeImage from "../../../../assets/images/office-repairing.jpg";

function OfficeRepair() {
    const officeRepairText = siteText.repair_page.pages;

    return (
        <>
            <Container class="article">
                <Box class="article-image" component="img" src={officeImage}></Box>
                <Container class="article-title">
                    {officeRepairText.content[2].title}
                </Container>
                <Box class="article-content">
                    {officeRepairText.content[2].text.map((paragraph, index) => (
                        <Typography key={index} component="p">
                            {paragraph}
                        </Typography>
                    ))}
                    <Container class="article-controls">
                        <Button variant="contained" color="success" href="#/repair">
                            {officeRepairText.see_other_link}
                        </Button>
                        <Button variant="contained" color="success" href="#/contact_us">
                            {officeRepairText.order_link}
                        </Button>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default OfficeRepair;