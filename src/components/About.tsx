import React from 'react'
import { Code, Palette, Zap, Users } from 'lucide-react'

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, Supabase'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, User Research, Prototyping'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Git, Agile, Team Leadership, Communication'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm a passionate developer with over 5 years of experience building web applications and digital solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <p className="text-gray-600 mb-4">
                Started my journey as a self-taught developer, I've grown to become a full-stack developer who loves creating seamless user experiences and robust backend systems.
              </p>
              <p className="text-gray-600 mb-4">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices in the industry.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Profile"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About