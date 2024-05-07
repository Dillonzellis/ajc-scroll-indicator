// import { useScrollDebounce } from "../hooks/useScrollDebounce";
import { useScrollPercentage } from "../hooks/useScrollPercentage";

export const ScrollIndicator = () => {
  // const scrollPercentage = useScrollDebounce();
  const scrollPercentage = useScrollPercentage();

  // Blue
  // const startColor = `rgba(0, 79, 255, 1)`;
  // const endColor = `rgba(7, 56, 152, ${(scrollPercentage / 100 + 0.7).toFixed(2)})`;

  // Black
  // const startColor = `rgba(49, 49, 50, 1)`;
  // const endColor = `rgba(33, 33, 38, ${(scrollPercentage / 100 + 0.7).toFixed(2)})`;

  // Red
  const startColor = `rgba(214, 87, 69, 1)`;
  const endColor = `rgba(232, 101, 82, ${(scrollPercentage / 100 + 0.7).toFixed(2)})`;

  const borderRadius = scrollPercentage >= 99.9 ? "0" : "0 2px 2px 0";

  return (
    <div className="scroll-container">
      <div
        className="scroll-indicator"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={scrollPercentage}
        aria-label="bar that shows page scroll progress"
        style={{
          width: `${scrollPercentage}%`,
          background: `linear-gradient(to right, ${startColor}, ${endColor})`,
          borderRadius: borderRadius,
        }}
      />
    </div>
  );
};
