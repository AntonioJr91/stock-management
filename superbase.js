import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jwtncfelohgsnuzbshjw.supabase.co' // substitua pela URL do seu projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dG5jZmVsb2hnc251emJzaGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNTc0OTYsImV4cCI6MjA2MDkzMzQ5Nn0.RcnesFveYY32rwXIWv0oQ6f0scVk6OW6T1_2Gsu9URg'        // substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey)
