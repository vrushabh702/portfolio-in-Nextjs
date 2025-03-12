// import Image from "next/image"

export default function WhyUs() {
  // console.log("about data", data)
  return (
    <div className="container mx-auto p-4">
      {/* Title and Subtitle Section */}
      <div className="mb-12">
        <h2 className="text-2xl text-gray-400">Why Us</h2>
        <div className="h-12"></div>
        <h1 className="text-5xl text-black w-[470px] h-[112px]">
          This is a subtitle that wraps to the next line if it's too long.
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="flex gap-12">
        {/* Left Side: Single Image */}
        <div className="rounded-3xl overflow-hidden w-[600px] h-[670px]">
          <img
            src="https://via.placeholder.com/600x670"
            alt="Placeholder Image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side: Points */}
        <div className="space-y-8 flex-1">
          {/* Point 1 */}
          <div className="flex items-start gap-6">
            {/* Gradient Circle with Number */}
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-1 border-transparent bg-gradient-to-b from-[#86C8BC] to-[#419081] p-[2px]">
              <div className="w-full h-full    rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
            </div>

            {/* Title and Vertical Line with Subtitle */}
            <div className="flex flex-col">
              <h3 className="text-3xl text-black">Title 1</h3>
              <div className="flex items-center mt-4">
                <div className="w-1 h-[46px] bg-[#86C8BC]"></div>
                <p className="ml-4 text-lg text-gray-300">Subtitle 1</p>
              </div>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex items-start gap-6">
            {/* Gradient Circle with Number */}
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-1 border-transparent bg-gradient-to-b from-[#86C8BC] to-[#419081] p-[2px]">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
            </div>

            {/* Title and Vertical Line with Subtitle */}
            <div className="flex flex-col">
              <h3 className="text-3xl text-black">Title 2</h3>
              <div className="flex items-center mt-4">
                <div className="w-1 h-[46px] rounded-full bg-[#86C8BC]"></div>
                <p className="ml-4 text-lg text-gray-300">Subtitle 2</p>
              </div>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex items-start gap-6">
            {/* Gradient Circle with Number */}
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-1 border-transparent bg-gradient-to-b from-[#86C8BC] to-[#419081] p-[2px]">
              <div className="w-full h-full bg-white   rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
            </div>

            {/* Title and Vertical Line with Subtitle */}
            <div className="flex flex-col">
              <h3 className="text-3xl text-black">Title 3</h3>
              <div className="flex items-center mt-4">
                <div className="w-1 h-[46px] bg-[#86C8BC]"></div>
                <p className="ml-4 text-lg text-gray-300">Subtitle 3</p>
              </div>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex items-start gap-6">
            {/* Gradient Circle with Number */}
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-1 border-transparent bg-gradient-to-b from-[#86C8BC] to-[#419081] p-[2px]">
              <div className="w-full h-full  bg-white  rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
            </div>

            {/* Title and Vertical Line with Subtitle */}
            <div className="flex flex-col">
              <h3 className="text-3xl text-black">Title 4</h3>
              <div className="flex items-center mt-4">
                <div className="w-1 h-[46px] bg-[#86C8BC]"></div>
                <p className="ml-4 text-lg text-gray-300">Subtitle 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
