import Catecory_home from "./pages/categorypages/catogory_home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/homepage";
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import Notfound from "./pages/categorypages/notfound";
import NavBar from "./component/Homepage/NavBar";
 import Sign_Up from "./pages/auth/signUp/SignUp";
import Login from "./pages/auth/Login";
import AddCourse from "./pages/AddCourse";

function App() {
  return (
   <>
   <BrowserRouter>  
   <NavBar/>   
     <Switch>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/courses"   component={Catecory_home}/>
        <Route exact path="/register"   component={Sign_Up}/>
        <Route exact path="/login"   component={Login}/>
        <Route exact path="/addCourse"   component={AddCourse}/>
        <Route exact path="*"   component={Notfound}/>
        </Switch>
        </BrowserRouter>  
   </>
  );
}

export default App;
