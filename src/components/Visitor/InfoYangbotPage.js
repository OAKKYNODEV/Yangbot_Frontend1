import React, {useEffect} from "react";
import VisitorNavbar from "./VisitorNavbar";
import SidebarVisitor from "./SidebarVisitor";
import Footer from "../Footer";
import InfoYangbot from "./InfoYangbot";

function DataTablePage() {

  
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <SidebarVisitor />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <VisitorNavbar/>
              <div className="container-fluid">
               <InfoYangbot/>
                
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
