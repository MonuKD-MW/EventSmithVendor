import React, { useState } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoMailSharp, IoLocationSharp, IoLogoInstagram } from 'react-icons/io5';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineFacebook } from 'react-icons/md';
import '../../style/ContactForm.css';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { set } from 'react-hook-form';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        selectedOption: ''
    });
    const [showIcon,setShowIcon] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
    }

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
                    <div className="contact-info-item info-address">
                        <IoLocationSharp className="contact-info-icon" />
                        <span>
                            132 lorem ipsum dolor sit, <br />
                            City name 011111 Country name
                        </span>
                    </div>
                </div>
                <div className="contact-info-socials">
                    <a href="#" className="contact-social-icon">
                        <FaFacebookF/>
                    </a>
                    <a href="#" className="contact-social-icon">
                        <IoLogoInstagram />
                    </a>
                </div>
                <div className="small-circle"/>
                <div className="big-circle"/>
            </div>
            <div className="contact-form-fields">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="form-group">
                        <div className="text-input-wrapper">
                            <div className="label-con">
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <input
                                id='firstName'
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="text-input-wrapper">
                            <div className="label-con">
                                <label htmlFor="firstName">Last Name</label>
                            </div>
                            <input
                                id='lastName'
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="text-input-wrapper">
                            <div className="label-con">
                                <label htmlFor="email">Email</label>
                            </div>
                            <input
                                id='email'
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="text-input-wrapper">
                            <div className="label-con">
                                <label htmlFor="phone">Phone</label>
                            </div>
                            <input
                                id='phone'
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group-select">
                        <label className='main-select-label'>Select Subject?</label>
                        <div className="radio-group-con">
                            {['General Inquiry', 'Support', 'Feedback', 'Others'].map((subject, index) => (
                                <div className="radio-group" key={subject} >
                                    <div className="radio-input-wrapper ">
                                        <input
                                            id={subject}
                                            type="radio"
                                            name="subject"
                                            value={subject}
                                            onChange={handleRadioChange}
                                            onClick={()=>setShowIcon(subject)}
                                        />
                                        <div className={`radio-icon-con ${showIcon === subject && 'radio-icon-con-no-bg'}` }>
                                            {showIcon === subject && <IoIosCheckmarkCircle />}
                                        </div>
                                    </div>
                                    
                                    <label htmlFor={subject} onClick={()=>setShowIcon(subject)}>{subject}</label>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                    <div className="form-group-text-area">
                        <div className="text-input-wrapper">
                            <div className="textarea-label-con">
                                <label htmlFor="message">Message</label>
                            </div>
                            <textarea
                                id='message'
                                name="message"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="submit-button" >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
