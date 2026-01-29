import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold"
            >
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                N
              </span>
              <span>Nexus</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link
                to="/home"
                className={`hover:text-blue-400 transition-colors ${isActive("/home") ? "text-blue-400" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:text-blue-400 transition-colors ${isActive("/about") ? "text-blue-400" : ""}`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`hover:text-blue-400 transition-colors ${isActive("/services") ? "text-blue-400" : ""}`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`hover:text-blue-400 transition-colors ${isActive("/contact") ? "text-blue-400" : ""}`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-xl font-bold"
              >
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  N
                </span>
                <span>Nexus</span>
              </Link>
              <p className="text-slate-400 text-sm">
                Empowering businesses with innovative technology solutions since
                2012.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <Link
                  to="/about"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm">
                <Link
                  to="/services"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Cloud Solutions
                </Link>
                <Link
                  to="/services"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Data Analytics
                </Link>
                <Link
                  to="/services"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Cybersecurity
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2024 Nexus Corp. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
