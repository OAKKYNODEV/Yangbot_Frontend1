import React, { useEffect,useState } from "react";
import ReactTyped from "react-typed";
import Illustrations from "../dashboard/Illustrations";

function Dashboard() {

  

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1  className="d-sm-flex" >
               {""}
                <ReactTyped strings={["  ยินดีต้อนรับผู้เยี่ยมชมทุกท่านสู่ Yangbot Website"]} typeSpeed={100} loop />
            </h1>
      </div>
      
      <div className="container-fluid  ">
        <div className="row  ">
          
        <iframe height="631" src="https://misdata.rubberthaiecon.com/report/rbprice.php" frameborder="0" width="927" scrolling="no" align="center"></iframe>
        </div>
       <div className="row">
      

       </div>
        
      </div>
     
      
  
    </>
    
  );
}

export default Dashboard;
