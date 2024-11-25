import "../../layouts/vendorProfile/VendorProfileNavigator.css";
import { SlHandbag } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { GoSignIn } from "react-icons/go";  
export default function VendorProfileNavigator() {
    return (
        <div className="vendor-profile-nav-container">
            <div className="nav-container">
                <div className="simple-nav">
                    <button type="button" className="simple-nav-btn my-profile"><FaRegUserCircle /> My Profile</button>
                    <button type="button" className="simple-nav-btn my-bookings"><SlHandbag />My Bookings</button>
                    <button type="button" className="simple-nav-btn billing-payments"><FaMoneyBill />Billing & Payments</button>
                </div>
                <div className="account-action-nav">
                    <button type="button"><GoGear />Account Settings</button>
                    <button type="button"><GoSignIn />Sign Out</button>
                </div>
            </div>
        </div>
    )
}