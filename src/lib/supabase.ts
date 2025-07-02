import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string
          technologies: string[]
          image_url: string | null
          demo_url: string | null
          github_url: string | null
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          technologies: string[]
          image_url?: string | null
          demo_url?: string | null
          github_url?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          technologies?: string[]
          image_url?: string | null
          demo_url?: string | null
          github_url?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      experiences: {
        Row: {
          id: string
          company: string
          position: string
          description: string
          start_date: string
          end_date: string | null
          current: boolean
          location: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company: string
          position: string
          description: string
          start_date: string
          end_date?: string | null
          current?: boolean
          location: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company?: string
          position?: string
          description?: string
          start_date?: string
          end_date?: string | null
          current?: boolean
          location?: string
          created_at?: string
          updated_at?: string
        }
      }
      certificates: {
        Row: {
          id: string
          title: string
          issuer: string
          description: string | null
          issue_date: string
          credential_id: string | null
          credential_url: string | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          issuer: string
          description?: string | null
          issue_date: string
          credential_id?: string | null
          credential_url?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          issuer?: string
          description?: string | null
          issue_date?: string
          credential_id?: string | null
          credential_url?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}