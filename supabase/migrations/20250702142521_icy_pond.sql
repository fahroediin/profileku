/*
  # Sample Data for Portfolio

  This migration adds sample data for testing the portfolio application.
  You can modify or remove this data and add your own.
*/

-- Insert sample projects
INSERT INTO projects (title, description, technologies, image_url, demo_url, github_url, featured) VALUES
(
  'E-Commerce Platform',
  'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.',
  '{"React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"}',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  'https://example.com/demo',
  'https://github.com/johndoe/ecommerce',
  true
),
(
  'Task Management App',
  'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
  '{"React", "TypeScript", "Supabase", "Tailwind CSS"}',
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  'https://example.com/taskapp',
  'https://github.com/johndoe/taskapp',
  true
),
(
  'Weather Dashboard',
  'A responsive weather dashboard that displays current weather conditions, forecasts, and weather maps using external APIs.',
  '{"Vue.js", "JavaScript", "OpenWeather API", "Chart.js"}',
  'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
  'https://example.com/weather',
  'https://github.com/johndoe/weather',
  false
);

-- Insert sample experiences
INSERT INTO experiences (company, position, description, start_date, end_date, current, location) VALUES
(
  'TechCorp Inc.',
  'Senior Full Stack Developer',
  'Led development of multiple web applications using React, Node.js, and PostgreSQL. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality software solutions.',
  '2022-01-01',
  null,
  true,
  'San Francisco, CA'
),
(
  'StartupXYZ',
  'Frontend Developer',
  'Developed responsive web applications using React and Vue.js. Worked closely with designers to implement pixel-perfect UI components and improved application performance by 40%.',
  '2020-06-01',
  '2021-12-31',
  false,
  'Remote'
),
(
  'Digital Agency Pro',
  'Junior Web Developer',
  'Built websites and web applications for various clients using HTML, CSS, JavaScript, and PHP. Gained experience in project management and client communication.',
  '2019-01-01',
  '2020-05-31',
  false,
  'New York, NY'
);

-- Insert sample certificates
INSERT INTO certificates (title, issuer, description, issue_date, credential_id, credential_url) VALUES
(
  'AWS Certified Solutions Architect',
  'Amazon Web Services',
  'Professional certification demonstrating expertise in designing distributed systems on AWS.',
  '2023-06-15',
  'AWS-ASA-12345',
  'https://aws.amazon.com/verification'
),
(
  'React Developer Certification',
  'Meta',
  'Advanced certification covering React fundamentals, hooks, state management, and best practices.',
  '2023-03-20',
  'META-REACT-67890',
  'https://meta.com/certificates'
),
(
  'JavaScript Algorithms and Data Structures',
  'freeCodeCamp',
  'Comprehensive course covering JavaScript fundamentals, ES6, data structures, and algorithm design.',
  '2022-11-10',
  'FCC-JS-54321',
  'https://freecodecamp.org/certification'
);