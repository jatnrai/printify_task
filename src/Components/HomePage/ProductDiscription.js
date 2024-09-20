import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductSection = () => {
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
    <section className="flex flex-col md:flex-row items-center justify-center py-10 bg-gray-50" ref={ref}>

{/* add some photo here to make it look good  */}
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 p-5 text-center md:text-left"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl font-bold mb-4">Easily add your design to a wide range of products</h2>
        <p className="text-gray-600 mb-6">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="#" className="text-green-500 hover:underline">All products →</a>
      </motion.div>
    </section>
  );
};

export default ProductSection;
