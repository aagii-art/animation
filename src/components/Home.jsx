import { Planet } from "./Planet";

 const solarSystem = [
  {
    name: "Mercury",
    orbit: "250px",
    planetSize: "15px",
    orbitPeriod: "8.8s",
    rotationPeriod: "5.86s",
    imageUrl: "/img/mercury.png",
  },
  {
    name: "Venus",
    orbit: "300px",
    orbitPeriod: "22.5s",
    planetSize: "20px",
    imageUrl: "img/venus.png",
    rotationPeriod: "24.3s",
  },
  {
    name: "Earth",
    orbit: "350px",
    orbitPeriod: "36.5s",
    planetSize: "23px",
    imageUrl: "img/earth.png",
    rotationPeriod: "1s",
  },
  {
    name: "Mars",
    orbit: "400px",
    orbitPeriod: "68.7s",
    planetSize: "17px",
    imageUrl: "img/mars.png",
    rotationPeriod: "1.025s",
  },
  {
    name: "Jupiter",
    orbit: "450px",
    orbitPeriod: "118.6s",
    planetSize: "45px",
    imageUrl: "img/jupiter.png",
    rotationPeriod: "0.41s",
  },
  {
    name: "Saturn",
    orbit: "500px",
    orbitPeriod: "294.6s",
    planetSize: "40px",
    imageUrl: "img/saturn.png",
    rotationPeriod: "0.445s",
  },
  {
    name: "Uranus",
    orbit: "550px",
    orbitPeriod: "840s",
    planetSize: "35px",
    imageUrl: "img/uranus.png",
    rotationPeriod: "0.717s",
  },
  {
    name: "Neptune",
    orbit: "650px",
    orbitPeriod: "1648s",
    planetSize: "33px",
    imageUrl: "img/neptune.png",
    rotationPeriod: "0.671s",
  },
];

export const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/img/galaxy.jpg"
        alt=""
        style={{ height: "100vh", width: "100vw" }}
      />

      <img
        src="/img/sun.png"
        alt=""
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          width: "200px",
          height: "200px",
        }}
      />

      {solarSystem.map((v) => {
        return (
          <Planet
            width={v.orbit}
            height={v.orbit}
            src={v.imageUrl}
            planetSize={v.planetSize}
            orbitPeriod={v.orbitPeriod}
            rotationPeriod={v.rotationPeriod}
          />
        );
      })}
    </div>
  );
};
