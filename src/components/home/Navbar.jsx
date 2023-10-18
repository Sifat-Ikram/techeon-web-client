import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(res => console.log(res))
      .catch(err => console.error(err.message))
  }

  const navLinks = <>
    <li><NavLink style={({ isActive }) => ({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md" to={'/'}>Home</NavLink></li>
    {
      user && <>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md">Add Product</NavLink></li>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md">My Cart</NavLink></li>
      </>
    }
    <li><NavLink style={({ isActive }) => ({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md" to={'/signIn'}>Sign in</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100 items-center">
        <div className="navbar-start">
          <div className="dropdown flex lg:hidden mt-3">
            <label tabIndex={0} className="btn btn-ghost h-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#3c3ff2] font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a href="/" className="h-full normal-case font-semibold text-6xl text-cyan-500">TechEon</a>
        </div>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1 gap-3 mt-3 hidden lg:flex">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end pt-4">
          {
            user ?
              <div className="flex gap-3 items-center">
                <h1 className="font-bold">{user.displayName}</h1>
                <img src={user.photoURL} className="h-16 w-16 rounded-full" alt="" />
                <button onClick={handleSignOut} className="btn btn-primary text-lg font-semibold">Sign out</button>
              </div>
              :
              <Link to={"/signUp"}><button className="btn btn-primary text-lg font-semibold">Sign up</button></Link>

          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;