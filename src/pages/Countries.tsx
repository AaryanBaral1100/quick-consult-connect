
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, DollarSign, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Countries = () => {
  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      description: "Home to world's top universities with diverse programs and research opportunities.",
      highlights: ["Harvard, MIT, Stanford", "F-1 Student Visa", "OPT Work Options", "Research Opportunities"],
      costs: "$30,000 - $70,000/year",
      duration: "4 years (Bachelor's)"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      description: "Rich academic heritage with shorter degree programs and post-study work options.",
      highlights: ["Oxford, Cambridge", "Tier 4 Student Visa", "Graduate Route Visa", "3-year Bachelor's"],
      costs: "£15,000 - £40,000/year",
      duration: "3 years (Bachelor's)"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      description: "Quality education with affordable costs and excellent immigration pathways.",
      highlights: ["University of Toronto", "Study Permit", "PGWP Available", "PR Pathways"],
      costs: "CAD 20,000 - 35,000/year",
      duration: "4 years (Bachelor's)"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      description: "High-quality education with great lifestyle and post-study work opportunities.",
      highlights: ["Melbourne, Sydney Unis", "Student Visa 500", "PSW Visa", "Quality of Life"],
      costs: "AUD 25,000 - 45,000/year",
      duration: "3-4 years (Bachelor's)"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      description: "Low-cost education with strong engineering and technology programs.",
      highlights: ["TU Munich, Heidelberg", "Student Visa", "Job Search Visa", "Low/No Tuition"],
      costs: "€200 - €3,000/year",
      duration: "3 years (Bachelor's)"
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      description: "Quality education in a beautiful environment with friendly immigration policies.",
      highlights: ["University of Auckland", "Student Visa", "Post-Study Work", "Safe Environment"],
      costs: "NZD 25,000 - 40,000/year",
      duration: "3 years (Bachelor's)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Study Destinations</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore the best countries for international education. Each destination offers unique opportunities, 
            academic excellence, and pathways to your future career.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {countries.map((country, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <CardTitle className="text-blue-900">{country.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {country.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-yellow-500" />
                    <div>
                      <p className="text-xs text-gray-500">Annual Costs</p>
                      <p className="font-semibold text-sm">{country.costs}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="font-semibold text-sm">{country.duration}</p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900"
                  onClick={() => window.location.href = '/appointment'}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Learn More About {country.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-900 to-yellow-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Not Sure Which Country is Right for You?</h2>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Our expert counselors will help you choose the perfect destination based on your 
                academic goals, budget, and career aspirations.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={() => window.location.href = '/appointment'}
              >
                Get Personalized Guidance
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Countries;
