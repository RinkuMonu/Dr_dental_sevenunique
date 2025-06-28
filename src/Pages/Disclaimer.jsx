import React from 'react';
import { AlertCircle, FileWarning, Info, User, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const disclaimerPoints = [
  {
    icon: <AlertCircle className="text-white" size={24} />,
    title: '1. Informational Purposes Only',
    desc: 'This website is intended for general informational purposes and does not replace professional dental consultation.',
  },
  {
    icon: <FileWarning className="text-white" size={24} />,
    title: '2. No Medical Advice',
    desc: 'Content is not meant to diagnose, treat, cure, or prevent any disease. Always seek advice from a licensed dentist.',
  },
  {
    icon: <User className="text-white" size={24} />,
    title: '3. Individual Results May Vary',
    desc: 'Results from procedures may vary by individual, and outcomes are not guaranteed.',
  },
  {
    icon: <Lock className="text-white" size={24} />,
    title: '4. External Links',
    desc: 'We are not responsible for the content or privacy practices of linked third-party websites.',
  },
  {
    icon: <Info className="text-white" size={24} />,
    title: '5. Consent to Terms',
    desc: 'By using this website, you consent to this disclaimer and agree to its terms.',
  },
];

const Disclaimer = () => {
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
    <div className="bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[#167fdb]/5 clip-path-polygon"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[#b8211a]/5 clip-path-polygon-reverse"></div>
        </div>
        
        {/* Image with overlay */}
        <img
          src="/10102644.jpg"
          alt="Disclaimer"
          className="absolute inset-0 w-full h-full  object-center  bg-gradient-to-br from-[#167fdb] to-[#b8211a]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-black/30"></div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className=""
          >
       
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#167fdb] to-[#b8211a]">
              Website Disclaimer
            </span>
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#167fdb] to-[#b8211a] mb-6"
          />
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Important legal information about our services
          </p>
        </motion.div>
      </div>

      {/* Disclaimer Points Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        {/* Floating abstract shapes */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#167fdb]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#b8211a]/10 blur-3xl"></div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {disclaimerPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#167fdb] to-[#b8211a]"></div>
              
              <div className="p-8 flex items-start gap-6">
                <div className="shrink-0 bg-gradient-to-br from-[#167fdb] to-[#0d5a9d] p-4 rounded-xl shadow-md">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.desc}</p>
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
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#167fdb] to-[#b8211a]"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need More Information?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Contact our team for any questions about this disclaimer
            </p>
          </motion.div>
          
          <motion.a
            href="mailto:info@7unique.in"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#167fdb] px-4 py-2  rounded-xl text-lg font-bold shadow-lg"
          >
            Email Our Team
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Disclaimer;

// Add this to your global CSS
<style jsx global>{`
  .clip-path-polygon {
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }
  .clip-path-polygon-reverse {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
`}</style>