import React, {Suspense, useCallback, useMemo, useRef} from 'react';
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import * as THREE from "three";
import CircleImg from "../assets/circle.png"
import {OrbitControls} from "@react-three/drei";

function CameraControls() {
  const {
    camera,
    gl: {domElement}
  } = useThree();

  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update())

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate={true}
      autoRotateSpeed={-0.2}
    />
  );
}

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, CircleImg);
  const bufferRef = useRef();

  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

  const count = 100
  const sep = 3
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])

  useFrame(() => {
    t += 15

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={"#3c3c3c"}
        size={0.5}
        sizeAttenuation={true}
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

const BackgroundAnimation = () => {
  return (
    <Canvas
      colorManagement={false}
      camera={{position: [15, 60, 0], fov: 75}}
    >
      <Suspense fallback={null}>
        <Points />
        <CameraControls />
      </Suspense>
    </Canvas>
  );
};

export default BackgroundAnimation;