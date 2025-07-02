import React from 'react'
import { useExperiences } from '../hooks/useExperiences'
import { MapPin, Calendar } from 'lucide-react'

const Experience: React.FC = () => {
  const { experiences, loading, error } = useExperiences()

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading experiences...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600">Error loading experiences: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">
              My professional journey and career highlights
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative flex items-start mb-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-16 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {experience.position}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(experience.start_date)} - {experience.end_date ? formatDate(experience.end_date) : 'Present'}
                    </div>
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold mb-2">
                    <span>{experience.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {experience.description}
                  </p>

                  {experience.current && (
                    <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      Current Position
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience