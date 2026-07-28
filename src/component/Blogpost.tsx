import { useParams, Link } from "react-router-dom";
import { experiences } from "../data/Experience";

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const accent = "#C1443C";

  const index = experiences.findIndex((exp) => exp.slug === slug);
  const entry = index !== -1 ? experiences[index] : null;
  const prevEntry = index > 0 ? experiences[index - 1] : null;
  const nextEntry = index !== -1 && index < experiences.length - 1 ? experiences[index + 1] : null;

  if (!entry) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-black px-6 text-center font-inter text-white">
        <h1 className="font-poppins text-2xl font-bold">Story not found</h1>
        <p className="text-neutral-400">
          Wala kaming nahanap na entry para dito.
        </p>
        <Link
          to="/about"
          className="mt-2 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#1a1010]"
          style={{ borderColor: accent, color: accent }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to About
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-3xl px-5 pt-8 sm:px-8 sm:pt-10 lg:px-16">
      </div>

      {/* Hero photo */}
      <div className="mx-auto mt-6 max-w-3xl px-5 sm:mt-8 sm:px-8 lg:px-16">
        <div className="h-52 w-full overflow-hidden rounded-2xl border border-neutral-800 xs:h-64 sm:h-80 md:h-96">
          {entry.photo ? (
            <img
              src={entry.photo}
              alt={entry.org}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#161616] text-neutral-600">
              No photo yet
            </div>
          )}
        </div>
      </div>

      {/* Story content */}
      <article className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-12 lg:px-16">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-poppins text-sm font-bold" style={{ color: accent }}>
            {entry.year}
          </span>
          <span className="text-neutral-700">·</span>
          <span className="flex items-center gap-1 text-sm text-neutral-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {entry.location}
          </span>
        </div>

        <h1 className="mt-3 font-poppins text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
          {entry.role}
        </h1>
        <p className="mt-1 text-base font-medium text-neutral-400">
          {entry.org}
        </p>

        <p className="mt-6 text-[15px] leading-relaxed text-neutral-300 sm:mt-8 sm:text-[16px]">
          {entry.story ?? entry.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-800 bg-[#0d0d0d] px-3 py-1.5 text-[12px] font-medium text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* Prev / Next navigation */}
      <div className="mx-auto max-w-3xl border-t border-neutral-900 px-5 py-8 sm:px-8 sm:py-10 lg:px-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {prevEntry ? (
            <Link
              to={`/blog/${prevEntry.slug}`}
              className="group flex-1 rounded-xl border border-neutral-800 p-4 transition-colors hover:border-[#C1443C]"
            >
              <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                ← Previous
              </span>
              <p className="mt-1 truncate font-poppins text-sm font-bold text-white">
                {prevEntry.role}
              </p>
            </Link>
          ) : (
            <div className="hidden flex-1 sm:block" />
          )}

          {nextEntry ? (
            <Link
              to={`/blog/${nextEntry.slug}`}
              className="group flex-1 rounded-xl border border-neutral-800 p-4 text-left transition-colors hover:border-[#C1443C] sm:text-right"
            >
              <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                Next →
              </span>
              <p className="mt-1 truncate font-poppins text-sm font-bold text-white">
                {nextEntry.role}
              </p>
            </Link>
          ) : (
            <div className="hidden flex-1 sm:block" />
          )}
        </div>
      </div>
    </div>
  );
}