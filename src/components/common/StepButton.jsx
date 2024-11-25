import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../style/Stepbutton.css'
const StepButton = ({ step, handleNext, handleSubmit, setStep }) => {
  return (
    <div className="button-container">
      <button
        className={`back-button ${step !== 1 ? 'active' : ''}`}
        onClick={() => setStep(step - 1)}
        disabled={step === 1}
      >
        <FaArrowLeft /> Back
      </button>
      <button
        className={step === 2 ? "submit-button" : "next-button"}
        onClick={step === 2 ? handleSubmit : handleNext}
      >
        {step === 2 ? "Create Account" : <>Next <FaArrowRight /></>}
      </button>
    </div>
  );
};

export default StepButton;
