import React, {useEffect} from "react";
import Navbar from "../Navbar";
import SidebarVisitor from "./SidebarResearcher";
import DashboardVisitor from "./DashboardResearcher";
import Footer from "../Footer";
import DataTable from './DataTable'

function DataTablePage() {

  
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <SidebarVisitor />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
               <DataTable/>
                
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
