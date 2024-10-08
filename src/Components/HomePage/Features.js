import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src="	https://printify.com/pfh/assets/legacy/higher-profits.svg"
                alt="Higher Profits"
                className="h-20 w-20 mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold">Higher Profits</h3>
            <p className="mt-2 text-gray-600">
              We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
                alt="Robust Scaling"
                className="h-20 w-20 mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold">Robust Scaling</h3>
            <p className="mt-2 text-gray-600">
              Easily handle peak holiday seasons with our wide network of partners and automatic routing functionality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src="https://printify.com/pfh/assets/legacy/best-selection.svg"
                alt="Best Selection"
                className="h-20 w-20 mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold">Best Selection</h3>
            <p className="mt-2 text-gray-600">
              With 900+ products and top quality brands, you can choose the best products for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;