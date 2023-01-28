
import './App.css'
import { Canvas } from '@react-three/fiber';
import Box from './Components/Box';
import { Paper ,Box as BoxMUI, Skeleton} from '@mui/material';
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import {KernelSize} from 'postprocessing'
import NavBar from './Components/NavBar';
import { useControls } from 'leva';
import Shoe from './Components/Shoe';
import { useEffect, useState,Suspense } from 'react';
import LoadinScreen from './Components/LoadinScreen';
import { blueGrey, grey } from '@mui/material/colors';
function App() {
// const color=useControls('Color',{
//   value:'green'
// })
const [darkMode,setdarkMode]=useState(true)
function toggleDarkMode(){
 // console.log(darkMode)
  setdarkMode(!darkMode)
}
  return (
    <div className="App">
      <Suspense fallback={<LoadinScreen first/>}>
      <NavBar toggleDarkMode={toggleDarkMode} DarkMode={darkMode}/>
      <BoxMUI component='main' sx={{zIndex:1,marginTop:'15vh',marginLeft:'7%',marginRight:'0',}}>
      <Paper elevation={16} sx={{height:'80vh',width:'90%'}}>
      <Suspense fallback={<LoadinScreen first={false}/>}>
         <Shoe/>
         </Suspense>
      </Paper>
      </BoxMUI>
      <Canvas camera={{ position: [0, 0, 3] }} style={{height:'100%',position:'fixed',backgroundColor:darkMode?blueGrey[900]:'white',}}>
          <directionalLight position={[0,0,3]}/>
          <directionalLight position={[0,0,-3]}/>
          {/* <Box position={[-2, 0, 0]} color={'red'} /> */}
          <Box position={[2, 0, 0]}  />
          {darkMode && <EffectComposer multisampling={8}>
          <Bloom kernelSize={4} luminanceThreshold={0} luminanceSmoothing={0.6} intensity={0.6} />
          <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.6} />
        </EffectComposer>}
      </Canvas>
      </Suspense>
   </div>
   // <LoadinScreen first/>
  );
}

export default App
