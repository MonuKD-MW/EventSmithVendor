import { IoMdEyeOff } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import InputField from "../common/InputField";
import useSignUp from '../../utils/CustomHook/useSignup'; 

const SignupStep2 = () => {
  // const data=localStorage.getItem('vendorData')
  const {
    vendorData,
    handleInputChange,
    error,
    editPhone,
    setEditPhone,
    editEmail,
    setEditEmail,
    handleResendOTP,
    passwordToggle,
    setPasswordToggle,
    confirmPasswordToggle,
    setConfirmPasswordToggle,
  } = useSignUp(); 

  console.log(vendorData)


  return (
    <div className="signup-step3">
      {/* Upper Section */}
      <div className="signup-step3-upper">
        {/* Left Side: Area Code and Phone Number, Email */}
        <div className="signup-step3-upper-left">
          <div className="signup-step3-upper-phone">
            <div className="area-code">
              <InputField
                label="Area Code"
                type="text"
                id="areaCode"
                name="areaCode"
                value={vendorData.areaCode}
                onChange={(e) => handleInputChange(e)}
                isDisable={true}
                readOnly={true}
              />
              {error.phoneAreaCode && (
                <span className="error-message">{error.phoneAreaCode}</span>
              )}
            </div>

            <div className="signup-step3-upper-field-phone phone-field">
              <InputField
                label="Phone Number"
                type="text"
                id="phone"
                name="phone"
                value={vendorData.phone}
                readOnly={false}
                onChange={(e) => handleInputChange(e)}
                isDisable={true}
                editable={true}
              />
            </div>
          </div>

          <div className="signup-step3-upper-field email-field">
            <InputField
              type="text"
              label="Email"
              id="emailId"
              name="emailId"
              value={vendorData.emailId}
              // readOnly={!editEmail}
              readOnly={false}
              onChange={(e) => handleInputChange(e)}
              isDisable={true}
              editable={true}
            />
          </div>
        </div>

        {/* Right Side: Phone OTP and Email OTP */}
        <div className="signup-step3-upper-right">
          <div className="signup-step3-upper-field">
            <InputField
              label="Phone OTP"
              type="text"
              id="otpPhone"
              name="otpPhone"
              value={vendorData.otpPhone}
              onChange={(e) => handleInputChange(e)}
              required
            />
            {error.otpPhone && (
              <span className="error-message">{error.otpPhone}</span>
            )}
            <span
              className="resend-otp"
              onClick={() => handleResendOTP("phone")}
            >
              Resend OTP
            </span>
          </div>

          <div className="signup-step3-upper-field">
            <InputField
              label="Email OTP"
              type="text"
              id="otpEmail"
              name="otpEmail"
              value={vendorData.otpEmail}
              onChange={(e) => handleInputChange(e)}
              required
            />
            {error.otpEmail && (
              <span className="error-message">{error.otpEmail}</span>
            )}
            <span
              className="resend-otp"
              onClick={() => handleResendOTP("email")}
            >
              Resend OTP
            </span>
          </div>
        </div>
      </div>

      {/* Lower Section: Password and Confirm Password */}
      <div className="signup-step3-lower">
        <div className="signup-step3-lower-left">
          <div className="signup-step3-lower-field">
            <InputField
              label="Password"
              type={passwordToggle ? "text" : "password"}
              id="password"
              name="password"
              value={vendorData.password || ''}
              onChange={(e) => handleInputChange(e)}
              required
              passwordToggle={passwordToggle}
              setPasswordToggle={setPasswordToggle}
            />
      
          </div>
        </div>

        <div className="signup-step3-lower-right">
          <div className="signup-step3-lower-field">
            <InputField
              label="Confirm Password"
              type={confirmPasswordToggle ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={vendorData.confirmPassword}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignupStep2;
