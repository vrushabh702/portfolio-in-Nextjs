import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and Node.js.",
    image: "/modern_web.webp",
    link: "#",
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with a responsive design.",
    image: "/e_commerce.webp",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A portfolio website showcasing my skills and projects.",
    image: "/showcase.webp",
    link: "#",
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with a responsive design.",
    image: "/e_commerce.webp",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section className="py-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg mx-4 my-8 pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-700 text-center mb-8">
          Projects
        </h2>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
