
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/c36b1cfb-0be2-49c8-b0f9-ba65029ef7d0.png" 
                alt="Innova" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold">INNOVA</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in achieving international education goals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/countries" className="text-gray-300 hover:text-yellow-400 transition-colors">Countries</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="/success-stories" className="text-gray-300 hover:text-yellow-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">University Selection</li>
              <li className="text-gray-300">Visa Processing</li>
              <li className="text-gray-300">Scholarship Guidance</li>
              <li className="text-gray-300">Pre-Departure Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@innovaedu.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">123 Education St, City, Country</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Innova Education Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
