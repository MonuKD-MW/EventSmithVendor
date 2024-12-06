import React from 'react';
import '../../style/Card.css'; // Import the CSS file
import TempPhoto from '../../assets/photo.png'
const Card = ({ title, desc, className = '', titleClassName = '', descClassName = '' }) => {
  return (
    <div className={`card-container ${className}`}>
      <div className="card-content">
        <div className="card-icon">
          <img src={TempPhoto} alt="Idea Icon" className={`card-icon-img ${titleClassName}`} />
        </div>
        <div className={`card-title ${titleClassName}`}>{title}</div>
        <div className={`card-description ${descClassName}`}>{desc}</div>
      </div>
    </div>
  );
};

export default Card;
