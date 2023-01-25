import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Shoe(props) {
    const gltf=useLoader(GLTFLoader,'./models/shoe.glb')
    return (
        <div style={{height:'100%'}}>
           <Canvas camera={{position:[8,8,2]}}>
            <Environment preset='forest' background/>
            <primitive
            object={gltf.scene}/>
            <OrbitControls/>
            </Canvas> 
        </div>
    );
}

export default Shoe;