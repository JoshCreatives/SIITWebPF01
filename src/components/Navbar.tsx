import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItem {
  title: string;
  dropdownItems?: { title: string; path: string }[];
  path?: string;
}

const navItems: NavItem[] = [
  {
    title: 'Admissions',
    dropdownItems: [
      { title: 'Admission Requirements', path: '/admissions/requirements' },
      { title: 'Online Application', path: '/admissions/apply' },
      { title: 'Alternative Payment Service', path: '/admissions/payment' },
      { title: 'Financial Assistance Program', path: '/admissions/financial-aid' },
    ],
  },
  {
    title: 'Programs',
    dropdownItems: [
      { title: 'College Programs', path: '/programs/college' },
      { title: 'Senior High School', path: '/programs/shs' },
    ],
  },
  {
    title: 'Life at SIIT',
    path: '/campus-life',
  },
  {
    title: 'SIIT Blog',
    path: '/blog',
  },
  {
    title: 'Alumni',
    dropdownItems: [
      { title: 'Alumni Stories', path: '/alumni/stories' },
      { title: 'Request for Academic Documents', path: '/alumni/documents' },
      { title: 'SIIT Alumni Association', path: '/alumni/association' },
    ],
  },
  {
    title: 'About SIIT',
    dropdownItems: [
      { title: 'History', path: '/about/history' },
      { title: 'Administration', path: '/about/administration' },
      { title: 'Campus Safety', path: '/about/safety' },
      { title: 'SIIT Foundation', path: '/about/foundation' },
      { title: 'SIIT Quality Management', path: '/about/quality' },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavigation = (path?: string) => {
    if (path) {
      window.location.href = path;
    }
  };

  const toggleMobileDropdown = (title: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === title ? null : title);
  };

  const handleMouseEnter = (title: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <motion.nav
      className={`bg-green-900 text-white ${
        isSticky ? 'sticky top-0 z-50 shadow-lg' : ''
      }`}
      initial={{ y: 0 }}
      animate={{ y: isSticky ? 0 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img src="/SchoolLogo.png" alt="SIIT Logo" className="h-10 w-10" />
            <a href="/" className="text-xl font-bold hover:text-green-200 transition-colors">
              Siargao Island Institute of Technology
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdownItems ? (
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium hover:text-green-200 transition-colors"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.path}
                    className="flex items-center px-4 py-2 text-sm font-medium hover:text-green-200 transition-colors"
                  >
                    {item.title}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdownItems && (
                  <motion.div
                    className="absolute z-50 left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: activeDropdown === item.title ? 1 : 0,
                      y: activeDropdown === item.title ? 0 : -10,
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    {activeDropdown === item.title && (
                      <>
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.title}
                            href={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 transition-colors"
                          >
                            {dropdownItem.title}
                          </a>
                        ))}
                      </>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-green-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden py-4"
            >
              {navItems.map((item) => (
                <div key={item.title} className="mb-2">
                  {item.dropdownItems ? (
                    <div>
                      <button
                        className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium hover:bg-green-800 rounded-md"
                        onClick={() => toggleMobileDropdown(item.title)}
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileActiveDropdown === item.title ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileActiveDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="mt-2 ml-4 space-y-2"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <a
                                key={dropdownItem.title}
                                href={dropdownItem.path}
                                className="block px-3 py-2 text-sm text-green-200 hover:text-white hover:bg-green-800 rounded-md"
                              >
                                {dropdownItem.title}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.path}
                      className="block px-3 py-2 text-sm font-medium hover:bg-green-800 rounded-md"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;