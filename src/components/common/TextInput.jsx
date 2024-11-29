
const TextInput = ({ label, value, name, onChange }) => {
  return (
    <div id='text-area-input-step-2'className="portfolio-form-step-2-container1-right text-area-input-step-2">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};
export default TextInput;
