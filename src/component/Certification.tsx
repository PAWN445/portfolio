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
  const accent = "#C1443C";

  return (
    <div className="min-h-screen w-full bg-black font-inter text-white py-20 px-8 sm:px-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-5xl mx-auto text-center">
        <p
          className="font-poppins text-sm font-bold uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          What I've Learned
        </p>
        <h1 className="mt-3 font-poppins text-3xl font-extrabold sm:text-4xl">
          Certifications
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-inter text-[15px] leading-relaxed text-neutral-400 mb-16">
          Courses and credentials I've completed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden transition-colors"
              style={{ borderColor: "#262626", backgroundColor: "#0d0d0d" }}
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-neutral-900 flex items-center justify-center">
                  <span style={{ color: accent }} className="font-bold text-2xl">
                    🏆
                  </span>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-poppins text-lg font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-[14px] font-medium text-neutral-400">
                  {cert.issuer}
                </p>
                <p className="text-[13px] text-neutral-500 mb-4">
                  {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold hover:underline"
                    style={{ color: accent }}
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