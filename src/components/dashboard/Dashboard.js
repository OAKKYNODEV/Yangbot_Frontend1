import React, { useEffect,useState } from "react";
import Approach from "./Approach";
import AreaChart from "./AreaChart";
import DashboardCards from "./DashboardCards";
import Illustrations from "./Illustrations";
import Projects from "./Projects";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import BarChart  from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import "../../App.css";
import { useNavigate } from "react-router-dom";


 

function Dashboard() {

  const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
      }, [])

      const UserGet = () => {
        fetch("https://cautious-pink-panama-hat.cyclic.app/linebot_log2")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
      }

      

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <Typography variant="h2" style={{ fontSize: '40px' }}>
        ภาพรวมของข้อมูลระบบยางบอท
      </Typography>

        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm "
        >
          <i className="fas fa-download fa-sm text-white-50 "></i> Refresh
        </a>
      </div>
      <div className="row">
        <DashboardCards />
      </div>
      <div className="container-fluid  ">
        <div className="row  ">
          <div className="col-xl-6 mb-4 ml-4  ">
            <BarChart/> 
          </div>
          <div className="col-lg-5 mb-4 ml-5 ">
            <PieChart/>
          </div>
        </div>
       <div className="row">
       <iframe height="631" src="https://misdata.rubberthaiecon.com/report/rbprice.php" frameborder="0" width="927" scrolling="no" align="center"></iframe>

       </div>
        
      </div>
     
      
  
    </>
    
  );
}

export default Dashboard;
