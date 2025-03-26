export const Bimage = ({ src, width, height }) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
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
