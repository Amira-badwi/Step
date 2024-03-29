import "./Navbar.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useContext, useState, useEffect } from "react";
import { langContext } from "../context/langContext";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function NavBar() {
  const { contextlang, setcontextlang } = useContext(langContext);
  const currentUse = useContext(AuthContext);
  const currentValue = currentUse.currentUser;
  let currentData={user:"user",specialization:''}
 if(currentUse.userData!==undefined)
 {
  currentData=currentUse.userData;
 }
   console.log(currentValue)
  const [loging, setLoging] = useState("");
  const [userType,setUserType]=useState("");
 
  useEffect(() => {
    //  console.log(currentValue)
    if (currentValue != null) {
      setLoging("Logout");
      
    } else {
      setLoging("Login");
       
    }
  }, [currentValue]);

  return (
    <>
      <nav
        className="navbar main_nav navbar-expand-lg  w-100"
        dir={`${contextlang == "En" ? "ltr" : "rtl"}`}
      >
        <div className="container-fluid">
          <li className="nav-item" style={{ listStyle: "none" }}>
            <NavLink className="navbar-brand" to="/">
              <p className=" text-light brand-name">STEP</p>
            </NavLink>
            <button
                  className=" btn btn-outline-light fs-6 fw-bold mr-4 "
                  onClick={() =>
                    setcontextlang(contextlang === "En" ? "Ar" : "En")
                  }
                >
                  {contextlang}
                </button>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse collapse_nav navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-100 d-flex justify-content-between">
             
              
            {currentData.user=="trainee" || currentData.user=="user" || loging=="Login"?
              <li className="nav-item d-flex justify-content-between">
                <NavLink className="nav-link  text-light " to="/courses">
                
                  {contextlang == "En" ? " Content" : "أضف محتوى تعليمي "}
                </NavLink>
               
              </li>
              :
              <>
              <li className="nav-item ">
              <NavLink
                className="nav-link active  text-light"
                aria-current="page"
                to="/courses"
              >
                {contextlang == "En" ? "Content" : " دورات تدريبية"}
              </NavLink>
            </li>
               <li className="nav-item d-flex justify-content-between">
              <NavLink className="nav-link  text-light " to="/addCourse">
                <i class="fa-solid fa-plus"></i>
                {contextlang == "En" ? " Add Content" : "أضف محتوى تعليمي "}
              </NavLink>
             
            </li></>}
                
              <li>
                <ul className="navbar-nav d-flex  ">
                  <li>
                    <NavLink className="nav-link  text-light" to="/register">
                      {loging == "Login"
                        ? contextlang == "En"
                          ? "Register"
                          : "انشاء حساب"
                        : null}
                    </NavLink>
                  </li>
                  <li onClick={() => signOut(auth)}>
                    <NavLink
                      className="nav-link  text-light"
                      to={loging == "Logout" ? "/" : "/login"}
                    >
                      {loging}

                     {
                      loging == "Logout"? <i style={{ "margin-left": "7px" }}  class ="fa-solid fa-right-from-bracket">  </i>: 
                      <i
                      style={{ "margin-left": "7px" }}
                      className="fa-solid fa-right-to-bracket mh-5 d-inline-block"
                    ></i>
                     }
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" className="ms-4 me-4">
                      {
                        loging !== "Login" && <i class="fa-solid fa-user w-25 text-white mt-3"></i>
                      }
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>      
          </div>
        </div>
      </nav>
    </>
  );
}
