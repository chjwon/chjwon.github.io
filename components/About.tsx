export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
          <div className="text-gray-600 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
            <p>
              Hello! I&apos;m Jae Won Choi, a Ph.D. student in Computer Science at the 
              University of Southern California (USC), advised by Prof. Ruishan Liu. 
              My research interests span <strong>Machine Learning</strong>, <strong>Graph Neural Networks</strong>, 
              <strong>Physics-Informed Machine Learning</strong>, and <strong>Computational Biology</strong>.
            </p>
            <p>
              I completed my B.S. in Computer Science at the University of Texas at Dallas, 
              where I was advised by Prof. Yulia Gel and Prof. Vincent Ng.
            </p>
            <p>
              During my undergraduate years, I had the opportunity to intern at:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>NASA Jet Propulsion Laboratory</strong> through the Visiting Student Research Program (VSRP)</li>
              <li><strong>Naval Postgraduate School</strong> via the Naval Research Enterprise Internship Program (NREIP)</li>
              <li><strong>Nasdaq Inc.</strong> as an Analytics Software Engineering Intern</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}