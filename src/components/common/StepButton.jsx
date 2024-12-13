import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../style/Stepbutton.css'
const StepButton = ({ step, handleNext, handleSubmit, setStep }) => {
  return (
    <div className="button-container">
      <button
        className={`signup-back-button ${step !== 1 ? 'active' : ''}`}
        onClick={() => setStep(step - 1)}
        disabled={step === 1}
      >
      <span id="btn-arrow-1"><FaArrowLeft /></span> Back
      </button>
      <button
        className={step === 2 ? "signup-submit-button" : "signup-next-button"}
        onClick={step === 2 ? handleSubmit : handleNext}
      >
        {step === 2 ? "Create Account" : <>Next <span id="btn-arrow-2"><FaArrowRight /></span></>}
      </button>
    </div>
  );
};

export default StepButton;
