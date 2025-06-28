import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "/woman-patient-dentist.jpg",
  "/dental-chair-other-accesorries-used-by-dentist-empty-cabinet-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment.jpg",
  "/imagessss.jpg",
  "/pexels-cottonbro-7086237.jpg",
  "/pexels-tima-miroshnichenko-5355695.jpg",
  "/ima556.jpg",
  "/Untitled.jpg",
  "/images.jpg",
  "/images.jpg",
];

const videos = [
  "/4490547-uhd_3840_2160_25fps.mp4",
  "/6192873-hd_1920_1080_30fps.mp4",
  "/3024322-hd_1920_1080_30fps.mp4",
];

function Photos() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className="bg-gray-50 relative overflow-hidden">
      {/* Vector Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#167fdb]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#b8211a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="w-full h-screen overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10"></div>
        <motion.img
          src="/nic-Near-Banjara-Hills.jpg"
          alt="NIC Near Banjara Hills"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Photos & Videos
          </h1>
          <div className="w-32 h-1 bg-[#b8211a] mx-auto mb-8 transform transition-all duration-500 hover:w-48"></div>
          <p className="text-xl text-white max-w-2xl mx-auto font-light drop-shadow-md">
            Explore our state-of-the-art dental facility and team through our gallery
          </p>
        </motion.div>
      </div>

      {/* Image Gallery Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-[#167fdb] text-lg font-semibold mb-2 tracking-wider">GALLERY</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-[#b8211a] mb-4 tracking-tight">
              Our Dental Facility
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Discover our modern equipment and welcoming environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.button
                    className="bg-[#b8211a] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent group-hover:border-[#167fdb]/20 rounded-2xl transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-[#167fdb] text-lg font-semibold mb-2 tracking-wider">VIDEOS</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-[#b8211a] mb-4 tracking-tight">
              Patient Experiences
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Watch testimonials and procedures from our satisfied patients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videos.map((src, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <video
                  controls
                  className="w-full h-80 object-cover rounded-t-2xl"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg drop-shadow-md">
                    Video {index + 1}
                  </h3>
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent group-hover:border-[#b8211a]/20 rounded-2xl transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
     
    </div>
  );
}

export default Photos;