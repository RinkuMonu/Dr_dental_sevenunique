import React, { useEffect, useState } from 'react';
import {
  Smile,
  ShieldCheck,
  Timer,
  Brush,
  Zap,
  AlertTriangle,
  Droplet,
  Thermometer
} from 'lucide-react';
import { motion } from 'framer-motion';

const RootCanalTreatment = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="font-sans text-[#245D8C] bg-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#167fdb]/10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#b8211a]/10 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-[#167fdb]/5 blur-lg"></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="/female-patient-having-procedure-done-dentist.jpg"
          alt="Root Canal Treatment"
          className="w-full h-full "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/80 to-[#b8211a]/80 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 z-20 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Root Canal Treatment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl drop-shadow-md"
          >
            Restore your natural tooth with pain-free, advanced root canal therapy at our clinic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8"
          >
          
          </motion.div>
        </div>
      </div>

      {/* What is Root Canal */}
      <section
        id="about"
        className={`py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden ${isVisible['about'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible['about'] ? "visible" : "hidden"}
            className="bg-white p-8 rounded-2xl shadow-lg relative z-10 border border-[#167fdb]/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-[#167fdb]/10 p-4 rounded-full w-fit mb-6">
                  <ShieldCheck className="w-10 h-10 text-[#167fdb]" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#167fdb]">
                  What is Root Canal Treatment?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A root canal treatment is a dental procedure used to treat infection at the center of a tooth.
                  It's a highly effective method to save your natural tooth and eliminate pain caused by decay or injury.
                  The infected pulp is removed, and the inside of the tooth is cleaned, disinfected, and sealed.
                </p>
                <div className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] h-1 w-20 rounded-full"></div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-[#b8211a]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#b8211a]">Procedure Steps:</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: <Thermometer className="w-5 h-5 text-[#b8211a]" />, text: "Diagnosis and X-rays" },
                      { icon: <Zap className="w-5 h-5 text-[#b8211a]" />, text: "Local anesthesia application" },
                      { icon: <Droplet className="w-5 h-5 text-[#b8211a]" />, text: "Pulp removal and cleaning" },
                      { icon: <ShieldCheck className="w-5 h-5 text-[#b8211a]" />, text: "Filling and sealing" },
                      { icon: <Brush className="w-5 h-5 text-[#b8211a]" />, text: "Crown placement" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-0.5">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section
        id="symptoms"
        className={`py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-[#167fdb]/5 to-[#b8211a]/5 ${isVisible['symptoms'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible['symptoms'] ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#b8211a]">Symptoms That May Require Root Canal</h2>
            <p className="text-lg text-gray-700">Recognize these signs early to prevent further complications</p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible['symptoms'] ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { icon: <AlertTriangle className="w-8 h-8 text-[#b8211a]" />, text: "Severe tooth pain when chewing" },
              { icon: <AlertTriangle className="w-8 h-8 text-[#b8211a]" />, text: "Prolonged sensitivity to hot or cold" },
              { icon: <AlertTriangle className="w-8 h-8 text-[#b8211a]" />, text: "Discoloration or darkening of the tooth" },
              { icon: <AlertTriangle className="w-8 h-8 text-[#b8211a]" />, text: "Swollen and tender gums" },
              { icon: <AlertTriangle className="w-8 h-8 text-[#b8211a]" />, text: "Pimple on the gums (abscess)" },
              { icon: <AlertTriangle className="w-8 h-8 text-[#b8211a]" />, text: "Deep decay or dark spot on tooth" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 border-l-4 border-[#b8211a]"
              >
                <div className="bg-[#b8211a]/10 p-2 rounded-full">{item.icon}</div>
                <p className="font-medium text-gray-800">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        className={`py-20 px-4 sm:px-8 md:px-16 bg-white ${isVisible['benefits'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible['benefits'] ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#167fdb]">Benefits of Root Canal Therapy</h2>
            <div className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] h-1 w-20 rounded-full mx-auto"></div>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible['benefits'] ? "visible" : "hidden"}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: 'Pain Relief',
                desc: 'Eliminates infection and discomfort, relieving pain effectively.',
                icon: <Smile className="w-10 h-10 text-[#167fdb] mb-4 mx-auto" />,
                bg: 'bg-[#167fdb]/5'
              },
              {
                title: 'Natural Tooth Preservation',
                desc: 'Helps retain your original tooth structure and function.',
                icon: <ShieldCheck className="w-10 h-10 text-[#167fdb] mb-4 mx-auto" />,
                bg: 'bg-[#167fdb]/10'
              },
              {
                title: 'Efficient & Long-Lasting',
                desc: 'With proper care, treated teeth can last a lifetime.',
                icon: <Timer className="w-10 h-10 text-[#b8211a] mb-4 mx-auto" />,
                bg: 'bg-[#b8211a]/5'
              },
              {
                title: 'Aesthetic Restoration',
                desc: 'The tooth is sealed and restored with a crown for a natural look.',
                icon: <Brush className="w-10 h-10 text-[#b8211a] mb-4 mx-auto" />,
                bg: 'bg-[#b8211a]/10'
              }
            ].map(({ title, desc, icon, bg }, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`${bg} p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 text-center`}
              >
                <div className="bg-white p-3 rounded-full w-fit mx-auto mb-6 shadow-sm">
                  {icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="appointment"
        className={`py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white ${isVisible['appointment'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible['appointment'] ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Smile?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let tooth pain affect your quality of life. Our expert team provides gentle, effective root canal treatments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-[#167fdb] px-4 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Schedule Now
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Call: 01414511098
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default RootCanalTreatment;