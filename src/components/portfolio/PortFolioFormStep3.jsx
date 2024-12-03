import VendorReference from "./VendorReference";

export default function PortFolioFormStep3({setLocalStateForStep,localStateForStep}){
    const {references} = localStateForStep;

    //!update methods
    const handleAddReference = () => {
        setLocalStateForStep({
            ...localStateForStep,
            references: [...references, {
				"referenceBusinessName": "",
				"areaCode": "",
				"phone": "",
				"referenceWebsite": "",
                "relationship": "",
				"address": "",
				"postalCode": ""
			}]
        })
    }
    const handleChange = (e,index) => {
        console.log("[for areaCode debugging]",e.target);
        const {name,value} = e.target;
        const updatedReferences = structuredClone(references);
        updatedReferences[index][name] = value;
        setLocalStateForStep({
            ...localStateForStep,
            references: updatedReferences
        })
    }
    const handleRemoveReference = () => {
        if(references.length > 2 ){
            const updatedReferences = references.slice(0,-1);
            setLocalStateForStep({
                ...localStateForStep,
                references: updatedReferences
            })
        }
    }
	return (
        <div id="reference-form-container-full-width" className="portfolio-form-step-3-container get-form-responsive-width">
            <div id="references-container">
                {references.map((referenceData,index) =>
                <VendorReference
                referenceData={referenceData}
                index={index}
                handleChange={handleChange}
                />)
                }
            </div>
            <div className="reference-add-button-container">
                <button className="" onClick={handleAddReference}><span>+</span> Add More References</button>
                {references.length > 2 && <button className="reference-add-button-container-button" onClick={handleRemoveReference}><span>-</span> Remove Reference</button>}
            </div>
            
        </div>

    )
}
