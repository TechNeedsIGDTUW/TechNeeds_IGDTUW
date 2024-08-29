import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Back } from 'gsap';
import './triangleAnimation.css';  // Assuming the CSS is saved here



const TriangleAnimation = () => {
  useEffect(() => {
    // Define the animation timeline
    const tl = gsap.timeline();

    // Initialize the animation
    tl.set(".triangle", { scale: 0, transformOrigin: "center bottom" })
      .set(".header, .subheader", { opacity: 0 })
      .to(".triangle.tri-1", { scale: 1, duration: 1, ease: "back.out" })
      .to(".triangle.tri-2", { scale: 2, duration: 1, ease: "back.out" }, "-=0.5")
      .to(".triangle.tri-3", { scale: 3, duration: 1, ease: "back.out" }, "-=0.5")
      .to(".triangle.tri-4", { scale: 4.5, duration: 1, ease: "back.out" }, "-=0.5")
      .to(".triangle.tri-5", { scale: 6.5, duration: 1, ease: "back.out" }, "-=0.5")
      .to(".triangle.tri-6", { scale: 9, duration: 1, ease: "back.out" }, "-=0.5")
      .to(".triangle.tri-7", { scale: 15, duration: 1, ease: "back.out" }, "-=0.5")
      .to(".header", { opacity: 1, duration: 2 })
      .to(".subheader", { opacity: 1, duration: 2 }, "-=0.8");
  }, []);

  return (
    <div>
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160" id="background">
          <path className="tri-7 triangle" d="M2867 1970l-197-335c-25-42-67-63-110-63s-85 21-110 63l-196 335c-46 78 2 175 87 190h439c84-15 132-112 87-190z"/>
          <path className="tri-6 triangle" d="M2867 1970l-197-335c-25-42-67-63-110-63s-85 21-110 63l-196 335c-46 78 2 175 87 190h439c84-15 132-112 87-190z"/>
          <path className="tri-5 triangle" d="M2867 1970l-197-335c-25-42-67-63-110-63s-85 21-110 63l-196 335c-46 78 2 175 87 190h439c84-15 132-112 87-190z"/>
          <path className="tri-4 triangle" d="M2867 1970l-197-335c-25-42-67-63-110-63s-85 21-110 63l-196 335c-46 78 2 175 87 190h439c84-15 132-112 87-190z"/>
          <path className="tri-3 triangle" d="M2867 1970l-197-335c-25-42-67-63-110-63s-85 21-110 63l-196 335c-46 78 2 175 87 190h439c84-15 132-112 87-190z"/>
          <path className="tri-2 triangle" d="M2867 1970l-197-335c-25-42-67-63-110-63s-85 21-110 63l-196 335c-46 78 2 175 87 190h439c84-15 132-112 87-190z"/>
          <path className="tri-1 triangle" d="M2867 1970l-197-335c-25-42-67-63-110-63s-85 21-110 63l-196 335c-46 78 2 175 87 190h439c84-15 132-112 87-190z"/>
        </svg>
      </div>
    </div>
  );
};



export default TriangleAnimation;
