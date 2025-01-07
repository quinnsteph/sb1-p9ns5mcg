import React from 'react';
import { Music, Youtube } from 'lucide-react';
import type { SiteContent } from '../types/content';

interface AboutProps {
  content: SiteContent | null;
}

export function About({ content }: AboutProps) {
  return (
    <section className="py-20 px-4 md:px-8" data-netlify-visual-edit="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={content?.content.image || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
              alt="Artist performing" 
              className="rounded-lg shadow-xl"
              data-netlify-visual-edit="about-image"
            />
          </div>
          <div>
            <h2 className="text-4xl font-papyrus mb-6" data-netlify-visual-edit="about-title">
              {content?.content.title || 'About the Artist'}
            </h2>
            <p className="text-lg mb-6" data-netlify-visual-edit="about-description">
              {content?.content.description || 
                'With over two decades of musical experience, our artist brings a unique blend of folk and contemporary styles. Each performance is crafted to create an unforgettable experience that resonates with audiences worldwide.'}
            </p>
            <div className="flex gap-4">
              <button className="bg-accent hover:bg-accent/90 px-6 py-2 rounded-full flex items-center gap-2">
                <Music size={20} />
                Latest Tracks
              </button>
              <button className="border border-accent hover:bg-accent/10 px-6 py-2 rounded-full flex items-center gap-2">
                <Youtube size={20} />
                Watch Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}