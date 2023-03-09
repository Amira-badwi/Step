import "./Navbar.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useContext, useState, useEffect } from "react";
import { langContext } from "../context/langContext";
import logo from "../../assets/Teaching strategy.webp";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function NavBar() {
  const { contextlang, setcontextlang } = useContext(langContext);
  const currentUse = useContext(AuthContext);
  const currentValue = currentUse.currentUser;
  // console.log(currentValue)
  const [loging, setLoging] = useState("");

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
              <li className="nav-item ">
                <NavLink
                  className="nav-link active  text-light"
                  aria-current="page"
                  to="/courses"
                >
                  {contextlang == "En" ? "Courses" : " دورات تدريبية"}
                </NavLink>
              </li>
              <li className="nav-item d-flex justify-content-between">
                <NavLink className="nav-link  text-light " to="/addCourse">
                  <i class="fa-solid fa-plus"></i>
                  {contextlang == "En" ? "Add Course" : "أضف دورة تدريبية"}
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

                      <i
                        style={{ "margin-left": "7px" }}
                        className="fa-solid fa-right-to-bracket mh-5 d-inline-block"
                      ></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" className="ms-4 me-4">
                      <img src={logo} className=" img" width={"20px"} />
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
