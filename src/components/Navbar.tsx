import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f0f10]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="gradient-text">Pratyay Ghosh</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link text-sm font-medium ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link text-sm font-medium ${isActive('/about')}`}>About</Link>
          <Link to="/portfolio" className={`nav-link text-sm font-medium ${isActive('/portfolio')}`}>Work</Link>
          <Link to="/blog" className={`nav-link text-sm font-medium ${isActive('/blog')}`}>Blog</Link>
          <Link to="/contact" className="btn btn-primary">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-[#0f0f10] shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="nav-link text-sm font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="nav-link text-sm font-medium py-2" onClick={toggleMenu}>About</Link>
            <Link to="/portfolio" className="nav-link text-sm font-medium py-2" onClick={toggleMenu}>Work</Link>
            <Link to="/blog" className="nav-link text-sm font-medium py-2" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="btn btn-primary w-full text-center" onClick={toggleMenu}>Contact</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
