import '../../layouts/vendorProfile/AccountSettings.css'
import { IoMdCheckmark } from "react-icons/io";
import { TbCircleLetterX } from "react-icons/tb";
const AccountSettings = () => {
    return (
        <div className="account-settings">
            <h1 className="account-settings-heading">Account Settings</h1>
            <div className="account-settings-container">
                <div className="same-outer-con">
                    <div className="header-con">
                        <h2>Login Info</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con">
                        <div className="login-info-data-grp">
                            <div className="data-label">Email</div>
                            <div className="data-value">abc@xyz.com <span><IoMdCheckmark className="verified-icon"/> Verified</span></div>
                        </div>
                        <div className="login-info-data-grp">
                            <div className="custom-btn-label">You have not set a password yet</div>
                            <div className="custom-btn-con">
                                <button className="regular-account-settings-btn">Set Password</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                        {/* ! 2nd section */}
                        <div className="same-outer-con">
                    <div className="header-con">
                        <h2>Login Info</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con">
                        <div className="login-info-data-grp">
                            <div className="data-label">Email</div>
                            <div className="data-value">abc@xyz.com <span className="not-verified-icon"><TbCircleLetterX className="verified-icon"/> Not Verified</span></div>
                            <div className="custom-btn-con">
                                <button className="regular-account-settings-btn">Send verification link</button>
                            </div>
                        </div>
                        <div className="login-info-data-grp">
                            <div className="data-label">Password</div>
                            <div className="custom-btn-con">
                                <button className="regular-account-settings-btn">Change your password</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                {/* ! 3rd section */}
                <div className="same-outer-con">
                    <div className="header-con">
                        <h2>Login Info</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con">
                        <div className="login-info-data-grp">
                            <div className="data-label">Email</div>
                            <div className="data-value">abc@xyz.com <span ><IoMdCheckmark className="verified-icon"/> Not Verified</span></div>
                            <div className="custom-btn-con">
                                <button className="regular-account-settings-btn">Send verification link</button>
                            </div>
                        </div>
                        <div className="login-info-data-grp">
                            <div className="data-label">Password</div>
                            <div className="custom-btn-con">
                                <button className="regular-account-settings-btn">Change your password</button>
                            </div>
                        </div>
                        {/* //! change here */}
                        <div className="login-info-data-grp">
                            <label className="data-label" htmlFor="new-password">New password *</label>
                            <div className="custom-btn-con ">
                                <input type="text"  name="new-password" id="new-password" className="regular-account-settings-btn account-settings-input" placeholder="Enter here"/>
                            </div>
                        </div>
                        <div className="login-info-data-grp">
                            <label className="data-label" htmlFor="confirm-password">Confirm new password *</label>
                            <div className="custom-btn-con ">
                                <input type="text"  name="confirm-password" id="confirm-password" className="regular-account-settings-btn account-settings-input" placeholder="Enter here"/>
                            </div>
                        </div>
                        <div className="login-info-data-grp">
                            <div className="custom-btn-con">
                                <button className="regular-account-settings-btn">Cancel</button>
                                <button className="regular-account-settings-btn account-settings-submit-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* ! 4th section */}
                <div className="same-outer-con">
                    <div className="header-con">
                        <h2>Login Info</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con">
                        
                        {/* //! change here */}
                        <div className="login-info-data-grp">
                            <label className="data-label" htmlFor="old-password">Old password *</label>
                            <div className="custom-btn-con-forget-password">
                                <input type="text"  name="old-password" id="old-password" className="regular-account-settings-btn account-settings-input" placeholder="Enter here"/>
                                <span>Forget password?</span>
                            </div>
                        </div>
                        <div className="login-info-data-grp">
                            <label className="data-label" htmlFor="new-password">New password *</label>
                            <div className="custom-btn-con ">
                                <input type="text"  name="new-password" id="new-password" className="regular-account-settings-btn account-settings-input" placeholder="Enter here"/>
                            </div>
                        </div>
                        <div className="login-info-data-grp">
                            <label className="data-label" htmlFor="confirm-password">Confirm new password *</label>
                            <div className="custom-btn-con ">
                                <input type="text"  name="confirm-password" id="confirm-password" className="regular-account-settings-btn account-settings-input" placeholder="Enter here"/>
                            </div>
                        </div>
                        
                        <div className="login-info-data-grp">
                            <div className="custom-btn-con">
                                <button className="regular-account-settings-btn">Cancel</button>
                                <button className="regular-account-settings-btn account-settings-submit-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;