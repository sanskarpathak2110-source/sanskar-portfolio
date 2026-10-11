import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Linkedin, Github, Instagram, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-white border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700 mb-3 shadow-subtle">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-900" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-zinc-600 max-w-lg">
            Feel free to reach out for internship opportunities, project collaborations, or just a chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card with 1-click copy */}
            <div className="p-5 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-subtle hover:border-zinc-300 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 shadow-subtle">
                  <Mail className="w-4 h-4" />
                </span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 shadow-subtle transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                Direct Email
              </p>
              <button
                onClick={copyEmail}
                className="text-sm sm:text-base font-bold text-zinc-900 hover:text-blue-600 transition-colors block truncate mt-0.5 text-left"
              >
                {personal.email}
              </button>
              {copied && (
                <p className="text-[11px] text-emerald-600 font-medium mt-1">
                  Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-subtle hover:border-zinc-300 transition-all">
              <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 shadow-subtle w-fit mb-2">
                <Phone className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                Phone & WhatsApp
              </p>
              <a
                href={`tel:${personal.phone}`}
                className="text-sm sm:text-base font-bold text-zinc-900 hover:text-blue-600 transition-colors block mt-0.5"
              >
                {personal.phone}
              </a>
            </div>

            {/* Social Channels (GitHub, LinkedIn, Instagram) */}
            <div className="grid grid-cols-3 gap-2.5">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#fafafa] border border-zinc-200/90 hover:border-zinc-300 transition-all flex flex-col justify-between shadow-subtle group text-center items-center"
              >
                <Github className="w-5 h-5 text-zinc-700 group-hover:text-zinc-950 mb-1.5" />
                <p className="text-[11px] font-bold text-zinc-800">GitHub</p>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#fafafa] border border-zinc-200/90 hover:border-zinc-300 transition-all flex flex-col justify-between shadow-subtle group text-center items-center"
              >
                <Linkedin className="w-5 h-5 text-blue-600 mb-1.5" />
                <p className="text-[11px] font-bold text-zinc-800">LinkedIn</p>
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#fafafa] border border-zinc-200/90 hover:border-pink-300 transition-all flex flex-col justify-between shadow-subtle group text-center items-center"
              >
                <Instagram className="w-5 h-5 text-pink-600 mb-1.5" />
                <p className="text-[11px] font-bold text-zinc-800">Instagram</p>
              </a>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-2.5 text-xs text-zinc-600">
              <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
              <span>Based in <strong>Jabalpur, MP</strong> (Open to Remote & On-Site)</span>
            </div>

          </div>

          {/* Right Column: In-Card Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-subtle">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto">
                    Thanks for reaching out, <strong>{formData.name}</strong>. I've noted down your message and will reply to <strong>{formData.email}</strong> soon!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 shadow-subtle"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <h3 className="text-lg font-bold text-zinc-950">
                      Send a Quick Note
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Drop a message below and I'll get back to you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Alex"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-zinc-400 transition-colors shadow-subtle"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-zinc-400 transition-colors shadow-subtle"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Internship opportunity / Project collaboration"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-zinc-400 transition-colors shadow-subtle"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Hey Sanskar, came across your work on Basera and VoiceShield..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none shadow-subtle"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm shadow-subtle hover:scale-[1.005] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
