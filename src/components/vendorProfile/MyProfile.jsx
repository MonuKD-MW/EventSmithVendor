import '../../style/MyProfile.css'
import { CiCamera } from "react-icons/ci";
import profileImg from '../../assets/user-img.jpg'
import photo from '../../assets/photo.png'
const MyProfile = () => {
    return (
        <div className="my-profile">
            <h1 id="my-profile-heading">My Profile</h1>
            <div className="profile-container">
                <div className="vendor-details">
                    <div className="vendor-detail-outer-con">
                        <div className="left-img-name">
                            <div className="img-wrapper">
                                <div className="actual-img-con">
                                    <img src={profileImg} alt="" />
                                    <div className="cam-logo"><CiCamera /></div>
                                </div>
                                <div className="remove-img-btn">
                                    <button type="button">Remove Image</button>
                                </div>
                            </div>
                            <div className="name-con">
                                <div className="name">User Name</div>
                                <div className="acc-id">Acc. ID - #ABC123DEF456</div>
                                <div className="creation-date">Creation Date - Jul 24, 2024</div>
                            </div>
                        </div>
                        <div className="right-subscription-status">
                                <div className="subscription-name">EventSmith Advanced Package</div>
                                <div className="subscription-duration">Billing Date - Dec 26, 2024 <span>Pay Now</span></div>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="header-con">
                        <h2>Personal Information</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con">
                        <div className="data-grp">
                            <div className="data-label">First Name</div>
                            <div className="data-value">Vikas</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Last Name</div>
                            <div className="data-value">Dubey</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Email</div>
                            <div className="data-value">vikasdubey@gmail.com</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Phone Number</div>
                            <div className="data-value">+91 9876543210</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Country</div>
                            <div className="data-value">India</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">City/State</div>
                            <div className="data-value">Mumbai, Maharashtra</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Street Name</div>
                            <div className="data-value">Mumbai, Maharashtra</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">House Number</div>
                            <div className="data-value">123/Apartment Number</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Zip/Postal Code</div>
                            <div className="data-value">400001</div>
                        </div>

                    </div>
                    
                </div>
                <div className="business-info">
                    <div className="header-con">
                        <h2>Business Information</h2>
                    </div>
                    <div className="divider"/>
                    <div className="body-con">
                        <div className="data-grp">
                            <div className="data-label">Business Name</div>
                            <div className="data-value">Vikas Dubey</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Business Category</div>
                            <div className="data-value">Wedding</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Website URL</div>
                            <div className="data-value">https://vikasdubey.com</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Business Contact Number</div>
                            <div className="data-value">+91 9876543210</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Country</div>
                            <div className="data-value">India</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">City/State</div>
                            <div className="data-value">Mumbai, Maharashtra</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Street Number</div>
                            <div className="data-value">Mumbai, Maharashtra</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">House Number</div>
                            <div className="data-value">123/Apartment Number</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Zip/Postal Code</div>
                            <div className="data-value">400001</div>
                        </div>
                        <div className="data-grp">
                            <div className="data-label">Tax Number</div>
                            <div className="data-value">400001</div>
                        </div>
                        {/* <div className="upload-logo-con">
                            <div className="dashed-con">
                                <img src={photo} alt="" />
                                <p className="upload-logo-label">Upload Logo</p>
                                <p>For best results, use a high resolution, square image (1:1), 100 x 100 px.</p>
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MyProfile;