import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import RepairPage from "./Pages/RepairPage/RepairPage.jsx";
import BuildPage from "./Pages/BuildPage/BuildPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage.jsx";
import PolicyPage from "./Pages/PolicyPage/PolicyPage.jsx";
import NotFoundPage from "./Pages/NotFound/NotFoundPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="repair" element={<RepairPage />} />
                <Route path="build" element={<BuildPage />} />
                <Route path="contact_us" element={<ContactUsPage />} />
                <Route path="policy" element={<PolicyPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App