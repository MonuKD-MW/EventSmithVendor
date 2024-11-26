import VendorProfileNavigator from '../vendorProfile/VendorProfileNavigator'
import '../../layouts/vendorProfile/VendorProfile.css'
import { useState } from 'react'
import MyProfile from './MyProfile'
import MyBookings from './MyBookings'
import BillingAndPayment from './BillingAndPayment'
import AccountSettings from './AccountSettings'
const VendorProfile = () => {
    const [activeTab, setActiveTab] = useState('my-profile')
    return (
        <div className="vendor-profile">
            <VendorProfileNavigator activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="vendor-side-panel">
                {activeTab === 'my-profile' && <MyProfile />}
                {activeTab === 'my-bookings' && <MyBookings />}
                {activeTab === 'billing-payments' && <BillingAndPayment />}
                {activeTab === 'account-settings' && <AccountSettings />}
            </div>
        </div>
    )
}

export default VendorProfile;