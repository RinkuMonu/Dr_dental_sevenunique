import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTooth,
  FaTeeth,
  FaXRay,
  FaFileMedical
} from 'react-icons/fa';

const Checkup = () => {
  const services = [
    {
      icon: <FaTooth className="text-3xl text-[#167fdb]" />,
      title: "Oral Examination",
      description: "Detailed assessment to identify cavities and gum disease at early stages."
    },
    {
      icon: <FaTeeth className="text-3xl text-[#167fdb]" />,
      title: "Teeth Cleaning",
      description: "Professional plaque and tartar removal for a fresh, clean mouth."
    },
    {
      icon: <FaXRay className="text-3xl text-[#167fdb]" />,
      title: "Digital X-Rays",
      description: "Advanced imaging to detect hidden issues with minimal radiation."
    },
    {
      icon: <FaFileMedical className="text-3xl text-[#167fdb]" />,
      title: "Dental Reports",
      description: "Customized treatment plans based on your oral health needs."
    }
  ];

  return (
    <section id="checkup" className="relative py-16 overflow-hidden bg-[#167fdb]/10">
      {/* Floating decorative elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-[#b8211a]/10 rounded-full opacity-50"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-[#167fdb]/10 rounded-full opacity-50"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#167fdb] uppercase bg-white rounded-full mb-3">
            Preventive Care
          </span>
          <h2 className="text-3xl font-bold text-[#b8211a] mb-3">Regular Dental Checkups</h2>
          <p className="text-md text-[#167fdb] max-w-xl mx-auto">
            Essential care to maintain oral hygiene and prevent dental issues.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-100"
            >
              <div className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-[#167fdb]/10 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#167fdb] mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  
                  <motion.button
                    whileHover={{ 
                      backgroundColor: "#b8211a",
                      color: "white"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 px-4 py-1 text-sm border border-[#b8211a] text-[#b8211a] rounded-full font-medium transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-2 bg-[#b8211a] text-white rounded-full font-medium hover:bg-[#167fdb] transition-colors shadow-md text-sm">
            Book Your Checkup
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Checkup;