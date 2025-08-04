import React, { useRef } from "react";
import VertexShader from "../shaders/VertexShader.glsl?raw";
import FragmentShader from "../shaders/FragmentShader.glsl?raw";
import { useAspect, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const texture = useTexture("/image.png");

  const isMobile = typeof window !== "undefined" && window.innerWidth < 599;
  const scaleValue = isMobile ? 0.3 : 0.5;
  const scale = useAspect(texture.image.width, texture.image.height, scaleValue);

  const meshRef = useRef(null)

  useFrame(({clock})=>{
    let time = clock.elapsedTime;
    meshRef.current.material.uniforms.uTime.value = time
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        uniforms={{ uTexture: { value: texture },uTime : {value : 0} }}
        vertexShader={VertexShader}
        fragmentShader={FragmentShader}
        // wireframe={true}
        side={2}
      />
      {/* <meshNormalMaterial/> */}
    </mesh>
  );
};

export default Scene;
