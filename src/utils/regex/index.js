
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePostalCode = (postalCode) => {
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return regex.test(postalCode);
  };
  export const validatePhoneNumber = (phone) => {
    const regex = /^[2-9]\d{9}$/; // Ensuring it's a valid 10-digit number starting with 2-9
    return regex.test(phone);
  };
  
  export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  
  export const validateStep1 = (vendorData,setError) => {
    
    const newErrors = {};
    if (!vendorData.firstName.trim()) newErrors.firstName = "First name is required.";
    else if (vendorData.firstName.length < 2) newErrors.firstName = "First name must be at least 2 characters.";

    if (!vendorData.lastName.trim()) newErrors.lastName = "Last name is required.";
    else if (vendorData.lastName.length < 2) newErrors.lastName = "Last name must be at least 2 characters.";

    if (!validateEmail(vendorData.emailId)) newErrors.emailId = "Invalid email format.";
    if (!validatePhoneNumber(vendorData.phone)) newErrors.phone = "Invalid phone is this  number format.";
   
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  export const validateStep2 = (vendorData,setError) => {
    const newErrors = {};
    if (!validatePassword(vendorData.password)) newErrors.password = "Invalid password format.";
    if (vendorData.password !== vendorData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };