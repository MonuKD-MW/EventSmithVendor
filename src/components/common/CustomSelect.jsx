import React, { useState, useRef, useEffect } from 'react';
import '../../style/CustomSelect.css';
import { FaCheck } from "react-icons/fa6";
const CustomSelect = ({ 
  options, 
  multiple = false, 
  placeholder = "Select...",
  onChange,
  value,
  label,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    multiple ? (value || options || []) : (value || null)
  );
  const dropdownRef = useRef(null);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedOptions(multiple ? (value || []) : (value || null));
  }, [value, multiple]);

  const handleOptionClick = (option) => {
    if (disabled) return;

    if (multiple) {
      const updatedSelection = selectedOptions.includes(option)
        ? selectedOptions.filter(item => item !== option)
        : [...selectedOptions, option];
      setSelectedOptions(updatedSelection);
      onChange?.(updatedSelection);
    } else {
      setSelectedOptions(option);
      setIsOpen(false);
      onChange?.(option);
    }
  };

  const getDisplayValue = () => {
    if (!selectedOptions || (Array.isArray(selectedOptions) && !selectedOptions.length)) {
      return placeholder;
    }
    if (multiple) {
      return `${selectedOptions.length} selected`;
    }
    return selectedOptions;
  };

  const isSelected = (option) => {
    if (multiple) {
      return selectedOptions.includes(option);
    }
    return selectedOptions === option;
  };

  return (
    <div className={`custom-select ${disabled ? 'disabled' : ''}`} ref={dropdownRef}>
      {label && <label className="select-label">{label}</label>}
      <div 
        className={`select-header ${isOpen ? 'open' : ''}`} 
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {getDisplayValue()}
        
      </div>
      
      {isOpen && !disabled && (
        <div className="options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option ${isSelected(option) ? 'selected' : 'not-selected'}`}
              onClick={() => handleOptionClick(option)}
            >
              {isSelected(option) && <FaCheck className="checkmark" />}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

