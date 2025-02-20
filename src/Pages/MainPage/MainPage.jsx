import "./MainPage.css"
import Motto from "./Sections/Motto/Motto.jsx";
import Statistics from "./Sections/Statistics/Statistics.jsx";
import History from "./Sections/History/History.jsx";
import Service from "./Sections/Service/Service.jsx";
import Partners from "./Sections/Partners/Partners.jsx";
import Feedback from "./Sections/Feedback/Feedback.jsx"

function MainPage() {
    return (
        <>
            <Motto id="motto"/>
            <Statistics id="statistics"/>
            <History id="history"/>
            <Service id="service"/>
            <Partners id="partners"/>
            <Feedback id="feedback"/>
        </>
    );
}

export default MainPage;