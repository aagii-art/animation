export const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/img/galaxy.jpg"
        alt=""
        style={{ height: "100vh", width: "100vw" }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "100px",
          width: "100px",
        }}
      >
        <img
          src="/img/sun.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
