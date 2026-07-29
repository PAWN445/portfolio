import { useEffect, useRef, useState } from "react";
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

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18l6-6-6-6" />
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

type MediaItem = { type: "image"; src: string } | { type: "video"; src: string };

interface MediaSliderProps {
  photos: string[];
  videos?: string[];
  alt: string;
  accent: string;
}

function MediaSlider({ photos, videos, alt, accent }: MediaSliderProps) {
  const items: MediaItem[] = [
    ...photos.map((src): MediaItem => ({ type: "image", src })),
    ...(videos ?? []).map((src): MediaItem => ({ type: "video", src })),
  ];

  const [index, setIndex] = useState(0);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([i, el]) => {
      if (el && Number(i) !== index) el.pause();
    });
  }, [index]);

  if (items.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#161616] text-neutral-600">
        No photo yet
      </div>
    );
  }

  const goTo = (i: number) => setIndex((i + items.length) % items.length);

  return (
    <div className="group relative h-full w-full overflow-hidden bg-[#161616]">
      {/* Track */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${(index * 100) / items.length}%)`,
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="h-full shrink-0" style={{ width: `${100 / items.length}%` }}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`${alt} — ${i + 1}`}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={item.src}
                controls
                playsInline
                className="h-full w-full bg-black object-contain"
              />
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next arrows — only shown when there's more than one slide */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus:opacity-100 sm:p-2"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus:opacity-100 sm:p-2"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === index ? "18px" : "6px",
                  backgroundColor: i === index ? accent : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
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

      {/* Hero media — sliding gallery of photos, plus video as the last slide if present */}
      <div className="mx-auto mt-6 max-w-3xl px-5 sm:mt-8 sm:px-8 lg:px-16">
        <div className="h-52 w-full overflow-hidden rounded-2xl border border-neutral-800 xs:h-64 sm:h-80 md:h-96">
          <MediaSlider photos={entry.photos} videos={entry.videos} alt={entry.org} accent={accent} />
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