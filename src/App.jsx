
import './App.css'
import { Canvas } from '@react-three/fiber';
import Box from './Components/Box';
import { OrbitControls } from '@react-three/drei';
import { Paper ,Box as BoxMUI} from '@mui/material';
import NavBar from './Components/NavBar';
import { useControls } from 'leva';

function App() {
const color=useControls('Color',{
  value:'green'
})
  return (
    <div className="App">
      <NavBar/>
      <BoxMUI component='main' sx={{ p: 6 ,zIndex:1}}>
      <h1>This Is WebGl Experiments Shoe Project</h1>
      <h3>Contribute at github.com/vikascreate</h3>
      <Paper elevation={16} sx={{height:'70vh',width:'80vw',marginBottom:'10vh',marginLeft:'3vw',marginRight:'3vw',opacity:'0.9'}}>
      </Paper>
      </BoxMUI>
      <Canvas camera={{ position: [0, 0, 3] }} style={{height:'100%',position:'fixed'}}>
          <directionalLight position={[0,0,3]}/>
          <directionalLight position={[0,0,-3]}/>
          <Box position={[-2, 0, 0]} color={color.value} />
          <Box position={[2, 0, 0]} color={color.value}/>
          <OrbitControls 
          // enableZoom={false}
           //enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default App
