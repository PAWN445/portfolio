import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function ContactMe() {
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
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(
      subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">
          Contact Me
        </h1>
        <p className="text-lg text-white mb-10">
          Have a project in mind? Let's talk.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info Card */}
          <div className="lg:col-span-2 bg-black/5 rounded-xl p-8 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Let's build something together
              </h2>
              <p className="text-slate-300 text-sm mb-8">
                Open to freelance work and full-time opportunities. Reach out
                through any of the channels below.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:manalo22arnold@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail size={16} />
                  </span>
                  manalo22arnold@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/arnold-manalo-205a061a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-200 hover:text-blue-400 transition-colors"
                >
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <FaLinkedin size={16} />
                </span>
                  linkedin.com/in/arnold-manalo-205a061a6
                </a>

                <a
                  href="https://github.com/PAWN445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-200 hover:text-blue-400 transition-colors"
>
                  <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <FaGithub size={16} />
                  </span>
                  github.com/PAWN445
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-10">
              Based in the Philippines · Usually replies within a day
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
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