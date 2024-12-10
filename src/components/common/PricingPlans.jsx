import React from 'react';
import { pricingData } from '../../utils/BecomeAVendorStaticData';
import PricingPlanTile from './PricingPlanTile';
import '../../style/PricingPlans.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import ToolTip from './ToolTip';

const PricingPlans = () => {
  const { packages } = pricingData;

  return (
    <div className="pricing-plan-container">
      <div className="pricing-plan-grid">
        <div className="pricing-column static-header">
          <div className="blank-head"></div>  
          <div className="header-item description-head semibold-head">
            Description 
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'This is my description tooltip'}
            />
          </div>

          <div className="header-item same-size-head semibold-head">
            Price per month
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Price per month tooltip'}
            />
          </div>

          <div className="header-item same-size-head semibold-head">
            Price for 6 months
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Price for 6 months tooltip'}
            />
          </div>

          <div className="header-item same-size-head feature-head">Included Features</div>

          <div className="header-item same-size-head">
            Personal website-like profile
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Personal profile tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Search Engine Optimization (SEO) - improves your visibility across search engines like Google
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'SEO tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Event bookings (or leads) through EventSmith
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Event bookings tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Image uploads
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Image uploads tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Video uploads
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Video uploads tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            1 Primary Event Type (Weddings, Corporate Events or Social Events) Make yourself discoverable across other event types for additional $10/month.
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Primary Event Type tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            1 Service & service sub-category (for example, Venues, Photography) Make yourself discoverable across other service categories for additional $10/month.
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Service category tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Commitment
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Commitment tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Metrics & Dashboard
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Metrics & Dashboard tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Exclusive and powerful AI Features
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'AI Features tooltip'}
            />
          </div>

          <div className="header-item same-size-head">
            Priority Customer Support
            <ToolTip 
              icon={IoInformationCircleOutline} 
              message={'Customer Support tooltip'}
            />
          </div>

          <div className="header-item same-size-head same-size-head-blank" aria-hidden="true"></div>

        </div>
        {packages.map((pkg, index) => (
          <PricingPlanTile key={index} data={pkg} isRecommended={pkg.recommended} isCommingSoon={pkg.isCommingSoon} />
        ))}
      </div>
    </div>
  )
};

export default PricingPlans;