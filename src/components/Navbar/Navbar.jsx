import React, { useContext } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleLogout = () => {
    Logout()
      .then(() => toast("You have logged out successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar bg-gradient-to-r from-[#8338EC] to-[#3A86FF] text-white p-4 shadow-lg">

     
      <div className="navbar-start">

       
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <BiMenuAltLeft size={26} />
          </div>

       
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink 
                to="/"
                className={({isActive}) => isActive 
                  ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white" 
                  : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/allProducts"
                className={({isActive}) => isActive 
                  ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white" 
                  : ""
                }
              >
                All Crops
              </NavLink>
            </li>

            {user && (
              <>
                <li><NavLink to="/myProfile">Profile</NavLink></li>

                <li>
                  <NavLink 
                    to="/addCrops"
                    className={({isActive}) => isActive 
                      ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white" 
                      : ""
                    }
                  >
                    Add Crops
                  </NavLink>
                </li>

                <li><NavLink to="/myPost">My Posts</NavLink></li>
                <li><NavLink to="/myInterest">My Interests</NavLink></li>
              </>
            )}

            {!user && (
              <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
              </>
            )}
          </ul>
        </div>

        <Link className="btn btn-ghost text-3xl">
          🌾Krishi<span className="text-amber-400">Link</span>
        </Link>
      </div>


     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">

          <li>
            <NavLink 
              to="/"
              className={({isActive}) => isActive 
                ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-2xl text-white px-4" 
                : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/allProducts"
              className={({isActive}) => isActive 
                ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-2xl text-white px-4" 
                : ""
              }
            >
              All Crops
            </NavLink>
          </li>

          {user && (
            <>
              <li><NavLink to="/myProfile"  className={({isActive}) => isActive 
                    ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-2xl px-4" 
                    : ""
                  }>Profile</NavLink></li>

              <li>
                <NavLink 
                  to="/addCrops"
                  className={({isActive}) => isActive 
                    ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-2xl px-4" 
                    : ""
                  }
                >
                  Add Crops
                </NavLink>
              </li>

              <li><NavLink to="/myPost"  className={({isActive}) => isActive 
                    ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-2xl px-4" 
                    : ""
                  }>My Posts</NavLink></li>

              <li><NavLink to="/myInterest"  className={({isActive}) => isActive 
                    ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-2xl px-4" 
                    : ""
                  }>My Interests</NavLink></li>
            </>
          )}
        </ul>
      </div>


      {/* ========== RIGHT SIDE (AUTH BUTTONS) ========== */}
      <div className="navbar-end md:gap-5">

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-2 rounded-xl font-medium">
              Login
            </Link>

            <Link to="/register" className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-2 rounded-xl font-medium">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
