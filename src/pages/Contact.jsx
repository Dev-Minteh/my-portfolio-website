// import { FiMail, FiUser, FiMessageSquare} from "react-icons/fi";


// export default function Contact() {
//   return (
//     <section className="py-20 bg-gray-100 relative overflow-hidden" data-aos="fade-up">
//       {/* Floating Background Circles */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-200 rounded-full opacity-10 -z-10"></div>

//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Contact Me</h2>
//         <p className="mb-10 text-center text-gray-700">
//           Let’s work together! Drop me a message and I’ll get back to you as soon as possible.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left side decorative / info */}
//           <div className="hidden md:flex flex-col space-y-6">
//             <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-2">Email Me</h3>
//               <p className="flex items-center gap-2"><FiMail /> latehminteh@gmail.com</p>
//             </div>
//             <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-2">Message Me</h3>
//               <p className="flex items-center gap-2"><FiMessageSquare /> I respond fast!</p>
//             </div>
//           </div>

//           {/* Form */}
//           <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
//               />
//               <FiUser className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
//             </div>

//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
//               />
//               <FiMail className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
//             </div>

//             <div className="relative">
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
//                 rows={5}
//               />
//               <FiMessageSquare className="absolute top-2 right-4 text-gray-400" />
//             </div>

//             <button className="w-full py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from 'react';
// import { Mail, MessageSquare, Send, MapPin, Github, Linkedin, CheckCircle } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 3000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-5 h-5" />,
//       label: 'Email',
//       value: 'latehminteh@gmail.com',
//       link: 'mailto:latehminteh@gmail.com'
//     },
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       label: 'Location',
//       value: 'Banjul, Gambia',
//       link: null
//     },
//     {
//       icon: <Github className="w-5 h-5" />,
//       label: 'GitHub',
//       value: '@Dev-Minteh',
//       link: 'https://github.com/Dev-Minteh'
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       label: 'LinkedIn',
//       value: 'Connect with me',
//       link: 'https://linkedin.com/in/yourusername'
//     }
//   ];

//   return (
//     <section id="contact" className="relative py-32 bg-black border-t border-zinc-900">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
//             <MessageSquare className="w-4 h-4 text-emerald-400" />
//             <span className="text-xs text-zinc-400 font-medium">Get in touch</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Let's Work Together
//           </h2>
//           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
//             Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
//           {/* Left - Contact Info */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Quick Info Cards */}
//             <div className="space-y-4">
//               {contactInfo.map((info, i) => (
//                 <div key={i} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
//                   <div className="flex items-start gap-4">
//                     <div className="w-11 h-11 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
//                       {info.icon}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="text-xs text-zinc-500 mb-1">{info.label}</div>
//                       {info.link ? (
//                         <a 
//                           href={info.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white font-medium hover:text-emerald-400 transition-colors break-all"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <div className="text-white font-medium">{info.value}</div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Availability Badge */}
//             <div className="p-6 rounded-xl border border-emerald-800/30 bg-emerald-950/30">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
//                 <span className="text-emerald-400 font-semibold">Available for work</span>
//               </div>
//               <p className="text-zinc-400 text-sm">
//                 Currently open to freelance projects and full-time opportunities.
//               </p>
//             </div>
//           </div>

//           {/* Right - Contact Form */}
//           <div className="lg:col-span-3">
//             <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-6">
//               {submitted ? (
//                 <div className="py-20 text-center">
//                   <div className="w-16 h-16 rounded-full bg-emerald-400/10 flex items-center justify-center mx-auto mb-4">
//                     <CheckCircle className="w-8 h-8 text-emerald-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
//                   <p className="text-zinc-400">Thanks for reaching out. I'll get back to you soon.</p>
//                 </div>
//               ) : (
//                 <>
//                   {/* Name Input */}
//                   <div>
//                     <label className="block text-sm font-medium text-zinc-400 mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="John Doe"
//                       className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
//                     />
//                   </div>

//                   {/* Email Input */}
//                   <div>
//                     <label className="block text-sm font-medium text-zinc-400 mb-2">
//                       Your Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="john@example.com"
//                       className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
//                     />
//                   </div>

//                   {/* Message Textarea */}
//                   <div>
//                     <label className="block text-sm font-medium text-zinc-400 mb-2">
//                       Your Message
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       placeholder="Tell me about your project..."
//                       rows={6}
//                       className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="w-full px-7 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     <Send className="w-5 h-5" />
//                     Send Message
//                   </button>
//                 </>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ...existing code...
import { useState, useEffect } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  Copy,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState("");
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "latehminteh@gmail.com", link: "mailto:latehminteh@gmail.com" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Banjul, Gambia", link: null },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "@Dev-Minteh", link: "https://github.com/Dev-Minteh" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Connect with me", link: "https://linkedin.com/in/yourusername" },
  ];

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(""), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleCopy(text, id) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
    } catch {
      setCopied(id); // fallback visual feedback even if clipboard fails
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // simulate send
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 2800);
    }, 1200);
  }

  return (
    <section id="contact" className="relative py-28 bg-black text-white overflow-hidden">
      <style>{`
        .blob{ filter: blur(58px); opacity: .7; mix-blend-mode: screen; transition: transform 200ms linear; }
        .burst { position: absolute; inset: 0; display:flex; align-items:center; justify-content:center; pointer-events:none; }
        .burst span { position:absolute; font-size:16px; animation: burst 900ms forwards ease-out; opacity:0.95; }
        @keyframes burst {
          0% { transform: translateY(0) scale(1); opacity:1 }
          100% { transform: translateY(-80px) translateX(var(--dx)) rotate(var(--rot)); opacity:0 }
        }
      `}</style>

      {/* Decorative blobs */}
      <div className="absolute -left-32 -top-20 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-700/30 to-transparent blob animate-[floaty_9s_ease-in-out_infinite]" />
      <div className="absolute -right-36 -bottom-28 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/18 to-transparent blob animate-[floaty_11s_ease-in-out_infinite]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 mb-4">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-zinc-400 font-medium">Reach out</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3">Let's Work Together</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Drop a message — freelance, collaboration, or to say hi. I reply fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: quick contact cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-zinc-500">{c.label}</div>
                      {c.link ? (
                        <a href={c.link} target="_blank" rel="noreferrer" className="text-white font-medium hover:text-emerald-400 transition-colors break-all">{c.value}</a>
                      ) : (
                        <div className="text-white font-medium">{c.value}</div>
                      )}
                    </div>

                    {/* copy action for email & github */}
                    {(c.label === "Email" || c.label === "GitHub") && (
                      <button
                        type="button"
                        onClick={() => handleCopy(c.label === "Email" ? c.value : c.link || c.value, c.label)}
                        className="text-zinc-300 hover:text-white p-2 rounded-md border border-zinc-800 hover:bg-zinc-900/40 transition-colors"
                        aria-label={`Copy ${c.label}`}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {copied === c.label && <div className="text-xs text-emerald-400 mt-2">Copied!</div>}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl border border-emerald-800/20 bg-emerald-950/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-emerald-400 font-semibold">Open to work</div>
              </div>
              <p className="text-zinc-400 text-sm">Available for freelance & remote roles — let's build something great.</p>
            </div>
          </div>

          {/* Right: interactive form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-6">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thanks — message sent</h3>
                  <p className="text-zinc-400">I'll get back to you shortly. Expect a reply within 1–2 business days.</p>

                  {/* lightweight emoji burst */}
                  <div className="burst" aria-hidden>
                    {["🎉","🚀","✨","🙌","🔥"].map((em, idx) => (
                      <span key={idx} style={{
                        left: `${20 + idx*14}%`,
                        top: `${40 - idx*6}%`,
                        ['--dx']: `${(idx-2)*18}px`,
                        ['--rot']: `${(idx-2)*30}deg`
                      }}>
                        {em}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Your name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/40 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Your email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/40 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/40 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-100 transition-colors"
                    >
                      <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send message"}
                    </button>

                    <a
                      href="/Modou_Lamin_Minteh_CV.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" /> Resume
                    </a>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...

