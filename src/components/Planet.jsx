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
    <div className="orbit"
      style={{
        border: "1px dashed blue",
        borderRadius: "50%",
         width,
         height,
        position: "absolute",
        left: "50%",
        top: "50%",
        animation: `planet ${orbitPeriod} infinite linear`
      }}
    >
      <Bimage src={src} height={planetSize} width={planetSize} bijgenTime={rotationPeriod} />
    </div>
  );
};
