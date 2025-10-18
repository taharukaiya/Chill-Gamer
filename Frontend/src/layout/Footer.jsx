import { Link } from "react-router-dom";
import {
  FaGamepad,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <FaGamepad className="text-indigo-400 text-2xl" />
                <h3 className="text-2xl font-bold text-white">Chill Gamer</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Your ultimate destination for authentic game reviews and
                recommendations. Join our community of passionate gamers sharing
                honest experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  <FaDiscord className="text-xl" />
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reviews"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    All Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addReview"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Add Review
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myWatchlist"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    My Watchlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaEnvelope className="text-indigo-400" />
                  <span>info@chillgamer.com</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Have questions or suggestions? We'd love to hear from you!
                  Reach out to our team anytime.
                </p>
                <div className="mt-4">
                  <Link
                    to=""
                    className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <FaEnvelope />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; 2025 Chill Gamer. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>for gamers worldwide</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                to=""
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to=""
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
