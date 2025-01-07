import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Albums } from './components/Albums';
import { useSiteContent, useAlbums } from './hooks/useContent';

function App() {
  const { content: heroContent, loading: heroLoading } = useSiteContent('hero');
  const { content: aboutContent, loading: aboutLoading } =
    useSiteContent('about');
  const { albums, loading: albumsLoading } = useAlbums();

  if (heroLoading || aboutLoading || albumsLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-primary text-white font-crimson">
      <Hero content={heroContent} />
      <About content={aboutContent} />
      <Albums albums={albums} />

      <footer className="py-8 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} trying to get visual editor working.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
