// import Image from "next/image"

export default function FooterNew() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img
              src="https://via.placeholder.com/182x44"
              alt="Logo"
              className="h-[44px] w-[182px] mb-6"
            />
            <p className="text-sm max-w-[370px]">
              This is a description text below the logo. It provides some
              information about the company or website.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/20x20"
                  alt="Icon"
                  className="h-5 w-5"
                />
                <span className="text-sm">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/20x20"
                  alt="Icon"
                  className="h-5 w-5"
                />
                <span className="text-sm">info@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/20x20"
                  alt="Icon"
                  className="h-5 w-5"
                />
                <span className="text-sm">123 Main St, City, Country</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <div className="flex flex-col gap-[18px]">
              <span className="text-sm">Web Development</span>
              <span className="text-sm">Mobile App Development</span>
              <span className="text-sm">UI/UX Design</span>
              <span className="text-sm">Digital Marketing</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 w-[1170px] mx-auto mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2025 MernMatrix. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="text-sm">
              Cookie Policy
            </a>
            <a href="#" className="text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-sm">
              Privacy Policy
            </a>
          </div>

          <div className="flex gap-6">
            <img
              src="https://via.placeholder.com/24x24"
              alt="WhatsApp"
              className="h-6 w-6"
            />
            <img
              src="https://via.placeholder.com/24x24"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
