 
 import React from 'react'
 import{NavLink,Link } from "react-router-dom"
 import { PiExamFill } from "react-icons/pi";
 import { useAuth } from '../../context/auth';
 
 const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout =()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
    });
    localStorage.removeItem("auth");
  }
   return (
      
       <> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
     <button className="navbar-toggler" 
     type="button" data-bs-toggle="collapse" 
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
          <PiExamFill /> OptionIQ
            </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link "   >
            Home
            </NavLink>
        </li>
           {/* <li className="nav-item">
          <NavLink to='/subject' className="nav-link"   >
          Subjects
            </NavLink>
        </li> */}
     
        {!auth?.user? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu bg-success">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

      </ul>
     
    </div>
  </div>
</nav>

       </>
     
   )
 }
 
 export default Header
 


 