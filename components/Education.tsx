export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Ph.D in Computer Science
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              University of Southern California
            </p>
            <p className="text-gray-500 dark:text-gray-400">2025 - Present</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Advisor: Prof. Ruishan Liu
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              B.S in Computer Science
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              University of Texas at Dallas
            </p>
            <p className="text-gray-500 dark:text-gray-400">2020 - 2025</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Advisors: Prof. Yulia Gel, Prof. Vincent Ng | GPA: 3.6/4.0
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
