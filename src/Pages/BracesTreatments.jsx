import React from 'react';
import { motion } from 'framer-motion';
import {
  Smile,
  ShieldCheck,
  Settings,
  AlignHorizontalJustifyCenter,
  ChevronRight,
  Check,
  Calendar,
  Phone
} from 'lucide-react';

// Floating Vector Components - Only for card backgrounds
const FloatingVector = ({ color, size, position, delay }) => {
  const vectorStyle = {
    width: size,
    height: size,
    position: 'absolute',
    ...position,
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    filter: 'blur(40px)',
    opacity: 0.2,
    zIndex: 0
  };

  return (
    <motion.div
      style={vectorStyle}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        opacity: [0.1, 0.3, 0.1],
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

const BracketVector = () => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className="w-full h-full"
    animate={{
      rotate: [0, 5, -5, 0],
      y: [0, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <path 
      d="M20,20 L20,80 L40,80 L40,60 L30,60 L30,40 L40,40 L40,20 Z M80,20 L80,80 L60,80 L60,60 L70,60 L70,40 L60,40 L60,20 Z" 
      fill="#167fdb" 
      fillOpacity="0.1"
    />
  </motion.svg>
);

const BracesTreatments = () => {
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

  return (
    <div className="font-sans text-[#167fdb] bg-white overflow-hidden relative min-h-screen">
      {/* Hero Section - No vectors here */}
      <div className="relative h-screen min-h-[300px] w-full overflow-hidden">
        <img
          src="/Braces-in-Colorado-Springs-5.jpg"
          alt="Braces Treatment"
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
        
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl"
          >
            Braces Treatments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mb-10 drop-shadow-lg"
          >
            Achieve perfectly aligned teeth with our advanced orthodontic solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
           
       
          </motion.div>
        </div>
      </div>

      {/* What Are Braces */}
      <section className="relative z-10 py-24 px-4 sm:px-8 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Add vectors only to this card background */}
          <div className="relative overflow-hidden rounded-3xl">
         
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20 relative z-10"
            >
                 <FloatingVector 
              color="#167fdb" 
              size="300px" 
              position={{ top: '0', left: '5%' }} 
              delay={0} 
            />
            <FloatingVector 
              color="#b8211a" 
              size="400px" 
              position={{ bottom: '1%', right: '10%' }} 
              delay={1} 
            />
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <motion.h2 
                    className="text-4xl font-bold mb-6 text-[#167fdb]"
                    variants={fadeInUp}
                  >
                    What Are Braces Treatments?
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
                    Braces are orthodontic devices used to correct misaligned teeth and jaws. They apply continuous pressure over time to move teeth into proper alignment. We offer traditional metal braces and modern invisible options like clear aligners.
                  </motion.p>
                  <motion.ul 
                    className="space-y-4"
                    variants={staggerContainer}
                  >
                    {[
                      "Customized treatment plans",
                      "Advanced digital scanning",
                      "Comfortable treatment options",
                      "Regular progress monitoring"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        variants={fadeInUp}
                      >
                        <motion.div 
                          className="flex-shrink-0 bg-[#b8211a]/10 p-1 rounded-full mr-3"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                        >
                          <Check className="w-5 h-5 text-[#b8211a]" />
                        </motion.div>
                        <span className="text-lg text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <motion.div 
                  className="md:w-1/2"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="\braces-ceramic02-300x225.jpg" 
                    alt="Braces illustration" 
                    className="w-full h-auto rounded-2xl shadow-xl border-4 border-white"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who Needs Braces */}
      <section className="relative z-10 py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-[#f0f8ff] to-[#fef0f0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#167fdb]">Common Reasons to Get Braces</h2>
            <div className="inline-block h-1 w-32 bg-gradient-to-r from-[#167fdb] to-[#b8211a] rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Crooked or crowded teeth",
              "Overbite, underbite, or crossbite",
              "Gaps between teeth",
              "Jaw alignment issues",
              "Improved oral health and bite function",
              "Preparing for other dental work"
            ].map((reason, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl">
                {/* Add vectors to card backgrounds */}
                <FloatingVector 
                  color={idx % 2 ? '#b8211a' : '#167fdb'} 
                  size="200px" 
                  position={{ top: '20%', left: idx % 2 ? '60%' : '10%' }} 
                  delay={idx * 0.5} 
                />
                
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#b8211a] relative z-10"
                  whileHover={{ 
                    y: -10,
                    boxShadow: `0 15px 30px -10px ${idx % 2 ? '#b8211a' : '#167fdb'}40`
                  }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#b8211a]/10 p-2 rounded-full mr-4">
                      <Calendar className="w-6 h-6 text-[#b8211a]" />
                    </div>
                    <p className="text-xl font-medium text-[#167fdb]">{reason}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-24 px-4 sm:px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#167fdb]">Benefits of Orthodontic Braces</h2>
            <div className="inline-block h-1 w-32 bg-gradient-to-r from-[#167fdb] to-[#b8211a] rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Smile size={32} className="text-[#b8211a]" />,
                title: "Straighter Smile",
                desc: "Braces align your teeth for a more confident, attractive smile.",
                color: "#167fdb"
              },
              {
                icon: <ShieldCheck size={32} className="text-[#b8211a]" />,
                title: "Better Oral Health",
                desc: "Aligned teeth are easier to clean, reducing the risk of dental issues.",
                color: "#167fdb"
              },
              {
                icon: <Settings size={32} className="text-[#b8211a]" />,
                title: "Customized Options",
                desc: "Choose metal, ceramic, or invisible braces to suit your lifestyle.",
                color: "#b8211a"
              },
              {
                icon: <AlignHorizontalJustifyCenter size={32} className="text-[#b8211a]" />,
                title: "Improved Bite Function",
                desc: "Correct jaw alignment enhances chewing, speech, and comfort.",
                color: "#b8211a"
              },
            ].map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl">
                {/* Add vectors to card backgrounds */}
                <FloatingVector 
                  color={item.color} 
                  size="250px" 
                  position={{ top: '30%', left: idx % 2 ? '70%' : '20%' }} 
                  delay={idx * 0.3} 
                />
                
                <motion.div
                  variants={fadeInUp}
                  className={`bg-gradient-to-br from-white to-[#f9fbff] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e6f0ff] relative z-10`}
                  whileHover={{ 
                    y: -10,
                    boxShadow: `0 15px 30px -10px ${item.color}40`
                  }}
                >
                  <motion.div 
                    className="mb-6 p-3 bg-[#ffe6e6] rounded-full w-14 h-14 flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-[#167fdb] text-center">{item.title}</h3>
                  <p className="text-[#167fdb]/90 text-center">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white overflow-hidden">
        {/* Animated background elements - subtle motion only */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.1, 0.15, 0.1],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
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
            Start Your Smile Transformation Today
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our orthodontic specialists will create a personalized treatment plan for your perfect smile.
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
              className="bg-white hover:bg-gray-100 text-[#167fdb] px-4 py-2 rounded-full text-xl font-bold shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Appointment <ChevronRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:border-transparent text-white px-4 py-2 rounded-full text-xl font-bold shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BracesTreatments;