

import { useDispatch } from "react-redux";
import FileInput from "../common/FileInput";
import TextInput from "../common/TextInput";
import InputField from '../common/InputField';
import SelectInput from "../common/SelectInput";
import SocialMediaHandles from "./SocialMediaHandles"; // Import SocialMediaHandles Component
import { socialMedia as socialMediaOptions } from "../../staticData.json"; // Import options

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
  handleFileChange,
  serviceOptions,
  countryCodes,
  regions,
  ServiceData,
  multiple,
  handleLocalStateForStep,
}) => {
  const dispatch = useDispatch();

  const getSubCategories = (service) => {
    const categories = service ? ServiceData[service] : {};
    return categories
      ? Object.keys(categories).map((key) => ({
          value: key,
          label: key,
        }))
      : [];
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
          <SelectInput
            label="Service*"
            name="service"
            value={service || ""}
            options={serviceOptions}
            onChange={(e) => handleLocalStateForStep(e)}
          />
        </div>
        <div className="portfolio-form-step-container-right">
          <SelectInput
            label="Sub-category*"
            name="subCategory"
            value={subCategory || ""}
            options={getSubCategories(service)}
            onChange={(e) => handleLocalStateForStep(e)}
            multiple={multiple}
          />
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
        <SelectInput
          label="Province*"
          name="province"
          value={province || ""}
          options={regions[country]?.Provinces || []}
          onChange={(e) => handleLocalStateForStep(e)}
          disabled={!country}
        />
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
        <SelectInput
          label="Country*"
          name="country"
          value={country || ""}
          options={countryCodes}
          onChange={(e) => handleLocalStateForStep(e)}
        />
        </div>
        <div className="portfolio-form-step-container-right">
        <SelectInput
          label="What is your role in the company*"
          name="title"
          value={title || ""}
          options={["owner", "manager", "other"]}
          onChange={(e) => handleLocalStateForStep(e)}
        />
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

