import { createClient } from "@supabase/supabase-js";

const supabseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; 

const supabase = createClient(supabseUrl, supabaseKey);

export default supabase;

createClient()