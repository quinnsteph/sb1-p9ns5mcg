/*
  # Content Management System Schema

  1. New Tables
    - `site_content`
      - `id` (uuid, primary key)
      - `section` (text) - identifies the section (hero, about, etc.)
      - `content` (jsonb) - stores structured content
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `albums`
      - `id` (uuid, primary key)
      - `title` (text)
      - `release_date` (date)
      - `cover_image` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create site_content table
CREATE TABLE IF NOT EXISTS site_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL,
  content jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create albums table
CREATE TABLE IF NOT EXISTS albums (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  release_date date NOT NULL,
  cover_image text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE albums ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on site_content"
  ON site_content
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on albums"
  ON albums
  FOR SELECT
  TO public
  USING (true);

-- Create policies for authenticated admin write access
CREATE POLICY "Allow authenticated write access on site_content"
  ON site_content
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated write access on albums"
  ON albums
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);