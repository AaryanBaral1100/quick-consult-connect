// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aomikcvimxphtvvncvvv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbWlrY3ZpbXhwaHR2dm5jdnZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMzM2NTIsImV4cCI6MjA2MzgwOTY1Mn0.30XUXltRuX6PsRwRFMbiPPEm7JJF-x7iIZ7c4GWB-B0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);