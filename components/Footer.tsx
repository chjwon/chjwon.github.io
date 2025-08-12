export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <p className="text-gray-300 mb-6">
          I&apos;m always interested in discussing research opportunities and collaborations.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:jwchoi@usc.edu" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Email
          </a>
          <a 
            href="https://github.com/chjwon" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 Jae Won Choi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}