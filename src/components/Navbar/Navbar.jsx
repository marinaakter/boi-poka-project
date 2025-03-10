import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <div className="md:flex space-y-3 md:space-y-0 gap-8 py-5">
        <li>
          <NavLink className="py-3" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="py-3" to="/listedBooks">
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink className="py-3" to="/">
            Pages to Read
          </NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-5 md:my-0 lg:my-0 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow 
              "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl ">
          Boipoka
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn bg-sky-500 text-white hover:bg-sky-700">Sign In</a>
        <a className="btn btn-accent">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
