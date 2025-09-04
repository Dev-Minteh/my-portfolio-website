
// export default function Projects() {
//   return (
//     <section className="py-20 bg-white" data-aos="fade-up">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-[#0A174E] mb-6">Projects</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {[1, 2, 3].map((project) => (
//             <div
//               key={project}
//               className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
//             >
//               <h3 className="text-xl font-semibold mb-2 text-[#0A174E]">
//                 Project {project}
//               </h3>
//               <p className="text-gray-700">Description of project {project}.</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// const projects = [
//   {
//     title: "Tip Calculator",
//     description: "A simple React app to calculate tips and split bills.",
//     live: "https://your-tip-app.netlify.app",
//     github: "https://github.com/yourusername/tip-calculator",
//   },
//   {
//     title: "StorCom",
//     description: "A simple E commerce website for shopping.",
//     live: "https://your-tip-app.netlify.app",
//     github: "https://github.com/yourusername/tip-calculator",
//   },
//   {
//     title: "Fenex",
//     description: "A website hoes site to run compaigns and promote websites.",
//     live: "https://your-tip-app.netlify.app",
//     github: "https://github.com/yourusername/tip-calculator",
//   },
//   {
//     title: "StorCom",
//     description: "A simple E commerce website for shopping.",
//     live: "https://your-tip-app.netlify.app",
//     github: "https://github.com/yourusername/tip-calculator",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="p-4 bg-white">
//       <h2 className="text-2xl font-bold text-center mb-6 text-fuchsia-600">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {projects.map((p) => (
//          <div className="border p-4 rounded-lg shadow-sm hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
//         <h3 className="text-xl font-semibold">{p.title}</h3>
//         <p className="text-gray-600">{p.description}.</p>
//         <div className="mt-2 flex gap-4">
//         <a href="https://your-live-demo" target="_blank" className="text-blue-600 underline">Live</a>
//         <a href="https://github.com/your-repo" target="_blank" className="text-blue-600 underline">GitHub</a>
//     </div>
// </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const projects = [
  {
    title: "Tip Calculator",
    description: "A simple React app to calculate tips and split bills.",
    live: "https://your-tip-app.netlify.app",
    github: "https://github.com/yourusername/tip-calculator",
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
    live: "https://your-store-v2.netlify.app",
    github: "https://github.com/yourusername/storecom-v2",
    image: "Screenshot (15).png",
    tech: ["React", "Tailwind"],
  },
  {
    title: "StoreCom v2",
    description: "An improved version of the e-commerce store with more features.",
    live: "https://your-store-v2.netlify.app",
    github: "https://github.com/yourusername/storecom-v2",
    image: "https://source.unsplash.com/600x400/?online-store,tech",
    tech: ["React", "Tailwind", "Context API"],
  },
];



  export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 text-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
          >
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-fuchsia-100 text-fuchsia-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



