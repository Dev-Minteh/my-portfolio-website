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


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Nav from "./Nav";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col">
      <Nav />

      {/* Background Decorative Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-sm uppercase tracking-wide font-semibold text-gray-600">
                Front-end Developer
              </h1>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-tight text-gray-900">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Modou Lamin Minteh
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-700 max-w-md"
            >
              A passionate developer who builds scalable web apps, loves clean
              code, and enjoys solving real-world problems with modern tech.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a
                href="https://github.com/Dev-Minteh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg shadow-md bg-black text-white hover:scale-105 hover:shadow-xl transition-all"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 hover:shadow-xl transition-all"
              >
                View Projects
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 hover:shadow-xl transition-all"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center md:justify-end relative"
          >
            {/* Glow effect behind image */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative z-10 p-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl">
              <img
<<<<<<< HEAD
                src="/images/profile1.jpg"
=======
                src="/images/my_image.jpg"
>>>>>>> fc0b303 (updated: heresection, about, skills, project, and footer)
                alt="Developer Portrait"
                className="w-72 h-72 object-cover rounded-2xl border-4 border-blue-200 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
