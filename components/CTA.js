export default function CTA() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-5xl font-bold max-w-[600px]">
          This is a Call to Action Title That Can Wrap to the Next Line
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-base text-gray-600 max-w-[600px]">
          This is a supporting text for the call to action. It provides
          additional context or information to encourage the user to take
          action.
        </p>

        <div className="flex items-center ">
          <button className="bg-[#6805F1] text-white px-8 py-4 rounded-full w-[288px] h-[60px] hover:bg-blue-700 transition">
            Take Action
          </button>
          <button className="bg-[#6805F1] text-white h-[60px] w-[60px] rounded-full hover:bg-blue-700 transition">
            →
          </button>
        </div>
      </div>
    </div>
  )
}
