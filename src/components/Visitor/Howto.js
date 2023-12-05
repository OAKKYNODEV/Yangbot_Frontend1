import { colors } from "@material-ui/core";
import React, { useEffect,useState } from "react";
import "../../Style.css"


function Howto() {

  
  return (
    <>
        <div className="row  ">
        <h1 className="text-center" style={{ color: '#4169E1', textShadow: '1px 1px 2px #000',fontSize: '3em' }}>
        วีดีโอตัวอย่างการใช้งาน
        </h1>

        </div>
        <video className="centered-video" controls width="800" height="400">
         <source src={process.env.PUBLIC_URL + '/images/วิธีการใช้งานยางบอท.mp4'} type="video/mp4" />
        เบราวเซอร์ของคุณไม่รองรับวิดีโอ HTML5.
      </video>



     
    
  
    </>
    
  );
}

export default Howto;
