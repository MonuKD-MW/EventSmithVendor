import InputField from '../common/InputField'; 
import { RiArrowDownSLine } from 'react-icons/ri';
import {regions} from "../../staticData.json"
import CustomSelect from '../common/CustomSelect';

const PortfolioFormStep1 = ({vendorData:{firstName,lastName,email},handleLocalStateForStep,localStateForStep,errors,handleValidation}) => {

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
            value={localStateForStep.firstName || ""}//fn not comming from vendorData so when intergrating with api we need to change this initialize the redux store casue the initail LocalStateForStep is vendorDataSlice
            readOnly={false}
            isDisable={true}
            editable={true}
            onChange={(e) => handleLocalStateForStep(e)}
            onBlur={(e)=>handleValidation("firstName",e.target.value)}
            errors={errors}
          />
        </div>
        <div className="portfolio-form-step-container-right">
          <InputField
            label="Last Name*"
            type="text"
            id="lastName"
            name="lastName"
            value={localStateForStep.lastName || ""}
            isDisable={true}
            editable={true}
            onChange={(e) => handleLocalStateForStep(e)}
            onBlur={(e)=>handleValidation("lastName",e.target.value)}
            errors={errors}
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
            value={localStateForStep.email || ""}
            editable={true}
            isDisable={true}
            onChange={(e) => handleLocalStateForStep(e)}
            onBlur={(e)=>handleValidation("email",e.target.value)}
            errors={errors}
          />
        </div>
        <div className="portfolio-form-step-container-right">
         <label htmlFor="country">Country*</label>
          <CustomSelect
            placeholder="select country"
            label="Country*"
            options={["Canada","United States"]}
            value={localStateForStep.country || ""}
            onChange={(e) => handleLocalStateForStep(e,true,"country")}
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
            onChange={(e) => handleLocalStateForStep(e,true,"city")}
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
            onBlur={(e)=>handleValidation("postalCode",e.target.value)}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFormStep1;
