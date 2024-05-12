import { useFrame, useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FC, useRef } from 'react';
import * as THREE from 'three';

export const Model: FC = () => {
  const modelRef = useRef<THREE.Group | null>(null);
  const atamMesh = useRef<THREE.Mesh | null>(null);
  const kamarMesh = useRef<THREE.Mesh | null>(null);
  const { nodes, materials } = useLoader(GLTFLoader, '/models/shams7_5.gltf');

  // Rotation Animation //
  // useFrame(() => {
  //   if (!atamMesh.current || !kamarMesh.current) return;
  //   atamMesh.current.rotation.z += 0.01;
  //   kamarMesh.current.rotation.z += 0.01;
  // });

  let shouldStopAnimation = false;
  const targetPosition = new THREE.Vector3(0, 0.2, 0);
  const smoothedPosition = new THREE.Vector3(0, 5, 5);
  const easingFactor = 0.1;

  useFrame((state) => {
    if (!modelRef.current) return;
    const t = state.clock.getElapsedTime();

    if (!shouldStopAnimation) {
      if (t <= 1) {
        // Animate the initial descent for the first 1 seconds
        smoothedPosition.y = 5 - t * 2.5;
        smoothedPosition.z = 5 - t * 2.5;
      } else {
        const newY = 5 - Math.sin((t - 2) / 2) * 10;
        const newZ = 5 - Math.sin((t - 2) / 2) * 10;

        if (Math.abs(newY) < 0.2 && Math.abs(newZ) < 0) {
          shouldStopAnimation = true;
        } else {
          smoothedPosition.lerp(targetPosition, easingFactor);
        }
      }
    } else {
      //Continue here if the animation is stopped //

      smoothedPosition.lerp(targetPosition, easingFactor);
    }

    modelRef.current.position.copy(smoothedPosition);

    // Anim 1 //
    // modelRef.current.rotation.set(
    //   Math.sin(t / 4) / 8,
    //   Math.cos(t / 3) / 4,
    //   0.15 + Math.sin(t / 2) / 8
    // );

    // Anim My Tests //
    // modelRef.current.position.y = (0.5 - Math.sin(t)) / 10;
    // modelRef.current.position.x = (0.5 + Math.sin(t)) / 10;
    // modelRef.current.position.y = (0.5 + Math.sin(t)) / 10;
    // modelRef.current.rotation.x += (0.5 + Math.sin(t)) / 10;
    // modelRef.current.rotation.y += (0.5 + Math.sin(t)) / 10;
    // modelRef.current.scale.set(
    //   1 + Math.sin(t * 5) / 8,
    //   1 + Math.sin(t * 5) / 8,
    //   1 + Math.sin(t * 5) / 8
    // );
    // modelRef.current.position.y = 0;
    // modelRef.current.position.z = (2 + Math.sin(t * 5)) / 10;
  });

  return (
    <group dispose={null} ref={modelRef}>
      <mesh>
        <group position={[0, 0, -0.049]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            ref={atamMesh}
            geometry={nodes.atam007.geometry}
            material={materials['fallback Material']}
            scale={0.001}
          >
            <meshStandardMaterial
              attach='material'
              color={'#148AFF'}
              roughness={1}
              metalness={1}
            />
          </mesh>
        </group>
        <group position={[0, -0.155, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            ref={kamarMesh}
            geometry={nodes.camar007.geometry}
            material={materials['fallback Material']}
            scale={0.001}
          >
            <meshStandardMaterial
              attach='material'
              color={'#FFCD38'}
              roughness={1}
              metalness={1}
            />
          </mesh>
        </group>
      </mesh>
    </group>
  );
};

useGLTF.preload('/models/shams7_5.gltf');
