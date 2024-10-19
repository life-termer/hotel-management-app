import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nfgevquafytlkkizgajt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZ2V2cXVhZnl0bGtraXpnYWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMjc0MzksImV4cCI6MjA0NDkwMzQzOX0.Sc0P6Ik-qK-KDGM7kbiFxRxqDrSuBqVO5T0xmlDbWJ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
