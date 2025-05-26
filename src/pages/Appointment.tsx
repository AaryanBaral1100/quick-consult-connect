
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Appointment = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Save appointment to Supabase
      const { data, error } = await supabase
        .from('appointments')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            preferred_date: formData.date,
            time_slot: formData.timeSlot,
            notes: formData.notes
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error saving appointment:', error);
        toast({
          title: "Error",
          description: "Failed to book appointment. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log('Appointment saved:', data);

      // Send confirmation email
      try {
        const emailResponse = await fetch('/api/send-appointment-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            date: formData.date,
            timeSlot: formData.timeSlot,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Email sending failed');
          // Don't show error to user as appointment was still saved
        }
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Don't show error to user as appointment was still saved
      }

      toast({
        title: "Appointment Booked!",
        description: "We've received your appointment request. We'll contact you soon to confirm.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        timeSlot: "",
        notes: ""
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Book Your Free Consultation</h1>
            <p className="text-gray-600">
              Schedule a consultation with our expert counselors to discuss your education goals.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-yellow-500" />
                <span>Appointment Details</span>
              </CardTitle>
              <CardDescription>
                Please fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Full Name *</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Phone Number *</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Appointment Scheduling */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="timeSlot" className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Preferred Time *</span>
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("timeSlot", value)} disabled={isLoading}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00-10:00">9:00 AM - 10:00 AM</SelectItem>
                        <SelectItem value="10:00-11:00">10:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11:00-12:00">11:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="14:00-15:00">2:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="15:00-16:00">3:00 PM - 4:00 PM</SelectItem>
                        <SelectItem value="16:00-17:00">4:00 PM - 5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Tell us about your education goals, preferred countries, or any specific questions..."
                    rows={4}
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold"
                  disabled={isLoading || !formData.name || !formData.email || !formData.phone || !formData.date || !formData.timeSlot}
                >
                  {isLoading ? "Booking..." : "Book Consultation"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <Card className="bg-blue-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What to Expect</h3>
                <ul className="text-left space-y-2 text-gray-200">
                  <li>• Free 30-minute consultation</li>
                  <li>• Personalized education pathway discussion</li>
                  <li>• University and country recommendations</li>
                  <li>• Scholarship opportunities</li>
                  <li>• Next steps planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Appointment;
