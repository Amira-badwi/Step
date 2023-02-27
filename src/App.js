import Catecory_home from "./pages/categorypages/catogory_home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/homepage";
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import Notfound from "./pages/categorypages/notfound";
import NavBar from "./component/Homepage/NavBar";
import Sign_Up from "./pages/auth/signUp/SignUp";
import AddCourse from "./pages/AddCourse";
import Banner from "./component/banner/Banner";
import Login from "./pages/auth/Login";
import CourseCatogry from "./pages/categorypages/course_catogrey";
import Books_category from "./pages/categorypages/books-category";
import Courses_details from "./pages/categorypages/courses_details";
import Videos_category from "./pages/categorypages/video_catogry";

function App() {
  return (
   <>
   <BrowserRouter>  
   <NavBar/>   
     <Switch>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/courses"   component={Catecory_home}/>
        <Route exact path="/review_course" component={Banner}/>
        <Route exact path="/register"   component={Sign_Up}/>
        <Route exact path="/login"   component={Login}/>
        <Route exact path="/addCourse"   component={AddCourse}/>
        <Route  exact path="/courses" component={CourseCatogry}/>
        <Route exact path="/book"   component={Books_category}/>
        <Route exact path="/course"   component={Courses_details}/>
        <Route exact path="/viewCourse"   component={Banner}/>
        <Route exact path="/videos"   component={Videos_category}/>
        <Route exact path="*"   component={Notfound}/>
        </Switch>
        </BrowserRouter>  
   </>
  );
}

export default App;