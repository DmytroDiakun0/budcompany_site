import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import MainPage from "../../Pages/MainPage/MainPage.jsx";
import RepairPage from "../../Pages/RepairPage/RepairPage.jsx";
import BuildPage from "../../Pages/BuildPage/BuildPage.jsx";
import ContactUsPage from "../../Pages/ContactUsPage/ContactUsPage.jsx";
import PolicyPage from "../../Pages/PolicyPage/PolicyPage.jsx";
import NotFoundPage from "../../Pages/NotFound/NotFoundPage.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ApartmentRepair from "../../Pages/RepairPage/SubPages/ApartmentRepair/ApartmentRepair.jsx";
import HouseRepair from "../../Pages/RepairPage/SubPages/HouseRepair/HouseRepair.jsx";
import OfficeRepair from "../../Pages/RepairPage/SubPages/OfficeRepair/OfficeRepair.jsx";
import ShopRepair from "../../Pages/RepairPage/SubPages/ShopRepair/ShopRepair.jsx";
import HouseBuild from "../../Pages/BuildPage/SubPages/HouseBuild/HouseBuild.jsx";
import CottageBuild from "../../Pages/BuildPage/SubPages/CottageBuild/CottageBuild.jsx";

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="budcompany_site" element={<MainPage />} />
                    <Route path="budcompany_site/repair/apartment" element={<ApartmentRepair />} />
                    <Route path="budcompany_site/repair/house" element={<HouseRepair />} />
                    <Route path="budcompany_site/repair/office" element={<OfficeRepair />} />
                    <Route path="budcompany_site/repair/shop" element={<ShopRepair />} />
                    <Route path="budcompany_site/repair" element={<RepairPage />} />
                    <Route path="budcompany_site/build/house" element={<HouseBuild />} />
                    <Route path="budcompany_site/build/cottage" element={<CottageBuild />} />
                    <Route path="budcompany_site/build" element={<BuildPage />} />
                    <Route path="budcompany_site/contact_us" element={<ContactUsPage />} />
                    <Route path="budcompany_site/policy" element={<PolicyPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>

    );
}

export default App