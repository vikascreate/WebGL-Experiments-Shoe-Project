import { useFrame, useLoader } from "@react-three/fiber";
import { useState,useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function Box({position,color}){
  const {scene}=useLoader(GLTFLoader,'./models/Box.glb')
 useEffect(()=>{
  console.log(mesh.current.children[0].material.color)
 // mesh.current.children[0].material.color.setHex(color)
 },[color])
    const mesh = useRef()
    //mesh.current.children[0].material.color.setHex(color)
   // console.log(mesh.current.uuid)
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)
    useFrame((_,delta)=>{
      mesh.current.children[0].rotation.x+=0.4*delta;
      mesh.current.children[0].rotation.y+=0.5*delta;
      mesh.current.children[1].rotation.z+=0.2*delta;
      mesh.current.children[1].rotation.y+=0.3*delta;
    })
    return (
      //   <mesh
      //   position={position}
      //   ref={mesh}
      //   // scale={active ? 1.5 : 1}
      //   // onClick={(event) => setActive(!active)}
      //   // onPointerOver={(event) => setHover(true)}
      //   // onPointerOut={(event) => setHover(false)}
      //   >
      //   <boxGeometry args={[5, 5, 5]} />
      //   <meshBasicMaterial color={color} wireframe={true}/>
      // </mesh>
      <primitive object={scene}  ref={mesh}/>
    )
}