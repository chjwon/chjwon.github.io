'use client'

import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Jae Won Choi
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-2">
          Ph.D. Student in Computer Science
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          University of Southern California
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
            Machine Learning
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
            Graph Neural Networks
          </span>
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
            Physics-Informed ML
          </span>
          <span className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
            Computational Biology
          </span>
        </div>
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="#about" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Learn More
          </a>
          <a 
            href="mailto:jwchoi@usc.edu" 
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact
          </a>
        </div>
        <ArrowDownIcon className="h-8 w-8 mx-auto text-gray-400 animate-bounce" />
      </div>
    </section>
  )
}