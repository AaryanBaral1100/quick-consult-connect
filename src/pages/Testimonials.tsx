
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Testimonial {
  id: string;
  client_name: string;
  client_image_url?: string;
  message: string;
  rating: number;
  destination_country?: string;
  is_featured: boolean;
}

const Testimonials = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching testimonials:', error);
          toast({
            title: "Error",
            description: "Failed to load testimonials. Please try again.",
            variant: "destructive",
          });
          return;
        }

        setTestimonials(data || []);
      } catch (error) {
        console.error('Unexpected error:', error);
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading testimonials.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, [toast]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600">Loading testimonials...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const featuredTestimonials = testimonials.filter(t => t.is_featured);
  const regularTestimonials = testimonials.filter(t => !t.is_featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Quote className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl font-bold mb-4">Student Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Hear from our successful students who achieved their dreams of studying abroad 
            with Innova Education Consultancy.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {testimonials.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">No testimonials available at the moment. Please check back later.</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Featured Testimonials */}
            {featuredTestimonials.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Featured Success Stories</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredTestimonials.map((testimonial) => (
                    <Card key={testimonial.id} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          {testimonial.client_image_url ? (
                            <img
                              src={testimonial.client_image_url}
                              alt={testimonial.client_name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                              <span className="text-blue-900 font-bold text-lg">
                                {testimonial.client_name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold">{testimonial.client_name}</h3>
                            {testimonial.destination_country && (
                              <p className="text-blue-200 text-sm">{testimonial.destination_country}</p>
                            )}
                          </div>
                        </div>
                        
                        <Quote className="h-6 w-6 text-yellow-400 mb-2" />
                        <p className="text-blue-100 mb-4 italic">"{testimonial.message}"</p>
                        
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Testimonials */}
            {regularTestimonials.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
                  {featuredTestimonials.length > 0 ? "More Student Experiences" : "Student Experiences"}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {regularTestimonials.map((testimonial) => (
                    <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          {testimonial.client_image_url ? (
                            <img
                              src={testimonial.client_image_url}
                              alt={testimonial.client_name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {testimonial.client_name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-blue-900">{testimonial.client_name}</h3>
                            {testimonial.destination_country && (
                              <p className="text-gray-600 text-sm">{testimonial.destination_country}</p>
                            )}
                          </div>
                        </div>
                        
                        <Quote className="h-6 w-6 text-yellow-500 mb-2" />
                        <p className="text-gray-700 mb-4 italic">"{testimonial.message}"</p>
                        
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center bg-yellow-500 text-blue-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have achieved their international education dreams with our expert guidance.
          </p>
          <div className="space-x-4">
            <a
              href="/appointment"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Start Your Journey
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
            >
              Get More Info
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonials;
