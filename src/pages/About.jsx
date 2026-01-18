
// import { motion } from "framer-motion"; 
// import { FiCode, FiBookOpen, FiStar } from "react-icons/fi";

// export default function About() {
//   return (
//    <section id="about" className="py-20  px-4 sm:px-12 bg-white" data-aos="fade-up">
//       <h2 className="text-3xl font-bold text-center  mb-6 text-blue-600">About Me</h2>
//   <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
    
//     <div className="md:w-1/2">
//       <p className="text-gray-700 font-sans text-xl leading-relaxed">
//         I'm a junior frontend developer currently studying at <strong>Jasseh Code Camp (JCC)</strong>. 
//         I’ve completed my first phase <strong>FDP 1</strong>, where I focused on HTML, JavaScript, and React. 
//         I’m now continuing with <strong>FDP 2</strong>, diving deeper into React,Tailwind CSS and <strong>TypeScript</strong> <br /><br />
//         I love building things with code clean interfaces, interactive pages, and user-friendly experiences. 
//         I'm passionate about learning and improving every day, and I enjoy taking on new challenges to grow as a developer.
//       </p>
//     </div>

//     <div className="md:w-1/2 flex justify-center">
//       <img
//         src="/public/images/profile1.jpg"
//         alt="Mollar"
//         className="w-64 h-64 object-cover rounded-2xl shadow-lg"
//       />
//     </div>
//   </div>
// </section>

//   );
// }

// import { motion } from "framer-motion";
// import { FiCode, FiBookOpen, FiStar } from "react-icons/fi";

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 sm:px-12 bg-gray-50">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
//         About Me
//       </h2>

//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
//         {/* Text Section */}
//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="text-gray-700 text-lg leading-relaxed mb-6">
//             I'm a junior <span className="font-semibold text-blue-600">frontend developer</span> currently studying at 
//             <strong> Jasseh Code Camp (JCC)</strong>.  
//             I’ve completed my first phase in <strong>Frontend Development Part 1</strong> (HTML, CSS, JavaScript), 
//             and I’m now continuing with <strong>Frontend Development Part 2</strong>, 
//             diving deeper into <strong>React, Tailwind CSS, and TypeScript</strong>.  
//           </p>

//           <p className="text-gray-700 text-lg leading-relaxed">
//             I love building clean interfaces, interactive pages, and user-friendly experiences.  
//             I'm passionate about learning and improving every day, and I enjoy taking on new challenges to grow as a developer.
//           </p>

//           {/* Quick Facts */}
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
//               <FiCode className="text-blue-600 text-2xl" />
//               <span className="text-gray-700">Frontend Lover</span>
//             </div>
//             <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
//               <FiBookOpen className="text-blue-600 text-2xl" />
//               <span className="text-gray-700">Always Learning</span>
//             </div>
//             <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
//               <FiStar className="text-blue-600 text-2xl" />
//               <span className="text-gray-700">Clean Code</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           className="md:w-1/2 flex justify-center relative"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="relative">
//             <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
//             <img
//               src="/images/my_image.jpg"
//               alt="Mollar"
//               className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-blue-200 hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// likeky giing to be the best version

// import { useState } from 'react';
// import { Code2, BookOpen, Zap, Terminal, Sparkles, GraduationCap } from 'lucide-react';

// export default function About() {
//   const [activeTab, setActiveTab] = useState('journey');

//   const tabs = [
//     { id: 'journey', label: 'My Journey' },
//     { id: 'skills', label: 'What I Do' },
//     { id: 'values', label: 'My Approach' }
//   ];

//   const journey = [
//     {
//       phase: 'Phase 1',
//       title: 'Frontend Foundation',
//       tech: 'HTML • CSS • JavaScript',
//       status: 'Completed',
//       icon: <GraduationCap className="w-5 h-5" />
//     },
//     {
//       phase: 'Phase 2',
//       title: 'Modern Development',
//       tech: 'React • Tailwind • TypeScript',
//       status: 'In Progress',
//       icon: <Code2 className="w-5 h-5" />
//     }
//   ];

//   const expertise = [
//     {
//       icon: <Code2 className="w-6 h-6" />,
//       title: 'Clean Code',
//       desc: 'Writing readable, maintainable code that scales'
//     },
//     {
//       icon: <Sparkles className="w-6 h-6" />,
//       title: 'UI/UX Focus',
//       desc: 'Creating interfaces that users love to interact with'
//     },
//     {
//       icon: <Terminal className="w-6 h-6" />,
//       title: 'Modern Stack',
//       desc: 'Using the latest tools and best practices'
//     }
//   ];

//   return (
//     <section id="about" className="relative py-32 bg-black border-t border-zinc-900">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
//             <BookOpen className="w-4 h-4 text-emerald-400" />
//             <span className="text-xs text-zinc-400 font-medium">Get to know me</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             About Me
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//           {/* Left - Image & Stats */}
//           <div className="lg:col-span-5">
//             <div className="sticky top-24">
//               {/* Image */}
//               <div className="relative mb-8">
//                 <div className="absolute inset-0 bg-emerald-400/10 rounded-2xl blur-xl"></div>
//                 <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
//                   <img
//                     src="/images/my_image.jpg"
//                     alt="Modou Lamin Minteh"
//                     className="w-full h-[400px] object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
//                   {/* Overlay Info */}
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="flex items-center gap-2 mb-2">
//                       <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
//                       <span className="text-sm text-zinc-300">Currently studying at JCC</span>
//                     </div>
//                     <p className="text-white font-semibold">Frontend Developer</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Stats Cards */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
//                   <div className="text-2xl font-bold text-white mb-1">2</div>
//                   <div className="text-sm text-zinc-400">Phases Completed</div>
//                 </div>
//                 <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
//                   <div className="text-2xl font-bold text-white mb-1">10+</div>
//                   <div className="text-sm text-zinc-400">Technologies</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="lg:col-span-7">
//             {/* Tabs */}
//             <div className="flex gap-4 mb-8 border-b border-zinc-800">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
//                     activeTab === tab.id
//                       ? 'text-white'
//                       : 'text-zinc-500 hover:text-zinc-300'
//                   }`}
//                 >
//                   {tab.label}
//                   {activeTab === tab.id && (
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-8">
//               {activeTab === 'journey' && (
//                 <div className="space-y-6">
//                   <p className="text-zinc-300 text-lg leading-relaxed">
//                     I'm a junior frontend developer currently studying at <span className="text-white font-semibold">Jasseh Code Camp (JCC)</span>. 
//                     My journey into web development started with curiosity and has grown into a genuine passion for building 
//                     clean, functional user interfaces.
//                   </p>
                  
//                   <p className="text-zinc-400 leading-relaxed">
//                     I love the challenge of turning designs into reality, writing code that's both efficient and easy to understand, 
//                     and constantly learning new ways to improve my craft. Every project is an opportunity to level up.
//                   </p>

//                   {/* Learning Path */}
//                   <div className="mt-8 space-y-4">
//                     <h3 className="text-white font-semibold mb-4">My Learning Path</h3>
//                     {journey.map((item, i) => (
//                       <div key={i} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
//                         <div className="flex items-start justify-between mb-3">
//                           <div className="flex items-center gap-3">
//                             <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400">
//                               {item.icon}
//                             </div>
//                             <div>
//                               <div className="text-xs text-zinc-500 mb-1">{item.phase}</div>
//                               <div className="text-white font-semibold">{item.title}</div>
//                             </div>
//                           </div>
//                           <span className={`text-xs px-2 py-1 rounded-full ${
//                             item.status === 'Completed' 
//                               ? 'bg-emerald-400/10 text-emerald-400' 
//                               : 'bg-blue-400/10 text-blue-400'
//                           }`}>
//                             {item.status}
//                           </span>
//                         </div>
//                         <div className="text-sm text-zinc-400">{item.tech}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'skills' && (
//                 <div className="space-y-6">
//                   <p className="text-zinc-300 text-lg leading-relaxed mb-8">
//                     I specialize in building responsive, performant web applications using modern technologies. 
//                     Here's what I bring to the table:
//                   </p>
                  
//                   <div className="grid gap-6">
//                     {expertise.map((item, i) => (
//                       <div key={i} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-all group">
//                         <div className="flex items-start gap-4">
//                           <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/10 transition-colors">
//                             {item.icon}
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="text-white font-semibold mb-2">{item.title}</h3>
//                             <p className="text-zinc-400 text-sm">{item.desc}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'values' && (
//                 <div className="space-y-6">
//                   <p className="text-zinc-300 text-lg leading-relaxed">
//                     My approach to development is built on a few core principles:
//                   </p>

//                   <div className="space-y-4 mt-8">
//                     {[
//                       {
//                         title: 'Always Learning',
//                         desc: 'The web evolves fast. I stay curious and embrace new technologies and methodologies.'
//                       },
//                       {
//                         title: 'Quality Over Speed',
//                         desc: 'I believe in writing code that lasts. Clean, tested, and maintainable is always the goal.'
//                       },
//                       {
//                         title: 'User-First Thinking',
//                         desc: 'Every line of code should serve the end user. If it doesn\'t improve their experience, it doesn\'t ship.'
//                       },
//                       {
//                         title: 'Collaborative Spirit',
//                         desc: 'Great products are built by great teams. I value feedback, communication, and shared success.'
//                       }
//                     ].map((value, i) => (
//                       <div key={i} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30">
//                         <div className="flex items-start gap-3">
//                           <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
//                           <div>
//                             <h3 className="text-white font-semibold mb-2">{value.title}</h3>
//                             <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// ...existing code...
import { useState, useEffect } from "react";
import { Code2, BookOpen, Zap, Terminal, Sparkles, GraduationCap } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("journey");
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const tabs = [
    { id: "journey", label: "My Journey" },
    { id: "skills", label: "What I Do" },
    { id: "values", label: "My Approach" },
  ];

  const journey = [
    {
      phase: "Phase 1",
      title: "Frontend Foundation",
      tech: "HTML • CSS • JavaScript",
      status: "Completed",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      phase: "Phase 2",
      title: "Modern Development",
      tech: "React • Tailwind • TypeScript",
      status: "completed",
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      desc: "Readable, maintainable code that scales",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "UI/UX Focus",
      desc: "Interfaces users love to interact with",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Modern Stack",
      desc: "Latest tools and best practices",
    },
  ];

  useEffect(() => {
    function onMouseMove(e) {
      // subtle global parallax for background blobs
      const blobs = document.querySelectorAll(".blob");
      blobs.forEach((b, i) => {
        const speed = (i + 1) * 0.02;
        const x = (e.clientX - window.innerWidth / 2) * speed;
        const y = (e.clientY - window.innerHeight / 2) * speed;
        b.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  function handleImageMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const ry = x * 12;
    const rx = -y * 10;
    setTilt({ rx, ry });
  }
  function handleImageLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <section id="about" className="relative py-28 bg-black text-white overflow-hidden">
      <style>{`
        .blob { transition: transform 300ms linear; will-change: transform; mix-blend-mode: screen; opacity: 0.8; filter: blur(60px); }
        .card-3d { transition: transform 360ms cubic-bezier(.2,.9,.25,1); transform-style: preserve-3d; will-change: transform; }
        .shine { background: linear-gradient(120deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.02)); mix-blend-mode: overlay; }
        @keyframes floaty { 0% { transform: translateY(0)} 50% { transform: translateY(-10px)} 100% { transform: translateY(0)} }
      `}</style>

      {/* decorative blobs */}
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-700/30 to-transparent blob animate-[floaty_8s_ease-in-out_infinite]"></div>
      <div className="absolute -right-40 -bottom-32 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent blob animate-[floaty_10s_ease-in-out_infinite]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 mb-4">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-zinc-400 font-medium">Get to know me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <p className="text-zinc-400 max-w-2xl mt-3">
            Black canvas, neon highlights, interactive portrait — a playful but focused showcase of who I am and what I build.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: interactive image + stats */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div
                className="relative rounded-2xl overflow-hidden border border-zinc-800 card-3d shine"
                onMouseMove={handleImageMove}
                onMouseLeave={handleImageLeave}
                role="img"
                aria-label="portrait"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.rx || tilt.ry ? 1.02 : 1})`,
                }}
              >
                <div className="absolute inset-0 bg-emerald-400/6" />
                <img
                  src="/images/my_image.jpg"
                  alt="Modou Lamin Minteh"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sm text-zinc-300">Studying at Jasseh Code Camp</span>
                    </div>
                    <p className="text-white font-semibold">Frontend Developer</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
                  <div className="text-3xl font-bold text-white mb-1">2</div>
                  <div className="text-sm text-zinc-400">Phases Completed</div>
                </div>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-zinc-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: tabs and content */}
          <div className="lg:col-span-7">
            <div className="flex gap-4 mb-8 border-b border-zinc-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${activeTab === tab.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                  aria-pressed={activeTab === tab.id}
                >
                  {tab.label}
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400" />}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {activeTab === "journey" && (
                <div className="space-y-6">
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    I'm a junior frontend developer currently studying at <span className="text-white font-semibold">Jasseh Code Camp (JCC)</span>. My journey began with curiosity and has turned into a passion for building responsive, accessible interfaces.
                  </p>

                  <div className="mt-6 grid gap-4">
                    {journey.map((item, i) => (
                      <div key={i} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-xs text-zinc-500 mb-1">{item.phase}</div>
                              <div className="text-white font-semibold">{item.title}</div>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${item.status === "Completed" ? "bg-emerald-400/10 text-emerald-400" : "bg-blue-400/10 text-blue-400"}`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="text-sm text-zinc-400">{item.tech}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-6">
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    I build responsive, performant web apps using modern tools. Below are a few areas I focus on:
                  </p>

                  <div className="grid gap-6">
                    {expertise.map((item, i) => (
                      <div key={i} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-all group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/10 transition-colors">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                            <p className="text-zinc-400 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="space-y-6">
                  <p className="text-zinc-300 text-lg leading-relaxed">My approach is simple: write clean code, think about users, and always learn.</p>

                  <div className="space-y-4 mt-6">
                    {[
                      { title: "Always Learning", desc: "Stay curious and adopt new tools." },
                      { title: "Quality Over Speed", desc: "Maintainable, tested code wins." },
                      { title: "User-First Thinking", desc: "Every feature should improve the user experience." },
                      { title: "Collaborative Spirit", desc: "Great work comes from great teams." },
                    ].map((v, i) => (
                      <div key={i} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href="/Modou_Lamin_Minteh_CV.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:scale-105 transition-transform">Download CV</a>
              <a href="#projects" className="text-sm text-zinc-400 hover:text-zinc-200">See projects →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...