import "./MainPage.css"
import Motto from "./Sections/Motto/Motto.jsx";
import Statistics from "./Sections/Statistics/Statistics.jsx";
import History from "./Sections/History/History.jsx";
import Service from "./Sections/Service/Service.jsx";

function MainPage() {
    return (
        <>
            <Motto id="motto"/>
            <Statistics id="statistics"/>
            <History id="history"/>
            <Service id="service"/>
        </>
    );
}

export default MainPage;