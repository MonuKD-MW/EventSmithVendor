import { useState } from "react";
import InputField from "../common/InputField";
import SelectInput from "../common/SelectInput";
import { countryCodes } from "../../staticData.json";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";

export default function VendorReference({referenceData,index,handleChange}){
    const {referenceBusinessName,areaCode,phone,referenceWebsite,address,postalCode,relationship} = referenceData;
    const [isOpen,setIsOpen] = useState(true);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
	return (
        <div className="vendore-reference-container">
            <div className="reference-toggle-head reference-header-container">
                <h3 onClick={handleToggle} className="reference-header">
                    <span>{isOpen ? <GoTriangleDown /> : <GoTriangleRight />}</span>
                    Reference {index + 1}
                </h3>
            </div>
            {isOpen && (
            <div className="reference-form-container">
                <div id="reference-form-row-1" className=".reference-form-container-full-width">
                    <div className="reference-left">
                        <InputField
                        name="referenceBusinessName"
                        label={`Business/client reference name ${index+1}`}
                        value={referenceBusinessName}
                        onChange={(e)=>handleChange(e,index)}
                        />
                    </div>
                    
                    <div className="portfolio-form-step1-area-code portfolio-area-code">
                        <label>Area Code</label>
                        <select
                            name="areaCode"
                            value={areaCode}
                            onChange={(e) => handleChange(e, index)}
                            className="phone-area-code-select"
                            style={{ appearance: "none" }}
                        >
                            <option value="">Select Area Code</option>
                            {countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.code} ({country.name})
                                </option>
                            ))}
                        </select>
                        <span>
                            <RiArrowDownSLine />
                        </span>
                    </div>
                    <div className="reference-right">
                        <InputField
                        name="phone"
                        label="Phone"
                        value={phone}
                        onChange={(e)=>handleChange(e,index)}
                        />
                    </div>
                    
                </div>
                <div id="reference-form-row-2" className="reference-form-container-full-width">
                    <div className="portfolio-form-step-container-left">
                        <InputField
                        name="referenceWebsite"
                        label="Reference Website"
                        value={referenceWebsite}
                        onChange={(e)=>handleChange(e,index)}
                        />
                    </div>
                    <div className="portfolio-form-step-container-right">
                        <InputField
                        name="relationship"
                        label="Relationship"
                        value={relationship}
                        onChange={(e)=>handleChange(e,index)}
                        />
                    </div>
                </div>
                <div id="reference-form-row-3" className="reference-form-container-full-width">
                    <div className="portfolio-form-step-container-left">
                        <InputField
                        name="address"
                        label="Address"
                        value={address}
                        onChange={(e)=>handleChange(e,index)}
                        />
                    </div>
                    <div className="portfolio-form-step-container-right">   
                        <InputField
                        name="postalCode"
                        label="Postal Code"
                        value={postalCode}
                        onChange={(e)=>handleChange(e,index)}
                        />
                    </div>
                </div>
                
            </div>
            )}
        </div>
    )
}
