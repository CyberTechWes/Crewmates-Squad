import { createClient } from '@supabase/supabase-js'
 
const SUPABASE_URL = 'https://ojtiroqkeqdbeyjfvxhj.supabase.co'
const SUPABASE_KEY = 'sb_publishable_goHrTTqR7IE6ZXaQJcuonA_r4ZuZokI'
 
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
