import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function ContactMe() {
  const accent = "#C1443C";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:manalo22arnold@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

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
          Get In Touch
        </p>
        <h1 className="mt-3 font-poppins text-3xl font-extrabold sm:text-4xl">
          Contact Me
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-inter text-[15px] leading-relaxed text-neutral-400 mb-16">
          Have a project in mind? Let's talk.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-left">
          {/* Left: Info Card */}
          <div
            className="lg:col-span-2 rounded-xl border p-7 flex flex-col justify-between"
            style={{ borderColor: "#262626", backgroundColor: "#0d0d0d" }}
          >
            <div>
              <h2 className="font-poppins text-lg font-bold text-white mb-2">
                Let's build something together
              </h2>
              <p className="text-[14px] leading-relaxed text-neutral-400 mb-8">
                Open to freelance work and full-time opportunities. Reach out
                through any of the channels below.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:manalo22arnold@gmail.com"
                  className="flex items-center gap-3 text-[14px] font-medium text-neutral-300 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-neutral-800 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </span>
                  manalo22arnold@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/arnold-manalo-205a061a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] font-medium text-neutral-300 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-neutral-800 flex items-center justify-center shrink-0">
                    <FaLinkedin size={16} />
                  </span>
                  linkedin.com/in/arnold-manalo-205a061a6
                </a>

                <a
                  href="https://github.com/PAWN445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] font-medium text-neutral-300 transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-neutral-800 flex items-center justify-center shrink-0">
                    <FaGithub size={16} />
                  </span>
                  github.com/PAWN445
                </a>
              </div>
            </div>

            <p className="text-[13px] text-neutral-500 mt-10">
              Based in the Philippines · Usually replies within a day
            </p>
          </div>

          {/* Right: Contact Form */}
          <div
            className="lg:col-span-3 rounded-xl border p-7"
            style={{ borderColor: "#262626", backgroundColor: "#0d0d0d" }}
          >
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-medium text-neutral-400 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-800 bg-black text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 transition-colors"
                    style={{ ["--tw-ring-color" as string]: accent }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-neutral-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-800 bg-black text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 transition-colors"
                    style={{ ["--tw-ring-color" as string]: accent }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-neutral-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-800 bg-black text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 transition-colors"
                  style={{ ["--tw-ring-color" as string]: accent }}
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-neutral-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-800 bg-black text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 transition-colors resize-none"
                  style={{ ["--tw-ring-color" as string]: accent }}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-[14px] font-semibold px-6 py-2.5 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;