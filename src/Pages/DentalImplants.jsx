import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Cpu,
  HeartHandshake,
  BadgeDollarSign,
  Zap,
  Shield,
  Smile,
  Bone
} from 'lucide-react';

// Floating Orb Component
const FloatingOrb = ({ color, size, position, delay }) => {
  const orbStyle = {
    width: size,
    height: size,
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    position: 'absolute',
    ...position
  };

  return (
    <motion.div
      style={orbStyle}
      className="rounded-full opacity-20 blur-xl"
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        opacity: [0.2, 0.3, 0.2],
        transition: {
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }
      }}
    />
  );
};

// Animated Tooth Icon
const AnimatedTooth = () => (
  <motion.div
    className="text-[#167fdb]"
    animate={{
      rotate: [0, 5, -5, 0],
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <Bone className="w-12 h-12" />
  </motion.div>
);

const DentalImplants = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.1, 0.3, 0.5, 1] 
      }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Background orbs configuration
  const orbs = [
    { color: '#167fdb', size: '200px', position: { top: '10%', left: '5%' }, delay: 0 },
    { color: '#b8211a', size: '300px', position: { bottom: '15%', right: '10%' }, delay: 1 },
    { color: '#167fdb', size: '150px', position: { top: '30%', right: '20%' }, delay: 2 },
    { color: '#b8211a', size: '250px', position: { bottom: '25%', left: '15%' }, delay: 1.5 }
  ];

  return (
    <div className="font-sans text-[#245D8C] bg-white overflow-hidden relative min-h-screen">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {orbs.map((orb, index) => (
          <FloatingOrb key={index} {...orb} />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <img
          src="/white-healthy-tooth-different-tools-for-dental-care-generative-ai-photo.jpg"
          alt="Dental Implants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#167fdb]/70 to-[#b8211a]/70 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <AnimatedTooth />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl"
          >
            Dental Implants
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mb-10 drop-shadow-lg"
          >
            Restore your smile with permanent, natural-looking dental implants
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
          
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-4 py-2 rounded-full text-lg font-bold shadow-xl transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* What Are Dental Implants */}
      <section className="relative z-10 py-24 px-4 sm:px-8 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <motion.div 
                  className="inline-block bg-gradient-to-r from-[#167fdb] to-[#b8211a] p-3 rounded-2xl mb-8"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Shield className="w-12 h-12 text-white" />
                </motion.div>
                <motion.h2 
                  className="text-4xl font-bold mb-6 text-[#167fdb]"
                  variants={fadeInUp}
                >
                  What Are Dental Implants?
                </motion.h2>
                <motion.div
                  className="h-1 bg-gradient-to-r from-[#167fdb] to-[#b8211a] rounded-full mb-8 w-32"
                  variants={fadeInUp}
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
                <motion.p 
                  className="text-xl text-gray-700 leading-relaxed mb-8"
                  variants={fadeInUp}
                >
                  Dental implants are titanium posts surgically placed into the jawbone to act as a replacement root for a missing tooth. They provide a strong foundation for permanent or removable artificial teeth that are made to match your natural teeth.
                </motion.p>
              </div>
              <div className="md:w-1/2">
                <motion.div 
                  className="bg-gradient-to-br from-[#b8211a]/10 to-[#167fdb]/10 p-8 rounded-2xl backdrop-blur-sm"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-[#b8211a]">The Process:</h3>
                  <motion.ul 
                    className="space-y-6"
                    variants={staggerContainer}
                  >
                    {[
                      { icon: <Zap className="w-8 h-8 text-[#b8211a]" />, text: "Initial consultation and 3D imaging" },
                      { icon: <UserCheck className="w-8 h-8 text-[#b8211a]" />, text: "Implant placement procedure" },
                      { icon: <HeartHandshake className="w-8 h-8 text-[#b8211a]" />, text: "Healing and osseointegration" },
                      { icon: <Smile className="w-8 h-8 text-[#b8211a]" />, text: "Custom crown attachment" }
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-4"
                        variants={fadeInUp}
                      >
                        <motion.div 
                          className="flex-shrink-0 bg-white p-2 rounded-lg shadow-sm"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          {item.icon}
                        </motion.div>
                        <span className="text-lg text-gray-700 mt-1">{item.text}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-[#167fdb]/5 to-[#b8211a]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#b8211a]">Benefits of Dental Implants</h2>
            <div className="inline-block h-1 w-32 bg-gradient-to-r from-[#167fdb] to-[#b8211a] rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Natural Look & Feel",
                desc: "Implants look and function like your natural teeth",
                icon: <Smile className="w-10 h-10" />,
                color: "#167fdb"
              },
              {
                title: "Improved Speech",
                desc: "Eliminate slurring or mumbling caused by missing teeth",
                icon: <UserCheck className="w-10 h-10" />,
                color: "#b8211a"
              },
              {
                title: "Easier Eating",
                desc: "Chew comfortably without worrying about slipping dentures",
                icon: <HeartHandshake className="w-10 h-10" />,
                color: "#167fdb"
              },
              {
                title: "Durability",
                desc: "With proper care, implants can last a lifetime",
                icon: <Shield className="w-10 h-10" />,
                color: "#b8211a"
              },
              {
                title: "Bone Preservation",
                desc: "Prevents jawbone deterioration that occurs with tooth loss",
                icon: <Bone className="w-10 h-10" />,
                color: "#167fdb"
              },
              {
                title: "Convenience",
                desc: "No messy adhesives or removal required like with dentures",
                icon: <BadgeDollarSign className="w-10 h-10" />,
                color: "#b8211a"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[${item.color}]`}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 15px 30px -10px ${item.color}40`
                }}
              >
                <motion.div 
                  className={`inline-block bg-[${item.color}]/10 p-4 rounded-xl mb-6`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {React.cloneElement(item.icon, { className: `w-8 h-8 text-[${item.color}]` })}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={pulseAnimation}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Smile?
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Schedule your free consultation today and take the first step toward a confident, healthy smile.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-[#167fdb] px-4 py-2 rounded-full text-xl font-bold shadow-2xl transition-all duration-300"
            >
              Book Your Appointment
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:border-transparent text-white px-4 py-2 rounded-full text-xl font-bold shadow-2xl transition-all duration-300"
            >
              Call Now: (123) 456-7890
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DentalImplants;