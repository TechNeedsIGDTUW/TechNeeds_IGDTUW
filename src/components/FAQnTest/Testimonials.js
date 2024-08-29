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
        <div id="Test">
        <h2>What Our Students Say</h2>
          <div className="testimonials">
            <div className="testimonial1">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                  <h3 className="student-name">Kanika Chauhan</h3>
                </div>
                <p className="student-review">
                "TechNeeds has been my go-to platform for staying updated on the latest tech trends. The community is incredibly supportive, and the content is top-notch. It’s a must-visit for anyone passionate about technology!"
                </p>
              </div>
            </div>
            <div className="testimonial2">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                  <h3 className="student-name">Khushi Sharma</h3>
                </div>
                <p className="student-review">
                "The learning experience at TechNeeds is exceptional. The senior mentors offer detailed explanations and practical advice that make complex tech topics easier to grasp. The supportive community is an added bonus."
                </p>
              </div>
            </div>
            <div className="testimonial3">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                  <h3 className="student-name">Komal Maurya</h3>
                </div>
                <p className="student-review">
                "TechNeeds offers a wealth of information and a supportive community. The senior-led mentorship has been particularly valuable, providing me with expert advice and helping me navigate my tech career path."
                </p>
              </div>
            </div>
            <div className="testimonial4">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                  <h3 className="student-name">Chahal Jain</h3>
                </div>
                <p className="student-review">
                "Joining TechNeeds has been a rewarding experience. The community is welcoming, and the seniors are genuinely invested in helping you succeed. The courses are comprehensive and cater to all levels of expertise."
                </p>
              </div>
            </div>
            <div className="testimonial5">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★☆</span>
                  </div>
                  <h3 className="student-name">Mansi Solanki</h3>
                </div>
                <p className="student-review">
                "I've been using TechNeeds for several months now, and it's been an excellent resource. The courses are well-structured, and the senior mentors are always ready to help with any questions."
                </p>
              </div>
            </div>
            <div className="testimonial6">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                  <h3 className="student-name">Sagar</h3>
                </div>
                <p className="student-review">
                "I love how TechNeeds brings together tech enthusiasts from all backgrounds. The guidance from senior members has been instrumental in helping me understand complex topics and apply them effectively."
                </p>
              </div>
            </div>
            <div className="testimonial7">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★☆</span>
                  </div>
                  <h3 className="student-name">Julie</h3>
                </div>
                <p className="student-review">
                "TechNeeds stands out for its dedication to empowering individuals with tech knowledge. The senior mentors are approachable and provide valuable insights that have helped me advance in my tech career."
                </p>
              </div>
            </div>
            <div className="testimonial8">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-stars">
                    <span>★★★★☆</span>
                  </div>
                  <h3 className="student-name">Tanishka Manwal</h3>
                </div>
                <p className="student-review">
                "Joining TechNeeds was one of the best decisions I made for my tech career. The seniors offer insights that you can't get from textbooks alone, and the community vibe is both supportive and motivating."
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Testimonials;
