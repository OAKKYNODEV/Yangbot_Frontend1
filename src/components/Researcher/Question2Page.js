import React, {useEffect} from "react";
import Navbar from "../Navbar";
import SidebarResearcher from "./SidebarResearcher"
import DashboardVisitor from "./DashboardResearcher";
import Footer from "../Footer";
import Question2 from './Question2'

function DataTablePage() {

  
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <SidebarResearcher />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
               <Question2/>
                
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

export default DataTablePage;
