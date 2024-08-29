import React, { useState } from 'react';
import './FAQ.css';


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "What is TechNeeds?", answer: "TechNeeds is a platform that provides technology solutions and support for various needs." },
        { question: "How can I contact support?", answer: "You can contact support via our contact form or email us at support@techneeds.com." },
        { question: "What services do you offer?", answer: "We offer a range of services including tech support, consulting, and hardware solutions." },
        { question: "Where is TechNeeds located?", answer: "TechNeeds is based in the heart of Silicon Valley, California." },
        { question: "Can I track my support request?", answer: "Yes, you can track your support request through our online portal." },
        { question: "Do you offer international support?", answer: "Yes, we provide support services to clients globally." },
        { question: "How can I request a quote?", answer: "You can request a quote by filling out the form on our website or contacting our sales team directly." },
        { question: "What is your refund policy?", answer: "We offer a 30-day refund policy for most of our services. Please check our terms and conditions for more details." }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
};

export default Faq;
