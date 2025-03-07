import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa"

const skills = [
  { name: "React", icon: <FaReact className="w-12 h-12" />, level: "90%" },
  { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" />, level: "80%" },
  { name: "HTML5", icon: <FaHtml5 className="w-12 h-12" />, level: "95%" },
  { name: "CSS3", icon: <FaCss3Alt className="w-12 h-12" />, level: "90%" },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="w-12 h-12" />,
    level: "85%",
  },
]

export default function Skills() {
  return (
    <section className="py-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg mx-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center text-purple-500 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-500 h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
