// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Nav from "./Nav";

// const HeroSection = () => {
//   return (
//     <section>
//       <Nav />
//     <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 flex flex-col justify-center items-center">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <div className="space-y-4">
//         <motion.div initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}>
//          <h1 className="text-xl font-bold text-gray-900">Front-end Developer</h1>
//           <h4 className="text-xl md:text-2xl font-bold mt-4 text-gray-900 leading-tight">
//             Hi, I'm <span className="text-blue-600">Modou Lamin Minteh</span>
//           </h4>
//         </motion.div>
//         <motion.p initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }} className="text-lg text-gray-700">
//             A passionate Front-end developer who builds scalable web apps, loves clean code, and enjoys solving real-world problems with tech.
//           </motion.p>
//           <motion.div initial={{ opacity: 0, y: 20 }}
//          animate={{ opacity: 1, y: 0 }}
//          transition={{ delay: 1, duration: 0.8 }} className="flex flex-wrap gap-4 pt-8">
//             <a
//               href="https://github.com/Dev-Minteh"    
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition-all"
//             >
//               <FaGithub className="mr-2" /> GitHub
//             </a>
//             <a
//               href="#projects"
//               className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
//             >
//               View Projects
//             </a>
//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all"
//             >
//               <FaLinkedin className="mr-2" /> LinkedIn
//             </a>
//           </motion.div>
//         </div>

    
//         <div className="flex justify-center md:justify-end">
//           <div className="relative p-2 bg-white rounded-full shadow-lg">
//             <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full blur-xl z-0"></div>
//             <div className="relative z-10">
//               <img
//                 src="/images/my_image.jpg"
//                 alt="Developer Portrait"
//                 className="w-64 h-64 object-cover rounded-2xl border-4 border-blue-200 shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default HeroSection;


// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Nav from "./Nav";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col">
//       <Nav />

//       {/* Background Decorative Circles */}
//       <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

//       <div className="flex-grow flex items-center justify-center p-8">
//         <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: -40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-sm uppercase tracking-wide font-semibold text-gray-600">
//                 Front-end Developer
//               </h1>
//               <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-tight text-gray-900">
//                 Hi, I’m{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   Modou Lamin Minteh
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-lg text-gray-700 max-w-md"
//             >
//               A passionate developer who builds scalable web apps, loves clean
//               code, and enjoys solving real-world problems with modern tech.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.8 }}
//               className="flex flex-wrap gap-4 pt-6"
//             >
//               <a
//                 href="https://github.com/Dev-Minteh"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-6 py-3 rounded-lg shadow-md bg-black text-white hover:scale-105 hover:shadow-xl transition-all"
//               >
//                 <FaGithub className="mr-2" /> GitHub
//               </a>
//               <a
//                 href="#projects"
//                 className="inline-flex items-center px-6 py-3 rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 hover:shadow-xl transition-all"
//               >
//                 View Projects
//               </a>
//               <a
//                 href="https://linkedin.com/in/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-6 py-3 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 hover:shadow-xl transition-all"
//               >
//                 <FaLinkedin className="mr-2" /> LinkedIn
//               </a>
//             </motion.div>
//           </div>

//           {/* Right Side Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="flex justify-center md:justify-end relative"
//           >
//             {/* Glow effect behind image */}
//             <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//             <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

//             <div className="relative z-10 p-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
//               <img
//                 src="/images/my_image.jpg"
//                 alt="Developer Portrait"
//                 className="w-72 h-72 object-cover rounded-2xl border-4 border-blue-200 shadow-xl"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// the one to use
// import { useState, useEffect } from 'react';
// import { Github, Linkedin, ArrowDown, Mail } from 'lucide-react';

// const Nav = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
//         <div className="text-xl font-bold text-white tracking-tight">
//           MLM<span className="text-emerald-400">.</span>
//         </div>
//         <div className="hidden md:flex gap-8">
//           {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// const HeroSection = () => {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Nav />
      
//       {/* Hero Section */}
//       <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
//         {/* Subtle Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black"></div>
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
//             {/* Left Content */}
//             <div className="lg:col-span-7 space-y-8">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
//                 <span className="text-xs text-zinc-400 font-medium">Available for freelance</span>
//               </div>
              
//               <div className="space-y-4">
//                 <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
//                   <span className="text-zinc-500 text-xl md:text-2xl block mb-3 font-normal">Hi, I'm</span>
//                   Modou Lamin
//                   <br />
//                   <span className="text-emerald-400">Minteh</span>
//                 </h1>
                
//                 <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl pt-4">
//                   Front-end developer building clean, functional web experiences. 
//                   I focus on writing quality code and solving problems effectively.
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4 pt-4">
//                 <a
//                   href="#projects"
//                   className="px-7 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-colors duration-200 text-sm"
//                 >
//                   View My Work
//                 </a>
                
//                 <a
//                   href="#contact"
//                   className="px-7 py-3.5 border border-zinc-800 rounded-lg font-medium hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-200 text-sm"
//                 >
//                   Let's Talk
//                 </a>
//               </div>

//               {/* Social Links */}
//               <div className="flex items-center gap-4 pt-6">
//                 <a
//                   href="https://github.com/Dev-Minteh"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/yourusername"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="mailto:your.email@example.com"
//                   className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
//                 >
//                   <Mail className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Right Side - Image */}
//             <div className="lg:col-span-5 flex justify-center lg:justify-end">
//               <div className="relative">
//                 <div className="w-80 h-80 rounded-2xl overflow-hidden border border-zinc-800">
//                   <img
//                     src="/images/my_image.jpg"
//                     alt="Modou Lamin Minteh"
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                   />
//                 </div>
                
//                 {/* Floating Badge */}
//                 <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-emerald-400 text-black rounded-lg font-semibold text-sm shadow-lg">
//                   React • Next.js
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
//           <ArrowDown className="w-5 h-5 text-zinc-600 animate-bounce" />
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="relative border-t border-zinc-900 py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//             {[
//               { number: '3+', label: 'Years Exp.' },
//               { number: '50+', label: 'Projects' },
//               { number: '30+', label: 'Clients' },
//               { number: '15+', label: 'Technologies' }
//             ].map((stat, i) => (
//               <div key={i} className="text-center space-y-2">
//                 <div className="text-4xl md:text-5xl font-bold text-white">
//                   {stat.number}
//                 </div>
//                 <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

// ...existing code...
import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDown, Mail, Download } from 'lucide-react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-tight">
          MLM<span className="text-emerald-400">.</span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item}
            </a>
          ))}

          {/* Download CV (right corner) */}
          <a
            href="/Modou_Lamin_Minteh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform"
            aria-label="Download CV"
          >
            <Download className="w-4 h-4" /> CV
          </a>
        </div>

        {/* mobile menu placeholder */}
        <div className="md:hidden text-zinc-300 text-sm">Menu</div>
      </div>
    </nav>
  );
};

export default function HeroSection() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    // subtle background parallax for decorative blobs
    function onMove(e) {
      const blobs = document.querySelectorAll('.hero-blob');
      blobs.forEach((b, i) => {
        const speed = 0.02 + i * 0.01;
        const x = (e.clientX - window.innerWidth / 2) * speed;
        const y = (e.clientY - window.innerHeight / 2) * speed;
        b.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  function handleMove(e) {
    const card = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - card.left) / card.width - 0.5;
    const y = (e.clientY - card.top) / card.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 10 });
  }
  function handleLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <div className="bg-black text-white min-h-screen relative">
      <Nav />

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute -left-32 -top-28 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-700/30 to-transparent hero-blob filter blur-3xl opacity-70 animate-[floaty_8s_ease-in-out_infinite]" />
        <div className="absolute -right-40 -bottom-36 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent hero-blob filter blur-3xl opacity-60 animate-[floaty_10s_ease-in-out_infinite]" />

        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-zinc-400 font-medium">Available for freelance</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Hi, I'm <span className="block text-emerald-400">Modou Lamin Minteh</span>
              </h1>

              <p className="text-lg text-zinc-400 max-w-xl">
                Front-end developer crafting focused, performant interfaces. I build with React, Tailwind and a pinch of chaos — polished and intentional.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-colors"
                >
                  View My Work
                </a>

                <a
                  href="/Modou_Lamin_Minteh_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-zinc-800 rounded-lg font-medium hover:bg-zinc-900/50 transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download CV
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg font-medium border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  Let's Talk
                </a>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <a
                  href="https://github.com/Dev-Minteh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/modou lamin minteh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="latehminteh@gmail.com"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right content - interactive portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="relative w-80 h-80 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/30 cursor-pointer transition-transform"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.rx || tilt.ry ? 1.02 : 1})`,
                }}
                aria-label="portrait"
              >
                <img
                  src="/images/my_image.jpg"
                  alt="Modou Lamin Minteh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />

                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-emerald-400/8 blur-2xl" />
                </div>

                <div className="absolute -bottom-4 -right-4 px-3 py-2 bg-emerald-400 text-black rounded-lg font-semibold text-sm shadow-lg transform translate-y-2">
                  React • Next.js
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <ArrowDown className="w-5 h-5 text-zinc-600 animate-bounce" />
          <span className="text-xs text-zinc-600">scroll</span>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative border-t border-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '3+', label: 'Years Exp.' },
              { number: '10+', label: 'Projects' },
              { number: '5+', label: 'Clients' },
              { number: '10+', label: 'Technologies' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.number}</div>
                <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes floaty { 0%{ transform: translateY(0) } 50%{ transform: translateY(-8px) } 100%{ transform: translateY(0) } }
      `}</style>
    </div>
  );
}
// ...existing code...