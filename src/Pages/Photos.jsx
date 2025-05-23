import React from 'react'

const images = [
  "\woman-patient-dentist.jpg",
  "\dental-chair-other-accesorries-used-by-dentist-empty-cabinet-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment.jpg",
  "\imagessss.jpg",
  "\pexels-cottonbro-7086237.jpg",
  "\pexels-tima-miroshnichenko-5355695.jpg",
  "\ima556.jpg",
  "\Untitled.jpg",
  "\images.jpg",
  "\images.jpg",

];

const videos = [
  "/4490547-uhd_3840_2160_25fps.mp4",
  "/6192873-hd_1920_1080_30fps.mp4",
  "/3024322-hd_1920_1080_30fps.mp4",
];






function Photos() {
  return (
    <>

      <div className="w-full h-screen overflow-hidden relative">
        <img
          src="/nic-Near-Banjara-Hills.jpg"
          alt="NIC Near Banjara Hills"
          className="w-full h-full object-cover relative"
        />
        <h1 className='absolute top-40 right-40  text-black animate-bounce font-size'>Photos and Videos</h1>
      </div>



      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-blue-600 text-lg font-semibold text-center mb-2">MEET OUR TEAM</h2>
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">LOOK AT GALLERY FOR DETAILS</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 ">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((src, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
          <video
            controls
            src={src}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          >
           
          </video>
        </div>
      ))}
    </div>
    </div>











    </>
  )
}

export default Photos