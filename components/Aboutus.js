import {
  faCogs,
  faDatabase,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Aboutus() {
  return (
    <section className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-purple-600 text-white rounded-[20px] h-20 w-20 flex items-center justify-center">
                <div>
                  <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Title 1</h3>
                <p className="text-lg text-slate-600">
                  Description 1 goes here. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-600 text-white rounded-[20px] h-20 w-20 flex items-center justify-center">
                <div>
                  <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Title 2</h3>
                <p className="text-lg text-slate-600">
                  Description 2 goes here. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-600 text-white rounded-[20px] h-20 w-20 flex items-center justify-center">
                <FontAwesomeIcon icon={faCogs} size="2x" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Title 3</h3>
                <p className="text-lg text-slate-600">
                  Description 3 goes here. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-600 text-white rounded-[20px] h-20 w-20 flex items-center justify-center">
                <FontAwesomeIcon icon={faDatabase} size="2x" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Title 4</h3>
                <p className="text-lg text-slate-600">
                  Description 4 goes here. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-gray-800">Main Title</h2>
              <h3 className="text-4xl  text-black">Subtitle</h3>
            </div>

            <div>
              <img
                src="showcase.webp"
                alt="Image"
                className="rounded-[20px] w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
