import "../../layouts/vendorProfile/VendorProfileNavigator.css";
import { SlHandbag } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { GoSignIn } from "react-icons/go";  
import { FaTimes,FaBars } from "react-icons/fa";
import { useState } from "react";
export default function VendorProfileNavigator({activeTab, setActiveTab}) {

    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <button className="show-nav-btn" onClick={() => setShowNav(true)}><FaBars /></button>
            <div className={`vendor-profile-nav-container ${showNav ? 'show-vendor-profile-nav' : 'hide-vendor-profile-nav'}`}>
                <div className="nav-container">
                <button className="close-nav-btn" onClick={() => setShowNav(false)}><FaTimes /></button>
                <div className="simple-nav">
                    <button type="button" className={`simple-nav-btn my-profile ${activeTab === 'my-profile' ? 'active-btn' : ''}`} onClick={() => setActiveTab('my-profile')}><FaRegUserCircle /> My Profile</button>

                    <button type="button" className={`simple-nav-btn my-bookings ${activeTab === 'my-bookings' ? 'active-btn' : ''}`} onClick={() => setActiveTab('my-bookings')}><SlHandbag />My Bookings</button>

                    <button type="button" className={`simple-nav-btn billing-payments-btn ${activeTab === 'billing-payments' ? 'active-btn' : ''}`} onClick={() => setActiveTab('billing-payments')}><FaMoneyBill />Billing & Payments</button>
                </div>
                <div className="account-action-nav">
                    <button 
                        type="button" 
                        id={`${activeTab === 'account-settings' ? 'active-btn' : ''}`}
                        className='account-settings-btn'
                        onClick={() => setActiveTab('account-settings')}
                    >
                        <GoGear />Account Settings
                    </button>
                    <button id="sign-out-btn" type="button" ><GoSignIn />Sign Out</button>
                </div>
            </div>
            </div>
        </>
    )
}
