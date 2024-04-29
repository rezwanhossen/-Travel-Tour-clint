import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [theme, setthem] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const loc = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", loc);
  }, [theme]);
  const handelthn = (e) => {
    if (e.target.checked) {
      setthem("synthwave");
    } else {
      setthem("light");
    }
  };

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
          to="/allturestsport"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addtourists"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mylist"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          My List
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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
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
        <div className="navbar-end gap-2">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handelthn}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {user ? (
            <div className=" flex items-center gap-2">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button">
                  <img
                    className="w-10 h-10  rounded-full "
                    src={user?.photoURL || "https://i.ibb.co/ZLvzRqG/user.png"}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-36 "
                >
                  <li>
                    <p>{user?.displayName || "user not defind"}</p>
                  </li>
                  <li>
                    <Link to="/profil" className="btn btn-outline btn-success">
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="btn btn-outline btn-success" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline btn-success">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
