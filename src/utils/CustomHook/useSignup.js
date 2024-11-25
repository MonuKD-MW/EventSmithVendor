import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateStep1, validateStep2 } from '../regex/index';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/features/signupSlice'; 

const useSignup = () => {
  
 const dispatch = useDispatch(); 
  const vendorData = useSelector((state)=> state.signup);
  const [step, setStep] = useState(1);
  const [error, setError] = useState({});
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(signup({
      ...vendorData,
      [name]: value,
    }));
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    
    let valid = false;
    console.log('usesigup', vendorData);

    if (step === 1) {
      valid = validateStep1(vendorData, setError);
      if (valid) {
        // hit the api for initiate token 
        localStorage.setItem('vendorData', JSON.stringify(vendorData));
        console.log("useSignUp line 40 vendorData is ",vendorData)

      }
    }
    if (step === 2) {
      valid = validateStep2(vendorData, setError);
    }

    if (valid) {
      setStep(step + 1);
    }
    console.log(vendorData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2(vendorData, setError)) {
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
    error,
    passwordToggle,
    setPasswordToggle,
    confirmPasswordToggle,
    setConfirmPasswordToggle,
    editPhone,
    setEditPhone,
    editEmail,
    setEditEmail,
    handleInputChange,
    handleNext,
    handleSubmit,
    getStepClass,
    handleResendOTP,
    vendorData,
  };
};

export default useSignup;
