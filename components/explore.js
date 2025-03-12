export default function Explore() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-gray-400 text-2xl">Title</h2>
        <h1 className="text-black text-5xl">Subtitle</h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <div className="rounded-full border-2 border-purple-500 px-4 py-2 text-center">
          Backend
        </div>
        <div className="rounded-full border-2 border-purple-500 px-4 py-2 text-center">
          Frontend
        </div>
        <div className="rounded-full border-2 border-purple-500 px-4 py-2 text-center">
          Database Management
        </div>
        <div className="rounded-full border-2 border-purple-500 bg-purple-500 text-white px-4 py-2 text-center">
          Cloud & Infrastructure
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="w-40 h-32 bg-white flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="w-40 h-32 bg-white flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            alt="Next.js Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="w-40 h-32 bg-white flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="w-40 h-32 bg-white flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="w-40 h-32 bg-white flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt="CSS Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="w-40 h-32 bg-white flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg"
            alt="jQuery Logo"
            className="w-16 h-16"
          />
        </div>
      </div>
    </div>
  )
}
