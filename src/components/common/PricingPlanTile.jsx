import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Icons for check and cross
import '../../style/PricingPlanTile.css'; // Import the tile-specific CSS
import commingSoonGif from '../../assets/commingSoon.gif';
const PricingPlanTile = ({ data, isRecommended ,isCommingSoon}) => {
  const { type, name, description, monthlyPrice, sixMonthPrice, features } = data;

  return (
    <div className={`pricing-tile ${isRecommended ? 'recommended' : ''}`}>
      {isRecommended && <div className="recommended-banner"><span className='recommended-text'>RECOMMENDED</span></div>}
      <div className="pricing-tile-header">
        {isCommingSoon && (
          <div className="comming-soon-con ">
            <img src={commingSoonGif} alt="comming soon gif" />
          </div>
        )}
        <h3 className="package-type">{type}</h3>
        <h2 className="package-name">{name}</h2>
      </div>
      <p className="package-description">{description}</p>
      <div className="package-pricing">
            <p className="monthly-price">
             ${monthlyPrice}
            </p>
        </div>
        <div className="package-pricing">
            <p className="six-month-price">
            ${sixMonthPrice}
            </p>
      </div>
      <div className="pricing-tile-blank"></div>
      <ul className="features-list">
        {Object.entries(features).map(([feature, value], idx) => (
            <li key={idx} className={`feature-item ${value ? 'enabled' : 'disabled'}`}>
                {typeof value === 'boolean' ? (
                value ? 
                // <FaCheck className="icon" /> 
                "✔"
                : 
                // <FaTimes className="icon" />
                "-"
                ) : typeof value === 'string' && value.toLowerCase().includes('images') && data.name !== 'Personal Branding' ? (
                <>
                    {value} <br />
                    <span className="extra-info">Add additional 50 images at $5</span>
                </>
                ) : (
                value
                )}
            </li>
            ))}

      </ul>
      <div className="btn-container">
       <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default PricingPlanTile;
