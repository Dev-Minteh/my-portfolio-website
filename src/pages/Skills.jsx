// export default function Skills() {
//   const skills = ["JavaScript", "React", "Tailwind CSS", "Node.js", "Framer Motion"];

//   return (
//     <section className="py-20 bg-gray-100" data-aos="fade-up">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-[#0A174E] mb-6">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow-md text-center font-medium text-[#0A174E]"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-50 px-4 sm:px-12">
//   <div className="max-w-4xl mx-auto">
//     <h2 className="text-3xl font-bold mb-8 text-gray-900">My Skills</h2>
    
//     <div className="space-y-6">
//       {/* Skill item */}
//       {[
//         { name: 'HTML', level: 90 },
//         { name: 'CSS', level: 80 },
//         { name: 'JavaScript', level: 75 },
//         { name: 'React', level: 70 },
//         { name: 'Tailwind CSS', level: 65 },
//         { name: 'TypeScript', level: 50 },
//       ].map((skill, index) => (
//         <div key={index}>
//           <div className="flex justify-between mb-1">
//             <span className="text-gray-700 font-medium">{skill.name}</span>
//             <span className="text-gray-500 text-sm">{skill.level}%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <div
//               className="bg-blue-500 h-3 rounded-full"
//               style={{ width: `${skill.level}%` }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", level: "Advanced", icon: <SiHtml5 className="text-orange-500 text-3xl" />, color: "bg-green-100 text-green-800" },
  { name: "CSS", level: "Advanced", icon: <SiCss3 className="text-blue-500 text-3xl" />, color: "bg-yellow-100 text-yellow-800" },
  { name: "JavaScript", level: "Intermediate", icon: <SiJavascript className="text-yellow-400 text-3xl" />, color: "bg-yellow-100 text-yellow-800" },
  { name: "React", level: "Advanced", icon: <SiReact className="text-cyan-500 text-3xl" />, color: "bg-blue-100 text-blue-800" },
  { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss className="text-sky-400 text-3xl" />, color: "bg-cyan-100 text-cyan-800" },
  { name: "TypeScript", level: "Beginner", icon: <SiTypescript className="text-blue-600 text-3xl" />, color: "bg-red-100 text-red-800" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-12 bg-gray-50" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-blue-600 text-center">My Skills</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="border p-5 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        >
          <div className="mb-3 flex justify-center">{skill.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${skill.color}`}
          >
            {skill.level}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}