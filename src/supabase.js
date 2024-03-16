import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://kkwambaohkzyqvqactqf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrd2FtYmFvaGt6eXF2cWFjdHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1NjYxMzYsImV4cCI6MjAyNjE0MjEzNn0.2QBMe5GiBJslDQe4O6hX5EpkxmFAph2ZJFoaEFJbQNY";

export default createClient(supabaseUrl, supabaseAnonKey);