import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cnuhbfuwvgpoohpmhmtl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNudWhiZnV3dmdwb29ocG1obXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NjM2MTcsImV4cCI6MjAyNzUzOTYxN30.5BKerf0LrLllNTxWD84n1ASHPtR6qHENVbbAmpLGNm4";

export const supabase = createClient(supabaseUrl, supabaseKey);
