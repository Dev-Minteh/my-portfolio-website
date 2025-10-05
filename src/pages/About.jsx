
import { motion } from "framer-motion"; 
import { FiCode, FiBookOpen, FiStar } from "react-icons/fi";

export default function About() {
  return (
   <section id="about" className="py-20  px-4 sm:px-12 bg-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center  mb-6 text-blue-600">About Me</h2>
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
    
    <div className="md:w-1/2">
      <p className="text-gray-700 font-sans text-xl leading-relaxed">
        I'm a junior frontend developer currently studying at <strong>Jasseh Code Camp (JCC)</strong>. 
        I’ve completed my first phase <strong>FDP 1</strong>, where I focused on HTML, JavaScript, and React. 
        I’m now continuing with <strong>FDP 2</strong>, diving deeper into React,Tailwind CSS and <strong>TypeScript</strong> <br /><br />
        I love building things with code clean interfaces, interactive pages, and user-friendly experiences. 
        I'm passionate about learning and improving every day, and I enjoy taking on new challenges to grow as a developer.
      </p>
    </div>

    <div className="md:w-1/2 flex justify-center">
      <img
        src="/public/images/profile1.jpg"
        alt="Mollar"
        className="w-64 h-64 object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</section>

  );
}

