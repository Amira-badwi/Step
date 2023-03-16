import Catecory_home from "./pages/categorypages/catogory_home";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notfound from "./pages/categorypages/notfound";
import NavBar from "./component/Homepage/NavBar";
import Sign_Up from "./pages/auth/signUp/SignUp";
import AddCourse from "./pages/AddCourse";
import Banner from "./component/banner/Banner";
import Login from "./pages/auth/Login";
import CourseCatogry from "./pages/categorypages/course_catogrey";
import Books_category from "./pages/categorypages/books-category";
import Courses_details from "./pages/categorypages/courses_details";
import { useState, useContext } from "react";
import { langContext, loadContext } from "./component/context/langContext";
import Profile from "./pages/profile";
import { AuthContext } from "./component/context/AuthContext";
import CourseEnroll from "./pages/CourseContent/CourseEnroll";
import CourseContentSideBar from "./component/CourseContentSideBar";
import Loader from "./component/loader/Loader";
import CourseLecture from "./component/CourseLecture";

function App() {
  const [contextlang, setcontextlang] = useState("En");
  const [contextload, setcontextload] = useState(false);
  const currentUse = useContext(AuthContext);
  const currentValue = currentUse.currentUser;
  console.log(currentValue);

  return (
    <>
      <loadContext.Provider value={{ contextload, setcontextload }}>
        <langContext.Provider value={{ contextlang, setcontextlang }}>
          <BrowserRouter>
            <NavBar />
            {contextload == true && <Loader />}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/courses"
                component={currentValue == null ? Login : Catecory_home}
              />
              <Route exact path="/review_course" component={Banner} />
              <Route exact path="/register" component={Sign_Up} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/addCourse"
                component={currentValue == null ? Login : AddCourse}
              />
              <Route
                exact
                path="/courses"
                component={currentValue == null ? Login : CourseCatogry}
              />
              <Route
                exact
                path="/book/:id"
                component={currentValue == null ? Login : Books_category}
              />
              <Route exact path="/course/:id" component={Courses_details} />
              <Route exact path="/reviewCourse/:id" component={Banner} />
              <Route
                exact
                path="/CourseEnroll/:id"
                component={currentValue == null ? Login : CourseEnroll}
              />
              <Route
                exact
                path="/CourseContent/:courseName/:section/:id"
                component={currentValue == null ? Login : CourseContentSideBar}
              />
              <Route
                exact
                path="/profile"
                component={currentValue == null ? Login : Profile}
              />
              <Route
                exact
                path="/lecture/:courseName/:id"
                component={currentValue == null ? Login : CourseLecture}
              />
              <Route
                exact
                path="/quiz/:courseName/:id"
                component={currentValue == null ? Login : CourseLecture}
              />
              <Route exact path="*" component={Notfound} />
            </Switch>
          </BrowserRouter>
        </langContext.Provider>
      </loadContext.Provider>
    </>
  );
}

export default App;
