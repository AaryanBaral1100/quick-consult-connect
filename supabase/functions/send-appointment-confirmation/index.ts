
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentConfirmationRequest {
  name: string;
  email: string;
  date: string;
  timeSlot: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, date, timeSlot }: AppointmentConfirmationRequest = await req.json();

    // Format the date for display
    const appointmentDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    console.log(`Sending appointment confirmation to ${email} for ${name}`);

    // For now, just log the email content
    // In production, you would integrate with an email service like Resend
    const emailContent = {
      to: email,
      from: "Innova Education <noreply@innovaedu.com>",
      subject: "Appointment Confirmation - Innova Education Consultancy",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; text-align: center;">
            <h1>Appointment Confirmed!</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #1e3a8a;">Dear ${name},</h2>
            
            <p>Thank you for booking a consultation with Innova Education Consultancy!</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #eab308;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Appointment Details:</h3>
              <p><strong>Date:</strong> ${appointmentDate}</p>
              <p><strong>Time:</strong> ${timeSlot}</p>
              <p><strong>Duration:</strong> 30 minutes</p>
              <p><strong>Type:</strong> Free Consultation</p>
            </div>
            
            <h3 style="color: #1e3a8a;">What to Expect:</h3>
            <ul>
              <li>Personalized education pathway discussion</li>
              <li>University and country recommendations</li>
              <li>Scholarship opportunities guidance</li>
              <li>Visa and application process overview</li>
              <li>Next steps planning</li>
            </ul>
            
            <p>Our expert counselor will contact you at the scheduled time. Please ensure you're available at the provided phone number.</p>
            
            <p>If you need to reschedule or have any questions, please don't hesitate to contact us at <a href="mailto:info@innovaedu.com">info@innovaedu.com</a> or call us at +1 (555) 123-4567.</p>
            
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
        message: "Appointment confirmation email sent successfully",
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
    console.error("Error in send-appointment-confirmation function:", error);
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
