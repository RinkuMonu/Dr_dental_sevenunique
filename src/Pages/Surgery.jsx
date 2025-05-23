import React from 'react'

function Surgery() {
  return (
    <div>
<section id="surgery" className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
    <h2 className="text-3xl font-bold mb-4 text-gray-900">Advanced Dental Surgical Services</h2>
    <p className="text-gray-600 mb-12">
      Our modern dental facility and skilled oral surgeons provide safe, precise surgical procedures to restore and enhance your oral health.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-700">
      <div className="bg-white p-6 rounded shadow text-center" data-aos="fade-up">
        <div className="text-3xl mb-2">🦷</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Wisdom Tooth Extraction</h3>
        <p className="text-sm">
          Safe and efficient removal of impacted or problematic wisdom teeth to prevent crowding, pain, and infections.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="text-3xl mb-2">🛠️</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Dental Implants & Bone Grafting</h3>
        <p className="text-sm">
          Restore missing teeth and strengthen jawbones with precision-guided implants and grafting techniques.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow" data-aos="fade-up" data-aos-delay="200">
        <div className="text-3xl text-center mb-2 text-center">👨‍⚕️</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Certified Oral Surgeons</h3>
        <p className="text-sm">
          Our experienced oral & maxillofacial surgeons ensure expert care and advanced surgical outcomes tailored to your needs.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Surgery