import React, {useEffect} from "react";
import VisitorNavbar from "./VisitorNavbar";
import DashboardVisitor from "./DashboardVisitor";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import SidebarVisitor from "./SidebarVisitor"

function VisitorMain() {

  
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <SidebarVisitor />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <VisitorNavbar />
              <div className="container-fluid">
               <DashboardVisitor/>
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

export default VisitorMain;
