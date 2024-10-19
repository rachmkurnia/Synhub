import { Route, Routes } from "react-router-dom";

// import halaman
import LandingPage from "../pages/Customer/LandingPage";
import LoginPage from "../pages/Customer/LoginPage";
import RegisterPage from "../pages/Customer/RegisterPage";
import HomePage from "../pages/Customer/HomePage";
import MeetingPage from "../pages/Customer/MeetingPage";
import EventPage from "../pages/Customer/EventPage";
import CospacePage from "../pages/Customer/CospacePage";
import PaymentPage from "../pages/Customer/PaymentPage";
import SuccessPage from "../pages/Customer/SuccessPage";
import OrderPage from "../pages/Customer/OrderPage";

import DashboardPage from "../pages/Dashboard/DashboardPage";

import UserPage from "../pages/Dashboard/users/UserPage";
import CreateUserPage from "../pages/Dashboard/users/CreateUserPage";
import EditUserPage from "../pages/Dashboard/users/EditUserPage";

import FacilitysPage from "../pages/Dashboard/facilitys/FacilitysPage";
import CreateFacilitysPage from "../pages/Dashboard/facilitys/CreateFacilitysPage";
import EditFacilitysPage from "../pages/Dashboard/facilitys/EditFacilitysPage";
import BannersPage from "../pages/Dashboard/banners/BannersPage";
import CreateBannersPage from "../pages/Dashboard/banners/CreateBannersPage";
import EditBannersPage from "../pages/Dashboard/banners/EditBannersPage";
import BanksPage from "../pages/Dashboard/banks/BanksPage";
import CreateBanksPage from "../pages/Dashboard/banks/CreateBanksPage";
import EditBanksPage from "../pages/Dashboard/banks/EditBanksPage";
import RuanganPage from "../pages/Customer/RuanganPage";

// dashboard
function RouteIndex() {
  return (
    <>
      <Routes>
        {/* =====routes customer===== */}
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/ruang-meeting" Component={MeetingPage} />
        <Route path="/ruang-acara" Component={EventPage} />
        <Route path="/cospace" Component={CospacePage} />
        <Route path="/payment" Component={PaymentPage} />
        <Route path="/success" Component={SuccessPage} />
        <Route path="/order" Component={OrderPage} />
        <Route path="/ruangan/:slug"  Component={RuanganPage} />

        {/* ===== routes dashboard ===== */}
        <Route path="/admin/dashboard" element={<DashboardPage />} />

        <Route path="/admin/user" element={<UserPage />} />
        <Route path="/admin/user/new" element={<CreateUserPage />} />
        <Route path="/admin/user/:id" element={<EditUserPage />} />

        <Route path="/admin/facilitys" element={<FacilitysPage />} />
        <Route path="/admin/facilitys/new" element={<CreateFacilitysPage />} />
        <Route path="/admin/facilitys/:id" element={<EditFacilitysPage />} />

        <Route path="/admin/banners" element={<BannersPage />} />
        <Route path="/admin/banners/new" element={<CreateBannersPage />} />
        <Route path="/admin/banners/:id" element={<EditBannersPage />} />

        <Route path="/admin/banks" element={<BanksPage />} />
        <Route path="/admin/banks/new" element={<CreateBanksPage />} />
        <Route path="/admin/banks/:id" element={<EditBanksPage />} />

        



      </Routes>
    </>
  );
}

export default RouteIndex;
