import React from "react";
import { FiSmile, FiCheckCircle, FiTool, FiRefreshCw, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaTooth, FaTeeth, FaTeethOpen } from "react-icons/fa";

const DenturesRepair = () => {
  const benefits = [
    {
      icon: <FiSmile className="text-[#167fdb] w-8 h-8" />,
      title: "Improved Appearance",
      desc: "Regain confidence with natural-looking teeth replacements.",
    },
    {
      icon: <FiCheckCircle className="text-[#167fdb] w-8 h-8" />,
      title: "Comfortable Fit",
      desc: "Our dentures are crafted to fit snugly and securely.",
    },
    {
      icon: <FiRefreshCw className="text-[#167fdb] w-8 h-8" />,
      title: "Fast Repairs",
      desc: "We offer quick turnaround times for denture repair needs.",
    },
    {
      icon: <FiTool className="text-[#167fdb] w-8 h-8" />,
      title: "Restored Function",
      desc: "Eat, talk, and smile with ease using well-fitted dentures.",
    },
  ];

  const services = [
    {
      title: "Complete & partial dentures",
      icon: <FaTeeth className="text-[#b8211a] w-6 h-6" />
    },
    {
      title: "Implant-supported dentures",
      icon: <FaTooth className="text-[#b8211a] w-6 h-6" />
    },
    {
      title: "Same-day denture repairs",
      icon: <FiRefreshCw className="text-[#b8211a] w-6 h-6" />
    },
    {
      title: "Denture relining and adjustments",
      icon: <FiTool className="text-[#b8211a] w-6 h-6" />
    },
    {
      title: "Custom-fit design for maximum comfort",
      icon: <FiSmile className="text-[#b8211a] w-6 h-6" />
    },
    {
      title: "Emergency denture services",
      icon: <FaTeethOpen className="text-[#b8211a] w-6 h-6" />
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[700px] w-full text-center overflow-hidden bg-gradient-to-r from-[#167fdb] to-[#b8211a]">
        <div className="absolute inset-0 z-0">
          <img
            src="/woman-wearing-orthodontic-silicone-invisible-braces.jpg"
            alt="Dentures & Repair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/30 to-[#b8211a]/30" />
        </div>
        
        {/* Floating vector elements */}
        <div className="absolute top-20 left-10 opacity-20   bg-gradient-to-r from-[#167fdb]/30 to-[#b8211a]/30">
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
          className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 md:px-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Dentures & Repair
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl text-white">
            Restore your smile and chewing comfort with our custom-fit dentures and expert repair services.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white px-8 py-3 rounded-xl text-lg shadow-lg flex items-center gap-2"
          >
            Book Consultation <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* What Are Dentures */}
      <section className="py-16 px-4 md:px-16 bg-white text-center relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#167fdb] rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#b8211a] rounded-full opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#167fdb]">What Are Dentures?</h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            Dentures are removable replacements for missing teeth and surrounding tissues.
            They help restore your smile, improve your ability to eat and speak,
            and support facial structure. We offer complete, partial, and implant-supported
            dentures customized for comfort and functionality.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-[#F0F8FF] to-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#167fdb] rounded-full opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#b8211a] rounded-full opacity-5"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#167fdb]">
            Our Denture Services
          </h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-all duration-300 border-l-4 border-[#b8211a]"
              >
                <div className="flex-shrink-0 mt-1">
                  {service.icon}
                </div>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">{service.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#167fdb]/10 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-[#167fdb]">
            Benefits of Our Dentures & Repair Services
          </h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map(({ icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-xl shadow-md flex flex-col items-center space-y-4 text-center bg-gradient-to-b from-white to-[#f8fafc] border border-[#e2e8f0]"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#167fdb]/10">
                  {icon}
                </div>
                <h4 className="font-bold text-[#167fdb] text-xl">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-center relative overflow-hidden">
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
          <h2 className="text-3xl font-bold text-white mb-6">
            Get Comfortable, Natural-Looking Dentures Today
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule your consultation and let us help you smile confidently again.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#167fdb] px-4 py-2 rounded-xl text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto"
          >
            Book Appointment <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default DenturesRepair;