<<<<<<< HEAD
=======
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
// } from "react-icons/si";

// const skills = [
//   { name: "HTML", level: "Advanced", icon: <SiHtml5 className="text-orange-500 text-3xl" />, color: "bg-green-100 text-green-800" },
//   { name: "CSS", level: "Advanced", icon: <SiCss3 className="text-blue-500 text-3xl" />, color: "bg-yellow-100 text-yellow-800" },
//   { name: "JavaScript", level: "Intermediate", icon: <SiJavascript className="text-yellow-400 text-3xl" />, color: "bg-yellow-100 text-yellow-800" },
//   { name: "React", level: "Advanced", icon: <SiReact className="text-cyan-500 text-3xl" />, color: "bg-blue-100 text-blue-800" },
//   { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss className="text-sky-400 text-3xl" />, color: "bg-cyan-100 text-cyan-800" },
//   { name: "TypeScript", level: "Intermediate", icon: <SiTypescript className="text-blue-600 text-3xl" />, color: "bg-red-100 text-red-800" },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 sm:px-12 bg-gray-50" data-aos="fade-up">
//   <div className="max-w-6xl mx-auto">
//     <h2 className="text-3xl font-bold mb-10 text-blue-600 text-center">My Skills</h2>

//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//       {skills.map((skill, i) => (
//         <div
//           key={i}
//           className="p-5 rounded-xl shadow-lg text-center hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
//         >
//           <div className="mb-3 flex justify-center">{skill.icon}</div>
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
//           <span
//             className={`text-sm px-3 py-1 rounded-full font-medium ${skill.color}`}
//           >
//             {skill.level}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }
>>>>>>> fc0b303 (updated: heresection, about, skills, project, and footer)


import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  { name: "HTML", level: 100, icon: <SiHtml5 className="text-orange-500 text-3xl" />, color: "from-orange-400 to-orange-600" },
  { name: "CSS", level: 100, icon: <SiCss3 className="text-blue-500 text-3xl" />, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400 text-3xl" />, color: "from-yellow-400 to-yellow-600" },
  { name: "React", level: 90, icon: <SiReact className="text-cyan-500 text-3xl" />, color: "from-cyan-400 to-cyan-600" },
  { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss className="text-sky-400 text-3xl" />, color: "from-sky-400 to-sky-600" },
  { name: "TypeScript", level: 75, icon: <SiTypescript className="text-blue-600 text-3xl" />, color: "from-blue-600 to-blue-800" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-12 bg-gray-50 relative overflow-hidden" data-aos="fade-up">
      {/* Floating Background Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-200 rounded-full opacity-10 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-blue-600 text-center">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} className="transition-transform duration-300">
              <div className="p-6 rounded-xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out relative bg-white">
                
                {/* Icon */}
                <div className="mb-3 flex justify-center group relative">
                  {skill.icon}
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    {skill.level}% proficiency
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{skill.name}</h3>

                {/* Gradient Badge */}
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r ${skill.color} text-white mb-3 inline-block`}
                >
                  {skill.level >= 90 ? "Advanced" : skill.level >= 75 ? "Intermediate" : "Beginner"}
                </span>

                <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-fill"
                    style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                  ></div>
                </div>

              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
