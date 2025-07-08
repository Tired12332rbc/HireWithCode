
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mljyprcrpkpttabajdwd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sanlwcmNycGtwdHRhYmFqZHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NjY5MjcsImV4cCI6MjA2NzU0MjkyN30.FS5EAsteIrE1BVG3kUJKz1clr1kdLZoRMZFonmQ0ZVo'

export const supabase = createClient(supabaseUrl, supabaseKey)
