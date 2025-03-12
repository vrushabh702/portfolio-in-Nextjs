import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

const testimonials = [
  {
    id: 1,
    image: "/path/to/image1.jpg",
    title: "John Doe",
    subtitle: "CEO, Company A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    title: "Jane Smith",
    subtitle: "CTO, Company B",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image: "/path/to/image3.jpg",
    title: "Alice Johnson",
    subtitle: "Designer, Company C",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
]

export default function Testimonials() {
  return (
    <section className="container mx-auto py-[80px]">
      {/* First Row: Title */}
      <div className="text-2xl text-gray-400 text-center mb-[24px]">
        What Our Clients Say
      </div>

      {/* Second Row: Subtitle */}
      <div className="text-5xl text-black text-center mb-[48px]">
        Testimonials
      </div>

      {/* Third Row: Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className={`h-[330px] w-[500px] p-[40px] gap-[24px] rounded-3xl border ${
                index === 0 ? "bg-[#86C8BC47]" : "bg-transparent"
              }`}
              style={{
                borderImage: "linear-gradient(to right, #86C8BC, #419081) 1",
              }}
            >
              {/* First Row: Image and Title */}
              <div className="flex justify-between items-center mb-[24px]">
                <div>
                  <h3 className="text-2xl font-bold">{testimonial.title}</h3>
                  <p className="text-xl text-gray-600">
                    {testimonial.subtitle}
                  </p>
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="h-[70px] w-[70px] rounded-full"
                />
              </div>

              {/* Second Row: Description */}
              <div className="text-sm w-[420px] h-[150px] overflow-y-auto">
                {testimonial.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
