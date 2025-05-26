
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, GraduationCap, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Country {
  id: string;
  name: string;
  description: string;
  flag_image_url?: string;
  display_order: number;
}

const Countries = () => {
  const { toast } = useToast();
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data, error } = await supabase
          .from('countries')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching countries:', error);
          toast({
            title: "Error",
            description: "Failed to load countries. Please try again.",
            variant: "destructive",
          });
          return;
        }

        setCountries(data || []);
      } catch (error) {
        console.error('Unexpected error:', error);
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading countries.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [toast]);

  // Country flag emojis as fallback
  const getCountryFlag = (countryName: string) => {
    const flags: { [key: string]: string } = {
      'United States': '🇺🇸',
      'Canada': '🇨🇦',
      'United Kingdom': '🇬🇧',
      'Australia': '🇦🇺',
      'Germany': '🇩🇪',
      'New Zealand': '🇳🇿',
      'France': '🇫🇷',
      'Netherlands': '🇳🇱',
      'Switzerland': '🇨🇭',
      'Sweden': '🇸🇪'
    };
    return flags[countryName] || '🌍';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600">Loading countries...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl font-bold mb-4">Study Destinations</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore world-class education opportunities across the globe. 
            We help you find the perfect destination for your academic journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{countries.length}+</h3>
              <p className="text-gray-600">Countries We Serve</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">500+</h3>
              <p className="text-gray-600">University Partners</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">2000+</h3>
              <p className="text-gray-600">Students Placed</p>
            </CardContent>
          </Card>
        </div>

        {/* Countries Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Popular Study Destinations</h2>
          
          {countries.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600">No countries available at the moment. Please check back later.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((country) => (
                <Card key={country.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-4xl">
                        {country.flag_image_url ? (
                          <img 
                            src={country.flag_image_url} 
                            alt={`${country.name} flag`}
                            className="w-10 h-8 object-cover rounded"
                          />
                        ) : (
                          getCountryFlag(country.name)
                        )}
                      </span>
                      <span className="text-blue-900">{country.name}</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                      {country.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Application Difficulty:</span>
                        <span className="font-medium text-green-600">Moderate</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Avg. Processing Time:</span>
                        <span className="font-medium">3-6 months</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Work Permit:</span>
                        <span className="font-medium text-blue-600">Available</span>
                      </div>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900"
                    >
                      <a href="/appointment">Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Book a free consultation with our expert counselors to discuss your education goals 
            and find the perfect destination for your studies.
          </p>
          <div className="space-x-4">
            <Button 
              asChild
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900"
            >
              <a href="/appointment">Book Free Consultation</a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Countries;
