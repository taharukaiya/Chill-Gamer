const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="w-11/12 sm:w-10/12 mx-auto text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Website Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Chill Gamer</h3>
              <p className="text-gray-400">
                Your ultimate destination for game reviews and recommendations.
                Share your gaming experiences with the community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/reviews" className="hover:text-white">
                    All Reviews
                  </a>
                </li>
                <li>
                  <a href="/addReview" className="hover:text-white">
                    Add Review
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-gray-400">
                <p>Email: info@chillgamer.com</p>
                <p>Follow us on social media for updates</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Chill Gamer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
