import { createClient } from '@supabase/supabase-js'
import invariant from 'tiny-invariant'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

invariant(supabaseUrl, 'Missing SUPABASE_URL env var')
invariant(supabaseAnonKey, 'Missing SUPABASE_ANON_KEY env var')

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  shouldThrowOnError: true,
  multiTab: true,
})
