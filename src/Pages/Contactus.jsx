import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaChevronRight } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const ContactCard = ({ icon, title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#b8211a] relative overflow-hidden"
  >
    {/* Floating circle decoration */}
    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#167fdb]/5 z-0"></div>
    
    <div className="bg-gradient-to-br from-[#167fdb] to-[#167fdb]/90 p-4 rounded-full mb-4 z-10">
      {React.cloneElement(icon, { className: "text-2xl text-white" })}
    </div>
    <h2 className="font-bold text-xl text-gray-800 mb-3 z-10">{title}</h2>
    <div className="text-gray-600 space-y-2 z-10">
      {children}
    </div>
  </motion.div>
);

function Contactus() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Floating Elements */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#167fdb]/10 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-[#b8211a]/10 blur-xl"></div>
        </div>
        
        {/* SVG decorative elements */}
        <svg className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="#167fdb" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        </svg>
        
        <svg className="absolute bottom-1/3 right-1/4 w-32 h-32 opacity-20" viewBox="0 0 200 200">
          <path d="M20,100 Q100,20 180,100 T340,100" stroke="#b8211a" strokeWidth="2" fill="none" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/30 to-[#b8211a]/20 z-10"></div>
        <img
          src="/nic-Near-Banjara-Hills.jpg"
          alt="NIC Near Banjara Hills"
          className="w-full h-full  object-center"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center z-20 text-center px-4"
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-[#b8211a] animate-pulse"></span>
              <span className="text-sm font-medium text-white tracking-wider">CONTACT US</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              We're <span className="text-[#b8211a]">Here</span> For You
            </h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-32 h-1 bg-white mx-auto mb-6 transform origin-left"
            />
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Reach out to us for appointments or inquiries about our dental services
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        {/* Floating dots decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-[#167fdb] opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-4 h-4 rounded-full bg-[#b8211a] opacity-20"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to <span className="text-[#167fdb]">Reach</span> Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to connect with our dental professionals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <ContactCard 
            icon={<FaMapMarkerAlt />} 
            title="Our Location"
            delay={0.1}
          >
            <p className="font-medium">Relipay House, Plot No 42</p>
            <p>1st Floor, Kirti Nagar Industrial Area</p>
            <p>New Delhi, India - 110015</p>
          </ContactCard>

          <ContactCard 
            icon={<FaPhoneAlt />} 
            title="Phone Number"
            delay={0.2}
          >
            <p className="font-medium">01414511098</p>
            <p>01414511098</p>
            <p>01414511098</p>
          </ContactCard>

          <ContactCard 
            icon={<FaEnvelope />} 
            title="Email Address"
            delay={0.3}
          >
            <p className="font-medium">DentalClink@gmail.com</p>
            <p>Contact@sevenunique.com</p>
          </ContactCard>

          <ContactCard 
            icon={<FaClock />} 
            title="Working Hours"
            delay={0.4}
          >
            <p className="font-medium">Monday - Friday: 9AM - 6PM</p>
            <p>Saturday: 9AM - 2PM</p>
            <p>Sunday: Closed</p>
          </ContactCard>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-96 w-full overflow-hidden"
      >
        {/* SVG decoration */}
       
        
        <div className="absolute inset-0 bg-[#167fdb]/10 z-10 pointer-events-none"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.154034499599!2d77.14121925086872!3d28.655106189722847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030e91b74311%3A0x4707bfeec4de5b2!2sCIPHERSQUARE%20PAYMENT%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1661252774584!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Contact Form Section */}
   <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center justify-center relative mb-6">
        <div className="absolute -left-4 w-8 h-8 rounded-full bg-[#167fdb]/20"></div>
        <div className="absolute -right-4 w-8 h-8 rounded-full bg-[#b8211a]/20"></div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative z-10">
          Get In <span className="text-[#b8211a]">Touch</span>
        </h2>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Fill out the form below and we'll get back to you within 24 hours
      </p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8 sm:p-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ml-1">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#167fdb] focus:ring-1 focus:ring-[#167fdb]/30 transition-all bg-gray-50/50"
                  placeholder="John Doe"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 ml-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#167fdb] focus:ring-1 focus:ring-[#167fdb]/30 transition-all bg-gray-50/50"
                  placeholder="your@email.com"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 ml-1">Subject</label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#167fdb] focus:ring-1 focus:ring-[#167fdb]/30 transition-all bg-gray-50/50"
                placeholder="Appointment request"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 ml-1">Your Message</label>
            <div className="relative">
              <textarea
                id="message"
                rows="5"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#167fdb] focus:ring-1 focus:ring-[#167fdb]/30 transition-all bg-gray-50/50"
                placeholder="Tell us how we can help..."
              ></textarea>
              <div className="absolute top-3 right-3 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 4px 15px rgba(22, 127, 219, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-[#167fdb] to-[#0d5a9d] shadow-md hover:shadow-lg transition-all"
          >
            <FiSend className="w-5 h-5 mr-2" />
            Send Message
          </motion.button>
        </form>
      </div>
      
      {/* Decorative border bottom */}
      <div className="h-2 bg-gradient-to-r from-[#167fdb] via-[#b8211a] to-[#167fdb]"></div>
    </motion.div>
  </div>
</div>
    </div>
  );
}

export default Contactus;