
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, MapPin, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SuccessStory {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  client_name?: string;
  destination_country?: string;
  is_featured: boolean;
}

const SuccessStories = () => {
  const { toast } = useToast();
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const { data, error } = await supabase
          .from('success_stories')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching success stories:', error);
          toast({
            title: "Error",
            description: "Failed to load success stories. Please try again.",
            variant: "destructive",
          });
          return;
        }

        setSuccessStories(data || []);
      } catch (error) {
        console.error('Unexpected error:', error);
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading success stories.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuccessStories();
  }, [toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600">Loading success stories...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const featuredStories = successStories.filter(story => story.is_featured);
  const regularStories = successStories.filter(story => !story.is_featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover inspiring journeys of students who achieved their international education dreams 
            with our expert guidance and support.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {successStories.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">No success stories available at the moment. Please check back later.</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Featured Success Stories */}
            {featuredStories.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Featured Success Stories</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredStories.map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {story.image_url && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={story.image_url}
                            alt={story.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-blue-900">{story.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          {story.client_name && (
                            <div className="flex items-center space-x-1">
                              <GraduationCap className="h-4 w-4" />
                              <span>{story.client_name}</span>
                            </div>
                          )}
                          {story.destination_country && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{story.destination_country}</span>
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-700">
                          {story.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Success Stories */}
            {regularStories.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
                  {featuredStories.length > 0 ? "More Success Stories" : "Our Success Stories"}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularStories.map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {story.image_url && (
                        <div className="h-40 overflow-hidden">
                          <img
                            src={story.image_url}
                            alt={story.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-900">{story.title}</CardTitle>
                        <div className="flex items-center justify-between text-xs text-gray-600">
                          {story.client_name && (
                            <div className="flex items-center space-x-1">
                              <GraduationCap className="h-3 w-3" />
                              <span>{story.client_name}</span>
                            </div>
                          )}
                          {story.destination_country && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{story.destination_country}</span>
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-700 text-sm line-clamp-4">
                          {story.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Statistics Section */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Our Impact in Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">2000+</div>
              <div className="text-blue-200">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Universities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-yellow-500 text-blue-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
            Join our community of successful students who have achieved their international education goals. 
            Let us help you write your own success story.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
              <a href="/appointment">Book Free Consultation</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              <a href="/contact">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessStories;
