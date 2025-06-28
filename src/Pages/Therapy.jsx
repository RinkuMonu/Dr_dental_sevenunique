import React from 'react';
import { motion } from 'framer-motion';

const Therapy = () => {
  const therapies = [
    {
      title: "Individual Counseling",
      description: "One-on-one sessions to help manage stress, anxiety, and emotional challenges with personalized support.",
      benefits: [
        "Safe space to explore thoughts and feelings",
        "Build resilience and emotional well-being",
        "Personalized coping strategies"
      ],
      img: "/dreamstime_xs_144828175.jpg",
      icon: "🧘"
    },
    {
      title: "Family Therapy",
      description: "Strengthen relationships and resolve conflicts with guided sessions involving family members.",
      benefits: [
        "Improve family communication",
        "Resolve conflicts constructively",
        "Heal from past wounds together"
      ],
      img: "/The-Benefits-of-Family-Dental-Plans.jpg",
      icon: "👨‍👩‍👧"
    },
    {
      title: "Dental Therapy",
      description: "Focused care to support your long-term oral health with expert precision.",
      benefits: [
        "Treat gum disease and cavities",
        "Gentle, preventive approach",
        "Personalized treatments"
      ],
      img: "/dbb02be546b75dcf58b664a9c977d369.jpg",
      icon: "🦷"
    },
    {
      title: "Weekly Support Groups",
      description: "Join others facing similar challenges in a supportive group environment.",
      benefits: [
        "Available in-person or online",
        "Coping strategies for dental fear",
        "Parent support for children's oral health"
      ],
      img: "/imag5656es.jpg",
      icon: "📅"
    }
  ];

  return (
    <section id="therapy" className="relative py-20 bg-[#167fdb]/5 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#b8211a]/10 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#167fdb]/10 rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#167fdb] uppercase bg-white rounded-full mb-2">
            Therapeutic Services
          </span>
          <h2 className="text-4xl font-bold text-[#b8211a] mb-2">Therapy & Mental Wellness</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional therapy sessions for stress, anxiety, depression, and more with our licensed therapists.
          </p>
        </motion.div>

        <div className="space-y-8">
          {therapies.map((therapy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:w-2/5 relative">
                <img
                  src={therapy.img}
                  alt={therapy.title}
                  className="w-full h-full object-cover min-h-[250px]"
                />
                <div className="absolute top-4 left-4 bg-[#b8211a] text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  {therapy.icon}
                </div>
              </div>
              
              <div className="md:w-3/5 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#167fdb] mb-4">{therapy.title}</h3>
                <p className="text-gray-700 mb-6">{therapy.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {therapy.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#b8211a] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Unique Learn More Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#167fdb",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-3 rounded-full font-medium overflow-hidden group"
                  style={{
                    backgroundColor: "#b8211a",
                    color: "white"
                  }}
                >
                  {/* Animated background elements */}
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 10 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-[#167fdb]/20 rounded-full opacity-0 group-hover:opacity-100"
                  />
                  
                  {/* Main button content */}
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>

                  {/* Floating dots animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    className="absolute inset-0 overflow-hidden"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ 
                          x: Math.random() * 40 - 20,
                          y: Math.random() * 40 - 20,
                          opacity: 0
                        }}
                        whileHover={{ 
                          x: Math.random() * 80 - 40,
                          y: Math.random() * 80 - 40,
                          opacity: [0, 0.8, 0],
                          scale: [0.5, 1.5, 0.5]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapy;