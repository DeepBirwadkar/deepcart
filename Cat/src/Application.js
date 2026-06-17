import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wtxuqbmbwpeutqznwkmn.supabase.co";


const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eHVxYm1id3BldXRxem53a21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMzY5NDcsImV4cCI6MjA5NjgxMjk0N30.4xithixgPbNtTscjcAcPasUqX4Y24dUm3QR9Z3eEJu0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);