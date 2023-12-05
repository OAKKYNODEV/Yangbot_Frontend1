import React, {useEffect} from "react";
import Navbar from "../Navbar";
import SidebarResearcher from "./SidebarResearcher";
import Footer from "../Footer";
import Table2 from './Table2'

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
               <Table2/>
                
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
