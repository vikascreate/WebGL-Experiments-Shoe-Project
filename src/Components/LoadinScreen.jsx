import React from 'react';
import { Skeleton } from '@mui/material';
import Shoe from '../assets/img/Shoe.gif'
import Blob from "../assets/img/blob.gif"
function LoadinScreen({first}) {
    return (
      <div className='ImgDiv'>
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
          style={{
            display: "block",
            padding:'auto',
            margin:'auto',
            width: "50%",
          }}
        ></img>}
      </div>
    );
}

export default LoadinScreen;