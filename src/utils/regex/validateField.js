export default (label, value) => {
  switch (label.toLowerCase()) {
    case "firstname":
    case "lastname":
    case 'businessname':
      if (!value.trim()) return "This field is required.";
      if (!/^[a-zA-Z\s]+$/.test(value)) return "Only letters are allowed.";
      break;

    case "emailid":
    case 'email':
      if (!value.trim()) return "This field is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
      break;

    case "phone":
      if (!value.trim()) return "This field is required.";
      if (!/^\d{10}$/.test(value)) return "Enter a valid 10-digit phone number.";
      break;

    case "password":
    case "confirmpassword":
      if (!value.trim()) return "This field is required.";
      if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
        return "invalid password format";
      }
      break;

    case "postalcode":
      if (!value.trim()) return "This field is required.";
      if (!/^\d{5}(-\d{4})?$/.test(value)) return "Enter a valid postal code.";
      break;

    case "address":
    case 'streetaddress1':
      if (!value.trim()) return "This field is required.";
      if (!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(value)) return "Enter a valid address.";
      break;

    default:
      break;
  }
  return ""; // No error
};


  