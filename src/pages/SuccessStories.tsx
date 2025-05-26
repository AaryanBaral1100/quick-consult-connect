
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Trophy, Target, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SuccessStories = () => {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      title: "From Local College to MIT: Sarah's Journey",
      student: "Sarah Johnson",
      achievement: "Admitted to MIT with Full Scholarship",
      country: "USA",
      year: "2023",
      description: "Sarah came to us with a dream but limited resources. Through our scholarship guidance program, she secured a full ride to MIT for her Master's in Computer Science.",
      highlights: ["Full Scholarship Worth $200,000", "GRE Score Improvement: 310 to 335", "5 University Acceptances"],
      challenge: "Limited financial resources and average test scores",
      solution: "Intensive test prep, scholarship research, and compelling personal statement crafting"
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      title: "Breaking Barriers: Ahmed's Oxford PhD",
      student: "Ahmed Rahman",
      achievement: "PhD at Oxford University",
      country: "UK",
      year: "2023",
      description: "Despite coming from a non-English speaking background, Ahmed secured admission to Oxford's prestigious Engineering PhD program with our comprehensive support.",
      highlights: ["Oxford University PhD Admission", "Research Funding Secured", "IELTS Score: 6.0 to 8.5"],
      challenge: "Language barriers and complex PhD application process",
      solution: "Intensive English training, research proposal development, and interview preparation"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      title: "From Engineer to MBA: Maria's Career Pivot",
      student: "Maria Garcia",
      achievement: "MBA at University of Toronto",
      country: "Canada",
      year: "2022",
      description: "Maria successfully transitioned from engineering to business with our career pivot strategy, landing at one of Canada's top MBA programs.",
      highlights: ["Top 10 MBA Program", "Career Change Success", "$50,000 Scholarship"],
      challenge: "Career transition from engineering to business",
      solution: "Strategic profile building, MBA essay optimization, and interview coaching"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Tech Dreams Realized: David's Australian Adventure",
      student: "David Chen",
      achievement: "Master's in Data Science at University of Melbourne",
      country: "Australia",
      year: "2023",
      description: "David's passion for data science led him to Melbourne, where he's now excelling in one of Australia's premier tech programs.",
      highlights: ["Top University Admission", "Internship at Tech Giant", "PR Pathway Secured"],
      challenge: "Competitive admission requirements and visa complexities",
      solution: "Portfolio development, application strategy, and visa guidance"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      title: "Engineering Excellence: Priya's German Success",
      student: "Priya Patel",
      achievement: "Master's at Technical University Munich",
      country: "Germany",
      year: "2022",
      description: "Priya chose Germany for its engineering excellence and affordable education. She's now thriving in one of Europe's top technical universities.",
      highlights: ["Zero Tuition Fees", "Industry Internship", "German Language Proficiency"],
      challenge: "Language requirements and cultural adaptation",
      solution: "German language training, cultural preparation, and ongoing support"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      title: "Environmental Champion: James in New Zealand",
      student: "James Wilson",
      achievement: "Environmental Science at University of Auckland",
      country: "New Zealand",
      year: "2023",
      description: "James combined his passion for the environment with quality education in New Zealand's stunning natural setting.",
      highlights: ["Research Opportunities", "Environmental Focus", "Quality of Life"],
      challenge: "Finding the right program for environmental studies",
      solution: "Program research, university partnerships, and application optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Success Stories</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Every student's journey is unique. These detailed success stories showcase how our personalized 
            approach helps students overcome challenges and achieve their international education goals.
          </p>
        </div>

        {/* Success Stories */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-80 lg:h-auto">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      {story.country} • {story.year}
                    </Badge>
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{story.title}</h2>
                  <p className="text-lg font-semibold text-gray-700 mb-4">{story.achievement}</p>
                  
                  <p className="text-gray-600 mb-6">{story.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {story.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">Challenge</h5>
                      <p className="text-sm text-red-700">{story.challenge}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">Our Solution</h5>
                      <p className="text-sm text-green-700">{story.solution}</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-yellow-500 hover:bg-yellow-400 text-blue-900"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Start Your Success Story
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-900 to-yellow-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Your Success Story Starts Here</h2>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Every success story began with a single step. Take yours today and let us help you 
                overcome challenges and achieve your international education dreams.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={() => window.location.href = '/appointment'}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessStories;
