import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import PromotionalBanner from "./components/PromotionalBanner";
import StatisticsCard from "./components/StatisticsCard";

export default function App() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <div className="p-4 space-y-8">
        <PromotionalBanner />
        <StatisticsCard />
      </div>
    </>
  );
}
