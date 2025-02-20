import {Container, Typography} from "@mui/material";
import "./PolicyPage.css";
import siteText from "../../assets/text/staticTextUA.json";

function PolicyPage() {
    const policyText = siteText.policy_page;

    return (
        <>
            <Container id="policy">
                <Typography component="h2" id="policy-title">
                    {policyText.title}
                </Typography>
                <Container id="policy-content">
                    {policyText.sections.map((section, outerIndex) => (
                        <>
                            <Typography key={outerIndex} component="h3">
                                {section.title}
                            </Typography>
                            {section.text.map((paragraph, innerIndex) => (
                                <Typography key={innerIndex} component="p">
                                    {paragraph}
                                </Typography>
                            ))}
                        </>
                    ))}
                </Container>
            </Container>
        </>
    )
}

export default PolicyPage;