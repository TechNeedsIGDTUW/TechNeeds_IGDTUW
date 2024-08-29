import React, { useState } from 'react';
import './homepage.css' ;
import './mobileview.css';
import Image1 from '../../assets/logo.png';
import rocket from "../../assets/rocket.png";
import TriangleAnimation from "./TriangleAnimation";
import animation from "../../assets/animation.json";
import Lottie from 'lottie-react';
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";
import ML from "../../assets/ML.png";
import Web from "../../assets/WEB.jpeg";
import Java from "../../assets/JAVA.jpeg";
import AR from "../../assets/ar.png";
import C from "../../assets/C.png";
import app from "../../assets/app.jpg";
import Glimpse from "../../assets/Glimpse.png";


const courses = [
  { title: 'Web Development', instructor: 'Vidhusi Aggarwal', image: Web, backgroundColor: '#bfffd4' },
  { title: 'App Development', instructor: 'Someone Famous', image: app, backgroundColor: '#f6d8ff' },
  { title: 'DSA in C/C++', instructor: 'Shefali', image: C, backgroundColor: '#ffe8c9' },
  { title: 'Machine Learning', instructor: 'Sripriya Aggarwal', image: ML, backgroundColor: '#ffecf4' },
  { title: 'AR/VR Mentorship', instructor: 'Snighdha', image: AR, backgroundColor: '#d4f5ff' },
  { title: 'DSA in Java', instructor: 'Tavleen Kaur', image: Java, backgroundColor: '#fffcdc' }
];

function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coursesPerPage = 3;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentCourses = courses.slice(currentIndex * coursesPerPage, (currentIndex + 1) * coursesPerPage);

  return (
    <>
      <TriangleAnimation />
      <div id="home">
        <div className="hero-content">
          <div className="Upgrade">
            <h2>Upgrade Yourself!</h2>
            <p className="para">
              At TechNeeds, we’re passionate about technology and committed to empowering individuals with knowledge. Our community serves as a vibrant hub for tech enthusiasts, from beginners to experts, offering a comprehensive destination for all things tech.
            </p>
            <div className="home-btn">
              <button type="button" id="Know"><a href="#about">Know more</a></button>
              <button type="button" id="Get"><a href="#Mentorship">Get Started</a></button>
            </div>
          </div>
          <div className="hero-img">
            <img src={Image1} className="left-pic" alt="TechNeeds logo" />
          </div>
        </div>
        
        <div id="about" className="about-section">
          <div className="lottie-animation">
            <Lottie animationData={animation} loop={false} />
          </div>
          <div className="about-content-container">
            <div className="about-content">
              <h2>About Us</h2>
              <p>IGDTUW Students' first Choice</p>
            </div>
            <div className="box">
              <div className="box1">
                <div className="box11">
                  <img src={about1} alt="Trained Mentees" />
                  <div className="box-cont">
                    <h2>600+</h2>
                    <p>Trained Mentee</p>
                  </div>
                </div>
                <div className="box12">
                  <img src={about2} alt="Professional Mentors" />
                  <div className="box-cont">
                    <h2>10+</h2>
                    <p>Professional Mentors</p>
                  </div>
                </div>
              </div>
              <div className="box2">
                <div className="box21">
                  <img src={about3} alt="Mentorship Cohorts" />
                  <div className="box-cont">
                    <h2>7+</h2>
                    <p>Mentorship Cohorts</p>
                  </div>
                </div>
                <div className="box22">
                  <img src={about4} alt="Amazing Events" />
                  <div className="box-cont">
                    <h2>10+</h2>
                    <p>Amazing Events</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              <div className="about-1">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <h2>Our Mission :</h2>
                <p>To be the go-to resource for anyone seeking to understand, explore, and stay updated on the ever-evolving world of technology.</p>
              </div>
              <div className="about-2">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <h2>What We Offer :</h2>
                <ul className="about-list">
                  <li className='about-li'><img src={rocket} alt="rocket" />&nbsp;In-Depth Insights</li>
                  <li className='about-li'><img src={rocket} alt="rocket" />&nbsp;Educational Content</li>
                  <li className='about-li'><img src={rocket} alt="rocket" />&nbsp;Community Engagement</li>
                  <li className='about-li'><img src={rocket} alt="rocket" />&nbsp;Hackathons</li>
                  <li className='about-li'><img src={rocket} alt="rocket" />&nbsp;Speaker Sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="Mentorship">
          <div className="Course">
            <h2>Our Mentorship Cohorts</h2>
            <div className="courses-container">
              <div className="courses-wrapper">
                {currentCourses.map((course, index) => (
                  <div
                    key={index}
                    className="course-card"
                    style={{ backgroundColor: course.backgroundColor }}
                  >
                    <div className="course-img">
                      <img src={course.image} alt={`${course.title} Image`} className="icon" />
                    </div>
                    <div className="course-content">
                      <h2>{course.title}</h2>
                      <p>By {course.instructor}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-button left" onClick={handlePrev}>&#9664;</button>
              <button className="carousel-button right" onClick={handleNext}>&#9654;</button>
            </div>
            <div className="know-more-btn">
              <button type="button" id="KnowMore"><a href="#about">Know More</a></button>
            </div>
          </div>
        </div>

        <div id="Glimpse">
        <h2>Glimpse</h2>
        <img src={Glimpse} alt="Glimpse" />
        </div>

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
      </div>
    </>
  );
}

export default Homepage;
