import React from 'react';
const Pagination = ({ stepNames, currentStep, getStepClass }) => {

  const portfolioTitles = {
    "1": ["Create Business Portfolio", null],
    "2": [
      "Create Your Business Portfolio",
      "A Business Portfolio maps directly to your business and acts like your own personal website"
    ],
    "3": [
      "Your References",
      "Worked with any businesses lately? Provide us with at least 2 references who would vouch for your awesomeness!"
    ],
    "4": [
      "Membership",
      "Now commit with us with a membership package!"
    ]
  };

  return (
    <div className="portfolio-title-container-pagination get-form-responsive-width">
      <div className="portfolio-title-container">
        {currentStep === 1 && (
          <h4 className="portfolio-title">Let&apos;s get started</h4>
        ) }
        <h1 className="portfolio-title-2">{portfolioTitles[currentStep][0]}</h1>
        {portfolioTitles[currentStep][1] && (
          <p className="portfolio-title-description">
            {portfolioTitles[currentStep][1]}
          </p>
        )}
      </div>
      <div className="portfolio-pagination">
        {stepNames.map((name, index) => (
          <React.Fragment key={index}>
            <div className={`pagination-step ${getStepClass(index + 1, currentStep)}`}>
              {name}
            </div>
            {/* Add a horizontal line between steps if it's not the last step */}
            {index < stepNames.length - 1 && (
              <div className="pagination-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
