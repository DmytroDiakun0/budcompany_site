import {Box, Container, Link} from "@mui/material";
import "./RepairPage.css"
import siteText from "../../assets/text/staticTextUA.json"
import repairImage1 from "../../assets/images/house.jpg";
import repairImage2 from "../../assets/images/building.jpg";
import repairImage3 from "../../assets/images/office.jpg";
import repairImage4 from "../../assets/images/shop.jpg";

function RepairPage() {
    const repairPageText = siteText.repair_page;

    return (
        <>
            <Container id="repair-title">
                {repairPageText.title}
            </Container>
            <Container id="repair">
                <Link class="repair-item" href="/repair/apartment" underline="none">
                    <Box class="repair-item-image" component="img" src={repairImage1}></Box>
                    <Box class="repair-item-text">{repairPageText.categories[0]}</Box>
                </Link>
                <Link class="repair-item" href="/repair/house" underline="none">
                    <Box class="repair-item-image" component="img" src={repairImage2}></Box>
                    <Box class="repair-item-text">{repairPageText.categories[1]}</Box>
                </Link>
                <Link class="repair-item" href="/repair/office" underline="none">
                    <Box class="repair-item-image" component="img" src={repairImage3}></Box>
                    <Box class="repair-item-text">{repairPageText.categories[2]}</Box>
                </Link>
                <Link class="repair-item" href="/repair/shop" underline="none">
                    <Box class="repair-item-image" component="img" src={repairImage4}></Box>
                    <Box class="repair-item-text">{repairPageText.categories[3]}</Box>
                </Link>
            </Container>
        </>
    )
}

export default RepairPage;