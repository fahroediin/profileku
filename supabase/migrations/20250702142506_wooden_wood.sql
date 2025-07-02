/*
  # Portfolio Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `technologies` (text array)
      - `image_url` (text, nullable)
      - `demo_url` (text, nullable)
      - `github_url` (text, nullable)
      - `featured` (boolean, default false)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `experiences`
      - `id` (uuid, primary key)
      - `company` (text)
      - `position` (text)
      - `description` (text)
      - `start_date` (date)
      - `end_date` (date, nullable)
      - `current` (boolean, default false)
      - `location` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `certificates`
      - `id` (uuid, primary key)
      - `title` (text)
      - `issuer` (text)
      - `description` (text, nullable)
      - `issue_date` (date)
      - `credential_id` (text, nullable)
      - `credential_url` (text, nullable)
      - `image_url` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (since this is a portfolio)
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  image_url text,
  demo_url text,
  github_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  position text NOT NULL,
  description text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  current boolean DEFAULT false,
  location text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create certificates table
CREATE TABLE IF NOT EXISTS certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  issuer text NOT NULL,
  description text,
  issue_date date NOT NULL,
  credential_id text,
  credential_url text,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (portfolio data should be publicly readable)
CREATE POLICY "Anyone can read projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can read experiences"
  ON experiences
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can read certificates"
  ON certificates
  FOR SELECT
  TO public
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_experiences_updated_at
  BEFORE UPDATE ON experiences
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_certificates_updated_at
  BEFORE UPDATE ON certificates
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();