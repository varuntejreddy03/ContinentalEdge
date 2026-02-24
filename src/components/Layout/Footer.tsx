import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, ArrowUpRight, Linkedin, Twitter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Brand/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/sandeepassociates', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' }
  ];

  return (
    <footer className="bg-studio-dark text-white border-t border-white/5">
      {/* Upper Footer - Large Brand Text */}
      <div className="py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
          >
            <div className="space-y-6">
              <div className="md:hidden">
                <Logo size={40} />
              </div>
              <div className="hidden md:block">
                <Logo size={60} />
              </div>
              <p className="text-slate-400 max-w-sm font-light leading-relaxed">
                A premier architectural and interior design studio dedicated to crafting spaces that redefine modern living.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Inquiries</p>
              <button
                onClick={() => navigate('/contact')}
                className="text-3xl md:text-4xl font-serif font-bold hover:text-primary transition-colors flex items-center gap-4 group text-left"
              >
                Let's Talk
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Location</h4>
              <div className="flex gap-4 text-slate-400 group cursor-pointer">
                <MapPin className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:bounce" />
                <p className="text-sm font-light leading-relaxed group-hover:text-white transition-colors">
                  D.No: 46-2-4, 1st Floor, Near Ramakrishna Theatre, <br />
                  Danavaipeta, Rajamahendravaram - 533103, <br />
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Get In Touch</h4>
            <div className="space-y-4">
              <a href="tel:+918121666611" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 81216 66611</span>
              </a>
              {/* Removed Email Support */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-primary transition-colors text-sm font-light flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: '#c1a96c', color: '#000' }}
                  className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-white/5 bg-studio-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
            &copy; {currentYear} Sandeep Associates. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
