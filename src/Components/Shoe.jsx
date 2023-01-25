import { Environment, Gltf, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { useEffect ,useState,useRef} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Skeleton } from '@mui/material';
import { Stats } from '@react-three/drei';
import { useControls } from 'leva';
function Shoe(props) {
  const [loaded,setloaded]=useState(true)
  const manager=useRef(null)
function LoadingScreen(){
  return(
    <Skeleton width='100%' height={'100%'} variant={'rectangular'}/>
  )
}
const gltf=

  useLoader(GLTFLoader,'./models/shoe.glb',(e)=>
  {
  // console.log(e)
    e.manager.onLoad=()=>{
      //setloaded(true)
      console.log('loaded')
     
    }
    e.manager.onError=(url)=>{
      console.error('error eccored')
     
    }
 
  }
  )
    // const setEnvironmentGround=useControls('Environment',{
    //     radius:{
    //         value:10,min:10,max:1000,step:1},
    //     height:{ value:10,min:10,max:1000,step:1},
    //     scale:{ value:10,min:10,max:1000,step:1}
    // })
    return (
      <div style={{ height: "100%" }}>
        {
        loaded?<Canvas camera={{ position: [18, 18, 2] }}>
          <Environment
            preset="dawn"
            background
            ground={{
              radius: 71,//setEnvironmentGround.radius,
              height: 21,//setEnvironmentGround.height,
              scale:99,// setEnvironmentGround.scale,
            }}
          />
          <primitive object={gltf.scene} ref={manager}/>
          <OrbitControls 
           autoRotate 
          enablePan={false} 
          maxPolarAngle={Math.PI/2-0.02}  
          maxDistance={10}   minDistance={3}    />
          {/* <Stats /> */}
        </Canvas>:
        <LoadingScreen/>}
      </div>
    );
}

export default Shoe;