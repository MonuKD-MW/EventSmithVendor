import '../../style/AccountSettings.css'
import { IoMdCheckmark } from "react-icons/io";
import { TbCircleLetterX } from "react-icons/tb";
import { useState } from 'react';
const AccountSettings = () => {

    const passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$";
    const messageForPasswordRegex = "Min 8 chars with 1 uppercase, 1 lowercase, 1 number & 1 special char.";
    // ! form control codes start

    // ! state
    const [changePasswordData, setChangePasswordData] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const [updatePasswordData, setUpdatePasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [errorForChangePassword,setErrorForChangePassword] = useState(false)
    const [errorForUpdatePassword,setErrorForUpdatePassword] = useState(false)
    // ! resetForm
    const resetChangePasswordForm = ()=> {
            setChangePasswordData({
                newPassword: '',
                confirmPassword: '',
            })
            setErrorForChangePassword(false);
    }

    const resetUpdatePasswordDataForm = () => {
        setUpdatePasswordData({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        })
        setErrorForUpdatePassword(false);
    }

    // ! Change Password Handlers
    const handleChangePasswordInput = (e) => {
        const { name, value } = e.target;
        setChangePasswordData({
            ...changePasswordData,
            [name]: value,
        });
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        const { newPassword, confirmPassword } = changePasswordData;

        if (newPassword !== confirmPassword) {
            setErrorForChangePassword(true);
            return;
        }else{
            errorForChangePassword && setErrorForChangePassword(!errorForChangePassword);
        }

        console.log("New password set:", newPassword);
        alert("Password changed successfully!");
        resetChangePasswordForm();
    };

    //! Update Password Handlers
    const handleUpdatePasswordInput = (e) => {
        const { name, value } = e.target;
        setUpdatePasswordData({
            ...updatePasswordData,
            [name]: value,
        });
    };

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        const { oldPassword, newPassword, confirmPassword } = updatePasswordData;

        if (newPassword !== confirmPassword) {
            
            setErrorForUpdatePassword(true)
            return;
        }else{
            errorForUpdatePassword && setErrorForUpdatePassword(!errorForUpdatePassword)
        }

        console.log("Old password verified:", oldPassword);
        console.log("New password set:", newPassword);
        alert('Password Updated Successfully');
        resetUpdatePasswordDataForm();
    };
    // ! form control codes end


    

    return (
        <div className="account-settings">
            <h1 className="account-settings-heading">Account Settings</h1>
            <div className="account-settings-container">
                <div className="same-outer-con">
                    <div className="header-con">
                        <h2>Login Info</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con account-settings-body-con">
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
                    <div className="body-con account-settings-body-con">
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
                    <div className="body-con account-settings-body-con">
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
                        {/* //! change password form here */}
                        <form onSubmit={(e)=>handleChangePassword(e)}>
                            <div className="login-info-data-grp">
                                <label className="data-label" htmlFor="new-password">New password *</label>
                                <div className="custom-btn-con ">
                                    <input 
                                    type="password"
                                    pattern={passwordRegex}
                                    title={messageForPasswordRegex}
                                    value={changePasswordData.newPassword}
                                    onChange={e=>handleChangePasswordInput(e)}
                                    required
                                    name="newPassword" 
                                    id="newPassword" 
                                    className="regular-account-settings-btn account-settings-input" placeholder="Enter here"
                                    />
                                </div>
                            </div>
                            <div className="login-info-data-grp">
                                <label className="data-label" htmlFor="confirm-password">Confirm new password *</label>
                                <div className="custom-btn-con-forget-password ">
                                    <input 
                                    type="password" 
                                    pattern={passwordRegex}
                                    title={messageForPasswordRegex} 
                                    value={changePasswordData.confirmPassword}
                                    onChange={e=>handleChangePasswordInput(e)}
                                    name="confirmPassword" 
                                    id="confirmPassword" 
                                    required
                                    className={`regular-account-settings-btn account-settings-input ${errorForChangePassword && 'having-error'}`} 
                                    placeholder="Enter here"/>
                                    {errorForChangePassword && <span className='password-error'>password doesn't match</span>}
                                </div>
                            </div>
                            <div className="login-info-data-grp">
                                <div className="custom-btn-con">
                                    <button className="regular-account-settings-btn" onClick={resetChangePasswordForm}>Cancel</button>
                                    <button className="regular-account-settings-btn account-settings-submit-btn" type='submit'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
                {/* ! 4th section */}
                <div className="same-outer-con">
                    <div className="header-con">
                        <h2>Login Info</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con account-settings-body-con">
                        <form onSubmit={(e)=>handleUpdatePassword(e)}>
                        {/* //! change here */}
                            <div className="login-info-data-grp">
                                <label className="data-label" htmlFor="old-password">Old password *</label>
                                <div className="custom-btn-con-forget-password">
                                    <input 
                                        type="password"
                                        pattern={passwordRegex}
                                        title={messageForPasswordRegex}
                                        value={updatePasswordData.oldPassword}
                                        onChange={e=>handleUpdatePasswordInput(e)}
                                        required  
                                        name="oldPassword" 
                                        id="oldPassword" 
                                        className="regular-account-settings-btn account-settings-input" placeholder="Enter here"
                                    />
                                    <span>Forget password?</span>
                                </div>
                            </div>
                            <div className="login-info-data-grp">
                                <label className="data-label" htmlFor="new-password">New password *</label>
                                <div className="custom-btn-con">
                                    <input 
                                    type="password"
                                    pattern={passwordRegex}
                                    title={messageForPasswordRegex}
                                    value={updatePasswordData.newPassword}
                                    onChange={e=>handleUpdatePasswordInput(e)}
                                    required  
                                    name="newPassword" 
                                    id="newPassword" 
                                    className="regular-account-settings-btn account-settings-input" placeholder="Enter here"
                                    />
                                   
                                </div>
                            </div>
                            <div className="login-info-data-grp">
                                <label className="data-label" htmlFor="confirm-password">Confirm new password *</label>
                                <div className="custom-btn-con-forget-password ">
                                    <input 
                                        type="password"
                                        pattern={passwordRegex}
                                        title={messageForPasswordRegex}
                                        value={updatePasswordData.confirmPassword}
                                        onChange={e=>handleUpdatePasswordInput(e)}
                                        required  
                                        name="confirmPassword" 
                                        id="confirmPassword" 
                                        className={`regular-account-settings-btn account-settings-input ${errorForUpdatePassword && 'having-error'}`}placeholder="Enter here"
                                    />
                                     {errorForUpdatePassword && <span className='password-error'>password doesn't match</span>}
                                </div>
                            </div>
                            
                            <div className="login-info-data-grp">
                                <div className="custom-btn-con">
                                    <button className="regular-account-settings-btn" onClick={resetUpdatePasswordDataForm}>Cancel</button>
                                    <button 
                                        className="regular-account-settings-btn account-settings-submit-btn" type='submit'
                                    >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;