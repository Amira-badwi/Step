import { BrowserRouter,Route ,Switch } from "react-router-dom";
import Books_category from "./books-category";
import CourseCatogry from "./course_catogrey";
import Notfound from "./notfound";
import Videos_category from "./video_catogry";
import Courses_details from "./courses_details";
import React from "react";
import NavCategory from "../../component/categoryComponent/category_nav";


export default function Catecory_home(){
    return(
        <>
        <React.Fragment>
        <BrowserRouter>
        <div className=" row">
        <div className="col-lg-2 col-md-5 col-4 mx-3 m-auto ">
        <NavCategory/>

        </div>
     <div className="col-lg-9 col-md-6 col-7 ">
     <Switch>
        <Route  exact path="/courses" component={CourseCatogry}/>
        <Route exact path="/book"   component={Books_category}/>
        <Route exact path="/courseDetails"   component={Courses_details}/>
        <Route exact path="/videos"   component={Videos_category}/>
        <Route exact path="*"   component={Notfound}/>
        </Switch>
     </div>

        </div>
        </BrowserRouter>  
        </React.Fragment>
        </>
    )
}
