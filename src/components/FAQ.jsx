import React, { useState } from "react";
import { faqData } from "./faqData";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const FAQ = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2>FAQs related to Bus Tickets Booking</h2>

            {/* Tabs */}
            <div className="faq-tabs">
                {Object.keys(faqData).map((key) => (
                    <button
                        key={key}
                        className={`faq-tab ${activeTab === key ? "active" : ""}`}
                        onClick={() => setActiveTab(key)}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </div>

            {/* FAQ Items */}
            <div className="faq-list">
                {faqData[activeTab].map((question, index) => (
                    <div
                        key={index}
                        className="faq-item"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {question}
                            <FaChevronDown
                                className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                            />
                        </div>

                        {openIndex === index && (
                            <div className="faq-answer">
                                This is a placeholder answer. You can add custom text here for
                                each question.
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
