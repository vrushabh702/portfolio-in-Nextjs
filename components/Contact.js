export default function Contact() {
  return (
    <section className="py-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg mx-4 my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-500 text-center mb-8">
          Contact Me
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-purple-200 bg-opacity-20 text-slate-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-purple-200 bg-opacity-20 text-slate-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-purple-200 bg-opacity-20 text-slate-500 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-6 rounded-full hover:bg-purple-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
