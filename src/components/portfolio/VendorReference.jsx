import { useState } from "react";
import InputField from "../common/InputField";
import SelectInput from "../common/SelectInput";
import { countryCodes } from "../../staticData.json";

export default function VendorReference({referenceData,index,handleChange}){
    const {referenceBusinessName,areaCode,phone,referenceWebsite,address,postalCode} = referenceData;
    const [isOpen,setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
	return (
        <div className="vendore-reference-container">
            {/* //Todo add chevron icon */}
            <div className="reference-toggle-head" onClick={handleToggle}>{`Reference ${index+1}` } </div>
            {isOpen && (
            <div className="reference-form-container">
                <div className="reference-form-row">
                    <InputField
                    name="referenceBusinessName"
                    label={`Business/client reference name ${index+1}`}
                    value={referenceBusinessName}
                    onChange={(e)=>handleChange(e,index)}
                    />
                    <div className="form-group">
                        <label>Area Code</label>
                        <select
                            name="areaCode"
                            value={areaCode}
                            onChange={(e) => handleChange(e, index)}
                            className="form-control"
                        >
                            <option value="">Select Area Code</option>
                            {countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.code} ({country.name})
                                </option>
                            ))}
                        </select>
                    </div>
                    <InputField
                    name="phone"
                    label="Phone"
                    value={phone}
                    onChange={(e)=>handleChange(e,index)}
                    />
                </div>
                <div className="reference-form-row">
                    <InputField
                    name="referenceWebsite"
                    label="Reference Website"
                    value={referenceWebsite}
                    onChange={(e)=>handleChange(e,index)}
                    />
                </div>
                <div className="reference-form-row">
                    <InputField
                    name="address"
                    label="Address"
                    value={address}
                    onChange={(e)=>handleChange(e,index)}
                    />
                    <InputField
                    name="postalCode"
                    label="Postal Code"
                    value={postalCode}
                    onChange={(e)=>handleChange(e,index)}
                    />
                </div>
                <hr />
            </div>
            )}
        </div>
    )
}
