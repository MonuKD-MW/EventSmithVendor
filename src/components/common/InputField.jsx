import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { useState, useRef } from "react";
import '../../style/InputField.css'

const InputField = ({ label, type, name, value, onChange, required, readOnly=false,editable,isDisable=false }) => {
    
    const isPassword = label.toLowerCase() === 'password' || label.toLowerCase() === 'confirm password';
    const [toggleDisabled,setToggleDisabled] = useState(isDisable);
    const [passwordToggle,setPasswordToggle] = useState(false);
    const inputRef = useRef(null);

    const handlePencilClick = () => {
        setToggleDisabled(!toggleDisabled);
        if (toggleDisabled && inputRef.current) {
            setTimeout(() => {// use setTimeout so setToggleDisabled is called first and complete its execution
                inputRef.current.focus();
                inputRef.current.select();
            }, 0);
        }
    };

    return (
        <div className={`common-input-field ${toggleDisabled ? "disabled" : ""}`}>
            <label htmlFor={name}>{label}{required && '*'}</label>
            <div className="common-input-wrapper">
                <input
                    ref={inputRef}
                    type={isPassword ? (passwordToggle ? "text" : "password") : type}
                    name={name}
                    id={name}
                    onChange={onChange}
                    value={value}
                    required={required}
                    readOnly={readOnly}
                    disabled={toggleDisabled}
                />
                {isPassword && (
                    <span className="common-password-icon" onClick={() => setPasswordToggle(!passwordToggle)}>
                        {passwordToggle ?  <FaEye /> : <FaEyeSlash />}
                    </span>
                )}
                {editable && (
                    <span className="common-pencil-icon" onClick={handlePencilClick}><RiPencilLine/></span>
                )}
            </div>
        </div>
    );
};

export default InputField;