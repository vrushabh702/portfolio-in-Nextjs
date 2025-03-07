const education = [
  {
    degree: "Master in Computer Application",
    institution: "Sarvajanik College of Engineering & Technology",
    year: "2021 - 2023",
    logo: "/education/su.png",
  },
  {
    degree: "Bachelor in Computer Application",
    institution: "Veer Narmad South Gujarat University",
    year: "2018 - 2021",
    logo: "/education/vnsgu.png",
  },
]

export default function Education() {
  return (
    <section className="py-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg mx-4 my-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-500 text-center mb-8">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg flex items-center space-x-4"
            >
              {/* Institution Logo */}
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-16 h-16 object-contain rounded-full border border-gray-300"
              />

              {/* Education Details */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-500 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-slate-500">{edu.institution}</p>
                <p className="text-slate-500">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
