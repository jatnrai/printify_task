import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1, type: 'spring', stiffness: 60, delay: 0.3 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 1.3 } }
  };

  return (
    <section className="overflow-hidden bg-orange-200 p-5 max-w-[100vw]" ref={ref}>
      <div className="relative flex flex-col lg:flex-row items-center justify-start py-20 max-w-6xl mx-auto">

        <motion.div className="lg:w-2/5 w-full z-10">
          <div className="bg-orange-500 lg:h-[40rem] h-[20rem] lg:rounded-3xl rounded-t-xl">
            <img src="https://printify.com/pfh/media/clothes-CMPWJ6JG.webp" alt="Products Images" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          className="relative lg:absolute lg:bottom-12 lg:right-0 bg-white w-full lg:rounded-2xl rounded-b-xl lg:my-8 text-center p-5 md:text-left lg:pt-[5%] lg:pe-[7%] lg:pb-[12.8%] lg:ps-[50%]"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="lg:text-3xl text-2xl font-bold mb-4">Easily add your design to a wide range of products</h2>
            <p className="text-gray-600 mb-6">
              With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <a href="#" className="text-orange-500 hover:underline">All products →</a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductSection;