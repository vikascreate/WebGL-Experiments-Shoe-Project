import { useFrame } from "@react-three/fiber";
import { useState,useRef } from "react";
export default function Box(props){
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((_,delta)=>{
      mesh.current.rotation.x+=0.2*delta;
      mesh.current.rotation.y+=0.3*delta;
    })
    return (
        <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
}