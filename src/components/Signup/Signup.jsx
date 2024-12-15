import '../../style/Signup.css';
import React from 'react';
import SignupStep2 from './Signup-step2';
import SignupStep1 from './Signup-step1';
import useSignup from '../../utils/CustomHook/useSignup'; // Import the custom hook
import StepButton from '../common/StepButton';
import { Link } from 'react-router-dom'
function Signup() {
  // Use the hook here
  const
    {
      step,
      setStep,
      handleNext,
      handleSubmit,
      getStepClass,
      errors,
      handleValidation
    } = useSignup()

  const stepNames = ['Personal Information', 'Verification'];

  return (
    <div className='signup-container'>
      {/* Step Titles and Pagination */}
      <div className='signup-title-container'>
        <h4 className='signup-title-form'>{step === 1 ? "Let's get started" : "Almost there!"}</h4>
        <h3 className='signup-title-2'>Create your account</h3>
      </div>

      <div className="singup-pagination">
        {stepNames.map((name, index) => (
          <React.Fragment key={index}>
            <div className={`singup-pagination-step ${getStepClass(index + 1)}`}>
              {name}
            </div>
            {index < stepNames.length - 1 && <div className="singup-pagination-line"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <SignupStep1 handleValidation={handleValidation} errors={errors} />
      )}

      {/* Step 2 */}
      {step === 2 && (
        <SignupStep2 />
      )}


      <StepButton
        step={step}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
        setStep={setStep}
      />


      <div className='signup-footer'>
        <div className='signup-footer-text'>
          Already A Member? <span className='signup-footer-text-login'><Link to={'/'}>Login</Link></span>
        </div>

        <div className="vendor-login-container">
          <Link to={'/portfolio'}>
            <div className="vendor-login-text">Vendor Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
