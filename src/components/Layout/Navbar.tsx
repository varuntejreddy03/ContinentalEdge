import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Brand/Logo';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-xl h-20 shadow-2xl border-b border-black/5 dark:border-white/5' : 'bg-transparent h-24 md:h-28'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
          <Link to="/" className="transition-transform duration-500 hover:scale-105 active:scale-95 z-50">
            <Logo size={window.innerWidth < 768 ? 36 : 48} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                className={`relative text-[10px] font-black tracking-[0.3em] hover:text-primary transition-all uppercase group ${location.pathname === item.path ? 'text-primary' : 'dark:text-white'}`}
                to={item.path}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-primary transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-white hover:text-surfaceDark text-surfaceDark px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-all hidden lg:block rounded-sm shadow-xl"
            >
              Start Project
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 text-slate-900 dark:text-white hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[40] bg-white dark:bg-surfaceDark md:hidden flex flex-col justify-center px-10"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none select-none">
              <h2 className="text-[30vw] font-serif font-black leading-none uppercase">Menu</h2>
            </div>

            <div className="space-y-12 relative z-10">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`text-5xl font-serif font-black tracking-tighter uppercase transition-colors ${location.pathname === item.path ? 'text-primary' : 'dark:text-white hover:text-primary'}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-10"
              >
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-primary text-surfaceDark py-6 text-xs font-black tracking-[0.4em] uppercase rounded-sm flex items-center justify-center gap-4"
                >
                  Start A Project
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>

            <div className="absolute bottom-10 left-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">Continental Edge Studio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
