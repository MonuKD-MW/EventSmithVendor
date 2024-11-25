import { RiArrowDownSLine } from "react-icons/ri";
import InputField from "../common/InputField";
import fb from "../../assets/fb.png"; 
import google from "../../assets/google.png";
import { useForm } from 'react-hook-form';
import useSignup from '../../utils/CustomHook/useSignup';
import { useState } from 'react';

const SignupStep1 = () => {
  const {  formState: { errors } } = useForm();
  const { vendorData, handleInputChange } = useSignup();
  const [localVendorData, setLocalVendorData] = useState(vendorData);

  console.log(localVendorData)

  const handleLocalInputChange = (e) => {
    const { name, value } = e.target;
    console.log("step1", name, value);
    setLocalVendorData(prevData => ({ 
      ...prevData, 
      [name]: value 
    }));
    handleInputChange(e);
  };

  return (
    <div className="signup-step1">
      <div className="third-party-login">
        <div className="third-party-login-container">
          <div className="third-party-login-container-fb">
            <img src={fb} alt="Facebook Login" />
          </div>
          <div className="third-party-login-container-google">
            <img src={google} alt="Google Login" />
          </div>
        </div>
      </div>

      <div className="or-container">
        <div className="or-line"></div>
        <div className="or-text">or</div>
        <div className="or-line"></div>
      </div>

      
        <div className="signup-step1-upper">
          <div className="signup-step1-upper-left">
            <InputField
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              value={localVendorData?.firstName || ''}
              onChange={handleLocalInputChange}
              required
              error={errors.firstName}
            />
          </div>

          <div className="signup-step1-upper-right">
            <InputField
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              value={localVendorData?.lastName || ''}
              onChange={handleLocalInputChange}
              required
              error={errors.lastName}
            />
          </div>
        </div>

        <div className="signup-step1-lower">
          <div className="signup-step1-lower-left">
            <InputField
              label="Email"
              type="email"
              id="emailId"
              name="emailId"
              value={localVendorData?.emailId || ''}
              onChange={handleLocalInputChange}
              required
              
              error={errors.email}
            />
          </div>

          <div className="signup-step1-lower-right">
            <div className="signup-step1-lower-right-area-code">
              <InputField
                label="Area Code"
                type="text"
                id="areaCode"
                name="areaCode"
                value={localVendorData?.areaCode || '+1'}
                onChange={handleLocalInputChange}
                required
                error={errors.areaCode}
              />
              <span className="edit-phone-area-code">
                <RiArrowDownSLine />
              </span>
            </div>

            <InputField
              label="Phone No"
              type="text"
              id="phone"
              name="phone"
              value={localVendorData?.phone  || ''}
              onChange={handleLocalInputChange}
              required={true}
              error={errors.phone}
            />
          </div>
        </div>
    </div>
  );
};

export default SignupStep1;
