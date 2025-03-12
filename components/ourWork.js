export default function OurWork() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl text-gray-400">Title</h2>
      </div>

      <div className="flex justify-between items-center mb-12">
        <h1 className="text-5xl text-black">Sub Title</h1>
        <button className="bg-black text-white me-[160px] px-6 py-3 rounded-full">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white  rounded-3xl w-[570px] h-[525px] p-[26px] flex flex-col gap-8">
          <img
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card Image"
            className="w-[522px] h-[300px] rounded-3xl"
          />
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between items-center ">
              <div className="flex justify-between items-center ">
                <h3 className="text-2xl text-black">Card Title</h3>
                <button className="bg-black text-white h-[34px] w-[34px] rounded-full hover:bg-slate-700 transition">
                  →
                </button>
              </div>
              <button className="bg-black text-white h-[34px] w-[34px] rounded-full hover:bg-slate-700 transition">
                →
              </button>
            </div>

            <p className="text-sm text-gray-400">
              This is a description for the card. It provides some details about
              the content.
            </p>
            <div className="flex gap-2">
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                React
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                MongoDB
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Express
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-3xl w-[570px] h-[525px] p-[26px] flex flex-col gap-8">
          <img
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card Image"
            className="w-[522px] h-[300px] rounded-3xl"
          />
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between items-center ">
              <h3 className="text-2xl text-black">Card Title</h3>
              <button className="bg-black text-white h-[34px] w-[34px] rounded-full hover:bg-slate-700 transition">
                →
              </button>
            </div>
            <p className="text-sm text-gray-400">
              This is a description for the card. It provides some details about
              the content.
            </p>
            <div className="flex gap-2">
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                React
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                MongoDB
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Express
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white  rounded-3xl w-[570px] h-[525px] p-[26px] flex flex-col gap-8">
          <img
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card Image"
            className="w-[522px] h-[300px] rounded-3xl"
          />
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between items-center ">
              <h3 className="text-2xl text-black">Card Title</h3>
              <button className="bg-black text-white h-[34px] w-[34px] rounded-full hover:bg-slate-700 transition">
                →
              </button>
            </div>
            <p className="text-sm text-gray-400">
              This is a description for the card. It provides some details about
              the content.
            </p>
            <div className="flex gap-2">
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                React
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                MongoDB
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Express
              </span>
            </div>
          </div>
        </div>

        {/* <div className="bg-white  rounded-3xl w-[570px] h-[525px] p-[26px] flex flex-col gap-[32px]">
          <img
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card Image"
            className="w-[522px] h-[300px] rounded-3xl"
          />
          <div className="flex flex-col gap-[20px]">
               <div className="flex justify-between items-center ">
                <h3 className="text-2xl text-black">Card Title</h3>
                <button className="bg-black text-white h-[34px] w-[34px] rounded-full hover:bg-slate-700 transition">
                  →
                </button>
              </div>
            <p className="text-sm text-gray-400">
              This is a description for the card. It provides some details about
              the content.
            </p>
            <div className="flex gap-2">
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                React
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                MongoDB
              </span>
              <span className="bg-[#F5F5F5CC] py-2 px-3 rounded-full text-sm">
                Express
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
