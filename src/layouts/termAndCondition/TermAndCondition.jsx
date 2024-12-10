import React from 'react';
import MainHeader from '../../components/common/Header';
import MainFooter from '../../components/common/MainFooter';
import './TermAndCondition.css';

const TermAndCondition = () => {
  return (
    <div className="term-and-condition-wrapper">
      <MainHeader />
      <main className="term-and-condition-main">
        <div className="page-address">Home / Terms of use</div>
        <section className="term-and-condition-section">
          <div className="term-and-condition-content">
            <div>
              <h1 className="term-and-condition-title">Terms of use</h1>
              <h2 className="term-and-condition-subtitle">What is Event smith we refer</h2>
              <p className="term-and-condition-paragraph">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </p>
            </div>
            <div>
              <h2 className="term-and-condition-subtitle">What is Event smith we refer</h2>
              <p className="term-and-condition-paragraph">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
};

export default TermAndCondition;
