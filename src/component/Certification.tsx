interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string; // optional icon/logo
}

const certifications: Certification[] = [
  {
    title: "Solar Night Light Assembly",
    issuer: "Tesda",
    date: "March 2025",
    credentialUrl: "https://e-tesda.gov.ph/mod/customcert/view.php?id=41350&downloadown=1",
  },
  // add more here
];

function Certifications() {
  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-800">
          Certifications
        </h1>
        <p className="text-lg text-slate-500 mb-10">
          Courses and credentials I've completed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">🏆</span>
              </div>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;