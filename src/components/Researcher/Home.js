import React, {useEffect} from "react";
import Navbar from "../Navbar";
import DashboardResearcher from "./DashboardResearcher";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import SidebarResearcher from "./SidebarResearcher"

function Home() {

  
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <SidebarResearcher />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
               <DashboardResearcher/>
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

export default Home;
