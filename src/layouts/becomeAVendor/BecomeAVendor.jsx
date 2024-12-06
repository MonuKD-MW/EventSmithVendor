import React from 'react';
import MainHeader from '../../components/common/Header';
import MainFooter from '../../components/common/MainFooter';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
// import PricingTable from './PricingTable';
import WhySignCard from '../../components/becomeAVendor/WhySignCard';
import Accordion, { AccordionItem, AccordionTrigger, AccordionContent, AccordionSubItem, AccordionSubTrigger, AccordionSubContent } from '../../components/common/Accordion';
import {features,faqs,pricingData,benefits} from '../../utils/BecomeAVendorStaticData'
import becomeVendorHeroImg from '../../assets/becomeAVendor.jpeg'
import './BecomeAVendor.css';
import PricingPlans from "../../components/common/PricingPlans";


import becomeVendor from '../../assets/becomeAVendor.jpeg'; // Adjust the image path as necessary

// Assuming features, benefits, faqs, and pricingData are imported or defined earlier

export default function BecomeAVendor() {
  return (
    <div className="become-a-vendor-container">
      <MainHeader forBecomeVendor={true} />
      <main className={"main-content"}>
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${becomeVendorHeroImg})` }}
        >
          <div className="container">
            <div className="grid">
              <div className="hero-text">
                <h1 className="hero-title">
                  Be part of a technology-edge marketplace
                </h1>
                <p className="hero-description">
                Want to run your business with data-driven numbers to build an analytical strategy?
                </p>
                <button className="btn-proceed">Proceed</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="container">
            <div className="features-header">
              <h1 className="section-title">
                Benefits of working with Eventsmith
              </h1>
              <span className="section-description">
                As an emerging market, Eventsmith is very honored to make you the most trusted service provider for your customers.
              </span>
            </div>
            <div className="features-grid">
              {features.map((feature, i) => (
                <Card key={i} title={feature.title} desc={feature.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <div className="pricing-section">
          <div className="pricing-header">
            <h1 className="pricing-title">
              Find the right plan for you
            </h1>
            <h4 className="pricing-subtitle">
              Lorem ipsum dolor sit amet ullam iusto repellat, voluptas at, totam quae modi ipsam.
            </h4>
          </div>
          {/* <PricingTable pricingData={pricingData} /> */}
          <PricingPlans/>
        </div>

        {/* Why Consider 6 Month Signup */}
        <section className="signup-section">
          <div className="signup-header">
            <h1 className="signup-title">
              Why consider 6 month signup?
            </h1>
            <span className="signup-description">
              Simple and honestly, because we want you to come and stay with us.
            </span>
          </div>
          <div className="signup-grid">
            {benefits.map((benefit, index) => (
              <WhySignCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-header">
            <h1 className="faq-title">
              Frequently asked questions
            </h1>
            <span className="faq-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga.
            </span>
          </div>
          <div className="faq-content">
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTrigger index={index}>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.subQuestions.map((subQuestion, subIndex) => (
                      <AccordionSubItem key={subIndex}>
                        <AccordionSubTrigger>{subQuestion.question}</AccordionSubTrigger>
                        <AccordionSubContent>{subQuestion.answer}</AccordionSubContent>
                      </AccordionSubItem>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
