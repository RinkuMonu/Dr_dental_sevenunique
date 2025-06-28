import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaTeeth, 
  FaTeethOpen, 
  FaXRay,
  FaFileMedical
} from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';

// Custom animated section wrapper
const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

function Services() {
  const services = [
    {
      title: "Replacement of missing teeth",
      description: "We offer different procedures for replacing missing teeth e.g. dental implants, fixed caps or bridges and removable dentures.",
      items: [
        { src: "/missing-teeth-dental-bridges-300x225.jpg", label: "Dental bridge", },
        { src: "/missing-teeth-flexible-partial-300x225.jpg", label: "Flexible partial denture", icon: <FaTeethOpen className="text-[#167fdb] text-xl" /> },
        { src: "/missing-teeth-implant-300x225.jpg", label: "Dental implant", icon: <FaTooth className="text-[#167fdb] text-xl" /> },
        { src: "/missing-teeth-implant-with-magnetic-denture-300x225.jpg", label: "Full denture with magnetic implant", icon: <FaTeeth className="text-[#167fdb] text-xl" /> }
      ]
    },
    {
      title: "Cavity Filling",
      description: "At our clinic, we use silver, ceramic and cosmetic fillings, depending on need and circumstance of the patient, in order to fill cavities.",
      items: [
        { src: "/missing-teeth-dental-bridges-300x225.jpg", label: "Before & After treatment", icon: <FaFileMedical className="text-[#167fdb] text-xl" /> },
        { src: "/missing-teeth-flexible-partial-300x225.jpg", label: "Before & After treatment", icon: <FaFileMedical className="text-[#167fdb] text-xl" /> },
        { src: "/missing-teeth-implant-300x225.jpg", label: "Before Treatment", icon: <FaXRay className="text-[#167fdb] text-xl" /> },
        { src: "/missing-teeth-implant-with-magnetic-denture-300x225.jpg", label: "After Treatment", icon: <FaTooth className="text-[#167fdb] text-xl" /> }
      ]
    },
    {
      title: "Orthodontic Treatment",
      description: "Teeth straightening treatments are performed at our clinic using invisible braces too, among other alternative methods.",
      items: [
        { src: "/braces-multi-coloured-edited-300x225.jpg", label: "Multi-coloured Braces", icon: <GiTooth className="text-[#167fdb] text-xl" /> },
        { src: "/braces-steel-300x225.jpg", label: "Steel Braces", icon: <GiTooth className="text-[#167fdb] text-xl" /> },
        { src: "/braces-ceramic02-300x225.jpg", label: "Aligners", icon: <FaTeeth className="text-[#167fdb] text-xl" /> },
        { src: "/braces-invisiline-300x225.jpg", label: "Ceramic Braces", icon: <FaTeethOpen className="text-[#167fdb] text-xl" /> }
      ]
    }
  ];

  return (
    <div className="relative bg-[#f8fafc]">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#167fdb]/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Services Sections */}
        {services.map((service, serviceIndex) => (
          <React.Fragment key={serviceIndex}>
            <FadeInSection delay={serviceIndex * 0.1}>
              <div className="mb-20">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#167fdb] uppercase bg-white rounded-full mb-4 shadow-sm">
                    Service {serviceIndex + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-[#b8211a] mb-4">{service.title}</h2>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-24 h-1 bg-[#167fdb] mx-auto mb-6 rounded-full"
                  />
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{service.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {service.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1, duration: 0.6 }}
                      whileHover={{ y: -10 }}
                      className="relative group overflow-hidden rounded-2xl shadow-lg bg-white"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div className="flex items-center text-white">
                            {item.icon}
                            <span className="ml-2 font-medium">{item.label}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </React.Fragment>
        ))}

        {/* CTA Section */}
        <FadeInSection>
          <div className="mt-20 text-center">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#9e1c16" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b8211a] text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Services;