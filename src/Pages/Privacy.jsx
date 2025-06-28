import React from 'react';
import { Lock, EyeOff, Database, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const policyPoints = [
  {
    icon: <Lock size={24} />,
    title: '1. Information Collection',
    desc: 'We collect personal data like name, email, and health details when you use our services or fill forms.',
  },
  {
    icon: <EyeOff size={24} />,
    title: '2. Use of Information',
    desc: 'We use your information to schedule appointments, provide care, and improve our services.',
  },
  {
    icon: <Database size={24} />,
    title: '3. Data Storage & Security',
    desc: 'Your information is securely stored and only accessed by authorized personnel for treatment purposes.',
  },
  {
    icon: <Globe size={24} />,
    title: '4. Third-Party Sharing',
    desc: 'We do not sell or rent your information. We may share it with labs, insurance, or as legally required.',
  },
  {
    icon: <Shield size={24} />,
    title: '5. Your Privacy Rights',
    desc: 'You may request access, correction, or deletion of your data by contacting our office.',
  },
];

const Privacy = () => {
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
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#167fdb]/10 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#b8211a]/10 blur-xl"
          animate={{
            x: [0, -15, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/6101100.jpg"
          alt="Privacy Policy"
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/30 to-[#b8211a]/20"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#167fdb] to-[#b8211a]  animate-pulse"></span>
              <span className="text-sm font-medium text-white tracking-wider ">PRIVACY POLICY</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Your Data <span className="text-[#b8211a]">Protection</span>
            </h1>
            
         
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              How we collect, use, and protect your personal information
            </p>
          </motion.div>
        </div>
      </div>

      {/* Policy Cards Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {policyPoints.map((policy, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative overflow-hidden"
            >
              <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className={`absolute top-0 left-0 w-full h-1 ${idx % 2 === 0 ? 'bg-[#167fdb]' : 'bg-[#b8211a]'}`}></div>
                
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${idx % 2 === 0 ? 'bg-[#167fdb]/10 text-[#167fdb]' : 'bg-[#b8211a]/10 text-[#b8211a]'}`}>
                    {policy.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{policy.desc}</p>
                </div>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 ${idx % 2 === 0 ? 'bg-[#167fdb]' : 'bg-[#b8211a]'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
          
          {/* Additional CTA Card */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden md:col-span-2 lg:col-span-1"
          >
            <div className="h-full bg-gradient-to-br from-[#167fdb] to-[#0d5a9d] rounded-xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-10"></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center text-white">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Shield size={28} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                <p className="text-white/90 mb-6">Contact our privacy team for any concerns about your data</p>
                
                <motion.a
                  href="mailto:info@7unique.in"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-[#167fdb] px-4 py-1 rounded-lg font-medium shadow-md"
                >
                  Contact Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-noise"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Your Privacy Matters To Us
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're committed to protecting your personal information with the highest security standards.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="mailto:info@7unique.in"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#167fdb] px-4 py-2 rounded-xl text-lg font-bold shadow-lg"
            >
              Contact Our Team
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;