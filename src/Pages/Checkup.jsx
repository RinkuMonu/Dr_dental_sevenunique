import React from 'react'


function Checkup() {
  return (
    <div>
 <section id="checkup" className="py-20 px-6 bg-black">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-white">Regular Dental Checkups</h2>
    <p className="text-lg text-blue-400 mb-12">
      Consistent dental care is essential to maintain oral hygiene, prevent cavities, and catch issues before they become serious.
      Book your dental checkup today for a confident and healthy smile.
    </p>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left text-blue-300  animate-pulse">
      
      <li className="flex items-start space-x-4 shadow-lg border p-10">
        <span className="text-3xl mt-1">🦷</span>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">Comprehensive Oral Examination</h3>
          <p className="text-sm leading-relaxed">
            Our dentists perform a detailed assessment of your teeth, gums, and mouth to identify cavities, gum disease, and other oral health conditions at their earliest stage.
          </p>
        </div>
      </li>

      <li className="flex items-start space-x-4 shadow-lg border p-10">
        <span className="text-3xl mt-1">🪥</span>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">Professional Teeth Cleaning</h3>
          <p className="text-sm leading-relaxed">
            We remove plaque, tartar, and surface stains using specialized tools, leaving your mouth fresh, clean, and protected from decay and gum issues.
          </p>
        </div>
      </li>

      <li className="flex items-start space-x-4 shadow-lg border p-10">
        <span className="text-3xl mt-1">📸</span>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white ">Digital X-Rays & Cavity Detection</h3>
          <p className="text-sm leading-relaxed">
            Advanced digital imaging helps detect hidden cavities, impacted teeth, and jawbone issues. It's quick, safe, and minimizes radiation exposure.
          </p>
        </div>
      </li>

      <li className="flex items-start space-x-4 shadow-lg border p-10">
        <span className="text-3xl mt-1">📄</span>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">Personalized Dental Reports</h3>
          <p className="text-sm leading-relaxed">
            Receive detailed feedback and customized treatment plans based on your unique oral health. We ensure you're informed and in control of your dental care.
          </p>
        </div>
      </li>

    </ul>
  </div>
</section>



    </div>
  )
}

export default Checkup