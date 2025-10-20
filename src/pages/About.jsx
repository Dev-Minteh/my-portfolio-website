
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

import { motion } from "framer-motion";
import { FiCode, FiBookOpen, FiStar } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I'm a junior <span className="font-semibold text-blue-600">frontend developer</span> currently studying at 
            <strong> Jasseh Code Camp (JCC)</strong>.  
            I’ve completed my first phase in <strong>Frontend Development Part 1</strong> (HTML, CSS, JavaScript), 
            and I’m now continuing with <strong>Frontend Development Part 2</strong>, 
            diving deeper into <strong>React, Tailwind CSS, and TypeScript</strong>.  
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            I love building clean interfaces, interactive pages, and user-friendly experiences.  
            I'm passionate about learning and improving every day, and I enjoy taking on new challenges to grow as a developer.
          </p>

          {/* Quick Facts */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
              <FiCode className="text-blue-600 text-2xl" />
              <span className="text-gray-700">Frontend Lover</span>
            </div>
            <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
              <FiBookOpen className="text-blue-600 text-2xl" />
              <span className="text-gray-700">Always Learning</span>
            </div>
            <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
              <FiStar className="text-blue-600 text-2xl" />
              <span className="text-gray-700">Clean Code</span>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
            <img
              src="/images/my_image.jpg"
              alt="Mollar"
              className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-blue-200 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
