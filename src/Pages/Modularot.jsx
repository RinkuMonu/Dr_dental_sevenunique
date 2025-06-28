import React from 'react';
import { ShieldCheck, ThermometerSun, Fan, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaHospitalAlt } from 'react-icons/fa';

const features = [
  {
    icon: <ShieldCheck className="text-[#167fdb]" size={28} />,
    title: 'Sterile Environment',
    description: 'Our modular OT ensures a germ-free, infection-controlled environment for all procedures.',
  },
  {
    icon: <ThermometerSun className="text-[#167fdb]" size={28} />,
    title: 'Temperature & Humidity Control',
    description: 'Advanced HVAC systems maintain optimal temperature and humidity levels inside the OT.',
  },
  {
    icon: <Fan className="text-[#167fdb]" size={28} />,
    title: 'Laminar Airflow System',
    description: 'High-efficiency air circulation keeps the operation area dust-free and sterile.',
  },
  {
    icon: <SlidersHorizontal className="text-[#167fdb]" size={28} />,
    title: 'Modern Monitoring Equipment',
    description: 'Equipped with advanced monitoring systems to ensure patient safety and precision.',
  },
];

const Modularot = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full text-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="\Dental-Clinic-Interior-Design-jpg.webp"
            alt="Modular Operation Theatre"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/40 to-[#b8211a]/40"></div>
        </div>
        
        {/* Floating vector elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path d="M30,50 Q50,30 70,50 T90,50" stroke="#167fdb" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" stroke="#b8211a" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Modular Operation Theatre</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">Precision. Hygiene. Technology.</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2"
          >
            Learn More <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 md:px-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#167fdb] rounded-full opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#b8211a] rounded-full opacity-5"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#167fdb] mb-12">
            Key Features of Our Modular OT
          </h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#b8211a]"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 rounded-full bg-[#167fdb]/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Technology Section */}
      <div className="py-16 px-4 md:px-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#167fdb]/10 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-[#167fdb] mb-12">
            Advanced Surgical Technology
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#167fdb]/10 to-[#b8211a]/10 p-8 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaClinicMedical className="text-[#b8211a] w-10 h-10" />
                <h3 className="text-2xl font-bold text-gray-800">State-of-the-Art Equipment</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our modular OT integrates the latest surgical technologies including advanced imaging systems, 
                robotic assistance, and real-time monitoring for unparalleled precision and safety.
              </p>
              <ul className="space-y-3">
                {[
                  '4K High-Definition Visualization',
                  'Integrated Navigation Systems',
                  'Advanced Life Support Equipment',
                  'Digital Documentation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#167fdb]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#b8211a]/10 to-[#167fdb]/10 p-8 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaHospitalAlt className="text-[#167fdb] w-10 h-10" />
                <h3 className="text-2xl font-bold text-gray-800">Infection Control Protocol</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our comprehensive infection prevention measures exceed international standards to ensure 
                the highest level of patient safety and surgical outcomes.
              </p>
              <ul className="space-y-3">
                {[
                  'HEPA Filtration System',
                  'Antimicrobial Surface Coating',
                  'Sterile Zone Management',
                  'Automated Disinfection Cycles'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#b8211a]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 md:px-20 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-white"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Advanced Surgical Care?</h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today to learn more about our modular operation theatre facilities.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-100 text-[#167fdb] px-4 py-2 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto"
          >
            Schedule Consultation <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Modularot;