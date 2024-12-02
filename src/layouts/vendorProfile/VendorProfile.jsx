import VendorProfileNavigator from '../../components/vendorProfile/VendorProfileNavigator'
import './VendorProfile.css'
import { useState } from 'react'
import MyProfile from '../../components/vendorProfile/MyProfile'
import MyBookings from '../../components/vendorProfile/MyBookings'
import BillingAndPayment from '../../components/vendorProfile/BillingAndPayment'
import AccountSettings from '../../components/vendorProfile/AccountSettings'
import Header from '../../components/common/Header'
const VendorProfile = () => {
    const [activeTab, setActiveTab] = useState('my-profile')
    return (
        <>  
            <Header />
            <div className="vendor-profile">
                <div className="vendor-profile-nav-container-wrapper    ">
                    <VendorProfileNavigator activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className="vendor-side-panel">
                    {activeTab === 'my-profile' && <MyProfile />}
                    {activeTab === 'my-bookings' && <MyBookings />}
                    {activeTab === 'billing-payments' && <BillingAndPayment />}
                    {activeTab === 'account-settings' && <AccountSettings />}
                </div>
            </div>
        </>
    )
}

export default VendorProfile;