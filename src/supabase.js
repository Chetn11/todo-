import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://kkwambaohkzyqvqactqf.supabase.co";
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export default createClient(supabaseUrl, supabaseAnonKey);