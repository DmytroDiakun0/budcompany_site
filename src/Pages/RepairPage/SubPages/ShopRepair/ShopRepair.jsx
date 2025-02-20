import siteText from "../../../../assets/text/staticTextUA.json";
import "../../../../assets/text/staticTextUA.json";
import {Box, Button, Container, Typography} from "@mui/material";
import shopImage from "../../../../assets/images/shop-repairing.png";

function ShopRepair() {
    const shopRepairText = siteText.repair_page.pages;

    return (
        <>
            <Container class="article">
                <Box class="article-image" component="img" src={shopImage}></Box>
                <Container class="article-title">
                    {shopRepairText.content[3].title}
                </Container>
                <Box class="article-content">
                    {shopRepairText.content[3].text.map((paragraph, index) => (
                        <Typography key={index} component="p">
                            {paragraph}
                        </Typography>
                    ))}
                    <Container class="article-controls">
                        <Button variant="contained" color="success" href="/repair">
                            {shopRepairText.see_other_link}
                        </Button>
                        <Button variant="contained" color="success" href="/contact_us">
                            {shopRepairText.order_link}
                        </Button>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default ShopRepair;