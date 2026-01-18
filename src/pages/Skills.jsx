
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



// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiTypescript,
// } from "react-icons/si";
// import Tilt from "react-parallax-tilt";

// const skills = [
//   { name: "HTML", level: 100, icon: <SiHtml5 className="text-orange-500 text-3xl" />, color: "from-orange-400 to-orange-600" },
//   { name: "CSS", level: 100, icon: <SiCss3 className="text-blue-500 text-3xl" />, color: "from-blue-400 to-blue-600" },
//   { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400 text-3xl" />, color: "from-yellow-400 to-yellow-600" },
//   { name: "React", level: 90, icon: <SiReact className="text-cyan-500 text-3xl" />, color: "from-cyan-400 to-cyan-600" },
//   { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss className="text-sky-400 text-3xl" />, color: "from-sky-400 to-sky-600" },
//   { name: "TypeScript", level: 75, icon: <SiTypescript className="text-blue-600 text-3xl" />, color: "from-blue-600 to-blue-800" },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 sm:px-12 bg-gray-50 relative overflow-hidden" data-aos="fade-up">
//       {/* Floating Background Circles */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-200 rounded-full opacity-10 -z-10"></div>

//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-12 text-blue-600 text-center">My Skills</h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {skills.map((skill, i) => (
//             <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} className="transition-transform duration-300">
//               <div className="p-6 rounded-xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out relative bg-white">
                
//                 {/* Icon */}
//                 <div className="mb-3 flex justify-center group relative">
//                   {skill.icon}
//                   {/* Tooltip */}
//                   <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
//                     {skill.level}% proficiency
//                   </div>
//                 </div>

//                 {/* Name */}
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">{skill.name}</h3>

//                 {/* Gradient Badge */}
//                 <span
//                   className={`text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r ${skill.color} text-white mb-3 inline-block`}
//                 >
//                   {skill.level >= 90 ? "Advanced" : skill.level >= 75 ? "Intermediate" : "Beginner"}
//                 </span>

//                 <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
//                   <div
//                     className="absolute h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-fill"
//                     style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
//                   ></div>
//                 </div>

//               </div>
//             </Tilt>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { Code2, Layers, Wrench } from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";
const skills = [
  { 
    name: "HTML", 
    level: 100, 
    category: "core",
    icon:  <SiHtml5 className="text-orange-500 text-5xl" />
  },
  { 
    name: "CSS", 
    level: 100, 
    category: "core",
    icon:  <SiCss3 className="text-blue-500 text-5xl" />,
  },
  { 
    name: "JavaScript", 
    level: 80, 
    category: "core",
    icon: <SiJavascript className="text-yellow-400 text-5xl" /> 
  },
  { 
    name: "React", 
    level: 90, 
    category: "framework",
    icon:  <SiReact className="text-cyan-500 text-5xl" />
  },
  { 
    name: "Next", 
    level: 90, 
    category: "framework",
    icon:  <SiNextdotjs className="text-black dark:text-white text-5xl" />
  },
  { 
    name: "Tailwind CSS", 
    level: 90, 
    category: "framework",
    icon:  <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  { 
    name: "TypeScript", 
    level: 75, 
    category: "core",
    icon: <SiTypescript className="text-blue-600 text-5xl" />
  },
  { 
    name: "Github", 
    level: 75, 
    category: "tools",
    icon: <SiGithub className='text-white text-5xl'/>
  }
];

const categories = [
  { id: 'all', label: 'All Skills', icon: <Layers className="w-4 h-4" /> },
  { id: 'core', label: 'Core', icon: <Code2 className="w-4 h-4" /> },
  { id: 'framework', label: 'Frameworks', icon: <Layers className="w-4 h-4" /> },
  { id: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> }
];

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(s => s.category === filter);

  const getSkillLevel = (level) => {
    if (level >= 90) return { label: 'Advanced', color: 'emerald' };
    if (level >= 75) return { label: 'Intermediate', color: 'blue' };
    return { label: 'Learning', color: 'purple' };
  };

  return (
    <section id="skills" className="relative py-32 bg-zinc-950 border-t border-zinc-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-zinc-400 font-medium">Tech stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Tools and technologies I work with to build modern web applications. 
            Always learning and expanding my toolkit.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-white text-black'
                  : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const levelInfo = getSkillLevel(skill.level);
            
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300"
              >
                {/* Skill Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {skill.name}
                </h3>

                {/* Level Badge */}
                <div className="mb-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    levelInfo.color === 'emerald' 
                      ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                      : levelInfo.color === 'blue'
                      ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20'
                      : 'bg-purple-400/10 text-purple-400 border border-purple-400/20'
                  }`}>
                    {levelInfo.label}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'slideIn 1s ease-out'
                    }}
                  ></div>
                </div>

                {/* Percentage */}
                <div className="mt-2 text-right">
                  <span className="text-xs text-zinc-500 font-medium">
                    {skill.level}%
                  </span>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/0 to-emerald-600/0 group-hover:from-emerald-400/5 group-hover:to-emerald-600/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-zinc-900">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {skills.length}+
              </div>
              <div className="text-sm text-zinc-400">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {skills.filter(s => s.level >= 90).length}
              </div>
              <div className="text-sm text-zinc-400">Advanced Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                2+
              </div>
              <div className="text-sm text-zinc-400">Years Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                Always
              </div>
              <div className="text-sm text-zinc-400">Growing</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6">
            Interested in working together or want to see what I can build?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
}
