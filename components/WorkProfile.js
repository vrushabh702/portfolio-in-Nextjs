const workExperience = [
  {
    position: "Frontend Developer",
    company: "Appeak Infotech",
    duration: "Oct 2024 - Present",
    description:
      "Developed and maintained user interfaces for web applications using React and Next.js.",
  },
  {
    position: "Intern - Web Development",
    company: "Alita Infotech",
    duration: "Jan 2023 - Nov 2023",
    description:
      "Assisted in building responsive websites and collaborated with the design team.",
  },
]

export default function WorkProfile() {
  return (
    <section className="py-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg mx-4 my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Work Experience
        </h2>
        <div className="space-y-6">
          {workExperience.map((work, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {work.position}
              </h3>
              <p className="text-slate-700">{work.company}</p>
              <p className="text-slate-700">{work.duration}</p>
              <p className="text-slate-700 mt-2">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
