import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need an appointment before visiting?',
    answer: 'Yes, we recommend scheduling an appointment in advance to reduce wait times and ensure timely care.',
    color: '#167fdb'
  },
  {
    question: 'What types of dental insurance do you accept?',
    answer: 'We accept most major insurance plans. Please contact us directly to confirm your provider.',
    color: '#b8211a'
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Yes, professional teeth whitening is safe and effective when performed under dentist supervision.',
    color: '#167fdb'
  },
  {
    question: 'Do you offer pediatric dentistry?',
    answer: 'Absolutely! We provide gentle dental care tailored specifically for children.',
    color: '#b8211a'
  },
  {
    question: 'What if I have a dental emergency?',
    answer: 'Please call us immediately. We provide emergency dental services during clinic hours.',
    color: '#167fdb'
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Floating animation
  const floatingAnim = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 min-h-screen">
      {/* Floating decorative circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-[#167fdb]/10 blur-xl"
          animate={{
            ...floatingAnim,
            transition: { ...floatingAnim.transition, duration: 8 }
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-[15%] w-80 h-80 rounded-full bg-[#b8211a]/10 blur-xl"
          animate={{
            ...floatingAnim,
            y: [0, -25, 0],
            transition: { ...floatingAnim.transition, duration: 10 }
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="\5274708.jpg"
          alt="FAQ Banner"
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/70 to-[#b8211a]/50"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-[#b8211a]">Questions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true }}
            >
              {/* Unique card design with floating circle accent */}
              <div className={`relative overflow-hidden rounded-xl bg-white shadow-lg ${openIndex === idx ? 'ring-2 ring-[#167fdb]' : 'hover:shadow-xl'} transition-all duration-300`}>
                {/* Floating circle accent */}
                <motion.div 
                  className={`absolute -top-10 -left-10 w-32 h-32 rounded-full ${faq.color === '#167fdb' ? 'bg-[#167fdb]/10' : 'bg-[#b8211a]/10'}`}
                  animate={{
                    x: openIndex === idx ? [0, 10, 0] : [0, 5, 0],
                    y: openIndex === idx ? [0, 15, 0] : [0, 10, 0],
                    scale: openIndex === idx ? [1, 1.1, 1] : [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full flex justify-between items-start p-6 text-left transition-colors ${openIndex === idx ? 'bg-white' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="flex items-start gap-4 z-10">
                    <motion.div
                      className={`p-3 rounded-lg ${openIndex === idx ? 'bg-[#167fdb]/10' : 'bg-gray-100'} transition-colors`}
                      animate={{
                        backgroundColor: openIndex === idx ? `${faq.color}10` : '#f3f4f6',
                        border: openIndex === idx ? `1px solid ${faq.color}30` : '1px solid #e5e7eb'
                      }}
                    >
                      <HelpCircle 
                        size={22} 
                        className={openIndex === idx ? `text-[${faq.color}]` : 'text-gray-600'} 
                      />
                    </motion.div>
                    <span className={`font-medium text-lg ${openIndex === idx ? 'text-gray-900' : 'text-gray-700'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: openIndex === idx ? 180 : 0,
                      color: openIndex === idx ? faq.color : '#6b7280'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </motion.div>
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openIndex === idx ? 'auto' : 0,
                    opacity: openIndex === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-16 text-gray-600 relative">
                    {/* Answer line accent */}
                    <div className={`absolute left-16 top-0 h-full w-1 ${faq.color === '#167fdb' ? 'bg-[#167fdb]/20' : 'bg-[#b8211a]/20'}`}></div>
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="relative py-16 bg-gradient-to-r from-[#167fdb] to-[#b8211a] overflow-hidden">
        {/* Floating circles */}
        <motion.div 
          className="absolute top-1/4 left-[20%] w-40 h-40 rounded-full bg-white/10"
          animate={floatingAnim}
        />
        <motion.div 
          className="absolute bottom-1/3 right-[15%] w-48 h-48 rounded-full bg-white/10"
          animate={{
            ...floatingAnim,
            y: [0, -20, 0],
            transition: { ...floatingAnim.transition, duration: 8 }
          }}
        />
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Need More Help?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team is ready to answer your questions
          </motion.p>
          <motion.a
            href="mailto:info@7unique.in"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#167fdb] px-8 py-3 rounded-lg font-bold shadow-lg"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Faq;