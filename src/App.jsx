import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber';
import Box from './Components/Box';
import { OrbitControls } from '@react-three/drei';
import { Paper } from '@mui/material';
function App() {

  return (
    <div className="App">
      <h1>This Is WebGl Experiments Shoe Project</h1>
      <h3>Contribute at github.com/vikascreate</h3>
      <Paper elevation={16} sx={{height:'70vh',marginBottom:'10vh',marginLeft:'3vw',marginRight:'3vw'}}>
        <Canvas camera={{ position: [0, 0, 3] }}>
          <directionalLight position={[0,0,3]}/>
          <directionalLight position={[0,0,-3]}/>
          <Box position={[-1.5, 0, 0]} />
          <Box position={[1.5, 0, 0]} />
          <OrbitControls enableZoom={false} enablePan={false}/>
        </Canvas>
      </Paper>
    </div>
  );
}

export default App
