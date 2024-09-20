import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Objective() {
      // Set up the intersection observer to detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1,    // Trigger when 10% of the section is visible
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  return (
<>
<section className="flex flex-col md:flex-row items-center justify-center py-10 bg-gray-50" ref={ref}>

          {/* Product Images */}
          <motion.div
        className="w-full md:w-1/2 p-5"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-3 gap-4">
          {/* Example Products */}
          <div className="relative bg-white shadow-lg rounded-lg h-32 w-32 flex items-center justify-center">
            <span className="absolute inset-0 bg-green-500 rounded-full opacity-20"></span>
            <div className="z-10">+ Mug</div>
          </div>
          <div className="relative bg-white shadow-lg rounded-lg h-32 w-32 flex items-center justify-center">
            <span className="absolute inset-0 bg-green-500 rounded-full opacity-20"></span>
            <div className="z-10">+ Cap</div>
          </div>
          <div className="relative bg-white shadow-lg rounded-lg h-32 w-32 flex items-center justify-center">
            <span className="absolute inset-0 bg-green-500 rounded-full opacity-20"></span>
            <div className="z-10">+ Phone Case</div>
          </div>
        </div>
      </motion.div>
      </section>
</> 
 )
}
