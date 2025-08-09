import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://tftyxglqdlqxotnrdlex.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmdHl4Z2xxZGxxeG90bnJkbGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MDIxMjUsImV4cCI6MjA3MDA3ODEyNX0.P0eYo89Lt4Pgo5J0wA7C0uqexxcmiK99TiCoTtP7H0Y";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);