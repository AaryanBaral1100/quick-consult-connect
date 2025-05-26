
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c5d7?w=150&h=150&fit=crop&crop=face",
      university: "Harvard University, USA",
      course: "Master's in Computer Science",
      rating: 5,
      message: "Innova made my dream of studying at Harvard a reality. Their guidance through the entire process was exceptional, from university selection to visa processing."
    },
    {
      name: "Ahmed Rahman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      university: "University of Oxford, UK",
      course: "PhD in Engineering",
      rating: 5,
      message: "The team at Innova helped me secure a full scholarship for my PhD at Oxford. Their expertise in scholarship applications is unmatched."
    },
    {
      name: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      university: "University of Toronto, Canada",
      course: "Bachelor's in Business",
      rating: 5,
      message: "From the first consultation to landing in Toronto, Innova supported me every step of the way. I couldn't have done it without them."
    },
    {
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      university: "University of Melbourne, Australia",
      course: "Master's in Data Science",
      rating: 5,
      message: "Innova's counselors are incredibly knowledgeable about different countries and universities. They helped me find the perfect program in Australia."
    },
    {
      name: "Priya Patel",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      university: "Technical University Munich, Germany",
      course: "Master's in Mechanical Engineering",
      rating: 5,
      message: "The visa process seemed overwhelming until I worked with Innova. They made everything clear and helped me prepare all documents perfectly."
    },
    {
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      university: "University of Auckland, New Zealand",
      course: "Bachelor's in Environmental Science",
      rating: 5,
      message: "Innova didn't just help with admissions - they prepared me for life abroad. Their pre-departure support was invaluable."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Student Success Stories</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who achieved their dreams of studying abroad with our guidance. 
            Their stories inspire us to continue helping more students reach their goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-yellow-500 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Message */}
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.message}"
                </p>
                
                {/* Student Info */}
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                    <p className="text-sm text-yellow-600 font-medium">{testimonial.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">2000+</div>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">25+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
              <p className="text-gray-600">Partner Universities</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">98%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-900 to-yellow-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Join thousands of successful students who trusted us with their international education journey.
              </p>
              <button 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.location.href = '/appointment'}
              >
                Start Your Journey Today
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonials;
