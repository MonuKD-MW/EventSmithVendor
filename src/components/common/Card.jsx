import React from 'react';
import '../../style/Card.css'; // Import the CSS file

const Card = ({ title, desc, icon, className = '', titleClassName = '', descClassName = '' }) => {
  return (
    <div className={`card-container ${className}`}>
      <div className="card-content">
        <div className="card-icon">
          <img src={icon} alt="Idea Icon" className={`card-icon-img ${titleClassName}`} />
        </div>
        <div className={`card-title ${titleClassName}`}>{title}</div>
        <div className={`card-description ${descClassName}`}>{desc}</div>
      </div>
    </div>
  );
};

export default Card;
