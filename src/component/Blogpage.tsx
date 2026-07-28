/**
 * Blog page — "story kada picture" format.
 * Matches the dark bg / Poppins-Inter / #C1443C accent style of AboutMePage.
 *
 * HOW TO ADD YOUR OWN PHOTOS (sa real project mo):
 * 1) Ilagay yung image sa src/assets, e.g. src/assets/first-deploy.jpg
 * 2) Sa taas ng file, import mo: import firstDeploy from "./assets/first-deploy.jpg";
 * 3) Palitan yung matching `photo: null` sa entries array sa ibaba ng `photo: firstDeploy`
 */

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

interface StoryEntry {
  date: string;
  title: string;
  photo: string | null;
  story: string;
  tags: string[];
}

const entries: StoryEntry[] = [
  {
    date: "July 2026",
    title: "Nag-umpisa ang Inventory System",
    photo: null,
    story:
      "Isang gabi, habang nag-sketch ako ng schema sa notebook, napagtanto ko na mas kumplikado pala ang totoong business logic kaysa sa naiisip ko sa simula. Dito nagsimula yung React + Supabase inventory system na ginagawa ko ngayon — mula sa page architecture hanggang sa design system.",
    tags: ["React", "Supabase", "TypeScript"],
  },
  {
    date: "2025",
    title: "Unang beses mag-deploy sa production",
    photo: null,
    story:
      "Yung GoSolar site, mula sa localhost hanggang sa live URL — ramdam na ramdam yung kaba nung una kong pinindot yung deploy button sa Netlify. Nag-broken pa nga yung routing pagkatapos, pero natutunan ko doon kung paano talaga gumagana ang production builds.",
    tags: ["React Router", "Netlify"],
  },
  {
    date: "2024 — 2025",
    title: "Dalawang gilid ng parehong app",
    photo: null,
    story:
      "Ginawa ko yung customer app at driver app ng MyBookingKa nang magkasabay. Interesting yung experience na makita paano nag-uusap yung dalawang app sa isa't isa gamit ang Supabase Realtime — parang nag-a-abot ng baton sa relay race.",
    tags: ["Flutter", "Riverpod", "Realtime"],
  },
  {
    date: "2024",
    title: "Pagbabalik sa software development",
    photo: null,
    story:
      "Pagkatapos ng ilang taon sa sales, bumalik ako sa coding — nag-umpisa uli sa mga JavaScript fundamentals, parang bagong estudyante. Yung VIA admin dashboard yung unang malaking proyekto na natapos ko simula nung bumalik ako.",
    tags: ["React", "Comeback"],
  },
];

interface PhotoFrameProps {
  photo: string | null;
  alt: string;
}

function PhotoFrame({ photo, alt }: PhotoFrameProps) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#161616] text-neutral-600">
      <Camera className="h-6 w-6" strokeWidth={1.5} />
      <span className="font-inter text-[10px] font-medium uppercase tracking-wide">
        Add photo
      </span>
    </div>
  );
}

export default function BlogPage() {
  const accent = "#C1443C";

  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">


      {/* Header */}
      <section className="border-b border-neutral-900 px-8 pb-16 pt-14 text-center sm:px-16">
        <p
          className="font-poppins text-sm font-bold uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          Stories
        </p>
        <h1 className="mt-3 font-poppins text-4xl font-extrabold sm:text-5xl">
          Blog
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-inter text-[15px] leading-relaxed text-neutral-400">
          Mga kwento sa likod ng bawat larawan — mula sa unang deploy hanggang
          sa mga gabing puro debugging.
        </p>
      </section>

      {/* Alternating story entries */}
      <section className="mx-auto max-w-5xl px-8 py-20 sm:px-16">
        <div className="space-y-20">
          {entries.map((entry, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={i}
                className={`flex flex-col gap-8 sm:gap-12 ${
                  reversed ? "sm:flex-row-reverse" : "sm:flex-row"
                } sm:items-center`}
              >
                {/* Photo */}
                <div className="h-56 w-full shrink-0 overflow-hidden rounded-xl border border-neutral-800 sm:h-72 sm:w-[42%]">
                  <PhotoFrame photo={entry.photo} alt={entry.title} />
                </div>

                {/* Story */}
                <div className="min-w-0 flex-1">
                  <span
                    className="font-poppins text-[13px] font-bold"
                    style={{ color: accent }}
                  >
                    {entry.date}
                  </span>
                  <h2 className="mt-2 font-poppins text-2xl font-bold text-white sm:text-3xl">
                    {entry.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
                    {entry.story}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-800 bg-[#0d0d0d] px-2.5 py-1 text-[11px] font-medium text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}