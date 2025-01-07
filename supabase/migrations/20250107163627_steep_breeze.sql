/*
  # Add initial content
  
  1. Content Added
    - Hero section content
    - About section content
    - Initial albums
*/

-- Insert hero content
INSERT INTO site_content (section, content) VALUES (
  'hero',
  jsonb_build_object(
    'title', 'Sarah Anderson',
    'subtitle', 'New Album "Ethereal Dreams" Out Now',
    'backgroundImage', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  )
);

-- Insert about content
INSERT INTO site_content (section, content) VALUES (
  'about',
  jsonb_build_object(
    'title', 'About Sarah',
    'description', 'With over two decades of musical experience, Sarah Anderson brings a unique blend of folk and contemporary styles. Each performance is crafted to create an unforgettable experience that resonates with audiences worldwide.',
    'image', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  )
);

-- Insert initial albums
INSERT INTO albums (title, release_date, cover_image) VALUES
  ('Ethereal Dreams', '2024-01-01', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
  ('Midnight Whispers', '2023-06-15', 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'),
  ('Sunlit Memories', '2023-01-20', 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');