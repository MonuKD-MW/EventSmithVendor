import React from 'react';
import { pricingData } from '../../utils/BecomeAVendorStaticData';
import PricingPlanTile from './PricingPlanTile';
import '../../style/PricingPlans.css';
import { IoInformationCircleOutline } from "react-icons/io5";

const PricingPlans = () => {
  const { packages } = pricingData;

  return (
    <div className="pricing-plan-container">
      <div className="pricing-plan-grid">
        <div className="pricing-column static-header">
          <div className="blank-head"></div>  
          <div className="header-item description-head semibold-head">Description <IoInformationCircleOutline/></div>
          <div className="header-item same-size-head semibold-head">Price per month<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head semibold-head">Price for 6 months<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head feature-head">Included Features</div>
          <div className="header-item same-size-head">Personal website-like profile<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head">Search Engine Optimization (SEO) - improves your visibility across search engines like Google<span><IoInformationCircleOutline/></span></div>
          <div className="header-item same-size-head">Event bookings (or leads) through EventSmith<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head">Image uploads<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head">Video uploads<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head">1 Primary Event Type (Weddings, Corporate Events or Social Events) Make yourself discoverable across other event types for additional $10/month.<span><IoInformationCircleOutline/></span></div>
          <div className="header-item same-size-head">1 Service & service sub-category (for example, Venues, Photography) Make yourself discoverable across other service categories for additional $10/month. <span><IoInformationCircleOutline/></span></div>
          <div className="header-item same-size-head">Commitment<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head">Metrics & Dashboard<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head">Exclusive and powerful AI Features<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head">Priority Customer Support<IoInformationCircleOutline/></div>
          <div className="header-item same-size-head"></div>
        </div>
        {packages.map((pkg, index) => (
          <PricingPlanTile key={index} data={pkg} isRecommended={pkg.recommended} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

