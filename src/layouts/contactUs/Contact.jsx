import React from 'react';
import MainHeader from '../../components/common/Header';
import MainFooter from '../../components/common/MainFooter';
import ContactForm from '../../components/common/ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <MainHeader />
            <section className="contact-section">
                <div className="contact-header">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-description">
                        Any question or remarks? Write us a message!
                    </p>
                </div>
                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
            </section>
            <MainFooter />
        </div>
    );
};

export default Contact;
