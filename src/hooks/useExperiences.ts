import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Database } from '../lib/supabase'

type Experience = Database['public']['Tables']['experiences']['Row']

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchExperiences() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('experiences')
          .select('*')
          .order('start_date', { ascending: false })

        if (error) throw error
        setExperiences(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchExperiences()
  }, [])

  return { experiences, loading, error }
}