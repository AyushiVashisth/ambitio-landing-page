import React, { useEffect, useState } from "react";
import markGroup from "../assets/Mask-group.png";

const AnimatedNumber = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    const duration = 2000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(end % 1 === 0 ? Math.round(start) : start.toFixed(2));
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}{suffix}</>;
};

const StatisticsCard = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 z-0">
        <img
          src={markGroup}
          alt="Wave Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
      </div>

      <div className="absolute inset-0 bg-red-100 bg-opacity-80 z-0"></div>

      <div className="relative z-10 p-6 md:p-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          We let <span className="text-red-600">our numbers</span> do the
          talking
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-lg max-w-3xl mx-auto">
          Our users love us and we know you will too! Explore our products.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="text-center w-32 md:w-40">
            <div className="text-red-600 text-4xl md:text-5xl font-bold mb-2">
              <AnimatedNumber value="98.2" suffix="%" />
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              got into their Target Program
            </div>
          </div>

          <div className="text-center w-32 md:w-40">
            <div className="text-red-600 text-4xl md:text-5xl font-bold mb-2">
              <AnimatedNumber value="4.96" />
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Google Rating
            </div>
          </div>

          <div className="text-center w-32 md:w-40">
            <div className="text-red-600 text-4xl md:text-5xl font-bold mb-2">
              <AnimatedNumber value="5000" suffix="+" />
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Students Assisted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
