import { Planet } from "@/components/Planet";
import { SolarSystem } from "@/components/data";

   const Home = () => {
      return (
        <div >
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
              width: "100px",
              height: "100px",
            }}
          />
    
          {SolarSystem.map((v) => {
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
    
export default Home;
