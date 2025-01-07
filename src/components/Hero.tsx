import React from 'react';
import { Play } from 'lucide-react';
import type { SiteContent } from '../types/content';

interface HeroProps {
  content: SiteContent | null;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative h-screen-90 flex items-center justify-center" data-netlify-visual-edit="hero">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${content?.content.backgroundImage || 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'}")`,
          filter: 'brightness(0.5)'
        }}
        data-netlify-visual-edit="hero-background"
      />
      <div className="relative z-10 text-center">
        <h1 className="font-papyrus text-6xl md:text-8xl mb-4" data-netlify-visual-edit="hero-title">
          {content?.content.title || 'Artist Name'}
        </h1>
        <p className="text-xl md:text-2xl italic" data-netlify-visual-edit="hero-subtitle">
          {content?.content.subtitle || 'New Album Out Now'}
        </p>
        <button className="mt-8 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
          <Play size={20} />
          Listen Now
        </button>
      </div>
    </section>
  );
}