export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              JPL Visiting Student Research Program (JVSRP)
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              NASA Jet Propulsion Laboratory
            </p>
            <p className="text-gray-500 dark:text-gray-400">Aug 2024 - Feb 2025</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Mentor: Kyo Lee
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Naval Research Enterprise Internship Program (NREIP)
            </h3>
            <p className="text-green-600 dark:text-green-400 font-medium">
              Naval Postgraduate School
            </p>
            <p className="text-gray-500 dark:text-gray-400">May 2024 - Jul 2024</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Advisor: Rowe Neil
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Analytics Software Engineering Intern
            </h3>
            <p className="text-purple-600 dark:text-purple-400 font-medium">
              Nasdaq Inc
            </p>
            <p className="text-gray-500 dark:text-gray-400">Jun 2022 - Aug 2022</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Built dashboard for data validation using React.js and Django REST API
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}