// sections/Contact.jsx
export default function Contact() {
  return (
    <section className="py-20 bg-gray-200 " data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Contact</h2>
        <p className="mb-6">
          Let’s work together! Drop me a message and I’ll get back to you.
        </p>
        <form className="space-y-4 ">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg text-gary-600 border-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg text-gray-600 border-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg text-gray-600 border-2"
            rows="5"
          />
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
