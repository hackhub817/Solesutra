import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition duration-300">
            SoleSutra
          </h2>
          <p className="text-sm leading-6">
            Your one-stop shop for amazing deals across all categories. Shop
            smart, save more, and order easily on WhatsApp.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              Categories
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition duration-300">
              <a
                href="https://wa.me/9236074373
"
                target="_blank"
                rel="noreferrer"
                className=" hover:scale-110 transition-transform duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" /> +91 92360 74373
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> solesutra.in@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> 123 Market Street,
              New Delhi, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/solesutra.in?igsh=MnptcDFrbno2ZXRz"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9236074373
"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComp;
