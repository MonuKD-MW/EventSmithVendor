import React, { useState } from 'react';
import '../../style/ToolTip.css';

const ToolTip = ({ icon: Icon, message, iconSize = 14 }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="simple-tooltip-container">
      <div
        className="simple-tooltip-icon"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Icon size={iconSize} />
      </div>
      {isVisible && (
        <div className="simple-tooltip-content">
          {message}
        </div>
      )}
    </div>
  );
};

export default ToolTip;

