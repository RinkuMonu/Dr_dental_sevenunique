import React from 'react';
import { ShieldCheck, CalendarCheck, CreditCard, UserCheck, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const termsList = [
  {
    icon: <ShieldCheck className="text-white" size={24} />,
    title: '1. Acceptance of Terms',
    desc: 'By accessing this site or using our services, you agree to comply with our terms of use.',
  },
  {
    icon: <CalendarCheck className="text-white" size={24} />,
    title: '2. Appointments & Cancellations',
    desc: 'We recommend booking your visit in advance. A 24-hour notice is required for cancellations.',
  },
  {
    icon: <CreditCard className="text-white" size={24} />,
    title: '3. Payments & Insurance',
    desc: 'All payments must be made at the time of service. We support cash, cards & UPI.',
  },
  {
    icon: <UserCheck className="text-white" size={24} />,
    title: '4. Patient Privacy',
    desc: 'We are committed to protecting your medical and personal information under HIPAA laws.',
  },
  {
    icon: <FileText className="text-white" size={24} />,
    title: '5. Updates to Terms',
    desc: 'We may modify these terms periodically. Please review them regularly.',
  },
];

const Terms = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#167fdb]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[#b8211a]/10 blur-3xl"></div>
        </div>
        
        {/* Image with overlay */}
        <img
          src="\JEMA GER 1396-22.jpg"
          alt="Dental Terms"
          className="absolute inset-0 w-full h-full  opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/40 to-[#b8211a]/30"></div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#b8211a] animate-pulse"></span>
            <span className="text-sm font-medium text-white tracking-wider">TERMS & CONDITIONS</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Our <span className="text-[#b8211a]">Commitment</span> To You
          </h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-white mx-auto mb-6 transform origin-left"
          />
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Transparent policies for exceptional dental care
          </p>
        </motion.div>
      </div>

      {/* Terms List Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {termsList.map((term, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#167fdb]/10 group-hover:bg-[#b8211a]/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 p-8 flex items-start gap-6">
                <div className="shrink-0 bg-gradient-to-br from-[#167fdb] to-[#0d5a9d] p-4 rounded-xl">
                  {term.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{term.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] py-16 text-center"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">
            Questions About Our Policies?
          </h3>
          <p className="text-lg text-white mb-6">
            Our team is happy to clarify any of our terms and conditions
          </p>
          <motion.a
            href="mailto:info@7unique.in"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;