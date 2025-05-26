
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c36b1cfb-0be2-49c8-b0f9-ba65029ef7d0.png" 
              alt="Innova" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-blue-900">INNOVA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link to="/countries" className="text-gray-700 hover:text-blue-900 transition-colors">
              Countries
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-900 transition-colors">
              Testimonials
            </Link>
            <Link to="/success-stories" className="text-gray-700 hover:text-blue-900 transition-colors">
              Success Stories
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
            <Link to="/appointment">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/countries" 
                className="text-gray-700 hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Countries
              </Link>
              <Link 
                to="/testimonials" 
                className="text-gray-700 hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/success-stories" 
                className="text-gray-700 hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link to="/appointment" onClick={() => setIsOpen(false)}>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 w-full">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
