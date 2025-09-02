import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <section style={{ position: "relative" }}>
      <Canvas
        flat
        shadows
        style={{ height: "100vh", width: "100%" }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Scene />
        <OrbitControls enableDamping={true}/>
      </Canvas>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          paddingBottom: "20px",
          fontSize: window.innerWidth < 599 ? "30px" : "60px",
          fontWeight: "bold",
          fontFamily : "sans-serif",
          pointerEvents : "none"
        }}
      >
        Happy Independence Day
      </div>
    </section>
  );
};

export default Experience;
