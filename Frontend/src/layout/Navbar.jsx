import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaGamepad, FaBars, FaTimes, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Temporary state - will be replaced with Firebase auth
  const user = null; // Change to user object when logged in

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const handleLogout = () => {
    // Will implement with Firebase auth later
    console.log("Logout");
    setIsUserDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
          >
            <FaGamepad className="text-indigo-600" />
            <span>Chill Gamer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 hover:text-indigo-600 ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 hover:text-indigo-600 ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-700"
                }`
              }
            >
              All Reviews
            </NavLink>

            {/* Protected Routes - Only show when user is logged in */}
            {user || (
              <>
                <NavLink
                  to="/addReview"
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 hover:text-indigo-600 ${
                      isActive
                        ? "text-indigo-600 border-b-2 border-indigo-600"
                        : "text-gray-700"
                    }`
                  }
                >
                  Add Review
                </NavLink>

                <NavLink
                  to="/myReviews"
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 hover:text-indigo-600 ${
                      isActive
                        ? "text-indigo-600 border-b-2 border-indigo-600"
                        : "text-gray-700"
                    }`
                  }
                >
                  My Reviews
                </NavLink>

                <NavLink
                  to="/myWatchlist"
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 hover:text-indigo-600 ${
                      isActive
                        ? "text-indigo-600 border-b-2 border-indigo-600"
                        : "text-gray-700"
                    }`
                  }
                >
                  Game WatchList
                </NavLink>
              </>
            )}
          </div>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {!user ? (
              // Show Login/Register when not logged in
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Register
                </Link>
              </>
            ) : (
              // Show User Avatar and Logout when logged in
              <div className="relative">
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border-2 border-indigo-600"
                    />
                  ) : (
                    <FaUser className="w-8 h-8 p-2 bg-gray-200 rounded-full" />
                  )}
                  <span className="font-medium">{user?.displayName}</span>
                </button>

                {/* User Dropdown */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      {user?.displayName}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-indigo-600 hover:bg-gray-50 rounded-md ${
                    isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-700"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-indigo-600 hover:bg-gray-50 rounded-md ${
                    isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-700"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                All Reviews
              </NavLink>

              {/* Protected Routes for Mobile */}
              {user && (
                <>
                  <NavLink
                    to="/addReview"
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-indigo-600 hover:bg-gray-50 rounded-md ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Add Review
                  </NavLink>

                  <NavLink
                    to="/myReviews"
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-indigo-600 hover:bg-gray-50 rounded-md ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Reviews
                  </NavLink>

                  <NavLink
                    to="/myWatchlist"
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-indigo-600 hover:bg-gray-50 rounded-md ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Game WatchList
                  </NavLink>
                </>
              )}

              {/* Mobile Auth Section */}
              <div className="border-t pt-3 mt-3">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md mt-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="px-3 py-2 text-sm text-gray-600">
                      Welcome, {user?.displayName}
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
