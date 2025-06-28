import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaTooth, FaSmile, FaChild, FaHandHoldingHeart, FaStar } from 'react-icons/fa';
import { GiTooth, GiToothbrush, GiHealthNormal } from 'react-icons/gi';
import { FiChevronRight } from 'react-icons/fi';

const ChildrenDentistry = () => {
  const [isVisible, setIsVisible] = useState({});
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            controls.start("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section').forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [controls]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/iStock-510634014.jpg"
            alt="Happy Kids at Dentist"
            className="w-full h-full object-cover"
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 z-10 text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Bright Smiles Begin Here
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Compassionate and fun dental care designed just for children.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2"
          >
            Book First Visit <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className={`py-16 px-4 sm:px-8 md:px-16 bg-white relative overflow-hidden`}
      >
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#167fdb] rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#b8211a] rounded-full opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#167fdb]">Comfort Comes First</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We make every child feel welcome and safe with gentle care and bright, calming spaces.
            Dental visits become positive memories and healthy habits.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#F0F8FF] to-white relative overflow-hidden`}
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#167fdb] rounded-full opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#b8211a] rounded-full opacity-5"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#167fdb]">Kid-Friendly Services</h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              // { title: 'Check-ups & Cleanings', desc: 'Routine care in a calm, playful setting.', icon: < className="text-[#b8211a] w-8 h-8" /> },
              { title: 'Fluoride & Sealants', desc: 'Strong protection against cavities.', icon: <GiHealthNormal className="text-[#b8211a] w-8 h-8" /> },
              { title: 'Gentle Fillings', desc: 'Pain-free cavity treatment.', icon: <GiTooth className="text-[#b8211a] w-8 h-8" /> },
              { title: 'Habit Guidance', desc: 'Support for thumb sucking and pacifiers.', icon: <FaChild className="text-[#b8211a] w-8 h-8" /> },
              { title: 'Early Ortho Checks', desc: 'Watch smiles grow the right way.', icon: <FaSmile className="text-[#b8211a] w-8 h-8" /> },
              { title: 'Emergency Care', desc: 'Quick help when your child needs it.', icon: <FaHandHoldingHeart className="text-[#b8211a] w-8 h-8" /> },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#167fdb]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-full bg-[#167fdb]/10">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        className={`py-16 px-4 sm:px-8 md:px-16 bg-white relative`}
      >
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#167fdb]/10 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#167fdb]">Why Choose Us?</h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: 'Playful Atmosphere', desc: 'Designed to delight and distract.', icon: <FaSmile className="text-[#167fdb] w-8 h-8" /> },
              { title: 'Pediatric Experts', desc: 'Highly trained children\'s dentists.', icon: <FaStar className="text-[#167fdb] w-8 h-8" /> },
              { title: 'Gentle Techniques', desc: 'Stress-free care for every child.', icon: <GiToothbrush className="text-[#167fdb] w-8 h-8" /> },
              { title: 'Family Focused', desc: 'Care that includes and empowers parents.', icon: <FaChild className="text-[#167fdb] w-8 h-8" /> },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-xl shadow-md flex flex-col items-center space-y-4 text-center bg-gradient-to-b from-white to-[#f8fafc] border border-[#e2e8f0]"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#167fdb]/10">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#167fdb] text-xl">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section
        id="appointment"
        className={`py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-center relative overflow-hidden`}
      >
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
          <h2 className="text-3xl font-bold text-white mb-6">Let's Brighten That Smile</h2>
          <p className="text-white/90 text-lg mb-8">
            Ready for a joyful dental visit? Book your child's appointment today.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-100 text-[#167fdb] px-4 py-2 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto"
          >
            Schedule Now <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default ChildrenDentistry;