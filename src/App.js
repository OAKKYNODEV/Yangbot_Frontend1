import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Dashboard from "./components/dashboard/Dashboard";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import Error404 from "./components/Error404";
import BlankPage from "./components/BlankPage";
import LabelImg from './components/LabelImg';
import Singup from './components/Signup';
import Upload from "./components/Upload";
import User from "./components/CRUD/User";
import CreateUser from "./components/CRUD/CreateUser";
import UserUpdate from "./components/CRUD/UserUpdate";
import Question from "./components/CRUD/Question"
import QuestionUpdate from "./components/CRUD/QuestionUpdate"
import Start from "./components/Start";
import ResearcherLoginPage from "./components/ResearcherLoginPage";
import Home from "./components/Researcher/Home";
import DashboardResearcher from "./components/Researcher/DashboardResearcher";
import CreateFarmer from"./components/CRUD/CreateFarmer"
import DataTable from "./components/Researcher/DataTable"
import DataTablePage from "./components/Researcher/DataTablePage";
import Question2 from "./components/Researcher/Question2"
import Question2Page from "./components/Researcher/Question2Page"
import QuestionTypeUpdate2 from "./components/Researcher/QuestionUpdate2";
import Table2Page from "./components/Researcher/Table2Page";
import Table2 from "./components/Researcher/Table2";
import Upload2 from "./components/Researcher/Upload2";
import Upload2Page from "./components/Researcher/Upload2Page";
import VisitorMain from "./components/Visitor/VisitorMain";
import InfoYangbot from "./components/Visitor/InfoYangbot";
import InfoYangbotPage from "./components/Visitor/InfoYangbotPage";
import ControlandProtect from "./components/Visitor/ControlandProtect"
import ControlandProtectPage from "./components/Visitor/ControlandProtectPage"
import Howto from "./components/Visitor/Howto"
import HowtoPage from "./components/Visitor/HowtoPage"
import Main from "./components/Admin/Main"
import Menu1 from "./components/Admin/Menu1"
import Menu2 from "./components/Admin/Menu2"
import Menu3 from "./components/Admin/Menu3"
import Menu4 from "./components/Admin/Menu4"
import Menu5 from "./components/Admin/Menu5"
import Menu6 from "./components/Admin/Menu6"
import Mapshow from "./components/Map/Mapshow";
import Table3page from "./components/Researcher/Table3page"
import MapResearcher from "./components/Researcher/MapResearcher"


function App() {
  return (
    <>
      <BrowserRouter basename="/chalothon/yangbot_frontend">
        <Routes>
          <Route path="/" element={<VisitorMain />} >
          <Route path="/mainpage" element={<MainPage />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/blankpage" element={<BlankPage />} />
          <Route path="/signup" element={<Singup/>} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/user" element={<User />} />
          <Route path="/question" element={<Question />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/researcherloginpage" element={<ResearcherLoginPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboardresearcher" element={<DashboardResearcher />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/userupdate/:id" element={<UserUpdate />} />
          <Route path="/questionupdate/:id" element={<QuestionUpdate/>} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/labelImg" element={<LabelImg labelTypes={['Heathy', 'other_disease','other_disease_spot',"rubber_new_leaf_fall_disease","rubber_new_leaf_fall_disease_spot"]} />} />
          <Route path="/createfarmer" element={<CreateFarmer />} />
          <Route path="/datatable" element={<DataTable />} />
          <Route path="/datatablepage" element={<DataTablePage />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question2page" element={<Question2Page />} />
          <Route path="/questionupdate2/:id" element={<QuestionTypeUpdate2 />} />
          <Route path="/table2" element={<Table2 />} />
          <Route path="/table2page" element={<Table2Page />} />
          <Route path="/upload2" element={<Upload2 />} />
          <Route path="/upload2page" element={<Upload2Page />} />
          <Route path="/dashboardresearcher" element={<DashboardResearcher />} />
          <Route path="/infoyangbot" element={<InfoYangbot />} />
          <Route path="/infoyangbotpage" element={<InfoYangbotPage />} />
          <Route path="/controlandprotect" element={<ControlandProtect />} />
          <Route path="/controlandprotectpage" element={<ControlandProtectPage />} />
          <Route path="/howto" element={<Howto />} />
          <Route path="/howtopage" element={<HowtoPage />} />
          <Route path="/main" element={<Main />}  /> 
          <Route path="/menu1" element={<Menu1 />}  /> 
          <Route path="/menu2" element={<Menu2 />}  /> 
          <Route path="/menu3" element={<Menu3 />}  /> 
          <Route path="/menu4" element={<Menu4 />}  /> 
          <Route path="/menu5" element={<Menu5 />}  /> 
          <Route path="/menu6" element={<Menu6 />}  /> 
          <Route path="/table3page" element={<Table3page />}  /> 
          <Route path="/mapresearcher" element={<MapResearcher />}  /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
