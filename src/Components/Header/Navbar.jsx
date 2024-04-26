import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const navrout = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navrout}
            </ul>
          </div>

          <img
            className=" btn"
            src="https://i.ibb.co/qmygyvy/a10logo.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navrout}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
