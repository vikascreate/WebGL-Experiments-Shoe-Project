import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats } from '@react-three/drei';
import { useControls } from 'leva';
function Shoe(props) {
    const gltf=useLoader(GLTFLoader,'./models/shoe.glb')
    // const setEnvironmentGround=useControls('Environment',{
    //     radius:{
    //         value:10,min:10,max:1000,step:1},
    //     height:{ value:10,min:10,max:1000,step:1},
    //     scale:{ value:10,min:10,max:1000,step:1}
    // })
    return (
      <div style={{ height: "100%" }}>
        <Canvas camera={{ position: [18, 18, 2] }}>
          <Environment
            preset="dawn"
            background
            ground={{
              radius: 71,//setEnvironmentGround.radius,
              height: 21,//setEnvironmentGround.height,
              scale:99,// setEnvironmentGround.scale,
            }}
          />
          <primitive object={gltf.scene} />
          <OrbitControls 
           autoRotate 
          enablePan={false} 
          maxPolarAngle={Math.PI/2-0.02}  
          maxDistance={10}   minDistance={3}    />
          {/* <Stats /> */}
        </Canvas>
      </div>
    );
}

export default Shoe;