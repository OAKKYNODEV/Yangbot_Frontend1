import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import ProfilePic from "../../assets/img/undraw_profile.svg";

import axios from "axios";

function VisitorNavbar() {
  const [profilePopup, setProfilePopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState(false);
  const [notifiPopup, setNotifiPopup] = useState(false);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const  handleLogout= () => {
    axios.get('http://localhost:3333//logout')
    .then(res => {
        navigate('/start')

    }).catch(err => console.log(err));
}
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          
          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            
          <button className="btn btn-primary" type="button" onClick={e => navigate('/start') }>
                      เข้าสู่ระบบ
            </button>
              
            
          </li>
        </ul>
      </nav>
    </>
  );
}

export default VisitorNavbar;
