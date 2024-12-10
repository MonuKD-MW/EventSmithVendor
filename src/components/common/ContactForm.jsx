import React, { useState } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoMailSharp, IoLocationSharp, IoLogoInstagram } from 'react-icons/io5';
import { MdOutlineFacebook } from 'react-icons/md';
import '../../style/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        selectedOption: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRadioChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            selectedOption: e.target.value
        }));
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form-info">
                <div className="contact-info-header">
                    <h2>Contact Information</h2>
                </div>
                <div className="contact-info-details">
                    <div className="contact-info-item">
                        <BiSolidPhoneCall className="contact-info-icon" />
                        <span>+1012 3456 789</span>
                    </div>
                    <div className="contact-info-item">
                        <IoMailSharp className="contact-info-icon" />
                        <span>demo@gmail.com</span>
                    </div>
                    <div className="contact-info-item">
                        <IoLocationSharp className="contact-info-icon" />
                        <span>
                            132 lorem ipsum dolor sit, <br />
                            City name 011111 Country name
                        </span>
                    </div>
                </div>
                <div className="contact-info-socials">
                    <a href="#" className="social-icon">
                        <MdOutlineFacebook />
                    </a>
                    <a href="#" className="social-icon">
                        <IoLogoInstagram />
                    </a>
                </div>
            </div>
            <div className="contact-form-fields">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Select Subject</label>
                        <div className="radio-group">
                            {['General Inquiry', 'Support', 'Feedback', 'Others'].map((subject, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="selectedOption"
                                        value={subject}
                                        onChange={handleRadioChange}
                                    />
                                    {subject}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
