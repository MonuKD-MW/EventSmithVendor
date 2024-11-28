
import { GoTriangleDown,GoTriangleRight } from "react-icons/go";
import React, { useState } from "react";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import InputField from "../common/InputField";

const SocialMediaHandles = ({ socialMedia, handleLocalStateForStep, socialMediaOptions }) => {
// !toggle feature
  const [showSocialMedia, setShowSocialMedia] = useState(true);

  const toggleSocialMedia = () => {
    setShowSocialMedia(!showSocialMedia);
  };

  const handleAddSocialHandle = () => {
    const updatedHandles = [
      ...socialMedia,
      { socialMediaHandle: "", pageLink: "" },
    ];
    handleLocalStateForStep({
      target: { name: "socialMedia", value: updatedHandles },
    });
  };

  // const handleRemoveSocialHandle = (index) => {
  //   const updatedHandles = socialMedia.filter((_, idx) => idx !== index);
  //   handleLocalStateForStep({
  //     target: { name: "socialMedia", value: updatedHandles },
  //   });
  // };

  const handleInputChange = (index, field, value) => {
    const updatedHandles = socialMedia.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    handleLocalStateForStep({
      target: { name: "socialMedia", value: updatedHandles },
    });
  };

  return (
    <div className="social-media-container">
      <div className="social-media-header-container get-form-responsive-width">
        <h3 onClick={toggleSocialMedia} className="social-media-header"><span>{showSocialMedia ? <GoTriangleDown /> : <GoTriangleRight />}</span> Social Media Handles</h3>
      </div>
      {showSocialMedia && (
        <>
          {socialMedia.map((item, index) => (
            <div id='social-media-container-width' key={index} className="portfolio-form-step-container">
              <div  className="portfolio-form-step-container-left">
              <SelectInput
                label="Social Media Handles*"
                name={`socialMediaHandles-${index}`}
                value={item.socialMediaHandle}
                options={socialMediaOptions}
                onChange={(e) => handleInputChange(index, "socialMediaHandle", e.target.value)}
              />
              </div>
              <div className="portfolio-form-step-container-right">
              <InputField
                label="Page Link*"
                name={`pageLink-${index}`}
                value={item.pageLink}
                onChange={(e) => handleInputChange(index, "pageLink", e.target.value)}
              />
              </div>
              {/* 
              //! for now we don't need remove feature
              <button
                type="button"
                className="remove-handle-btn"
                onClick={() => handleRemoveSocialHandle(index)}
              >
                Remove
              </button> */}
            </div>
          ))}
          <div className="social-media-handle-button-container get-form-responsive-width">
          <button
            type="button"
            className="sadd-handle-btn"
            onClick={handleAddSocialHandle}
          >
            <span>+</span>
            Add More Social Handle
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SocialMediaHandles;
