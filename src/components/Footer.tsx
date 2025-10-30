import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import footerBackground from '@/assets/footer-background.jpg';

const Footer = () => {
  return (
    <footer 
      className="relative text-foreground"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-white">PrintYourGifts</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Transform your precious memories into beautiful personalized gifts. 
              High-quality printing with fast delivery across India.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-white/80 hover:text-accent transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/faqs" className="text-white/80 hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-white/80 hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white/80 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-white/80 hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-white/80 hover:text-accent transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80">+91-9391934534</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80">vinofyx@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/80">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 <span className="font-semibold text-accent">PrintYourGifts</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;