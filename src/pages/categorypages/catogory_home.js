import { BrowserRouter,Route ,Switch } from "react-router-dom";
import Books_category from "./books-category";
import CourseCatogry from "./course_catogrey";
import Notfound from "./notfound";
import Courses_details from "./courses_details";
import React, { useContext } from "react";
import NavCategory from "../../component/categoryComponent/category_nav";
import Banner from "../../component/banner/Banner"
import CourseEnroll from "../CourseContent/CourseEnroll";
import { AuthContext } from "../../component/context/AuthContext";
import Login from "../auth/Login";
export default function Catecory_home(){
    const currentUse = useContext(AuthContext);
    const currentValue = currentUse.currentUser;
    return(
        <>
         <BrowserRouter>
        <div className=" row  ">
        <div className="col-lg-2 col-md-5 col-4 mx-3 m-auto ">
        <NavCategory/>
        </div>
     <div className="col-lg-9 col-md-6 col-6   text-center " >
     <Switch>
        <Route  exact path="/courses" component={CourseCatogry}/>
        <Route exact path="/book/:id"   component={Books_category}/>
        <Route exact path="/course/:id"   component={Courses_details}/>
        <Route
                exact
                path="/CourseEnroll/:id"
                component={currentValue == null ? Login : CourseEnroll}
              />
        <Route exact path="/reviewCourse/:id"   component={Banner}/>
        <Route exact path="*"   component={Notfound}/>
        </Switch>
     </div>

        </div>
        </BrowserRouter>  
   
        </>
    )
}
