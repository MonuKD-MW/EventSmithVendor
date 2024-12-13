import { RiArrowDownSLine } from "react-icons/ri";
import InputField from "../common/InputField";
import fb from "../../assets/fb.png"; 
import google from "../../assets/google.png";
import useSignup from '../../utils/CustomHook/useSignup';
import { useState } from 'react';
import CustomSelect from "../common/CustomSelect"


const SignupStep1 = ({handleValidation,errors}) => {
  const { vendorData, handleInputChange } = useSignup();
  const [localVendorData, setLocalVendorData] = useState(vendorData);
  console.log(localVendorData)
  console.log(errors)
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
              onBlur={(e) => handleValidation("firstName", e.target.value)}
              errors={errors}
              required
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
              onBlur={(e) => handleValidation("lastName", e.target.value)}
              errors={errors}
              required
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
              onBlur={(e) => handleValidation("emailId", e.target.value)}
              errors={errors}
              required
            />
            
          </div>

          <div className="signup-step1-lower-right">
            <div className="signup-step1-lower-right-area-code">
              <label>Area Code*</label>
                  <CustomSelect
                    placeholder="+1"  
                    options={["+1"]}
                    value={'+1' || ""}
                    onChange={(e) => handleChange({target: {name: "areaCode", value: e}}, index)}
                  />
              <span>
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
                onBlur={(e) => handleValidation("phone", e.target.value)}
                required={true}
                errors={errors}
              />
              
            
          </div>
        </div>
    </div>
  );
};

export default SignupStep1;
