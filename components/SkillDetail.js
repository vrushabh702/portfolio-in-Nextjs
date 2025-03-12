import Image from "next/image"

export default function SkillDetail() {
  return (
    <section className="container mx-auto p-8">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:px-8">
          {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
          <div className=" max-w-md px-4">
            <div className="relative">
              <Image
                src="/home/home-2.jpg"
                alt="Top Image"
                width={487}
                height={500}
                className="relative z-30 rounded-lg border-4 border-white shadow-lg"
              />

              <img
                src="/home/home-4.jpg"
                alt="Middle Image"
                className="absolute bottom-[20px] right-[20px] z-20  w-[487px]  rounded-lg border-4 border-white shadow-md"
              />

              <img
                src="/home/home-5.jpg"
                alt="Bottom Image"
                className="absolute bottom-[40px] right-[40px] z-10 w-[487px]   rounded-lg border-4 border-white shadow"
              />
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="w-full px-4 md:w-1/2 lg:px-8">
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
            <div className="flex flex-wrap gap-4">
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
