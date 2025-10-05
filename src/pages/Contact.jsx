import { FiMail, FiUser, FiMessageSquare} from "react-icons/fi";


export default function Contact() {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden" data-aos="fade-up">
      {/* Floating Background Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-200 rounded-full opacity-10 -z-10"></div>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Contact Me</h2>
        <p className="mb-10 text-center text-gray-700">
          Let’s work together! Drop me a message and I’ll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side decorative / info */}
          <div className="hidden md:flex flex-col space-y-6">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="flex items-center gap-2"><FiMail /> latehminteh@gmail.com</p>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Message Me</h3>
              <p className="flex items-center gap-2"><FiMessageSquare /> I respond fast!</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <FiUser className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <FiMail className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <textarea
                placeholder="Your Message"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                rows={5}
              />
              <FiMessageSquare className="absolute top-2 right-4 text-gray-400" />
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
