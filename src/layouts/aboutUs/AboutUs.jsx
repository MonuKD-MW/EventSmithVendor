import React from 'react';
import MainHeader from '../../components/common/Header';
import MainFooter from '../../components/common/MainFooter';
// import { Button } from '../common/Button';
import aboutBanner from '../../../public/aboutBanner.jpeg';
import WhySignCard from '../../components/becomeAVendor/WhySignCard';
import {marketingBenefitsArray} from '../../utils/AboutUsStaticData'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="about-us-container">
            {/* Header */}
            <MainHeader />

            <section className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div
                        className="hero-background"
                        style={{ backgroundImage: `url(${aboutBanner})` }}
                    >
                        <div className="hero-overlay"></div>
                    </div>
                    <div className="hero-content">
                        <h1 className="hero-title">About Us</h1>
                        <p className="hero-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <button type='button' className="contact-us-button">
                            Contact Us
                        </button>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="who-we-are-section">
                    <span className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing.</span>
                    <h1 className="section-title">Who We Are?</h1>
                    
                        <p className="content-paragraph">
                        It is a long established fact that a reader will be distracted by the readable content ofhva page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
                        </p>
                        <p className="content-paragraph">
                        It is a long established fact that a reader will be distracted by the readable content ofhva page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
                        </p>
                        <p className="content-paragraph">
                        It is a long established fact that a reader will be distracted by the readable content ofhva page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
                        </p>
                    
                </section>

                {/* Why Us Over Others */}
                <section className="why-us-section">
                    <h1 className="section-title">Why Us - Over Others?</h1>
                    <div className="cards-container">
                        {marketingBenefitsArray.map((benefit) => (
                            <div className="about-us-card-con">
                                <img src={benefit.img} alt="" className='card-img' />
                                <h2 className="card-title">{benefit.title}</h2>
                                <p className="card-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vision and Mission */}
                <section className="vision-mission-section">
                    <div className="vision-container">
                        <h1 className="section-title">Our Vision</h1>
                        <p className="content-paragraph">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
                        </p>
                    </div>
                    <div className="mission-container">
                        <h1 className="section-title">Our Mission</h1>
                        <p className="content-paragraph">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
                        </p>
                    </div>
                </section>
            </section>

            {/* Footer */}
            <MainFooter />
        </div>
    );
};

export default AboutUs;
