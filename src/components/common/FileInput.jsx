import React from 'react'
import { RiPencilLine } from 'react-icons/ri'

const FileInput = ({ label, name, onChange }) => {
  const triggerFileSelect = () => {
    document.getElementById(name).click()
  }

  return (
    <div className="file-input-container">
      <input
        type="file"
        name={name}
        id={name}
        className="file-input"
        onChange={onChange}
        accept="image/*"
      />
      <button onClick={triggerFileSelect} className="file-input-button">
        {label}
        <RiPencilLine className="pencil-icon" />
      </button>
    </div>
  )
}

export default FileInput

