import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateStep1, validateStep2 } from '../regex/index';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/features/signupSlice'; 
import validateField from '../regex/validateField';
const useSignup = () => {
  
 const dispatch = useDispatch(); 
  const vendorData = useSelector((state)=> state.signup);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleValidation = (label, value) => {
    const error = validateField(label, value);
    console.log('[Error]',errors)
    setErrors(prevErrors => ({
      ...prevErrors,
      [label]: error
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name==='confirmPassword'){
      if(vendorData.password !== value){
        setErrors(prevErrors => ({
          ...prevErrors,
          confirmPassword: "Password doesn't Match"
        }));
      }
    }
    dispatch(signup({
      ...vendorData,
      [name]: value,
    }));
  };
  const handleNext = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    
    let valid = false;
    console.log('[usesigup]', vendorData);

    if (step === 1) {
      //new
          //here i have to run handleValidation for every step-1 element
          // List of labels for Step 1
          const labels = ['firstName', 'lastName', 'emailId', 'phone'];

          // Run validation for each field
          labels.forEach((label) => {
            handleValidation(label, vendorData[label]);
          });

          // Check if errors object has any issues
          if (Object.keys(errors).length > 0) {
            console.log('[Error keys]', errors);

            const hasErrors = Object.entries(errors).some(
              ([key, value]) => value !== '' // Look for non-empty error messages
            );

            valid = !hasErrors; // valid is false if there are errors
            console.log('[valid]:', valid);
          }

      if (valid) {
        //old
          // hit the api for initiate token 
          localStorage.setItem('vendorData', JSON.stringify(vendorData));
          console.log("useSignUp line 40 vendorData is ",vendorData)
        //new
          //here i have to run handleValidation for every step-1 element
          


      }
    }
    // if (step === 2) {
    //   valid = validateStep2(vendorData);
    // }

    if (valid) {
      setStep(step + 1);
    }
    console.log(vendorData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2(vendorData)) {
      console.log("Registration Data: ", vendorData);
      dispatch(signup(vendorData)); 
      // api auth/registration
      navigate('/');
    }
  };

  const getStepClass = (stepIndex) => {
    if (stepIndex < step) return "completed";
    if (stepIndex === step) return "current";
    return "upcoming";
  };

  const handleResendOTP = () => {
    console.log("Resend OTP triggered");
  };
  console.log(vendorData)
  return {
    step,
    setStep, 
    errors,
    handleInputChange,
    handleNext,
    handleSubmit,
    getStepClass,
    handleResendOTP,
    handleValidation,
    vendorData,
  };
};

export default useSignup;
