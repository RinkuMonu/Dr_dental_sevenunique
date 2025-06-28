import React from "react";
import { FiSmile, FiHeart, FiClock, FiSliders } from "react-icons/fi";
import { motion } from "framer-motion";

// SVG Vector Components
const ToothVector = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <path 
      d="M100 20C120 20 140 30 150 50C160 70 160 90 150 110C140 130 120 140 100 140C80 140 60 130 50 110C40 90 40 70 50 50C60 30 80 20 100 20Z" 
      fill="#167fdb" 
      fillOpacity="0.1"
    />
    <path 
      d="M100 25C118 25 135 34 143 52C151 70 151 90 143 108C135 126 118 135 100 135C82 135 65 126 57 108C49 90 49 70 57 52C65 34 82 25 100 25Z" 
      fill="none" 
      stroke="#167fdb" 
      strokeWidth="2"
    />
  </svg>
);

const PulseVector = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <circle cx="100" cy="100" r="20" fill="#b8211a" fillOpacity="0.1">
      <animate
        attributeName="r"
        values="20;40;20"
        dur="3s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.1;0.3;0.1"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

const CosmeticDentistry = () => {
  const benefits = [
    {
      icon: <FiSmile className="w-10 h-10" />,
      title: "Boost Confidence",
      desc: "A beautiful smile can greatly improve your self-esteem and social interactions.",
      color: "#167fdb"
    },
    {
      icon: <FiHeart className="w-10 h-10" />,
      title: "Improve Oral Health",
      desc: "Correcting dental issues often enhances oral hygiene and overall health.",
      color: "#167fdb"
    },
    {
      icon: <FiClock className="w-10 h-10" />,
      title: "Long-Lasting Results",
      desc: "With proper care, cosmetic treatments can provide durable, natural-looking results.",
      color: "#b8211a"
    },
    {
      icon: <FiSliders className="w-10 h-10" />,
      title: "Customized Solutions",
      desc: "Tailored treatments to meet your unique dental needs and aesthetic goals.",
      color: "#b8211a"
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="font-sans text-[#245D8C] bg-white overflow-hidden relative">
      {/* Animated Background Vectors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Floating tooth vectors */}
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40"
          animate={floatAnimation}
          style={{ rotate: 15 }}
        >
          <ToothVector />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-60 h-60"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <ToothVector />
        </motion.div>
        
        {/* Pulse animation vectors */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32">
          <PulseVector />
        </div>
        
        {/* Gradient blobs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-[#167fdb]/10 to-[#b8211a]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="/dentist-examining-female-patient-with-tools.jpg"
          alt="Cosmetic Dentistry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/80 to-[#b8211a]/80 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 z-20 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Cosmetic Dentistry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl drop-shadow-md"
          >
            Enhance your smile with our expert cosmetic dental treatments tailored to your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8"
          >
          
          </motion.div>
        </div>
      </div>

      {/* What is Cosmetic Dentistry */}
      <section className="py-20 px-4 sm:px-8 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#167fdb]/20"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#167fdb]">
            What is Cosmetic Dentistry?
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#167fdb] to-[#b8211a] rounded-full mb-6"
          />
          <p className="text-lg text-gray-700 leading-relaxed">
            Cosmetic dentistry focuses on improving the appearance of your teeth,
            gums, and smile. It combines dental science with artistry to create
            beautiful and healthy smiles through various treatments.
          </p>
        </motion.div>
      </section>

      {/* Common Procedures */}
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-[#167fdb]/5 to-[#b8211a]/5 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#b8211a]">
            Common Cosmetic Procedures
          </h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              "Teeth Whitening – brighten your smile instantly",
              "Dental Veneers – thin shells to cover imperfections",
              "Dental Bonding – fix minor chips and gaps",
              "Invisalign – clear aligners for straighter teeth",
              "Dental Implants – replace missing teeth naturally",
            ].map((procedure, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm bg-white/90"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 10px 25px -5px ${idx % 2 ? '#b8211a' : '#167fdb'}40`
                }}
              >
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: 15 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#167fdb] to-[#b8211a] flex items-center justify-center text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                </motion.div>
                <p className="text-[#245D8C]/90 text-lg leading-relaxed">{procedure}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-white relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#167fdb]">
            Benefits of Cosmetic Dentistry
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#167fdb] to-[#b8211a] rounded-full mb-12 mx-auto max-w-xs"
          />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-[${item.color}]/5 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-white/80`}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 10px 25px -5px ${item.color}40`
                }}
              >
                <motion.div 
                  className={`bg-[${item.color}]/10 p-3 rounded-full w-fit mx-auto mb-6`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800 text-center">{item.title}</h4>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white relative z-10 overflow-hidden">
        {/* Animated circles in background */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-20"
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            whileInView={{ 
              scale: [1, 1.05, 1],
              transition: { duration: 0.8 }
            }}
          >
            Transform Your Smile Today
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            whileInView={{ 
              opacity: [0.8, 1, 0.8],
              transition: { duration: 4, repeat: Infinity }
            }}
          >
            Schedule a consultation with our cosmetic dentistry experts to discover
            the best treatment for you.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-white hover:bg-gray-100 text-[#167fdb] px-4 py-2 rounded-full text-lg font-semibold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
            <motion.button 
              className="border-2 border-white hover:bg-white/10 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Call: (123) 456-7890
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CosmeticDentistry;