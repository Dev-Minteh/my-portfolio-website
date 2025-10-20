// const projects = [
//   {
//     title: "Tip Calculator",
//     description: "A simple React app to calculate tips and split bills.",
//     live: "https://your-tip-app.netlify.app",
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
//    {
//     title: "World Countries",
//     description: "A website where you can search countries at any part of the world.",
//     live: "https://world-countries-ten-mu.vercel.app/",
//     github: "https://github.com/Dev-Minteh/world-countries.git",
//     image: "images/Screenshot (15).png",
//     tech: ["React", "Tailwind"],
//   },
//   {
//     title: "Sneakers Website",
//     description: "An improved version of the e-commerce store with more features.",
//     live: "https://sneaker-website-gray.vercel.app/",
//     github: "https://github.com/Dev-Minteh/Sneaker-Website.git",
//     image: "public/images/Screenshot (29).png",
//     tech: ["React", "Tailwind", "Context API", "Redux"],
//   },
// ];



//   export default function Projects() {
//   return (
//     <section id="projects" className="py-16 px-4 bg-gray-50 text-white" data-aos="fade-up">
//       <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Projects</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((p, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
//           >
//             <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />

//             <div className="p-5">
//               <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//               <p className="text-gray-600 text-sm mb-4">{p.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {p.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-fuchsia-100 text-fuchsia-800 text-xs px-2 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-4 text-sm">
//                 <a
//                   href={p.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View Project →
//                 </a>
//                 <a
//                   href={p.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:underline"
//                 >
//                   GitHub ↗
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Tip Calculator",
    description: "A simple React app to calculate tips and split bills.",
    live: "https://your-tip-app.netlify.app",
    github: "https://github.com/Dev-Minteh/Tip-calculator.git",
    image: "images/Screenshot (14).png",
    tech: ["React", "Tailwind"],
  },
  {
    title: "StorCom",
    description: "A simple e-commerce website for shopping.",
    live: "https://your-store.netlify.app",
    github: "https://github.com/yourusername/storecom",
    image: "images/Screenshot (10).png",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Fenex",
    description: "A landing page for running campaigns and promoting websites.",
    live: "https://your-fenex.netlify.app",
    github: "https://github.com/yourusername/fenex",
    image: "images/Screenshot (13).png",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "World Countries",
    description: "A website where you can search countries at any part of the world.",
    live: "https://world-countries-ten-mu.vercel.app/",
    github: "https://github.com/Dev-Minteh/world-countries.git",
    image: "images/Screenshot (15).png",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Sneakers Website",
    description: "A modern sneaker e-commerce website with advanced features.",
    live: "https://sneaker-website-gray.vercel.app/",
    github: "https://github.com/Dev-Minteh/Sneaker-Website.git",
    image: "images/Screenshot (29).png",
    tech: ["React", "Tailwind", "Context API", "Redux"],
  },
  {
    title: "Designo Website",
    description: "A multi-page website for a design agency.",
    live: "https://designo-website-eight.vercel.app/",
    github: "https://github.com/Dev-Minteh/Designo-website.git",
    image: "/images/Screenshot (52).png",
    tech: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "Movie Website",
    description: "A movie website to search for movies and TV shows.",
    live: "https://entertainment-web-app-lk9w.vercel.app/",
    github: "https://github.com/Dev-Minteh/Entertainment-Web-App.git",
    image: "/images/Screenshot (50).png",
    tech: ["React", "Tailwind", "Context", "TypeScript", "Redux"],
  },
  {
    title: "Financial App",
    description: "An financial app to manage your expenses and income.",
    live: "https://sneaker-website-gray.vercel.app/",
    github: "https://github.com/Dev-Minteh/personal-finance-app.git",
    image: "/images/Screenshot (54).png",
    tech: ["React", "Tailwind", "Context", "Redux", "TypeScript"],
  },
  {
    title: "Audiophile Website",
    description: "An e-commerce website for audio products.",
    live: "https://adiophile.vercel.app/",
    github: "https://github.com/Dev-Minteh/Adiophile.git",
    image: "/images/Screenshot (51).png",
    tech: ["React", "Tailwind", "TypeScript"],
  },
   {
    title: "Dev finder app",
    description: "An app to search for GitHub profiles and view their details.",
    live: "https://adiophile.vercel.app/",
    github: "https://github.com/Dev-Minteh/dev-finder-app.git",
    image: "/images/Screenshot (64).png",
    tech: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "Browser Extension Manager",
    description: "A web app to manage and organize your browser extensions.",
    live: "https://dev-finder-app-6x5t.vercel.app/",
    github: "https://github.com/Dev-Minteh/Browser-extension-manager.git",
    image: "/images/Screenshot (65).png",
    tech: ["React", "Tailwind", "JavaScript"],
  },
   {
    title: "Dessert Product Page",
    description: "A product page for a dessert shop showcasing various treats.",
    live: "https://dessert-product-page-seven.vercel.app/",
    github: "https://github.com/Dev-Minteh/Dessert-Product-Page.git",
    image: "/images/Screenshot (66).png",
    tech: ["React", "Tailwind", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image with Hover Overlay */}
            <div className="relative group">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex gap-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2 text-sm"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-900 transition flex items-center gap-2 text-sm"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{p.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
