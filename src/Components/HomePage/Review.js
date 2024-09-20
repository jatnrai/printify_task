import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsCarousel = () => {
  const controls = useAnimation();

  const slideControls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1.5 } });
      slideControls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: i * 0.5 }
      }));
    }
  }, [controls, slideControls, inView]);

  const testimonials = [
    {
      name: 'Robert A. Voltaire',
      role: 'Store link',
      rating: 5,
      testimonial: `Printify has been an incredible service for us musicians unable to keep large amounts of inventory.`,
      img: 'https://via.placeholder.com/100',
    },
    {
      name: 'Quinten Barney',
      role: 'Etsy Merchant',
      rating: 5,
      testimonial: `We chose Printify because of their offerings as well as their incredibly low prices.`,
      img: 'https://via.placeholder.com/100',
    },
    {
      name: 'Nikki',
      role: 'Store link',
      rating: 5,
      testimonial: `Printify has been amazing as we grow our business.`,
      img: 'https://via.placeholder.com/100',
    },
    {
      name: 'Jenna Doe',
      role: 'Store Owner',
      rating: 4,
      testimonial: `Fantastic service with good customer support.`,
      img: 'https://via.placeholder.com/100',
    },
    {
      name: 'Michael Smith',
      role: 'Business Owner',
      rating: 5,
      testimonial: `Efficient and affordable solutions.`,
      img: 'https://via.placeholder.com/100',
    },
    {
      name: 'Lisa Parker',
      role: 'E-commerce Merchant',
      rating: 4,
      testimonial: `A great platform for small businesses.`,
      img: 'https://via.placeholder.com/100',
    },
    {
      name: 'Tom Brown',
      role: 'Entrepreneur',
      rating: 5,
      testimonial: `Printify helped my business expand!`,
      img: 'https://via.placeholder.com/100',
    },
  ];

  const renderStars = (rating) => (
    Array(rating).fill().map((_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ))
  );

  return (
    <section className="py-20 bg-gray-50">
      {/* Section Heading */}
      <div ref={ref} className="text-center mb-10">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          Trusted by over 8M sellers around the world
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ delay: 0.1 }}
        >
          Whether you are just getting started or run an enterprise-level e-commerce business, we ensure a positive merchant experience.
        </motion.p>
      </div>

      {/* Testimonials Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation]}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: 120}}
              animate={slideControls} 
              custom={index}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-green-600">{testimonial.role}</p>
                  <div className="flex mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.testimonial}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsCarousel;
