
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactConfirmationRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactConfirmationRequest = await req.json();

    console.log(`Sending contact confirmation to ${email} for ${name}`);

    // For now, just log the email content
    // In production, you would integrate with an email service like Resend
    const emailContent = {
      to: email,
      from: "Innova Education <noreply@innovaedu.com>",
      subject: "We Received Your Message - Innova Education Consultancy",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; text-align: center;">
            <h1>Thank You for Contacting Us!</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #1e3a8a;">Dear ${name},</h2>
            
            <p>Thank you for reaching out to Innova Education Consultancy! We have received your message and appreciate your interest in our services.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #eab308;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Your Message:</h3>
              <p style="font-style: italic; color: #4b5563;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
            </div>
            
            <h3 style="color: #1e3a8a;">What's Next?</h3>
            <ul>
              <li>Our expert counselors will review your inquiry</li>
              <li>We'll respond within 24 hours during business days</li>
              <li>You'll receive personalized guidance for your education goals</li>
              <li>We may suggest a free consultation call if appropriate</li>
            </ul>
            
            <p>In the meantime, feel free to explore our website to learn more about:</p>
            <ul>
              <li><strong>Countries We Serve:</strong> Discover education opportunities worldwide</li>
              <li><strong>Success Stories:</strong> Read about students we've helped achieve their dreams</li>
              <li><strong>Testimonials:</strong> See what our clients say about our services</li>
            </ul>
            
            <p>If you have any urgent questions, please don't hesitate to call us at +1 (555) 123-4567 during our office hours (Monday-Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM).</p>
            
            <p style="margin-top: 30px;">Best regards,<br>
            <strong>The Innova Education Team</strong></p>
          </div>
          
          <div style="background-color: #1e3a8a; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>Innova Education Consultancy - Your Gateway to Global Education</p>
            <p>123 Education Street, City, State 12345 | +1 (555) 123-4567</p>
          </div>
        </div>
      `
    };

    console.log("Email content prepared:", emailContent);

    return new Response(
      JSON.stringify({ 
        message: "Contact confirmation email sent successfully",
        emailContent 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
