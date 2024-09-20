import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const PricingSection = () => {
  // State to control animation trigger
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Define the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Set the isInView state to true when the section is in view
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is in view
      }
    );

    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row h-2/3 lg:h-[700px] items-center justify-center bg-gray-100 p-5"
    >
      {/* Blue Block */}
      <motion.div
        initial={{ x: '100%' }} // Start off-screen (to the right)
        animate={isInView ? { x: 0 } : {}} // Trigger animation when in view
        transition={{ duration: 1 }} // Control the duration of the slide
        className="relative w-full lg:w-3/4 bg-gray-900 text-white lg:p-20 p-12  lg:h-[400px] rounded-3xl lg:flex lg:items-center z-10 overflow-hidden lg:mt-auto"
        style={{ height: 'auto' }}
      >
        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with invisible text and slide up
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and slide when in view
          transition={{ duration: 1, delay: 1 }} // Delay text animation by 1s
          className="w-full lg:w-1/2" // Full width on mobile, 50% width on desktop
        >
          <h2 className="text-3xl font-bold mb-4">Make Money, Risk-Free</h2>
          <p className="mb-6">You pay for fulfillment only when you make a sale.</p>

          {/* Profit Calculation */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span>You sell a t-shirt</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>You pay for its production</span>
              <span>$12</span>
            </div>
            <div className="border-t border-gray-500 my-2"></div>
            <div className="flex justify-between text-green-400 font-bold">
              <span>Your profit</span>
              <span>$18</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }} // Button hover effect
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Start Selling
          </motion.button>

          <p className="mt-4 text-xs text-gray-300">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </motion.div>
      </motion.div>

      {/* Image (Positioned over the card) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start with image out of view
        animate={isInView ? { opacity: 1, x: 0 } : {}} // Fade in and slide in when in view
        transition={{ duration: 1, delay: 0.3 }} // Delay image animation slightly
        className="lg:flex hidden absolute lg:right-[130px] lg:top-[80px] z-20 lg:w-2/6 lg:h-[600px]"
      >
        <img
          src="https://placehold.co/400x600"
          alt="Woman watering money plant"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </motion.div>
    </section>
  );
};

export default PricingSection;