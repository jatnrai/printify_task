import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StoreConnectionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 1.3 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Connect your store
      </motion.h2>
      <motion.p
        className="text-gray-600 text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Printify easily integrates with major e-commerce platforms and marketplaces
      </motion.p>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 gap-6 relative"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Store Platforms Logos */}
        {["Shopify", "Etsy", "API", "WooCommerce", "Wix", "Squarespace", "And more"].map((store, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 h-28 w-28 flex items-center justify-center hover:scale-110 transition-all"
            whileHover={{ scale: 1.1 }}
            variants={scaleUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="text-lg font-bold text-gray-700">{store}</span>
          </motion.div>
        ))}

        {/* Central Icon */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white shadow-lg rounded-full p-6 h-28 w-28 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          variants={scaleUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="text-2xl">🎉</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StoreConnectionSection;
