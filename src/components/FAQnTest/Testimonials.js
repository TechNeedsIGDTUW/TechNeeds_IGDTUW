import React from 'react';
import './Testimonials.css';

// Sample testimonial data
const testimonials = [
    {
        name: "Vidushi Agarwal ",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
        feedback: "TechNeeds has been a game-changer for my tech needs. Highly recommended!"
    },
    {
        name: "Khushi Pushkar",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
        feedback: "The support team is incredibly responsive and helpful. Great experience!"
    },
    {
        name: "Chahal Jain ",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
        feedback: "Excellent service with fast turnaround times. I will definitely use TechNeeds again."
    },
    {
        name: "Shweta Sharma ",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
        feedback: "TechNeeds helped me solve complex problems quickly and efficiently. Fantastic service!"
    },
    {
        name: "Anam",
        image: "https://via.placeholder.com/100", // Replace with actual image URL
        feedback: "I am very satisfied with the solutions provided. TechNeeds is my go-to for tech support."
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-section">
            <h2 className="testimonials-heading">What Our Users Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <div className="testimonial-content">
                            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                            <p className="testimonial-author">- {testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
