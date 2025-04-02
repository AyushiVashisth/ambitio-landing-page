import React, { useState, useEffect, useRef } from "react";
import frame1 from "../assets/frame-1.png";
import frame2 from "../assets/frame-2.png";
import frame3 from "../assets/frame-3.png";
import kingLogo from "../assets/king-logo.png";

const ImageSlider = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(0.5);

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const animationRef1 = useRef(null);
  const animationRef2 = useRef(null);
  const animationRef3 = useRef(null);

  const [positions, setPositions] = useState({
    row1: 0,
    row2: 0,
    row3: 0,
  });

  const RedCrownLogo = () => (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden">
        <img
          src={kingLogo}
          alt="Red Crown Logo"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );

  const row1Items = [<img src={frame3} alt="Frame 3" key="r1-1" />];
  const row2Items = [<img src={frame1} alt="Frame 1" key="r2-1" />];
  const row3Items = [<img src={frame2} alt="Frame 2" key="r3-1" />];

  const itemWidth = 64;
  const itemGap = 16;
  const totalItemWidth = itemWidth + itemGap;

  const row1Width = row1Items.length * totalItemWidth;
  const row2Width = row2Items.length * totalItemWidth;
  const row3Width = row3Items.length * totalItemWidth;

  const animateRow = (rowRef, rowWidth, rowKey) => {
    if (!isPlaying || !rowRef.current) return;
    setPositions((prev) => {
      let newPos = prev[rowKey] + 0.5 * speed;
      if (newPos >= rowWidth) newPos = 0;
      return { ...prev, [rowKey]: newPos };
    });
    requestAnimationFrame(() => animateRow(rowRef, rowWidth, rowKey));
  };

  useEffect(() => {
    if (isPlaying) {
      animationRef1.current = requestAnimationFrame(() =>
        animateRow(row1Ref, row1Width, "row1")
      );
      animationRef2.current = requestAnimationFrame(() =>
        animateRow(row2Ref, row2Width, "row2")
      );
      animationRef3.current = requestAnimationFrame(() =>
        animateRow(row3Ref, row3Width, "row3")
      );
    }
    return () => {
      cancelAnimationFrame(animationRef1.current);
      cancelAnimationFrame(animationRef2.current);
      cancelAnimationFrame(animationRef3.current);
    };
  }, [isPlaying, speed]);

  return (
    <div className="relative w-full mx-auto overflow-hidden mt-24">
      <RedCrownLogo />
      <div className="absolute top-0 left-0 w-56 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-56 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="relative lg:h-64 md:h-48 h-32 overflow-hidden">
        <div
          ref={row1Ref}
          className="absolute top-1/6 transform -translate-y-1/2 flex gap-4 items-center px-4 w-full"
          style={{ transform: `translateX(-${positions.row1}px)` }}
        >
          {row1Items}
        </div>
        <div
          ref={row2Ref}
          className="absolute top-1/3 transform -translate-y-1/2 flex gap-4 items-center px-4 w-full"
          style={{ transform: `translateX(${positions.row2}px)` }}
        >
          {row2Items}
        </div>
        <div
          ref={row3Ref}
          className="absolute top-2/3 transform -translate-y-1/2 flex gap-4 items-center px-4 w-full"
          style={{ transform: `translateX(-${positions.row3}px)` }}
        >
          {row3Items}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
