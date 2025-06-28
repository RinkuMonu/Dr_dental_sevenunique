import React from 'react';
import { CalendarDays, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaTooth, FaTeeth, FaTeethOpen } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'Top 5 Tips for Healthy Teeth',
    excerpt: 'Learn daily habits that can help you maintain excellent oral hygiene and avoid cavities.',
    date: 'May 28, 2025',
    author: 'Dr. Neha Sharma',
    image: '/pexels-photo-8376333-scaled.jpg',
  },
  {
    title: 'Do You Really Need Braces?',
    excerpt: 'Discover how to know if orthodontic treatment is right for you or your child.',
    date: 'June 1, 2025',
    author: 'Dr. Rohan Mehta',
    image: '/Braces-in-Colorado-Springs-5.jpg',
  },
  {
    title: 'Foods That Naturally Whiten Your Teeth',
    excerpt: 'Certain foods can help whiten your teeth naturally. Find out what they are!',
    date: 'May 20, 2025',
    author: 'Dr. Anjali Verma',
    image: '/close-up-portrait-happy-stylish-young-woman-home-biting-apple-eating-fruits-home.jpg',
  },
];

const Blogs = () => {
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
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full text-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="\technology-communication-icons-symbols-concept.jpg"
            alt="Dental Blog"
            className="w-full h-full  opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#167fdb]/40 to-[#b8211a]/40"></div>
        </div>
        
        {/* Floating vector elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path d="M30,50 Q50,30 70,50 T90,50" stroke="#167fdb" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" stroke="#b8211a" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 text-[[#167fdb]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Dental Health Blog</h1>
          <p className="text-lg md:text-xl max-w-2xl">Expert advice, tips & updates from our dentists</p>
        </motion.div>
      </div>

      {/* Blog Posts */}
      <div className="py-16 px-4 md:px-20 bg-white relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#167fdb] rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#b8211a] rounded-full opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[#167fdb] text-center ">Latest Articles</h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#b8211a]"></div>
                    <span className="text-sm text-[#167fdb] font-medium">Dental Care</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-5">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-[#167fdb]" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-[#b8211a]" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 text-[#167fdb] font-medium flex items-center gap-1"
                  >
                    Read more <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
              View All Articles <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4 md:px-20 bg-gradient-to-r from-[#167fdb]/10 to-[#b8211a]/10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#167fdb] rounded-full opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#b8211a] rounded-full opacity-5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="flex justify-center mb-6">
            <FaTeethOpen className="text-[#b8211a] w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-[#167fdb] mb-4">Stay Updated with Dental Tips</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest dental health advice and clinic updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-2 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#167fdb]"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white px-4 py-1 rounded-full font-medium shadow-md"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;