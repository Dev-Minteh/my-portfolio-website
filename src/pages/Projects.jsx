


// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Tip Calculator",
//     description: "A simple React app to calculate tips and split bills.",
//     live: "https://tip-calculator-gray-psi.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Tip-calculator.git",
//     image: "images/Screenshot (14).png",
//     tech: ["React", "Tailwind"],
//   },
//   {
//     title: "StorCom",
//     description: "A simple e-commerce website for shopping.",
//     live: "https://your-store.netlify.app",
//     github: "https://github.com/yourusername/storecom",
//     image: "images/Screenshot (10).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//   },
//   {
//     title: "Fenex",
//     description: "A landing page for running campaigns and promoting websites.",
//     live: "https://your-fenex.netlify.app",
//     github: "https://github.com/yourusername/fenex",
//     image: "images/Screenshot (13).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//   },
//   {
//     title: "World Countries",
//     description: "A website where you can search countries at any part of the world.",
//     live: "https://world-countries-ten-mu.vercel.app/",
//     github: "https://github.com/Dev-Minteh/world-countries.git",
//     image: "images/Screenshot (15).png",
//     tech: ["React", "Tailwind"],
//   },
//   {
//     title: "Sneakers Website",
//     description: "A modern sneaker e-commerce website with advanced features.",
//     live: "https://sneaker-website-gray.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Sneaker-Website.git",
//     image: "images/Screenshot (29).png",
//     tech: ["React", "Tailwind", "Context API", "Redux"],
//   },
//   {
//     title: "Designo Website",
//     description: "A multi-page website for a design agency.",
//     live: "https://designo-website-eight.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Designo-website.git",
//     image: "/images/Screenshot (52).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//   },
//   {
//     title: "Movie Website",
//     description: "A movie website to search for movies and TV shows.",
//     live: "https://entertainment-web-app-lk9w.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Entertainment-Web-App.git",
//     image: "/images/Screenshot (50).png",
//     tech: ["React", "Tailwind", "Context", "TypeScript", "Redux"],
//   },
//   {
//     title: "Financial App",
//     description: "An financial app to manage your expenses and income.",
//     live: "https://sneaker-website-gray.vercel.app/",
//     github: "https://github.com/Dev-Minteh/personal-finance-app.git",
//     image: "/images/Screenshot (54).png",
//     tech: ["React", "Tailwind", "Context", "Redux", "TypeScript"],
//   },
//   {
//     title: "Audiophile Website",
//     description: "An e-commerce website for audio products.",
//     live: "https://adiophile.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Adiophile.git",
//     image: "/images/Screenshot (51).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//   },
//    {
//     title: "Dev finder app",
//     description: "An app to search for GitHub profiles and view their details.",
//     live: "https://adiophile.vercel.app/",
//     github: "https://github.com/Dev-Minteh/dev-finder-app.git",
//     image: "/images/Screenshot (64).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//   },
//   {
//     title: "Browser Extension Manager",
//     description: "A web app to manage and organize your browser extensions.",
//     live: "https://dev-finder-app-6x5t.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Browser-extension-manager.git",
//     image: "/images/Screenshot (65).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//   },
//    {
//     title: "Dessert Product Page",
//     description: "A product page for a dessert shop showcasing various treats.",
//     live: "https://dessert-product-page-seven.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Dessert-Product-Page.git",
//     image: "/images/Screenshot (66).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-gray-50"
//       data-aos="fade-up"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
//         Projects
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {projects.map((p, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//           >
//             {/* Image with Hover Overlay */}
//             <div className="relative group">
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                 <div className="flex gap-4">
//                   <a
//                     href={p.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2 text-sm"
//                   >
//                     <FaExternalLinkAlt /> Live
//                   </a>
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-900 transition flex items-center gap-2 text-sm"
//                   >
//                     <FaGithub /> Code
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Card Content */}
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {p.title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-4">{p.description}</p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {p.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Tip Calculator",
//     description: "A simple React app to calculate tips and split bills.",
//     live: "https://tip-calculator-gray-psi.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Tip-calculator.git",
//     image: "images/Screenshot (14).png",
//     tech: ["React", "Tailwind"],
//     status: "completed"
//   },
//   {
//     title: "StorCom",
//     description: "A simple e-commerce website for shopping.",
//     live: "https://your-store.netlify.app",
//     github: "https://github.com/yourusername/storecom",
//     image: "images/Screenshot (10).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "in-progress"
//   },
//   {
//     title: "Fenex",
//     description: "A landing page for running campaigns and promoting websites.",
//     live: "https://fenex-delta.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Finnex.git",
//     image: "images/Screenshot (13).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "in-progress"
//   },
//   {
//     title: "World Countries",
//     description: "A website where you can search countries at any part of the world.",
//     live: "https://world-countries-ten-mu.vercel.app/",
//     github: "https://github.com/Dev-Minteh/world-countries.git",
//     image: "images/Screenshot (15).png",
//     tech: ["React", "Tailwind"],
//     status: "completed"
//   },
//   {
//     title: "Sneakers Website",
//     description: "A modern sneaker e-commerce website with advanced features.",
//     live: "https://sneaker-website-gray.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Sneaker-Website.git",
//     image: "images/Screenshot (29).png",
//     tech: ["React", "Tailwind", "Context API", "Redux"],
//     status: "completed"
//   },
//   {
//     title: "Designo Website",
//     description: "A multi-page website for a design agency.",
//     live: "https://designo-website-eight.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Designo-website.git",
//     image: "/images/Screenshot (52).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//     status: "completed"
//   },
//   {
//     title: "Movie Website",
//     description: "A movie website to search for movies and TV shows.",
//     live: "https://entertainment-web-app-lk9w.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Entertainment-Web-App.git",
//     image: "/images/Screenshot (50).png",
//     tech: ["React", "Tailwind", "Context", "TypeScript", "Redux"],
//     status: "completed"
//   },
//   {
//     title: "Financial App",
//     description: "An financial app to manage your expenses and income.",
//     live: "https://sneaker-website-gray.vercel.app/",
//     github: "https://github.com/Dev-Minteh/personal-finance-app.git",
//     image: "/images/Screenshot (54).png",
//     tech: ["React", "Tailwind", "Context", "Redux", "TypeScript"],
//     status: "in-progress"
//   },
//   {
//     title: "Audiophile Website",
//     description: "An e-commerce website for audio products.",
//     live: "https://adiophile.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Adiophile.git",
//     image: "/images/Screenshot (51).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//     status: "completed"
//   },
//   {
//     title: "Dev finder app",
//     description: "An app to search for GitHub profiles and view their details.",
//     live: "https://devs-finder-app.netlify.app/",
//     github: "https://github.com/Dev-Minteh/dev-finder-app.git",
//     image: "/images/Screenshot (64).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//     status: "completed"
//   },
//   {
//     title: "Browser Extension Manager",
//     description: "A web app to manage and organize your browser extensions.",
//     live: "https://dev-finder-app-6x5t.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Browser-extension-manager.git",
//     image: "/images/Screenshot (71).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "completed"
//   },
//   {
//     title: "Dessert Product Page",
//     description: "A product page for a dessert shop showcasing various treats.",
//     live: "https://dessert-product-page-seven.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Dessert-Product-Page.git",
//     image: "/images/Screenshot (66).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "completed"
//   },
// ];

// const statusConfig = {
//   completed: {
//     label: "Completed",
//     color: "bg-green-100 text-green-700 border-green-300",
//     icon: "✓"
//   },
//   "in-progress": {
//     label: "In Progress",
//     color: "bg-amber-100 text-amber-700 border-amber-300",
//     icon: "⚡"
//   }
// };

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-gray-50"
//       data-aos="fade-up"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
//         Projects
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {projects.map((p, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//           >
//             {/* Image with Hover Overlay */}
//             <div className="relative group">
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
              
//               {/* Status Badge on Image */}
//               <div className="absolute top-3 right-3">
//                 <span className={`${statusConfig[p.status].color} border px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm bg-opacity-90`}>
//                   <span>{statusConfig[p.status].icon}</span>
//                   {statusConfig[p.status].label}
//                 </span>
//               </div>

//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                 <div className="flex gap-4">
//                   <a
//                     href={p.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2 text-sm"
//                   >
//                     <FaExternalLinkAlt /> Live
//                   </a>
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-900 transition flex items-center gap-2 text-sm"
//                   >
//                     <FaGithub /> Code
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Card Content */}
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {p.title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-4">{p.description}</p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {p.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* In Progress Note */}
//               {p.status === "in-progress" && (
//                 <p className="text-xs text-amber-600 italic">
//                   🚧 Still working on this one! Feel free to check it out though.
//                 </p>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// further improved version with filtering by status

// import { useState } from 'react';
// import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react';

// const projects = [
//   {
//     title: "Tip Calculator",
//     description: "A simple React app to calculate tips and split bills.",
//     live: "https://tip-calculator-gray-psi.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Tip-calculator.git",
//     image: "images/Screenshot (14).png",
//     tech: ["React", "Tailwind"],
//     status: "completed"
//   },
//   {
//     title: "StorCom",
//     description: "A simple e-commerce website for shopping.",
//     live: "https://your-store.netlify.app",
//     github: "https://github.com/yourusername/storecom",
//     image: "images/Screenshot (10).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "in-progress"
//   },
//   {
//     title: "Fenex",
//     description: "A landing page for running campaigns and promoting websites.",
//     live: "https://fenex-delta.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Finnex.git",
//     image: "images/Screenshot (13).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "in-progress"
//   },
//   {
//     title: "World Countries",
//     description: "A website where you can search countries at any part of the world.",
//     live: "https://world-countries-ten-mu.vercel.app/",
//     github: "https://github.com/Dev-Minteh/world-countries.git",
//     image: "images/Screenshot (15).png",
//     tech: ["React", "Tailwind"],
//     status: "completed"
//   },
//   {
//     title: "Sneakers Website",
//     description: "A modern sneaker e-commerce website with advanced features.",
//     live: "https://sneaker-website-gray.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Sneaker-Website.git",
//     image: "images/Screenshot (29).png",
//     tech: ["React", "Tailwind", "Context API", "Redux"],
//     status: "completed"
//   },
//   {
//     title: "Designo Website",
//     description: "A multi-page website for a design agency.",
//     live: "https://designo-website-eight.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Designo-website.git",
//     image: "/images/Screenshot (52).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//     status: "completed"
//   },
//   {
//     title: "Movie Website",
//     description: "A movie website to search for movies and TV shows.",
//     live: "https://entertainment-web-app-lk9w.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Entertainment-Web-App.git",
//     image: "/images/Screenshot (50).png",
//     tech: ["React", "Tailwind", "Context", "TypeScript", "Redux"],
//     status: "completed"
//   },
//   {
//     title: "Financial App",
//     description: "An financial app to manage your expenses and income.",
//     live: "https://sneaker-website-gray.vercel.app/",
//     github: "https://github.com/Dev-Minteh/personal-finance-app.git",
//     image: "/images/Screenshot (54).png",
//     tech: ["React", "Tailwind", "Context", "Redux", "TypeScript"],
//     status: "in-progress"
//   },
//   {
//     title: "Audiophile Website",
//     description: "An e-commerce website for audio products.",
//     live: "https://adiophile.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Adiophile.git",
//     image: "/images/Screenshot (51).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//     status: "completed"
//   },
//   {
//     title: "Dev finder app",
//     description: "An app to search for GitHub profiles and view their details.",
//     live: "https://devs-finder-app.netlify.app/",
//     github: "https://github.com/Dev-Minteh/dev-finder-app.git",
//     image: "/images/Screenshot (64).png",
//     tech: ["React", "Tailwind", "TypeScript"],
//     status: "completed"
//   },
//   {
//     title: "Browser Extension Manager",
//     description: "A web app to manage and organize your browser extensions.",
//     live: "https://dev-finder-app-6x5t.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Browser-extension-manager.git",
//     image: "/images/Screenshot (71).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "completed"
//   },
//   {
//     title: "Dessert Product Page",
//     description: "A product page for a dessert shop showcasing various treats.",
//     live: "https://dessert-product-page-seven.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Dessert-Product-Page.git",
//     image: "/images/Screenshot (66).png",
//     tech: ["React", "Tailwind", "JavaScript"],
//     status: "completed"
//   },
// ];

// export default function Projects() {
//   const [filter, setFilter] = useState('all');

//   const filteredProjects = filter === 'all' 
//     ? projects 
//     : projects.filter(p => p.status === filter);

//   return (
//     <section id="projects" className="relative py-32 bg-black border-t border-zinc-900">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
//             <Code2 className="w-4 h-4 text-emerald-400" />
//             <span className="text-xs text-zinc-400 font-medium">My work</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-zinc-400 text-lg max-w-2xl">
//             A collection of projects I've built while learning and growing as a developer. 
//             Each one taught me something new.
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap gap-3 mb-12">
//           {[
//             { id: 'all', label: 'All Projects' },
//             { id: 'completed', label: 'Completed' },
//             { id: 'in-progress', label: 'In Progress' }
//           ].map((btn) => (
//             <button
//               key={btn.id}
//               onClick={() => setFilter(btn.id)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//                 filter === btn.id
//                   ? 'bg-white text-black'
//                   : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
//               }`}
//             >
//               {btn.label}
//               {btn.id !== 'all' && (
//                 <span className="ml-2 text-xs">
//                   ({projects.filter(p => p.status === btn.id).length})
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition-all duration-300"
//             >
//               {/* Project Image */}
//               <div className="relative aspect-video overflow-hidden bg-zinc-800">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
                
//                 {/* Status Badge */}
//                 <div className="absolute top-3 right-3">
//                   <span className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5 backdrop-blur-md ${
//                     project.status === 'completed'
//                       ? 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/30'
//                       : 'bg-blue-400/20 text-blue-400 border border-blue-400/30'
//                   }`}>
//                     {project.status === 'completed' ? (
//                       <>
//                         <Sparkles className="w-3 h-3" />
//                         Live
//                       </>
//                     ) : (
//                       <>
//                         <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
//                         Building
//                       </>
//                     )}
//                   </span>
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-11 h-11 rounded-full border border-white text-white flex items-center justify-center hover:scale-110 transition-transform"
//                   >
//                     <Github className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* In Progress Note */}
//                 {project.status === 'in-progress' && (
//                   <div className="mt-4 pt-4 border-t border-zinc-800">
//                     <p className="text-xs text-zinc-500 flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
//                       Currently working on improvements
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <p className="text-zinc-400 mb-6">
//             Want to see more? Check out my GitHub for additional projects and contributions.
//           </p>
//           <a
//             href="https://github.com/Dev-Minteh"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-colors"
//           >
//             <Github className="w-5 h-5" />
//             View All on GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


// ...existing code...
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react';

const projects = [
  // ...existing projects...
  {
    title: "Tip Calculator",
    description: "A simple React app to calculate tips and split bills.",
    live: "https://tip-calculator-gray-psi.vercel.app/",
    github: "https://github.com/Dev-Minteh/Tip-calculator.git",
    image: "images/Screenshot (14).png",
    tech: ["React", "Tailwind"],
    status: "completed"
  },
   {
    title: "Student management system",
    description: "A simple React app to manage student information and records.",
    live: "https://student-management-system-swart-eta.vercel.app/",
    github: "https://github.com/Dev-Minteh/Student-management-system.git",
    image: "images/sms.png",
    tech: ["React", "Tailwind, javaScript, context api"],
    status: "in-progress"
  },
  {
    title: "StorCom",
    description: "A simple e-commerce website for shopping.",
    live: "https://your-store.netlify.app",
    github: "https://github.com/yourusername/storecom",
    image: "images/Screenshot (10).png",
    tech: ["React", "Tailwind", "JavaScript"],
    status: "in-progress"
  },
  {
    title: "Fenex",
    description: "A landing page for running campaigns and promoting websites.",
    live: "https://fenex-delta.vercel.app/",
    github: "https://github.com/Dev-Minteh/Finnex.git",
    image: "images/Screenshot (13).png",
    tech: ["React", "Tailwind", "JavaScript"],
    status: "in-progress"
  },
  {
    title: "World Countries",
    description: "A website where you can search countries at any part of the world.",
    live: "https://world-countries-ten-mu.vercel.app/",
    github: "https://github.com/Dev-Minteh/world-countries.git",
    image: "images/Screenshot (15).png",
    tech: ["React", "Tailwind"],
    status: "completed"
  },
  {
    title: "Sneakers Website",
    description: "A modern sneaker e-commerce website with advanced features.",
    live: "https://sneaker-website-gray.vercel.app/",
    github: "https://github.com/Dev-Minteh/Sneaker-Website.git",
    image: "images/Screenshot (29).png",
    tech: ["React", "Tailwind", "Context API", "Redux"],
    status: "completed"
  },
  {
    title: "Designo Website",
    description: "A multi-page website for a design agency.",
    live: "https://designo-website-eight.vercel.app/",
    github: "https://github.com/Dev-Minteh/Designo-website.git",
    image: "/images/Screenshot (52).png",
    tech: ["React", "Tailwind", "TypeScript"],
    status: "completed"
  },
  {
    title: "Movie Website",
    description: "A movie website to search for movies and TV shows.",
    live: "https://entertainment-web-app-lk9w.vercel.app/",
    github: "https://github.com/Dev-Minteh/Entertainment-Web-App.git",
    image: "/images/Screenshot (50).png",
    tech: ["React", "Tailwind", "Context", "TypeScript", "Redux"],
    status: "completed"
  },
  {
    title: "Financial App",
    description: "An financial app to manage your expenses and income.",
    live: "https://sneaker-website-gray.vercel.app/",
    github: "https://github.com/Dev-Minteh/personal-finance-app.git",
    image: "/images/Screenshot (54).png",
    tech: ["React", "Tailwind", "Context", "Redux", "TypeScript"],
    status: "in-progress"
  },
  {
    title: "Audiophile Website",
    description: "An e-commerce website for audio products.",
    live: "https://adiophile.vercel.app/",
    github: "https://github.com/Dev-Minteh/Adiophile.git",
    image: "/images/Screenshot (51).png",
    tech: ["React", "Tailwind", "TypeScript"],
    status: "completed"
  },
  {
    title: "Dev finder app",
    description: "An app to search for GitHub profiles and view their details.",
    live: "https://devs-finder-app.netlify.app/",
    github: "https://github.com/Dev-Minteh/dev-finder-app.git",
    image: "/images/Screenshot (64).png",
    tech: ["React", "Tailwind", "TypeScript"],
    status: "completed"
  },
  {
    title: "Browser Extension Manager",
    description: "A web app to manage and organize your browser extensions.",
    live: "https://dev-finder-app-6x5t.vercel.app/",
    github: "https://github.com/Dev-Minteh/Browser-extension-manager.git",
    image: "/images/Screenshot (71).png",
    tech: ["React", "Tailwind", "JavaScript"],
    status: "completed"
  },
  {
    title: "Dessert Product Page",
    description: "A product page for a dessert shop showcasing various treats.",
    live: "https://dessert-product-page-seven.vercel.app/",
    github: "https://github.com/Dev-Minteh/Dessert-Product-Page.git",
    image: "/images/Screenshot (66).png",
    tech: ["React", "Tailwind", "JavaScript"],
    status: "completed"
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onKey(e) {
      if (!active) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((i) => (i + 1) % filteredProjects.length);
        setActive(filteredProjects[(activeIndex + 1) % filteredProjects.length]);
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((i) => (i - 1 + filteredProjects.length) % filteredProjects.length);
        setActive(filteredProjects[(activeIndex - 1 + filteredProjects.length) % filteredProjects.length]);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, activeIndex, filter]);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.status === filter);

  function handleMouseMove(e) {
    const el = e.currentTarget.querySelector('.card-inner');
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 18;
    const rotateX = -y * 12;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  }

  function handleMouseLeave(e) {
    const el = e.currentTarget.querySelector('.card-inner');
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  }

  return (
    <section id="projects" className="relative py-28 bg-black text-white overflow-hidden">
      {/* inline keyframes + tiny visual helpers */}
      <style>{`
        @keyframes neonPulse {
          0% { box-shadow: 0 0 6px rgba(255,255,255,0.04), 0 0 18px rgba(99,102,241,0.06); }
          50% { box-shadow: 0 8px 40px rgba(99,102,241,0.08); transform: translateY(-6px); }
          100% { box-shadow: 0 0 6px rgba(255,255,255,0.04), 0 0 18px rgba(99,102,241,0.06); transform: translateY(0); }
        }
        .glow-blob { filter: blur(60px); opacity: 0.65; mix-blend-mode: screen; }
        .card-inner { transition: transform 350ms cubic-bezier(.2,.9,.25,1); transform-style: preserve-3d; will-change: transform; }
        .modal-iframe { height: 60vh; width: 100%; border: none; border-radius: 8px; background: #000; }
      `}</style>

      {/* Animated gradient blobs */}
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-700/40 to-transparent glow-blob animate-[neonPulse_8s_linear_infinite]"></div>
      <div className="absolute -right-40 -bottom-32 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent glow-blob"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 mb-4">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-zinc-400 font-medium">Playground</span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight mb-3">Projects — chaotic showcase</h2>
          <p className="text-zinc-400 max-w-2xl mb-6">
            Black canvas, neon blobs, interactive tilt, instant preview. Click a card to blow it up.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'completed', label: 'Completed' },
              { id: 'in-progress', label: 'In Progress' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  (filter === btn.id)
                    ? 'bg-white text-black'
                    : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {btn.label} {btn.id !== 'all' && <span className="ml-2 text-xs">({projects.filter(p => p.status === btn.id).length})</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <article
              key={project.title + i}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => { setActive(project); setActiveIndex(i); }}
              className="group cursor-pointer relative rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 overflow-hidden"
            >
              <div className="card-inner p-0">
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="absolute top-3 left-3 text-xs">
                    <span className={`px-3 py-1 rounded-full font-semibold backdrop-blur-sm ${project.status === 'completed' ? 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/30' : 'bg-amber-400/10 text-amber-300 border border-amber-400/30'}`}>
                      {project.status === 'completed' ? <span className="inline-flex items-center gap-2"><Sparkles className="w-3 h-3" /> Live</span> : 'Building'}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 font-medium">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">{project.status === 'completed' ? 'Ready to demo' : 'Under development'}</span>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-zinc-700">Peek</span>
                      <span className="px-3 py-1 rounded-full text-xs bg-white text-black font-medium">Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/Dev-Minteh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:translate-y-[-2px] transition-transform">
            <Github className="w-5 h-5" /> See more on GitHub
          </a>
        </div>
      </div>

      {/* Modal preview (simple, keyboard friendly) */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative z-10 max-w-5xl w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div>
                <h3 className="text-lg font-bold">{active.title}</h3>
                <p className="text-xs text-zinc-500">{active.tech.join(' • ')}</p>
              </div>
              <div className="flex items-center gap-3">
                <a href={active.live} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-emerald-400 text-black font-semibold">Open live</a>
                <a href={active.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded border border-zinc-700 text-zinc-200">View code</a>
                <button onClick={() => setActive(null)} className="px-3 py-1 text-zinc-400">Close</button>
              </div>
            </div>

            <div className="p-4">
              {active.live ? (
                <iframe src={active.live} title={active.title} className="modal-iframe" />
              ) : (
                <img src={active.image} alt={active.title} className="w-full rounded-md" />
              )}

              <div className="mt-4 text-zinc-300">
                <p>{active.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tech.map((t, i) => <span key={i} className="text-xs px-2 py-1 rounded bg-zinc-800">{t}</span>)}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-zinc-800 flex items-center justify-between">
              <div className="text-xs text-zinc-500">Tip: press Esc to close • ← → to cycle</div>
              <div className="flex gap-2">
                <button onClick={() => {
                  const idx = filteredProjects.findIndex(p => p.title === active.title);
                  const next = filteredProjects[(idx - 1 + filteredProjects.length) % filteredProjects.length];
                  setActive(next);
                }} className="px-3 py-1 rounded bg-white/5">Prev</button>

                <button onClick={() => {
                  const idx = filteredProjects.findIndex(p => p.title === active.title);
                  const next = filteredProjects[(idx + 1) % filteredProjects.length];
                  setActive(next);
                }} className="px-3 py-1 rounded bg-white/5">Next</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
// ...existing code...