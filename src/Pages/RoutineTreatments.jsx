import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 

  FaTeeth, 
  FaTeethOpen, 
  FaXRay, 
  FaShieldAlt, 
  FaSearch, 
  FaSmile, 
  FaMoneyBillWave, 
  FaHeart,
  FaPhone,
  FaCalendarAlt,

  FaClinicMedical,
  FaUserMd,
  FaProcedures
} from 'react-icons/fa';
import { GiToothbrush, GiTooth, GiHealthNormal } from 'react-icons/gi';
import { MdHealthAndSafety, MdOutlineMedicalServices } from 'react-icons/md';

const RoutineTreatments = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pulse = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="text-gray-800 bg-gradient-to-b from-[#f8fafc] to-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full text-center overflow-hidden bg-white">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Routine Dental Checkup"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/90 to-[#b8211a]/70" />
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 md:px-16">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Routine Dental Treatments
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl max-w-2xl text-white font-medium"
          >
            Keep your teeth and gums healthy with regular dental checkups and preventive care.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-8"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* <FaTooth className="w-32 h-32 text-white opacity-90" /> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#b8211a] text-white px-6 py-3 rounded-full shadow-xl font-bold flex items-center gap-2"
        >
          <FaPhone className="h-5 w-5" />
          Book Now
        </motion.button>
      </motion.div>

      {/* What Are Routine Treatments */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <motion.div variants={item} className="md:w-1/2">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <FaClinicMedical className="w-64 h-64 text-[#167fdb]" />
              </motion.div>
            </motion.div>
            <motion.div variants={item} className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#167fdb]">
                  What Are Routine Dental Treatments?
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Routine dental treatments include regular cleanings, examinations, and preventive care designed to maintain oral health and catch issues early. These checkups are essential for preventing tooth decay, gum disease, and more complex dental problems.
                </p>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-gradient-to-r from-[#167fdb]/10 to-[#b8211a]/10 p-6 rounded-xl border-l-4 border-[#b8211a]"
                >
                  <p className="text-[#167fdb] font-medium">
                    "Prevention is better than cure. Regular dental visits can save you from painful and expensive treatments later."
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#167fdb]">
              Services Included in Routine Care
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
            {[
              {
                // icon: <FaToothbrush className="w-8 h-8" />,
                title: "Dental Cleanings",
                desc: "Professional removal of plaque and tartar for healthier teeth and gums.",
                color: "from-[#167fdb] to-[#1a8cff]"
              },
              {
                icon: <FaUserMd className="w-8 h-8" />,
                title: "Oral Examinations",
                desc: "Comprehensive checkups to assess your oral health status.",
                color: "from-[#b8211a] to-[#d62c2c]"
              },
              {
                icon: <FaXRay className="w-8 h-8" />,
                title: "Diagnostic X-rays",
                desc: "Advanced imaging to detect hidden dental issues.",
                color: "from-[#167fdb] to-[#1a8cff]"
              },
              {
                icon: <MdHealthAndSafety className="w-8 h-8" />,
                title: "Fluoride Treatments",
                desc: "Strengthen enamel and prevent tooth decay.",
                color: "from-[#b8211a] to-[#d62c2c]"
              },
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Dental Sealants",
                desc: "Protective coating to prevent cavities in molars.",
                color: "from-[#167fdb] to-[#1a8cff]"
              },
              {
                icon: <FaSearch className="w-8 h-8" />,
                title: "Oral Cancer Screening",
                desc: "Early detection of potential oral health concerns.",
                color: "from-[#b8211a] to-[#d62c2c]"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[${service.color.split(' ')[1]}]`}
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#167fdb]">
              Why Routine Visits Matter
            </h2>
            <div className="w-24 h-1 bg-[#b8211a] mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            {[
              {
                icon: <FaSearch className="w-8 h-8" />,
                title: "Early Detection",
                desc: "Catch cavities, gum issues, and other problems early before they worsen.",
                color: "bg-[#167fdb]"
              },
              {
                icon: <FaSmile className="w-8 h-8" />,
                title: "Healthier Smile",
                desc: "Regular cleanings help remove plaque, tartar, and surface stains.",
                color: "bg-[#b8211a]"
              },
              {
                icon: <FaMoneyBillWave className="w-8 h-8" />,
                title: "Save Money",
                desc: "Preventive care reduces the risk of needing expensive dental procedures later.",
                color: "bg-[#167fdb]"
              },
              {
                icon: <FaHeart className="w-8 h-8" />,
                title: "Better Overall Health",
                desc: "Oral health is linked to your overall well-being, including heart health.",
                color: "bg-[#b8211a]"
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`${benefit.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto text-white`}>
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-lg text-center text-gray-800 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-center">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#167fdb] to-[#1a5fdb] rounded-xl p-8 text-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="md:w-1/3 flex justify-center"
                variants={pulse}
                initial="initial"
                animate="animate"
              >
                <GiHealthNormal className="w-48 h-48" />
              </motion.div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                <p className="mb-6 text-blue-100">
                  According to dental health studies, people who visit their dentist regularly have:
                </p>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-center"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="bg-white text-[#167fdb] rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">1</span>
                    <span>60% fewer cavities</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="bg-white text-[#167fdb] rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">2</span>
                    <span>50% lower risk of gum disease</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="bg-white text-[#167fdb] rounded-full w-6 h-6 flex items-center justify-center mr-3 font-bold">3</span>
                    <span>85% higher chance of detecting oral cancer early</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Schedule Your Next Checkup
          </h2>
          <p className="text-blue-100 mb-8 text-xl max-w-2xl mx-auto">
            Stay ahead of dental problems with regular care from our experienced team.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#b8211a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#b8211a] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <FaCalendarAlt className="h-5 w-5" />
            Book Appointment Now
          </motion.button>
          <motion.div 
            className="mt-12 flex justify-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              <FaTeeth key="1" className="w-12 h-12 text-white" />,
              <GiTooth key="2" className="w-12 h-12 text-white" />,
              <FaProcedures key="3" className="w-12 h-12 text-white" />,
              <MdOutlineMedicalServices key="4" className="w-12 h-12 text-white" />
            ].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20"
              >
                {Icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default RoutineTreatments;