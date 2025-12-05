import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Cube = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Spin the other way
      meshRef.current.rotation.y -= delta * 0.2;
    }
  });

  // BoxGeometry args: width, height, depth, widthSegments, heightSegments, depthSegments
  const geometry = useMemo(() => new THREE.BoxGeometry(3.5, 3.5, 3.5, 4, 4, 4), []);
  
  const size = 3.5;
  const divisions = 4;
  const color = "#B4AC97";
  const half = size / 2;

  return (
    <group ref={meshRef} rotation={[0.4, 0, 0]}>
      {/* GridHelpers for each face to avoid diagonal lines */}
      <gridHelper args={[size, divisions, color, color]} position={[0, half, 0]} />
      <gridHelper args={[size, divisions, color, color]} position={[0, -half, 0]} />
      <gridHelper args={[size, divisions, color, color]} position={[0, 0, half]} rotation={[Math.PI / 2, 0, 0]} />
      <gridHelper args={[size, divisions, color, color]} position={[0, 0, -half]} rotation={[Math.PI / 2, 0, 0]} />
      <gridHelper args={[size, divisions, color, color]} position={[half, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      <gridHelper args={[size, divisions, color, color]} position={[-half, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      
      {/* The dots at vertices */}
      <points geometry={geometry}>
        <pointsMaterial color="#B4AC97" size={0.15} sizeAttenuation={true} />
      </points>
    </group>
  );
};

const Cube3D = () => {
  return (
    <div style={{ width: '100%', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas camera={{ position: [0, 0, 11], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default Cube3D;
