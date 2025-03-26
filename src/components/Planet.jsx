import { Bimage } from "./Bimage";

export const Planet = ({
  src,
  height,
  width,
  planetSize,
  orbitPeriod,
  rotationPeriod,
}) => {
  return (
    <div
      style={{
        border: "2px dashed white",
        borderRadius: "50%",
        width: width,
        height: height,
        position: "absolute",
        left: "50%",
        top: "50%",
        animationName: "planet",
        animationDuration: orbitPeriod,
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
      }}
    >
      <Bimage src={src} height={planetSize} width={planetSize} bijgenTime={rotationPeriod} />
    </div>
  );
};
