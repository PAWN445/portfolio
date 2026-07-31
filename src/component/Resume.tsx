import { Link } from 'react-router-dom'

function ViewResume() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-16" id="view-resume">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1
              className="font-black leading-none tracking-tight text-white mb-2"
              style={{ fontSize: '40px', fontFamily: 'Raleway, sans-serif', letterSpacing: '-0.03em' }}
            >
              My <span style={{ color: '#C0392B' }}>Resume</span>
            </h1>
            <p className="text-sm" style={{ color: 'rgba(232,240,237,0.55)' }}>
              A quick overview of my experience, skills, and projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download="Arnold_Manalo_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Download PDF
            </a>
            <Link
              className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              to="/contact"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white" style={{ height: '85vh' }}>
          <iframe
            src="/resume.pdf"
            title="Arnold Manalo Resume"
            className="w-full h-full"
          >
            <p className="p-6 text-center">
              Your browser can't preview PDFs.{' '}
              <a href="/resume.pdf" download className="underline">
                Download the resume instead
              </a>
              .
            </p>
          </iframe>
        </div>

        {/* Fallback link below preview, in case iframe fails on mobile */}
        <p className="text-xs mt-4 text-center" style={{ color: 'rgba(232,240,237,0.4)' }}>
          Having trouble viewing?{' '}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline text-white">
            Open in a new tab
          </a>
          .
        </p>
      </div>
    </>
  )
}

export default ViewResume