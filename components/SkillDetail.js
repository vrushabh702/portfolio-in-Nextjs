export default function SkillDetail() {
  return (
    <section className="container mx-auto p-8">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="relative">
            <img
              src="home/home-1.png"
              alt="Top Image"
              className="bg relative z-30 rounded-lg border-4 border-white"
            />
            <img
              src="home/home-2.png"
              alt="Middle Image"
              className="absolute top-5 left-5 z-20 h-full w-full rounded-lg border-4 border-white"
            />
            <img
              src="home/home-3.png"
              alt="Bottom Image"
              className="absolute top-10 left-10 z-10 h-full w-full rounded-lg border-4 border-white"
            />
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2">
          <div className="mb-4">
            <h2 className="text-2xl text-slate-500">About Us</h2>
          </div>

          <div className="mb-4">
            <h1 className="text-5xl font-bold text-black">Our Story</h1>
          </div>

          <div className="mb-6">
            <p className="mb-4 text-xl text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-xl text-slate-400">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="mr-2 text-white">✓</span>
                <span className="text-white">JavaScript</span>
              </div>
              <div className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="mr-2 text-white">✓</span>
                <span className="text-white">Python</span>
              </div>
              <div className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="mr-2 text-white">✓</span>
                <span className="text-white">Java</span>
              </div>
              <div className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="mr-2 text-white">✓</span>
                <span className="text-white">C++</span>
              </div>
              <div className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="mr-2 text-white">✓</span>
                <span className="text-white">Ruby</span>
              </div>
              <div className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="mr-2 text-white">✓</span>
                <span className="text-white">Go</span>
              </div>
              <div className="flex items-center rounded-full bg-black px-4 py-2">
                <span className="mr-2 text-white">✓</span>
                <span className="text-white">Rust</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700">
              Learn More
            </button>
            <button className="rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700">
              <span className="mr-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
