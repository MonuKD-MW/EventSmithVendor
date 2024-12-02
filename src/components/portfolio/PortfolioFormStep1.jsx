import InputField from '../common/InputField'; 
import { RiArrowDownSLine } from 'react-icons/ri';
import {regions} from "../../staticData.json"
import CustomSelect from '../common/CustomSelect';

const PortfolioFormStep1 = ({vendorData:{firstName,lastName,email,password,phone,areaCode},handleLocalStateForStep,localStateForStep}) => {

  console.log("[localStateForStep]",localStateForStep)

  
  return (
    <div className="portfolio-form-step-1">
      <div className="portfolio-form-step-1-container1">
        <div className="portfolio-form-step-container-left">
          <InputField
            label="First Name*"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName || ""}
            isDisabled={true}
          />
        </div>
        <div className="portfolio-form-step-container-right">
          <InputField
            label="Last Name*"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName || ""}
            isDisabled={true}
          />
        </div>
      </div>

      <div className="portfolio-form-step-1-container2">
        <div className="portfolio-form-step-container-left">
          <InputField
            label="Email*"
            type="email"
            id="email"
            name="email"
            value={email || ""}
            isDisabled={true}
          />
        </div>
        <div className="portfolio-form-step-container-right">
          <InputField
            label="Password*"
            type="password"
            id="password"
            name="password"
            value={password || ""}
            
            isDisabled={true}
          />
        </div>
      </div>


      <div className="portfolio-form-step-1-container3">
        <div className="portfolio-form-step1-area-code portfolio-area-code">
          <label htmlFor="phoneAreaCode">Area Code*</label>
          <CustomSelect
            label="Area Code*"
            options={["+1"]}
            value={areaCode || "+1"}
            onChange={(e) => handleLocalStateForStep(e,false,"phoneAreaCode")}
          />
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="portfolio-form-step1-phone-number">
          <InputField
            label="Phone Number*"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phone || ""}
            isDisabled={true}

          />
          {/* think about phone verification later */}
          {/* {vendorData.phoneVerified && (
            <span className="edit-phone-area-code">
              {vendorData.phoneVerified && <FaCheck className="edit-phone-area-code-icon" />}
              {vendorData.phoneVerified ? 'Verified' : 'Unverified'}
              
              
            </span>
          )} */}
      </div>

      <div className="portfolio-form-step1-country">
        <label htmlFor="country">Country*</label>
          <CustomSelect
            placeholder="select country"
            label="Country*"
            options={["Canada","United States"]}
            value={localStateForStep.country || ""}
            onChange={(e) => handleLocalStateForStep(e,false,"country")}
          />
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
      </div>

      <div className="portfolio-form-step-1-container4">
        <div className="portfolio-form-step-container-left">
          <label htmlFor="city">City*</label>  
          <CustomSelect
            placeholder="select city"
            label="City*"
            options={localStateForStep?.country === 'Canada' ? [...regions.Canada.Provinces, ...regions.Canada.Territories] : regions['United States'].Provinces}
            value={localStateForStep.city || ""}
            onChange={(e) => handleLocalStateForStep(e,false,"city")}
          />
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="portfolio-form-step-container-right">
          <InputField
            label="Postal Code*"
            type="text"
            id="postalCode"
            name="postalCode"
            value={localStateForStep.postalCode || ""}
            onChange={(e) => handleLocalStateForStep(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFormStep1;
