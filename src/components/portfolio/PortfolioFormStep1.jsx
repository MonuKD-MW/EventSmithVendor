import InputField from '../common/InputField'; 
import { RiArrowDownSLine } from 'react-icons/ri';
import {regions} from "../../staticData.json"
import CustomSelect from '../common/CustomSelect';

const PortfolioFormStep1 = ({vendorData:{firstName,lastName,email},handleLocalStateForStep,localStateForStep}) => {

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
