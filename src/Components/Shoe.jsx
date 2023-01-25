import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats } from '@react-three/drei';
function Shoe(props) {
    const gltf=useLoader(GLTFLoader,'./models/shoe.glb')
    return (
        <div style={{height:'100%'}}>
           <Canvas camera={{position:[18,18,2]}}>
            <Environment preset='dawn' background/>
            <primitive
            object={gltf.scene}/>
            <OrbitControls autoRotate/>
            <Stats/>
            </Canvas> 
        </div>
    );
}

export default Shoe;