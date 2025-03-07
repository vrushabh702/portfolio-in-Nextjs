import Skills from "@/components/Skills"
import Layout from "./layout"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import WorkProfile from "@/components/WorkProfile"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"
import { Link } from "react-scroll"
import Head from "next/head"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const images = [
    "/home/home-1.jpg",
    "/home/home-2.jpg",
    "/home/home-3.jpg",
    "/home/home-4.jpg",
    "/home/home-5.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <Head>
        <title>[Vrushabh Patil] - Web Developer Portfolio</title>
        <meta
          name="description"
          content="A modern portfolio showcasing my skills, projects, and experience as a web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className=" overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full transition-all-duration-1000">
            <Image
              src={images[currentImageIndex]}
              alt="background Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          <div className="relative w-full h-[90%]  text-center text-white py-20">
            <h1 className="text-6xl font-bold text-white mb-4">
              Hi, I'm [Vrushabh Patil]
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A passionate web developer building modern web applications.
            </p>
            {/* <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300">
              View My Work
            </button> */}
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300 cursor-pointer"
            >
              View My Work
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Education Section */}
        <Education />

        {/* Work Profile Section */}
        <WorkProfile />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </Layout>
    </>
  )
}
