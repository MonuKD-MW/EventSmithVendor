// Todo remove unnecessary code and improve readability
import { createSlice } from '@reduxjs/toolkit';
const vendorDataSlice = createSlice({
	name: "vendorData",
	initialState: {
		firstName: "John",
		lastName: "Doe",
		email: "some-email2@gmail.com", 
		password: "", 
		areaCode: "+1", 
		phone: "001-002-0235",
		country: "Canada",
		city: "Toronto", 
		postalCode: "M12 T34", 
		businessLogoUrl: "s3://uploadUrl-folder-path", 
		businessName: "Mr. John Doe", 
		service: "", 
		subCategory: [], 
		streetAddress1: "123 Main St E", 
		streetAddress2: "", 
		province: "Ontario", 
		businessDescription: "", 
		title: "Owner", // from contactInfo (title of Owner)
		socialMedia: [{
			socialMediaHandle: "Facebook",
			pageLink: "Link goes here"
		}], // Not provided in the response
		references: [
			{
				"referenceBusinessName": "Tech Solutions Inc.",
				"areaCode": "123",
				"phone": "456-7890",
				"referenceWebsite": "https://www.techsolutions.com",
				"address": "123 Innovation Drive, Tech City",
				"postalCode": "T1C 4H2"
			},
			{
				"referenceBusinessName": "Green Energy Co.",
				"areaCode": "987",
				"phone": "654-3210",
				"referenceWebsite": "https://www.greenenergy.com",
				"address": "456 Sustainability Lane, Eco Town",
				"postalCode": "E7G 5B3"
			}
		]
		// Not provided in the response
	},
	reducers: {
		updateVendorData: (state, action) => {
			Object.assign(state, action.payload);
		}
	}

});

export const { updateVendorData } = vendorDataSlice.actions;
export default vendorDataSlice.reducer;

