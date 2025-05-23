import React from 'react'

function DentalCare() {
  return (
    <div>
    
    <section id="dental" className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Comprehensive Dental Care</h2>
    <p className="text-gray-600 mb-8">
      Our dental team offers everything from regular cleanings to advanced cosmetic procedures.
      Maintain your oral health with our expert services.
    </p>

    {/* Responsive grid for services */}
    <div className="grid grid-cols-1  gap-6">
      <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">🦷 Teeth Cleaning</h3>
        <p className="text-gray-600 text-sm">
          Professional cleaning and whitening to keep your smile bright and healthy.
          

        </p>
         <p className="mt-3 text-gray-600 text-sm">
    Want a whiter smile? We also offer gentle yet effective teeth whitening options that remove years of discoloration in just one session.
  </p>
  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
  Book a Cleaning Appointment
</button>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">🦷 Cavity Filling</h3>
        <p className="text-gray-600 text-sm">
          Safe and effective treatment for tooth decay using modern materials.
        </p>
    
  <p className="text-gray-700 text-base mb-3">
    The good news? Filling a cavity is fast, simple, lean out the decay, protect your tooth — almost like patching a pothole before it wrecks the road.
  </p>
  <ul className="list-none  list-inside text-gray-600 mb-3">
    <li>Quick, in-clinic procedure (usually under 30 minutes)</li>
    <li>Options that match your natural tooth color</li>
    <li>No drilling anxiety – we use modern, gentle tools</li>
  </ul>
<p className="text-gray-800 font-medium mt-2">Cavities don’t fix themselves — but we can. 😊</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">🦷 Root Canal</h3>
        <p className="text-gray-600 text-sm">
       A root canal is a dental procedure used to save a badly decayed or infected tooth. Instead of removing the tooth, the damaged pulp inside is gently cleaned out and sealed. This relieves pain, stops infection, and keeps your natural tooth intact. The treatment is done under local anesthesia and feels similar to getting a filling. It’s a safe, effective way to avoid tooth loss and maintain
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">🦷 Cosmetic Dentistry</h3>
        <p className="text-gray-600 text-sm">
         Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. Whether it’s whitening, veneers, bonding, or reshaping, we offer solutions tailored to your goals. These treatments are quick, effective, and can dramatically boost your confidence. From fixing chips to creating a perfect smile line, we make dream smiles real. It’s not just about looks — it’s about feeling great when you smile.
        </p>
      </div>
    </div>
  </div>
</section>





    </div>
  )
}

export default DentalCare