import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-8 bg-white bg-opacity-10 backdrop-blur-md mt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-500 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-500 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-500 transition duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
        <p className="text-slate-700">
          &copy; {new Date().getFullYear()} [Vrushabh Patil]. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
