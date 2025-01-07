import React from 'react';
import { Play, Disc } from 'lucide-react';
import type { Album } from '../types/content';

interface AlbumsProps {
  albums: Album[];
}

export function Albums({ albums }: AlbumsProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/30" data-netlify-visual-edit="albums">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-papyrus mb-12 text-center">Latest Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.length > 0 ? albums.map((album) => (
            <div key={album.id} className="bg-primary p-6 rounded-lg shadow-xl" data-netlify-visual-edit={`album-${album.id}`}>
              <div className="aspect-square bg-accent/20 rounded-lg mb-4 overflow-hidden">
                {album.cover_image ? (
                  <img 
                    src={album.cover_image} 
                    alt={album.title}
                    className="w-full h-full object-cover"
                    data-netlify-visual-edit={`album-cover-${album.id}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Disc size={48} className="text-accent" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2" data-netlify-visual-edit={`album-title-${album.id}`}>
                {album.title}
              </h3>
              <p className="text-gray-400 mb-4">
                Released: {new Date(album.release_date).getFullYear()}
              </p>
              <button className="w-full bg-accent hover:bg-accent/90 py-2 rounded-full flex items-center justify-center gap-2">
                <Play size={16} />
                Listen Now
              </button>
            </div>
          )) : (
            <div className="col-span-3 text-center text-gray-400">
              No albums available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}