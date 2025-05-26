
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/c36b1cfb-0be2-49c8-b0f9-ba65029ef7d0.png" 
              alt="Innova Education Consultancy" 
              className="w-32 h-32 rounded-full shadow-2xl"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Your Gateway to Global Education
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Expert guidance for studying abroad. From university selection to visa processing, 
            we make your international education dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive education consultancy services to guide you through every step of your journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-blue-900">University Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find the perfect university that matches your academic goals and career aspirations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Visa Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert assistance with visa applications and documentation for a smooth process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Scholarship Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Identify and apply for scholarships to make your education more affordable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Pre-Departure Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete support for accommodation, travel, and settling into your new country.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Innova?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-full p-2 mt-1">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Expert Counselors</h3>
                    <p className="text-gray-600">Our experienced team has helped thousands of students achieve their dreams.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-full p-2 mt-1">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Global Network</h3>
                    <p className="text-gray-600">Partnerships with top universities and institutions worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-full p-2 mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">Tailored guidance based on your individual goals and preferences.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 to-yellow-500 p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 opacity-90">
                Book a free consultation with our expert counselors today.
              </p>
              <Link to="/appointment">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
