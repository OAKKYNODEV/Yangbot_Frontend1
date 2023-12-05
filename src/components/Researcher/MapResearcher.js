import React from "react";
import Navbar from "../Navbar";
import SidebarResearcher from "../Researcher/SidebarResearcher";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import Tables from "../Tables";
import Mapshow from "../Map/Mapshow";

function Main() {

  
  axios.defaults.withCredentials = true;
 // useEffect(() =>{
   //   axios.get('https://prickly-hare-long-johns.cyclic.app/dashboard')
     // .then(res => {
       //   if(res.data.Status == "Success") {
         //     if(res.data.role === "admin") {
           //       navigate('/dashboard');
             // } else {
               //   const id = res.data.id;
                 // navigate('/home')
              //}
          //} else {
            //  navigate('/start')
          //}
      //})
  //},[])

  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <SidebarResearcher/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
                <Mapshow  />
              </div>
            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;