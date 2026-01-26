'use client';

import React, { useRef, useEffect, createContext, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Context for sharing interaction state
const InteractionContext = createContext<{
    isInteracting: React.MutableRefObject<boolean>;
    lastInteractionTime: React.MutableRefObject<number>;
} | null>(null);

// Product Model Component with smart auto-rotation
function ProductModel() {
    const meshRef = useRef<THREE.Group>(null);
    const context = useContext(InteractionContext);

    // Try to load the model, fallback to a simple geometry if it fails
    let model: { scene?: THREE.Group } = {};
    try {
        model = useGLTF('/assets/model/tray.glb');
    } catch (e) {
        console.log('GLTF not loaded, using fallback');
    }

    // Auto-rotation on model's Y-axis + floating animation
    useFrame((state, delta) => {
        if (meshRef.current && context) {
            // Check if enough time has passed since last interaction (0.5 seconds)
            const timeSinceInteraction = state.clock.getElapsedTime() - context.lastInteractionTime.current;
            const shouldRotate = !context.isInteracting.current && timeSinceInteraction > 0.5;

            if (shouldRotate) {
                // Rotate the model on its own Y-axis (turntable style)
                meshRef.current.rotation.y += delta * 0.5;
            }

            // Gentle floating animation
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    if (model.scene) {
        return (
            <group ref={meshRef} scale={2}>
                <primitive object={model.scene} />
            </group>
        );
    }

    // Fallback: Simple sphere with fruit colors
    return (
        <group ref={meshRef}>
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#F77F00"
                    roughness={0.4}
                    metalness={0.1}
                />
            </mesh>
            {/* Simple "stem" */}
            <mesh position={[0, 1.1, 0]}>
                <cylinderGeometry args={[0.05, 0.08, 0.3, 8]} />
                <meshStandardMaterial color="#2D6A4F" roughness={0.8} />
            </mesh>
            {/* Leaf */}
            <mesh position={[0.1, 1.2, 0]} rotation={[0, 0, 0.3]}>
                <planeGeometry args={[0.3, 0.15]} />
                <meshStandardMaterial color="#40916C" side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

// Component to handle OrbitControls interaction events
function ControlsHandler() {
    const context = useContext(InteractionContext);
    const { clock } = useThree();
    const controlsRef = useRef<any>(null);

    useEffect(() => {
        const controls = controlsRef.current;
        if (!controls || !context) return;

        const handleStart = () => {
            context.isInteracting.current = true;
        };

        const handleEnd = () => {
            context.isInteracting.current = false;
            context.lastInteractionTime.current = clock.getElapsedTime();
        };

        controls.addEventListener('start', handleStart);
        controls.addEventListener('end', handleEnd);

        return () => {
            controls.removeEventListener('start', handleStart);
            controls.removeEventListener('end', handleEnd);
        };
    }, [context, clock]);

    return (
        <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={8}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            enableDamping
            dampingFactor={0.05}
        />
    );
}

// Main Scene
function Scene() {
    const isInteracting = useRef(false);
    const lastInteractionTime = useRef(0);

    return (
        <InteractionContext.Provider value={{ isInteracting, lastInteractionTime }}>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />
            <directionalLight position={[-5, 3, -5]} intensity={0.3} color="#74C69D" />
            <pointLight position={[0, -2, 0]} intensity={0.2} color="#F77F00" />

            {/* Product */}
            <ProductModel />

            {/* Contact shadow for grounding */}
            <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.4}
                scale={10}
                blur={2}
                far={4}
            />

            {/* Environment for reflections */}
            <Environment preset="city" />

            {/* Orbit controls with interaction tracking */}
            <ControlsHandler />
        </InteractionContext.Provider>
    );
}

const ProductScene: React.FC = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ background: 'transparent' }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
        >
            <Scene />
        </Canvas>
    );
};

export default ProductScene;
