import React from "react";
import "../../style/WhySignCard.css"; // Import the CSS file
import bulb from '../../assets/become-vendor/sixMonthSignup/bulb.png'
const WhySignCard = ({
  icon,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <div className={`why-sign-card ${className}`}>
      <div className="why-sign-card__icon-wrapper">
        <img className="why-sign-card__icon" src={icon} />
      </div>
      <h3 className={`why-sign-card__title ${titleClassName}`}>{title}</h3>
      <p
        className={`why-sign-card__description ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default WhySignCard;
