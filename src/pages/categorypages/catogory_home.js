import { BrowserRouter,Route ,Switch } from "react-router-dom";
import Books_category from "./books-category";
import CourseCatogry from "./course_catogrey";
import Notfound from "./notfound";
import Courses_details from "./courses_details";
import React from "react";
import NavCategory from "../../component/categoryComponent/category_nav";
import Banner from "../../component/banner/Banner"
export default function Catecory_home(){
    return(
        <>
         <BrowserRouter>
        <div className=" row  ">
        <div className="col-lg-2 col-md-5 col-3 mx-3 m-auto ">
        <NavCategory/>
        </div>
     <div className="col-lg-9 col-md-6 col-7  ">
     <Switch>
        <Route  exact path="/courses" component={CourseCatogry}/>
        <Route exact path="/book/:id"   component={Books_category}/>
        <Route exact path="/course/:id"   component={Courses_details}/>
        <Route exact path="/reviewCourse/:id"   component={Banner}/>
        <Route exact path="*"   component={Notfound}/>
        </Switch>
     </div>

        </div>
        </BrowserRouter>  
   
        </>
    )
}
