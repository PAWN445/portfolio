interface Certification {
  title: string;
  issuer: string;
  category: string;
  credentialUrl?: string;
  icon?: string; // emoji or short text/logo fallback
}

const certifications: Certification[] = [
  // AI
  {
    title: "Introduction to Modern AI",
    issuer: "CISCO",
    category: "AI",
    credentialUrl: "https://www.credly.com/badges/e048d7de-5b25-41df-85a8-515d6177ff77",
    icon: "/icons/ciscomodernai.png",
  },


  // Engineering

  {
    title: "Python",
    issuer: "CISCO",
    category: "Engineering",
    credentialUrl: "https://bit.ly/4wwAaqo",
    icon: "icons/ciscopython.png",
  },


  // Cloud & DevOps


  // Security


    // 
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    category: "Skills & Trade",
    credentialUrl: "https://bit.ly/3U9Ones",
    icon: "certificates/solarCert.jpg",
  },

  // add more here
];

const categoryOrder = ["AI", "Engineering", "Cloud & DevOps", "Security", "Skills & Trade"];

function Certifications() {
  const accent = "#C1443C";

  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      items: certifications.filter((c) => c.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen w-full bg-black font-inter text-white py-20 px-8 sm:px-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <h1 className="font-poppins text-2xl font-bold text-white">
          certifications
        </h1>
        <p className="mt-3 max-w-2xl font-inter text-[15px] leading-relaxed text-neutral-400 mb-14">
          Credentials across AI, cloud, engineering, and project management — each verifiable at its source.
        </p>

        {grouped.map((group) => (
          <div key={group.category} className="mb-14">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-5">
              {group.category}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.items.map((cert, index) => (
                <div
                  key={index}
                  className="rounded-xl border p-5 flex flex-col justify-between transition-colors hover:border-neutral-600"
                  style={{ borderColor: "#262626", backgroundColor: "#0d0d0d" }}
                >
                  <div>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-base mb-4"
                      style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
                    >
                      {cert.icon ? (
                        <img src={cert.icon} alt={cert.title} className="w-5 h-5" />
                      ) : (
                        <span>{cert.icon}</span>
                      )}
                    </div>

                    <h3 className="font-poppins text-[14px] font-bold text-white leading-snug mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500 mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold uppercase tracking-wide hover:underline w-fit"
                      style={{ color: accent }}
                    >
                      Verify →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;