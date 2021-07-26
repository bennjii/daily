import { createClient } from '@supabase/supabase-js'
const supabase = createClient("https://bsoejeacdgfenbbqaaxq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzI1Nzk1NSwiZXhwIjoxOTQyODMzOTU1fQ.-opwPTFuhsgtIDuP3X6WAwL-ylwTghSyhSMei03kBbg") 

export { supabase };