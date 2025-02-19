import Motto from "./Sections/Motto/Motto.jsx";
import "./MainPage.css"
import Statistics from "./Sections/Statistics/Statistics.jsx";
import History from "./Sections/History/History.jsx";

function MainPage() {
    return (
        <>
            <Motto id="motto"/>
            <Statistics id="statistics"/>
            <History id="history"/>
        </>
    );
}

export default MainPage;