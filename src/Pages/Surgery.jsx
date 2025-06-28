import React from 'react';
import { motion } from 'framer-motion';
import { GiTooth, GiBoneKnife, GiDoctorFace } from 'react-icons/gi';
import { FaTooth } from 'react-icons/fa';

const Surgery = () => {
  const services = [
    {
      icon: <FaTooth className="text-4xl mb-4" style={{ color: '#167fdb' }} />,
      title: "Wisdom Tooth Extraction",
      description: "Safe and efficient removal of impacted or problematic wisdom teeth to prevent crowding, pain, and infections."
    },
    {
      icon: <GiBoneKnife className="text-4xl mb-4" style={{ color: '#167fdb' }} />,
      title: "Dental Implants & Bone Grafting",
      description: "Restore missing teeth and strengthen jawbones with precision-guided implants and grafting techniques."
    },
    {
      icon: <GiDoctorFace className="text-4xl mb-4" style={{ color: '#167fdb' }} />,
      title: "Certified Oral Surgeons",
      description: "Our experienced oral & maxillofacial surgeons ensure expert care and advanced surgical outcomes tailored to your needs."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="surgery" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#b8211a]">
            Advanced <span style={{ color: '#167fdb' }}>Dental Surgical</span> Services
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#167fdb' }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our modern dental facility and skilled oral surgeons provide safe, precise surgical procedures to restore and enhance your oral health.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{ borderTop: '4px solid #167fdb' }}
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#b8211a]">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button 
            className="text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow hover:shadow-md"
            style={{ backgroundColor: '#b8211a' }}
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Surgery;