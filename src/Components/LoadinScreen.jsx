import React from 'react';
import { Skeleton } from '@mui/material';
import Shoe from '../assets/img/Shoe.gif'
import Blob from "../assets/img/blob.gif"
function LoadinScreen({first}) {
    return (
      <div style={{display:'flex',overflow:'hidden',alignItems:'center',justifyContent:'center',position:'relative',width:'100%',margin:'auto'}}>
        {/* <Skeleton width="100%" height={"100%"} variant={"rectangular"} /> */}
        {first?<img
          src={Blob}
          alt={"wait for loading"}
          style={{
            display: "block",
            margin: //{''},
           // ''
           '10vh auto 0 auto',
            //'auto'
            width: "50%",
          }}
        ></img>:
        <img
          src={Shoe}
          alt={"wait for loading"}
        ></img>}
      </div>
    );
}

export default LoadinScreen;