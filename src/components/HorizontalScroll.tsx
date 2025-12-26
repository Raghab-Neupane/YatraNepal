import { useRef } from "react";

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="horizontal-scroll">
      <button onClick={scrollLeft}>&larr;</button>

      <div className="scroll-viewport" ref={sliderRef}>
        {children}
      </div>

      <button onClick={scrollRight}>&rarr;</button>
    </div>
  );
};

export default HorizontalScroll;
