import React from 'react';
import { CalendarCheck, UserCheck, FileText, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaTooth,  FaTeeth, FaTeethOpen } from 'react-icons/fa';

const opdFeatures = [
  {
    icon: <CalendarCheck className="text-white" size={24} />,
    title: 'Easy Appointment Booking',
    description: 'Book your OPD slot online at your convenience with minimal steps.',
  },
  {
    icon: <UserCheck className="text-white" size={24} />,
    title: 'Expert Consultation',
    description: 'Consult with our experienced dental specialists for all your concerns.',
  },
  {
    icon: <Clock className="text-white" size={24} />,
    title: 'Flexible Timings',
    description: 'Choose from morning to evening slots that fit your schedule.',
  },
  {
    icon: <FileText className="text-white" size={24} />,
    title: 'Digital Records',
    description: 'All your OPD visits and prescriptions are securely stored digitally.',
  },
];

const Opd = () => {
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
      <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/5063406.jpg"
            alt="Dental OPD"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        {/* Floating abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#167fdb]/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#b8211a]/10 blur-3xl"></div>
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2  bg-gradient-to-r from-[#167fdb] to-[#b8211a] backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#b8211a] animate-pulse"></span>
              <span className="text-sm font-medium">DENTAL OPD SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Modern <span className="text-[#167fdb]">Dental Care</span><br />For Everyone
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Quality outpatient dental services with comfort and precision at the heart of everything we do.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24 px-4 md:px-20 bg-white">
        <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exceptional <span className="text-[#167fdb]">Patient Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've reimagined dental care with patient comfort and convenience at the forefront.
            </p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {opdFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#167fdb]/10 group-hover:bg-[#b8211a]/10 transition-colors duration-500"></div>
                <div className="relative z-10 p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#167fdb] to-[#167fdb]/90 flex items-center justify-center mb-6 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 px-4 md:px-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#b8211a]">Comprehensive</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine checkups to specialized treatments, we've got you covered.
            </p>
          </motion.div>
         
          
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Preventive Care',
                description: 'Regular checkups and cleanings to maintain optimal oral health',
                // icon: <FaToothbrush className="w-8 h-8 text-[#167fdb]" />
              },
              {
                title: 'Restorative Dentistry',
                description: 'Fillings, crowns and bridges to restore your natural smile',
                icon: <FaTeeth className="w-8 h-8 text-[#167fdb]" />
              },
              {
                title: 'Cosmetic Solutions',
                description: 'Teeth whitening, veneers and smile makeovers',
                icon: <FaTeethOpen className="w-8 h-8 text-[#167fdb]" />
              },
              {
                title: 'Pediatric Dentistry',
                description: 'Specialized care for our youngest patients',
                icon: <FaTooth className="w-8 h-8 text-[#167fdb]" />
              },
              {
                title: 'Emergency Care',
                description: 'Immediate treatment for dental emergencies',
                icon: <FaTeethOpen className="w-8 h-8 text-[#167fdb]" />
              },
              {
                title: 'Oral Surgery',
                description: 'Expert extractions and surgical procedures',
                icon: <FaTooth className="w-8 h-8 text-[#167fdb]" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#167fdb]/10 flex items-center justify-center mb-6 group-hover:bg-[#b8211a]/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-[#167fdb] group-hover:text-[#b8211a] transition-colors">
                    <span className="font-medium">Learn more</span>
                    <ChevronRight className="w-4 h-4 mt-0.5 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-4 md:px-20  bg-gradient-to-r from-[#167fdb] to-[#b8211a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#b8211a]/20"></div>
          <div className="absolute inset-0 bg-[url('/abstract-pattern.png')] opacity-10"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the difference of modern dental care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#167fdb] px-4 py-2 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2"
            >
              Book Now <ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full text-lg font-semibold flex items-center gap-2"
            >
              Call Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Opd;