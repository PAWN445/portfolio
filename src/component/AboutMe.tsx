import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { experiences } from "../data/Experience";

function Camera({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function MapPin({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface PhotoSlotProps {
  photo: string | null;
  alt: string;
}

function PhotoSlot({ photo, alt }: PhotoSlotProps) {
  if (photo) {
    return <img src={photo} alt={alt} loading="lazy" className="h-full w-full object-cover" />;
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-[#161616] text-neutral-600">
      <Camera className="h-5 w-5" strokeWidth={1.5} />
      <span className="font-inter text-[10px] font-medium uppercase tracking-wide">
        Add photo
      </span>
    </div>
  );
}

export default function AboutMe() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const accent = "#C1443C";

  function handleExperienceClick(index: number) {
    setActive(index);
    navigate(`/blog/${experiences[index].slug}`);
  }

  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* About intro */}
      <section className="border-b border-neutral-900 px-8 pb-20 pt-10 text-center sm:px-16">
        <h1 className="font-poppins text-4xl font-extrabold sm:text-5xl">
          About Me
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-inter text-[15px] leading-relaxed text-neutral-400">
          Hello! I'm a Mobile Developer & Full-Stack Web Developer who turns
          complex business ideas into high-performing digital products. From
          conceptualizing scalable logic to launching responsive frontend
          designs, I focus on creating solutions that run smoothly and help
          businesses grow.
        </p>
      </section>

      {/* Work experience — alternating left/right, centered */}
      <section className="px-8 py-20 sm:px-16">
        <div className="text-center">
          <p
            className="font-poppins text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            Where I've Worked
          </p>
          <h2 className="mt-3 font-poppins text-3xl font-extrabold sm:text-4xl">
            Work Experience
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* center vertical line */}
          <div className="absolute left-1/2 top-2 bottom-2 hidden w-px -translate-x-1/2 bg-neutral-800 sm:block" />

          <ol className="space-y-14 sm:space-y-20">
            {experiences.map((exp, i) => {
              const reversed = i % 2 === 1;
              return (
                <li key={i} className="relative">
                  {/* center dot */}
                  <div
                    className="absolute left-1/2 top-8 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-colors sm:block"
                    style={{
                      borderColor: i === active ? accent : "#404040",
                      backgroundColor: i === active ? accent : "black",
                    }}
                  />

                  <div
                    className={`flex sm:items-center ${
                      reversed ? "sm:justify-start" : "sm:justify-end"
                    }`}
                  >
                    {/* card */}
                    <button
                      onClick={() => handleExperienceClick(i)}
                      className="group flex w-full flex-col gap-5 rounded-xl border p-6 text-left transition-colors sm:w-[46%] sm:p-7"
                      style={{
                        borderColor: i === active ? accent : "#262626",
                        backgroundColor: i === active ? "#1a1010" : "#0d0d0d",
                      }}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="h-44 w-full shrink-0 overflow-hidden rounded-lg border border-neutral-800 sm:h-28 sm:w-36">
                          <PhotoSlot photo={exp.photo} alt={exp.org} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span
                              className="font-poppins text-[13px] font-bold"
                              style={{ color: accent }}
                            >
                              {exp.year}
                            </span>
                            <span className="text-neutral-700">·</span>
                            <span className="flex items-center gap-1 text-[13px] text-neutral-500">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </span>
                          </div>

                          <h3 className="mt-2 font-poppins text-lg font-bold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-[14px] font-medium text-neutral-400">
                            {exp.org}
                          </p>

                          <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                            {exp.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-neutral-800 bg-black px-2.5 py-1 text-[11px] font-medium text-neutral-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}