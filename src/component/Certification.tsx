interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

const certifications: Certification[] = [
  {
    title: "Solar Night Light Assembly",
    issuer: "Tesda",
    date: "July 20 2026",
    credentialUrl: "/certificates/solarCert.jpg",
    image: "/certificates/solarCert.jpg",
  },

    {
    title: "Solar Night Light Assembly",
    issuer: "Tesda",
    date: "July 20 2026",
    credentialUrl: "/certificates/solarCert.jpg",
    image: "/certificates/solarCert.jpg",
  },

    {
    title: "Solar Night Light Assembly",
    issuer: "Tesda",
    date: "July 20 2026",
    credentialUrl: "/certificates/solarCert.jpg",
    image: "/certificates/solarCert.jpg",
  },
    {
    title: "Solar Night Light Assembly",
    issuer: "Tesda",
    date: "July 20 2026",
    credentialUrl: "/certificates/solarCert.jpg",
    image: "/certificates/solarCert.jpg",
  },
  // add more here
];

function Certifications() {
  return (
    <div className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">
          Certifications
        </h1>
        <p className="text-lg text-white mb-10">
          Courses and credentials I've completed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-2xl">🏆</span>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-semibold text-slate-800 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-500 mb-1">{cert.issuer}</p>
                <p className="text-xs text-slate-400 mb-4">{cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;