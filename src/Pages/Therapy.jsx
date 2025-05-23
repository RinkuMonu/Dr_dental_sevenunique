import React from 'react'

function Therapy() {
  return (
    <div>
   <section id="therapy" className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Therapy & Mental Wellness</h2>
    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
      We offer professional therapy sessions that help with stress, anxiety, depression, and more.
      Our licensed therapists are here for you.
    </p>

    {/* Therapy Items */}
    <div className="space-y-10 bg-black">

      {/* Individual Counseling */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow">
        <img src="\dreamstime_xs_144828175.jpg" alt="Individual Counseling" className="w-full md:w-1/3 h-auto rounded" />
        <div>
          <h3 className="text-xl font-semibold mb-2">🧘 Individual Counseling</h3>
          <p className="text-gray-700 text-sm">
            One-on-one sessions to help manage stress, anxiety, and emotional challenges with personalized support.
            Discover a safe space to explore your thoughts and feelings.
Work one-on-one with a professional who truly listens.
Build resilience, clarity, and emotional well-being.

          </p>
        </div>
      </div>

      {/* Family Therapy */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow">
        <img src="\The-Benefits-of-Family-Dental-Plans.jpg" alt="Family Therapy" className="w-full md:w-1/3 h-auto rounded" />
        <div>
          <h3 className="text-xl font-semibold mb-2">👨‍👩‍👧 Family Therapy</h3>
          <p className="text-gray-700 text-sm">
            Strengthen relationships and resolve conflicts with guided sessions involving family members.
            Strengthen your family's communication and connection.
Work together to resolve conflicts in a supportive space.
Heal from past wounds and build healthier relationships.

          </p>
        </div>
      </div>

      {/* CBT */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow">
        <img src="\dbb02be546b75dcf58b664a9c977d369.jpg" alt="Cognitive Behavioral Therapy" className="w-full md:w-1/3 h-auto rounded" />
        <div>
          <h3 className="text-xl font-semibold mb-2">💬 Dental Therapy</h3>
          <p className="text-gray-700 text-sm">

           Focused care to support your long-term oral health.
Treat gum disease, cavities, and more with expert precision.
A gentle, preventive approach to keep your smile strong.
Personalized treatments for every stage of life.
Healthy mouth, healthier you—starting with dental therapy.
          </p>
        </div>
      </div>

      {/* Support Groups */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow">
        <img src="\imag5656es.jpg" alt="Weekly Support Groups" className="w-full md:w-1/3 h-auto rounded" />
        <div>
          <h3 className="text-xl font-semibold mb-2">📅 Weekly Support Groups</h3>
          <p className="text-gray-700 text-sm">
            They may be held in-person or online, often through clinics, nonprofits, or social platforms.
Groups for dental fear focus on emotional coping strategies like CBT or exposure therapy.
Parents find support managing children's oral health or special dental needs.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  )
}

export default Therapy