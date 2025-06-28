import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';

function OurVision() {
  const missionPoints = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "Multi-Specialty Care",
      description: "Deliver robust dental treatments while increasing patient awareness"
    },
    {
      icon: <LightBulbIcon className="w-6 h-6" />,
      title: "Clinical Excellence",
      description: "Maintain cutting-edge technology and highly qualified professionals"
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "Professional Collaboration",
      description: "Share expertise through workshops and professional organizations"
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Community Service",
      description: "Promote charity and aid for needy patients"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src="/Dental-Clinic-Interior-Design-jpg.webp"
          alt="Dental Clinic Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#167fdb]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-[#b8211a]/90 text-white p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Our Commitment to Dental Excellence</h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full bg-[#167fdb]/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#167fdb] uppercase bg-white rounded-full mb-4">
              Our Mission
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#b8211a]">
              Building Healthy Smiles
            </h1>
          </motion.div>

          {/* Mission Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="bg-[#b8211a]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-[#b8211a]">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#167fdb] mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#b8211a] mb-4">Clinical Excellence</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#b8211a] mr-2">•</span>
                  <span className="text-gray-700">To deliver robust multi-specialty dental treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8211a] mr-2">•</span>
                  <span className="text-gray-700">Achieve excellence with up-to-date technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8211a] mr-2">•</span>
                  <span className="text-gray-700">Continual dental research and implementation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#b8211a] mb-4">Community Commitment</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#b8211a] mr-2">•</span>
                  <span className="text-gray-700">Promote charity for the needy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8211a] mr-2">•</span>
                  <span className="text-gray-700">Partner with leading oral care companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#b8211a] mr-2">•</span>
                  <span className="text-gray-700">Educate public through various channels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;