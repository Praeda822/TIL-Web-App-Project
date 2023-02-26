import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhkwoxyioeepndfsdzdu.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impoa3dveHlpb2VlcG5kZnNkemR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5Mzk4NjksImV4cCI6MTk5MjUxNTg2OX0.qU0VmCyb3u2ypyhfiEhhJDoXDpHN_6_74jNu71tPtDE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
