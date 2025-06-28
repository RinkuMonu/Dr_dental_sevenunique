import React from "react";
import { motion } from "framer-motion";
import {
  FiSmile,
  FiCheckCircle,
  FiAlertTriangle,
  FiTool,
  FiCalendar,
  FiChevronRight,
  FiAward,
  FiShield
} from "react-icons/fi";
import { 
  FaTooth, 
  FaTeeth, 
  FaTeethOpen, 
  FaUserMd,
  FaXRay,
  FaClinicMedical
} from 'react-icons/fa';
import { GiTooth, GiHealthNormal, GiToothbrush } from 'react-icons/gi';

const FullMouthReconstruction = () => {
  const benefits = [
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Improved Functionality",
      desc: "Regain the ability to eat and speak comfortably.",
      color: "bg-[#167fdb]"
    },
    {
      icon: <FiSmile className="w-6 h-6" />,
      title: "Enhanced Aesthetics",
      desc: "Achieve a beautiful, balanced, and natural-looking smile.",
      color: "bg-[#b8211a]"
    },
    {
      icon: <FiAlertTriangle className="w-6 h-6" />,
      title: "Pain Relief",
      desc: "Address TMJ issues, tooth pain, and jaw discomfort.",
      color: "bg-[#167fdb]"
    },
    {
      icon: <FiTool className="w-6 h-6" />,
      title: "Customized Solutions",
      desc: "Treatments tailored specifically to your oral health needs.",
      color: "bg-[#b8211a]"
    },
  ];

  const procedures = [
    { name: "Dental implants and crowns", icon: <FaTooth className="w-5 h-5" /> },
    { name: "Root canal therapy", icon: <GiTooth className="w-5 h-5" /> },
    { name: "Gum treatments", icon: <FaUserMd className="w-5 h-5" /> },
    { name: "Orthodontics (braces or aligners)", icon: <GiToothbrush className="w-5 h-5" /> },
    { name: "Cosmetic dentistry", icon: <FiAward className="w-5 h-5" /> },
  ];

  const features = [
    {
      title: "Comprehensive Evaluation",
      desc: "Detailed assessment of your oral health needs",
      icon: <FaClinicMedical className="w-8 h-8" />
    },
    {
      title: "Advanced Technology",
      desc: "Using the latest dental innovations for precision",
      icon: <FiTool className="w-8 h-8" />
    },
    {
      title: "Lifetime Support",
      desc: "Ongoing care for your reconstructed smile",
      icon: <FiShield className="w-8 h-8" />
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="text-gray-800 bg-white">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/80 to-[#b8211a]/80 z-10 flex items-center">
          <div className="container mx-auto px-6 lg:px-16 text-white">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-[#b8211a] mr-4"></div>
                <span className="font-medium">COMPREHENSIVE DENTAL CARE</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Full Mouth <span className="text-[#b8211a]">Reconstruction</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Transform your smile and oral health with our complete mouth restoration solutions.
              </p>
            </motion.div>
          </div>
        </div>
        <img
          src="/ai-generated-a-woman-with-a-perfect-smile-sits-comfortably-in-a-dental-chair-radiating-confidence-generative-ai-free-photo.jpg"
          alt="Full Mouth Reconstruction"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Introduction Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#b8211a] opacity-20"></div>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                  <FaTeeth className="w-full h-64 text-[#167fdb] p-12 bg-white" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Complete <span className="text-[#167fdb]">Smile</span> Restoration
              </h2>
              <div className="w-20 h-1 bg-[#b8211a] mb-8"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Full mouth reconstruction is a customized treatment plan that combines multiple dental procedures to completely rehabilitate your smile. 
                We address both function and aesthetics to give you a smile that looks and feels natural.
              </p>
              <motion.ul 
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={listItem}
                    className="flex items-start gap-4"
                  >
                    <div className={`mt-1 flex-shrink-0 ${index % 2 === 0 ? 'text-[#167fdb]' : 'text-[#b8211a]'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-[#167fdb]">Reconstruction</span> Procedures
            </h2>
            <div className="w-24 h-1 bg-[#b8211a] mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            {procedures.map((proc, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className={`${idx % 2 === 0 ? 'bg-[#167fdb]' : 'bg-[#b8211a]'} h-2`}></div>
                <div className="p-8">
                  <div className={`${idx % 2 === 0 ? 'text-[#167fdb]' : 'text-[#b8211a]'} mb-4`}>
                    {proc.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{proc.name}</h3>
                  <p className="text-gray-600 mb-6">Comprehensive treatment to restore function and appearance.</p>
                  <motion.div 
                    className="flex items-center text-[#167fdb] font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn more</span>
                    <FiChevronRight className="ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Experience the <span className="text-[#b8211a]">Benefits</span>
              </h2>
              <div className="w-20 h-1 bg-[#167fdb] mb-8"></div>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Full mouth reconstruction goes beyond cosmetic improvements to provide lasting solutions for your oral health and quality of life.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#167fdb" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#b8211a] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
              >
                View Patient Stories
              </motion.button>
            </div>
            <div className="lg:w-1/2">
              <motion.div 
                className="grid sm:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
              >
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    variants={item}
                    whileHover={{ scale: 1.03 }}
                    className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className={`${benefit.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-16 bg-gradient-to-r from-[#167fdb]/80 to-[#b8211a]/80 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Schedule a consultation with our reconstruction specialists today.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
            >
              <motion.button
                variants={item}
                whileHover={{ scale: 1.05, backgroundColor: "#b8211a" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#167fdb] px-4 py-2 rounded-lg text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </motion.button>
              <motion.button
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-4 py-2 rounded-lg text-lg font-semibold"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FullMouthReconstruction;