import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { SiteContent, Album } from '../types/content';

export function useSiteContent(section: string) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('*')
          .eq('section', section)
          .single();

        if (error) throw error;
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [section]);

  return { content, loading, error };
}

export function useAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const { data, error } = await supabase
          .from('albums')
          .select('*')
          .order('release_date', { ascending: false });

        if (error) throw error;
        setAlbums(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchAlbums();
  }, []);

  return { albums, loading, error };
}