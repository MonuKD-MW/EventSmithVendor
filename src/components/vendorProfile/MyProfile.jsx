import '../../style/MyProfile.css'
import { CiCamera } from "react-icons/ci";
import profileImgPlaceholder from '../../assets/user-img.jpg'
import photo from '../../assets/businessLogoConLogo.png'
import useImageUpload from '../../utils/CustomHook/useImageUpload';
import { useState } from 'react';
const MyProfile = () => {
    const {
        image,
        handleImageChange,
        removeImage,} = useImageUpload();

    return (
        <div className="my-profile">
            <h1 id="my-profile-heading">My Profile</h1>
            <div className="profile-container">
                <div className="vendor-details">
                    <div className="vendor-detail-outer-con">
                        <div className="left-img-name">
                            <div className="img-wrapper">
                                <div className="actual-img-con">
                                    {image ? (
                                        <img src={image} alt="Uploaded Preview" />
                                    ) : (
                                        <img src={profileImgPlaceholder} alt="Placeholder Profile Img" />
                                    )}
                                    <div className="cam-logo">
                                    <label>
                                        <CiCamera />
                                        <input 
                                        type="file" 
                                        accept="image/*" 
                                        onChange={handleImageChange} 
                                        style={{ display: 'none' }} 
                                        />
                                    </label>
                                    </div>
                                </div>
                                {image &&  (
                                    <div className="remove-img-btn">
                                    <button type="button" onClick={removeImage}>
                                        Remove Image
                                    </button>
                                    </div>
                                )}
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
                    <div id='business-body-con' className="body-con">
                        <div id='flex-col-1'>
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
                           
                        </div>
                        <div className="flex-col-2">
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
                        </div>
                        <div className="flex-col-3">
                            <div className="flex-picked-column">
                                 <BusinessLogo/>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MyProfile;




const BusinessLogo = () => {
  const {
    image,
    handleImageChange,
    removeImage,
  } = useImageUpload();

  const [showImageControls, setShowImageControls] = useState(false);

  return (
    <div className={`upload-logo-con ${image && "upload-logo-con-have-img"}`}>
      {image ? (
        <div
          className="image-wrapper"
          onMouseEnter={() => setShowImageControls(true)}
          onMouseLeave={() => setShowImageControls(false)}
        >
          <img src={image} alt="Business Logo" />
          {showImageControls && (
            <div className="image-controls-div">
              
                <label className="change-business-logo-label">
                  Change Logo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
                <button
                  className='remove-img-btn'
                  type="button"
                  onClick={()=>{
                    removeImage()
                    setShowImageControls(false)
                  }}
                >
                  Remove Logo
                </button>
            </div>
          )}
        </div>
      ) : (
        <div className="dashed-con">
          <img src={photo} alt="Placeholder" />
          <label className="upload-logo-label">
            Upload Logo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
          <p>
            For best results, use a high resolution, square image (1:1), 100
            x 100 px.
          </p>
        </div>
      )}
    </div>
  );
};




