import React from 'react'
import { useCertificates } from '../hooks/useCertificates'
import { Award, ExternalLink, Calendar } from 'lucide-react'

const Certificates: React.FC = () => {
  const { certificates, loading, error } = useCertificates()

  if (loading) {
    return (
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading certificates...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600">Error loading certificates: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
            <p className="text-xl text-gray-600">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Image */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    {certificate.image_url ? (
                      <img
                        src={certificate.image_url}
                        alt={certificate.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Award className="w-12 h-12 text-white" />
                    )}
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {certificate.issuer}
                  </p>
                  {certificate.description && (
                    <p className="text-gray-600 text-sm mb-3">
                      {certificate.description}
                    </p>
                  )}

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(certificate.issue_date)}
                  </div>

                  {certificate.credential_id && (
                    <p className="text-xs text-gray-500 mb-3">
                      ID: {certificate.credential_id}
                    </p>
                  )}

                  {certificate.credential_url && (
                    <a
                      href={certificate.credential_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Credential
                    </a>
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

export default Certificates