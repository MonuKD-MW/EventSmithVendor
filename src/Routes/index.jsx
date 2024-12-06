/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import LoginPage from "../layouts/auth/login/LoginPage";
import SignupPage from '../layouts/auth/signUp/SignupPage'
import Portfolio from '../components/portfolio/PortFolio'
import { useAuth } from '../context/AuthContext';
import VendorProfile from "../layouts/vendorProfile/VendorProfile";
import BecomeAVendor from "../layouts/becomeAVendor/BecomeAVendor";
function AppRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/vendor-profile" element={<VendorProfile/>} />
      <Route path="/become-vendor" element={<BecomeAVendor/>}/>
    </Routes>
  );
}

export default AppRoutes;
