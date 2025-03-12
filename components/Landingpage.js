export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex">
        <div className="w-6/12 p-16 relative">
          <h1 className="text-7xl font-bold mb-8">
            Transform Your Digital Experience Today
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Innovative solutions for modern businesses seeking breakthrough
            results.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition">
              View Now
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black">
              →
            </button>
          </div>

          <div className="absolute bottom-16 left-16">
            <a
              href="#"
              className="text-purple-500 flex items-center gap-2 hover:text-purple-400"
            >
              <span>Scroll to learn more</span>
              <span className="animate-bounce">↓</span>
            </a>
          </div>
        </div>

        <div className="w-6/12 p-8">
          <div className="grid grid-cols-12 gap-4 mb-4">
            <div className="col-span-8">
              <div
                alt=""
                className="w-full h-64 object-cover rounded-2xl border-2 border-white"
              />
            </div>
            <div className="col-span-4">
              <div
                alt=""
                className="w-full h-64 object-cover rounded-2xl border-2 border-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mb-4">
            <div className="col-span-4">
              <div
                alt=""
                className="w-full h-64 object-cover rounded-2xl border-2 border-white"
              />
            </div>
            <div className="col-span-8"></div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-8">
              <p className="text-gray-400">
                Creating innovative solutions for tomorrow's challenges
              </p>
            </div>
            <div className="col-span-4">
              <button className="w-full py-3 rounded-full border-2 border-black bg-white text-black hover:bg-gray-100">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
