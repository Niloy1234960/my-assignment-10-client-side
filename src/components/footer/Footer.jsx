import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // New X logo

const Footer = ({ isLoggedIn }) => {
  // Define links based on login status (optional, but good practice)
  const accountLinks = isLoggedIn
    ? [
        { name: 'Profile', href: '/profile' },
        { name: 'My Posts', href: '/my-posts' },
        { name: 'My Interests', href: '/my-interests' },
      ]
    : [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
      ];

  const quickLinks = [
    { name: 'All Crops', href: '/all-crops' },
    { name: 'How It Works', href: '#how-it-works' }, // or a dedicated page
    { name: 'Agro News', href: '#agro-news' },      // or a dedicated page
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Mission */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
            🌾KrishiLink
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Connecting farmers and buyers for a sustainable food future.
            </p>
            <p className="text-gray-400 text-sm">
              Support: <a href="mailto:support@projectname.com" className="hover:text-green-400">support@projectname.com</a>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Account/Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Account & Legal</h4>
            <ul className="space-y-2">
              {accountLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="#" aria-label="X (Twitter)" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaXTwitter /> 
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Project Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;