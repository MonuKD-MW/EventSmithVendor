/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import LoginPage from "../layouts/auth/login/LoginPage";
import SignupPage from '../layouts/auth/signUp/SignupPage'
import Portfolio from '../components/portfolio/PortFolio'
import { useAuth } from '../context/AuthContext';
import VendorProfile from "../layouts/vendorProfile/VendorProfile";
import BecomeAVendor from "../layouts/becomeAVendor/BecomeAVendor";
import TermAndCondition from "../layouts/termAndCondition/TermAndCondition";
import AboutUs from "../layouts/aboutUs/AboutUs";
import Contact from "../layouts/contactUs/Contact";
function AppRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/vendor-profile" element={<VendorProfile/>} />
      <Route path="/become-vendor" element={<BecomeAVendor/>}/>
      <Route path="/term-and-condition" element={<TermAndCondition/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default AppRoutes;
