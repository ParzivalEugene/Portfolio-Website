import React, {Suspense} from 'react';
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const ShapeAnimation = ({shape}) => {
  return (
    <Canvas>
      <OrbitControls autoRotate={true} enableZoom={false} />
      <ambientLight intensivity={0.5}/>
      <pointLight intensivity={0.4} position={[10, 10, 15]}/>
      <Suspense fallback={null}>
        <mesh position={[0, 0, 0]}>
          {shape === "torus-knot" ?
            <torusKnotGeometry args={[1.5, 0.5, 300, 60]}/> :
            shape === "sphere" ?
              <sphereGeometry args={[2.8, 32, 32]} /> :
              shape === "torus" ?
                <torusGeometry args={[2., 0.4, 32, 32]} /> :
                null
          }
          <meshNormalMaterial wireframe={true} flatShading={false}/>
        </mesh>
      </Suspense>
    </Canvas>
  );
};

export default ShapeAnimation;