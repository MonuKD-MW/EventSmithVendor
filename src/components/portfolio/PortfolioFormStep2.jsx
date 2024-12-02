
import FileInput from "../common/FileInput";
import TextInput from "../common/TextInput";
import InputField from '../common/InputField';
import SocialMediaHandles from "./SocialMediaHandles"; // Import SocialMediaHandles Component
import { socialMedia as socialMediaOptions } from "../../staticData.json"; // Import options
import { RiArrowDownSLine } from 'react-icons/ri';
import CustomSelect from "../common/CustomSelect";
const PortfolioFormStep2 = ({
  localStateForStep: {
    businessName,
    service,
    subCategory,
    businessDescription,
    title,
    streetAddress1,
    streetAddress2,
    province,
    postalCode,
    country,
    socialMedia, // Ensure socialMedia is passed in the localStateForStep object
  },
  imagePreview,
  serviceOptions,
  countryCodes,
  regions,
  ServiceData,
  handleLocalStateForStep,
}) => {

  const getSubCategories = (service) => {
    if (!service || service === "select service") return [];
    
    const serviceData = ServiceData[service];
    if (!serviceData) return [];
    
    return Object.keys(serviceData);
  };

  return (
    <div className="portfolio-form-step-1">
      {/* Business Logo */}
      <div className="portfolio-form-step-container">
        
          <div className="business-logo-container">
          <FileInput
            label="Business Logo"
            name="businessLogoUrl"
            onChange={(e) => handleLocalStateForStep(e)}
          >
            {imagePreview ? (
            <img src={imagePreview} alt="Business Logo Preview" />
            ) : (
              <div className="placeholder">Upload Logo</div>
            )}
          </FileInput>
          </div>
        <div className="portfolio-form-step-container-right">
          <TextInput
            label="Business Name*"
            value={businessName || ""}
            name="businessName"
            onChange={(e) => handleLocalStateForStep(e)}
          />
        </div>
      </div>
      {/* Service and Sub-category */}
      <div className="portfolio-form-step-container">
      <div className="portfolio-form-step-container-left">
        <label>Service*</label>
          <CustomSelect
            placeholder="select service"
            name="service"
            value={service || ""}
            options={serviceOptions}
            onChange={(e) => handleLocalStateForStep(e,true,"service")}
          />
          <span>
              <RiArrowDownSLine />
            </span>
        </div>
        <div className="portfolio-form-step-container-right">
        <label>Sub-category*</label>
            <CustomSelect
              placeholder="select sub-category"
              name="subCategory"
              value={subCategory || ""}
              multiple={true}
              options={getSubCategories(service)}
              onChange={(e) => handleLocalStateForStep(e,true,"subCategory")}
            />
            <span>
              <RiArrowDownSLine />
            </span>
        </div>
      </div>
      {/* Address-1 and Address-2 */}
      <div className="portfolio-form-step-container">
        <div id="street-address" className="portfolio-form-step-container-left">
        <InputField
          label="Street Address 1*"
          value={streetAddress1 || ""}
          name="streetAddress1"
          onChange={(e) => handleLocalStateForStep(e)}
        />
        
        <InputField
          label="Street Address 2"
          value={streetAddress2 || ""}
          name="streetAddress2"
          onChange={(e) => handleLocalStateForStep(e)}
        />
        </div>
      </div>

      {/* Province and Postal Code */}
      <div className="portfolio-form-step-container">
        <div className="portfolio-form-step-container-left">
        <label>Province*</label>
        <CustomSelect
          placeholder="select province"
          label="Province*"
          options={regions[country]?.Provinces || []}
          value={province || ""}
          onChange={(e) => handleLocalStateForStep(e,false,"province")}
        />
        <span>
          <RiArrowDownSLine />
        </span>
        </div>
        <div className="portfolio-form-step-container-right">
        <InputField
          label="Postal Code*"
          value={postalCode || ""}
          name="postalCode"
          onChange={(e) => handleLocalStateForStep(e)}
          />
        </div>
      </div>
      {/* Country and Title */}
      <div className="portfolio-form-step-container">
        <div className="portfolio-form-step-container-left">
        <label>Country*</label>
        <CustomSelect
          placeholder="select country"
          label="Country*"
          options={Object.keys(countryCodes).map((country) => countryCodes[country].name)}
          value={country || ""}
          onChange={(e) => handleLocalStateForStep(e,false,"country")}
        />
        <span>
          <RiArrowDownSLine />
        </span>
        </div>
        <div className="portfolio-form-step-container-right">
        <label>What is your role in the company*</label>
        <CustomSelect
          placeholder="select role"
          label="What is your role in the company*"
          options={["owner", "manager", "other"]}
          value={title || ""}
          onChange={(e) => handleLocalStateForStep(e,false,"title")}
        />
        <span>
          <RiArrowDownSLine />
        </span>
        </div>
      </div>

      <div className="portfolio-form-step-container">
        <div className="portfolio-form-step-2-container6-left">
          <label htmlFor="BusinessDescription">Business Description*</label>
          <textarea
            name="businessDescription"
            id="BusinessDescription"
            value={businessDescription || ""}
            onChange={(e) => handleLocalStateForStep(e)}
            rows={4}
          ></textarea>
        </div>
      </div>

      {/* Social Media Handles Section */}
        <SocialMediaHandles
        socialMedia={socialMedia} // Pass the existing socialMedia state
        handleLocalStateForStep={handleLocalStateForStep} // Pass state handler
        socialMediaOptions={socialMediaOptions} // Pass options
        />
    </div>
  );
};

export default PortfolioFormStep2;

