import React from 'react';
import { motion } from 'framer-motion';

function DentalCare() {
  const services = [
    {
      title: "Teeth Cleaning",
      description: "Professional cleaning and whitening to keep your smile bright and healthy.",
      details: "Want a whiter smile? We also offer gentle yet effective teeth whitening options that remove years of discoloration in just one session.",
      icon: "🦷",
      color: "bg-[#167fdb]/10"
    },
    {
      title: "Cavity Filling",
      description: "Safe and effective treatment for tooth decay using modern materials.",
      details: "The good news? Filling a cavity is fast, simple, lean out the decay, protect your tooth — almost like patching a pothole before it wrecks the road.",
      features: [
        "Quick, in-clinic procedure (usually under 30 minutes)",
        "Options that match your natural tooth color",
        "No drilling anxiety – we use modern, gentle tools"
      ],
      icon: "🦷",
      color: "bg-[#b8211a]/10"
    },
    {
      title: "Root Canal",
      description: "A root canal is a dental procedure used to save a badly decayed or infected tooth.",
      details: "Instead of removing the tooth, the damaged pulp inside is gently cleaned out and sealed. This relieves pain, stops infection, and keeps your natural tooth intact.",
      icon: "🦷",
      color: "bg-[#167fdb]/10"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile.",
      details: "Whether it's whitening, veneers, bonding, or reshaping, we offer solutions tailored to your goals. These treatments are quick, effective, and can dramatically boost your confidence.",
      icon: "🦷",
      color: "bg-[#b8211a]/10"
    }
  ];

  return (
    <section id="dental" className="relative py-20 overflow-hidden bg-white">
      {/* Floating vector elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#167fdb]/10 rounded-full filter blur-xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#b8211a]/10 rounded-full filter blur-xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#167fdb] uppercase bg-[#167fdb]/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#b8211a] mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dental team offers everything from regular cleanings to advanced cosmetic procedures.
            Maintain your oral health with our expert services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`${service.color} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md mr-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#167fdb]">{service.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-3">{service.description}</p>
              <p className="text-gray-600 text-sm mb-4">{service.details}</p>
              
              {service.features && (
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-[#b8211a] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-4 px-6 py-2 rounded-lg font-medium ${
                  service.color.includes('167fdb') ? 'bg-[#b8211a]' : 'bg-[#167fdb]'
                } text-white`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DentalCare;