import "../index.css";

const PromotionalBanner = () => {
  return (
    <div className="p-6 md:p-12 w-full max-w-7xl mx-auto text-center space-y-6">
      <h2 className="font-bold mb-4 text-center text-3xl md:text-5xl lg:text-6xl leading-tight">
        Give the best shot <br />
        at your <span className="text-red-600">Dream University</span>
      </h2>

      <div className="text-gray-600 mb-6 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
        <p>
          Get expert help, personalised guidance, and all the support you need
          to
        </p>
        <p className="text-black font-semibold">
          increase your chances of success with Ambitio Elite.
        </p>
      </div>

      <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl text-lg md:text-xl font-semibold hover:bg-gray-800 transition-all">
        10x your chances with Ambitio
      </button>
    </div>
  );
};

export default PromotionalBanner;
