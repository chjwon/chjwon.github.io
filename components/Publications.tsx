export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Publications
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              SNN-PDE: Learning Dynamic PDEs from Data with Simplicial Neural Networks
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Choi J.</strong>, Chen Y., Lee H., Kim H., Gel Y.
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              AAAI 2024 (Acceptance rate: 23.75%)
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Revisiting Link Prediction with the Dowker Complex
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Choi J.</strong>, Chen Y., Frías J. Castillo J., Gel Y.
            </p>
            <p className="text-green-600 dark:text-green-400 font-medium">
              PAKDD 2024 (🏆 Best Paper Award from ASA Section on Statistical Graphics)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}