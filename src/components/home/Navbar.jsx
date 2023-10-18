import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink>Home</NavLink></li> 
        <li><NavLink>Add Product</NavLink></li>
        <li><NavLink>My Cart</NavLink></li>
        <li><NavLink to={'/signIn'}>Sign in</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 items-center">
              <div className="navbar-start">
                <a href="" className="btn btn-ghost normal-case text-6xl text-cyan-500">TechEon</a>
              </div>
              <div className="navbar-center flex">
                   <ul className="menu menu-horizontal px-1 gap-5 mt-3">
                      { navLinks }
                   </ul>
              </div>
              <div className="navbar-end pt-4">
                <a href="" className="btn btn-primary">Sign up</a>
              </div>
            </div>
        </div>
    );
};

export default Navbar;