export const Bimage = ({ src, width, height, bijgenTime }) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        position: "absolute",
        left: "50%",
        animation: `bijgen ${bijgenTime} infinite linear`
      }}
    >

    <img
      src={src}
      alt=""
      style={{
        width: "100%",
        height: "100%",
      }}
    />

    </div>
  );
};
