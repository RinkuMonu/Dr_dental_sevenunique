import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FaTooth, FaSmile, FaTeeth, FaTeethOpen } from 'react-icons/fa';
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LightBulbIcon,

} from "@heroicons/react/24/solid";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,


} from "@heroicons/react/24/solid";

import { Link } from 'react-router-dom';
const missionPoints = [
  {
    icon: <HeartIcon className="w-5 h-5" />,
    title: "Holistic Care",
    description: "Comprehensive physical, emotional and spiritual support for patients and families."
  },
  {
    icon: <ShieldCheckIcon className="w-5 h-5" />,
    title: "Specialized Neurology",
    description: "Cutting-edge treatments balanced with compassionate care for all."
  },
  {
    icon: <UserGroupIcon className="w-5 h-5" />,
    title: "Inclusive Environment",
    description: "Fostering respect and growth opportunities for everyone."
  },
  {
    icon: <LightBulbIcon className="w-5 h-5" />,
    title: "Medical Education",
    description: "Advancing excellence in neuro care through innovative training."
  }
];

const stats = [
  { value: "98%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Care Availability" },
  { value: "50+", label: "Specialists" }
];


const images = [
  "\woman-patient-dentist.jpg",
  "\dental-chair-other-accesorries-used-by-dentist-empty-cabinet-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment.jpg",
  "\dental-chair-other-accesorries-used-by-dentist-empty-cabinet-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment.jpg",

  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
];






const services = [
  {
    title: "Dr. Nikita Chatuvadi",
    description:
      "Dr. Nikita Chatuvadi is an experienced general dentist known for her gentle approach. She specializes in dental cleanings and patient education.",
    img: "/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
  },
  {
    title: "Dr. Ramesh Mehta",
    description:
      "Dr. Ramesh Mehta is a skilled dentist focusing on comprehensive dental checkups and diagnostic care, ensuring long-term oral health for his patients.",
    img: "/docter-holding-xray-film-tuch-260nw-603551345.webp",
  },
  {
    title: "Dr. Ayesha Khan",
    description:
      "Dr. Ayesha Khan provides expert fluoride treatments and is passionate about educating patients on enamel protection and cavity prevention.",
    img: "/harihar_vert-29f551e3c06efd802eecc9582e1d8eb434b5471f.jpg",
  },
  {
    title: "Dr. Nidhi Patel",
    description:
      "Dr. Nidhi Patel is an oral health specialist offering early detection of oral cancer and other conditions through detailed screenings and exams.",
    img: "/45767657.jpg",
  },
  {
    title: "Dr. Priya Verma",
    description:
      "Dr. Priya Verma is an endodontist who performs advanced root canal treatments, helping patients preserve their natural teeth with precision care.",
    img: "/a2bea0202b7b2f8a81719592aa810938.jpg",
  },
  {
    title: "Dr. Arjun Desai",
    description:
      "Dr. Arjun Desai specializes in restorative dentistry, crafting custom dental crowns that improve both functionality and aesthetics of damaged teeth.",
    img: "/pexels-photo-8376333-scaled.jpg",
  }
];

function Home() {
  return (
    <>


      <div className="relative w-full  overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/6070803-uhd_3840_2160_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="relative  flex flex-col md:flex-row items-center justify-center p-5">


          <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
            <div className="text-center md:text-left max-w-md text-[#b8211a]">
              <h1 className=" sm:text-5xl font-extrabold mb-4" style={{ fontSize: '72px' }}>Welcome to Dental Clinic</h1>
              <p className="text-base md:text-xl">Your trusted dental care provider.</p>
            </div>
          </div>


          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md  p-3 shadow-lg rounded-lg  bg-white opacity-80 transform transition duration-500  ">
              <p className="text-[#167fdb] font-bold text-2xl mb-6 text-center">Book Appointment Today!</p>

              <div className="grid grid-cols-1 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="text-[#167fdb] font-bold placeholder:text-[#167fdb] placeholder:font-bold border p-3 rounded w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="text-[#167fdb] font-bold placeholder:text-[#167fdb] placeholder:font-bold border p-3 rounded w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  required
                  className="text-[#167fdb] font-bold placeholder:text-[#167fdb] placeholder:font-bold border p-3 rounded w-full"
                />
                <select
                  name="doctor"
                  required
                  className="text-[#167fdb] font-bold border p-3 rounded w-full"
                >
                  <option value="" className="text-gray-500">Select Doctor</option>
                  <option>Meera</option>
                  <option>Shyam</option>
                  <option>Sneha</option>
                </select>
                <select
                  name="department"
                  required
                  className="text-[#167fdb] font-bold border p-3 rounded w-full"
                >
                  <option value="" className="text-gray-500">Select Department</option>
                  <option>Dental Cleaning</option>
                  <option>Dental Checkup</option>
                  <option>Fluoride Treatment</option>
                  <option>Dental Sealants</option>
                  <option>Oral Cancer Screening</option>
                </select>
                <input
                  type="date"
                  name="date"
                  required
                  className="text-[#167fdb] font-bold placeholder:text-[#167fdb] placeholder:font-bold border p-3 rounded w-full"
                />
              </div>


              <div className="flex justify-center">
                <button className="bg-[#167fdb] text-white py-3 px-6 rounded text-lg hover:bg-blue-700 transition duration-300">
                  Make Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Decorative elements - adjusted for mobile */}
        <div className="absolute top-0 left-0 w-full h-1/4 md:h-1/3 bg-[#167fdb]/5 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-[#b8211a]/10 rounded-full filter blur-xl md:blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-xl overflow-hidden">
            {/* Text Content - Full width on mobile */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 flex flex-col justify-center relative">
              {/* Vertical accent line - hidden on mobile */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-[#b8211a]"></div>

              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#167fdb] uppercase bg-[#167fdb]/10 rounded-full">
                  About Our Clinic
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#167fdb] mt-4 mb-6">
                Exceptional Dental Care
              </h1>

              {/* Mission Section */}
              <div className="mb-8 md:mb-12 pl-0 md:pl-6 relative">
                <h2 className="text-xl md:text-2xl font-bold text-[#167fdb] mb-4 md:mb-6 flex items-center">
                  Our Mission
                </h2>

                <div className="space-y-6 relative">
                  {/* Vertical connector line - hidden on mobile */}
                  <div className="hidden md:block absolute left-6 top-2 bottom-2 w-0.5 bg-[#b8211a]/30"></div>

                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 relative md:pl-4">
                      <div className="flex-shrink-0 mt-1">

                        <div className="text-[#b8211a] w-4 h-4 md:w-5 md:h-5">
                          {point.icon}
                        </div>

                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-[#167fdb]">{point.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base mt-1">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision Section */}
              <div className="pl-0 md:pl-6">
                <h2 className="text-xl md:text-2xl font-bold text-[#167fdb] mb-3 md:mb-4 flex items-center">
                  Our Vision
                </h2>
                <p className="text-gray-600 text-sm md:text-base md:pl-11">
                  To revolutionize neurological care through innovative technology,
                  compassionate service, and unwavering commitment to patient well-being.
                </p>
              </div>
            </div>

            {/* Image Content - Full width on mobile */}
            <div className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[600px] order-first lg:order-last">
              <div className="absolute inset-0">
                <img
                  src="/smiling-female-patient-sitting-chair-showing-thumb-up-dental-clinic.jpg"
                  alt="Happy patient"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#167fdb]/20 to-transparent"></div>

                {/* Stats Panel - adjusted for mobile */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6 w-11/12 md:w-4/5">
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl md:text-3xl font-bold text-[#b8211a]">{stat.value}</div>
                        <div className="text-xs md:text-sm text-[#167fdb] mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="bg-[#fdf2f2] py-16 relative overflow-hidden">
        {/* Decorative dental vectors */}
        <div className="absolute -top-20 -right-20 opacity-10">
          <svg width="300" height="300" viewBox="0 0 512 512">
            <path fill="#b8211a" d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm-64 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm128 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#167fdb] font-medium text-lg mb-3 tracking-wider">
              WHY PEOPLE RECOMMEND US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#b8211a] mb-6 relative inline-block">
              <span className="relative">
                Salient Features About Clinic
                <span className=" bottom-0 left-0 w-full h-1 bg-[#167fdb] transform -translate-y-2 "></span>
              </span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaTooth className="text-4xl text-[#b8211a] mb-4" />,
                title: "Root Canal Treatment",
                description: "We have an ultra modern 11 bedded ICU Stroke unit which has special features of Central Oxygen system."
              },
              {
                icon: <FaSmile className="text-4xl text-[#b8211a] mb-4" />,
                title: "Cosmetic Dentistry",
                description: "We have an ultra modern 11 bedded ICU Stroke unit which has special features of Central Oxygen system."
              },
              {
                icon: <FaTeeth className="text-4xl text-[#b8211a] mb-4" />,
                title: "Dental Implants",
                description: "We have an ultra modern 11 bedded ICU Stroke unit which has special features of Central Oxygen system."
              },
              {
                icon: <FaTeethOpen className="text-4xl text-[#b8211a] mb-4" />,
                title: "Braces Treatment",
                description: "We have an ultra modern 11 bedded ICU Stroke unit which has special features of Central Oxygen system."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#fdf2f2] px-3 py-3 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Original Team Photo Section */}
          <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://thebraintower.com/wp-content/uploads/2024/12/Teamphotos-3.png"
              alt="Team Photo"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom decorative element */}

      </div>

      <div className="overflow-hidden">
        {/* Testimonials Section */}


        <div className="py-16 bg-[#167fdb]/10 relative overflow-hidden">
          {/* Floating vector elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 opacity-20"
          >
            <svg width="80" height="80" viewBox="0 0 24 24" fill="#b8211a">
              <path d="M12 2L3 12H7V22H17V12H21L12 2Z" />
            </svg>
          </motion.div>

          <motion.div
            animate={{
              x: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 opacity-20"
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="#167fdb">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
            </svg>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#167fdb] uppercase bg-white rounded-full shadow-sm mb-2">
                Meet Our Team
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#b8211a] mb-2">
                Our Specialist Doctors
              </h1>
              <div className="w-20 h-1 bg-[#b8211a] mx-auto"></div>
            </motion.div>

            {/* Team Carousel */}
            <Swiper
              modules={[Pagination, FreeMode, Autoplay]}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
                el: '.team-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="relative"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100"
                  >
                    {/* Image with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                      {/* Specialist tag */}
                      <span className="absolute top-4 left-4 bg-[#b8211a] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        Specialist
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-5 h-5 ${i < 4 ? 'text-[#b8211a]' : 'text-gray-300'} fill-current`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-500">4.9</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#167fdb] mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-5">{service.description}</p>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center text-[#b8211a] font-medium group mt-auto w-fit"
                      >
                        <span className="mr-2 group-hover:underline">View Profile</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}

              {/* Custom pagination */}
              <div className="team-pagination mt-8 !relative !bottom-0 flex justify-center gap-2">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className="swiper-pagination-bullet w-3 h-3 rounded-full bg-[#167fdb]/30 transition-all duration-300"
                  ></div>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
        {/* Facilities Section */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img
              src="\Dental-Clinic-Interior-Design-jpg.webp"
              alt="Dental Clinic"
              className="w-full h-full min-h-[500px] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute top-8 left-8 bg-[#b8211a] text-white px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2" />
                <span>Certified Facility</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#fdf2f2] text-white p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#167fdb] font-medium uppercase tracking-wider">Dental Clinic</span>
              <h1 className="text-4xl text-[#b8211a] font-bold mt-2 mb-6">Our World-Class Facilities</h1>
              <p className="text-[#167fdb] text-lg mb-8">
                After treating thousands of patients, our mission is to provide accessible,
                high-quality dental care with state-of-the-art technology and compassionate service.
              </p>

              <ul className="space-y-4">
                {[
                  "Modern elevator access",
                  "24/7 emergency services",
                  "Advanced sterilization systems",
                  "Central location near major landmarks",
                  "Spacious, comfortable treatment rooms",
                  "Healthy meal options in our cafe"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#167fdb] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#167fdb]">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-2 px-2 py-2 bg-[#b8211a] text-white rounded-full font-semibold hover:bg-[#167fdb] transition-colors w-fit">
                Tour Our Facility
              </button>
            </motion.div>
          </div>
        </div>

        {/* Team Gallery Section */}
        <div className="py-20 bg-[#167fdb]/5 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#b8211a]/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#167fdb]/10 rounded-full"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#167fdb] uppercase bg-[#167fdb]/10 rounded-full">
                Our Clinic Gallery
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#b8211a] mt-4 mb-2">
                Explore Our Dental Facility
              </h1>
              <div className="w-20 h-1 bg-[#b8211a] mx-auto"></div>
            </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
     {
    src: "/woman-patient-dentist.jpg",
    title: "Modern Operatory",
    desc: "State-of-the-art equipment",
    tag: "Featured"
  },
  {
    src: "/imagessss.jpg",
    title: "Pediatric Dental Suite",
    desc: "Child-friendly space",
    tag: "Featured"
  },
  {
    src: "https://images.pexels.com/photos/6627414/pexels-photo-6627414.jpeg",
    title: "Digital X-Ray Facility",
    desc: "Advanced diagnostics",
    tag: "Featured"
  },
  {
    src: "https://images.pexels.com/photos/6627428/pexels-photo-6627428.jpeg",
    title: "Comfortable Waiting Area",
    desc: "Relaxing environment",
    tag: "New"
  },
  {
    src: "/pexels-cottonbro-7086237.jpg",
    title: "Sterilization Center",
    desc: "Highest safety standards",
    tag: "New"
  },
  {
    src: "/ima556.jpg",
    title: "Consultation Room",
    desc: "Personalized care",
    tag: "New"
  }
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl shadow-lg h-80"
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        loading="lazy" // Added for better performance
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">
          {item.title}
        </h3>
        <p className="text-[#167fdb] font-medium mt-1">
          {item.desc}
        </p>
      </div>
      <div className="absolute top-4 right-4 bg-[#b8211a] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
        {item.tag}
      </div>
    </motion.div>
  ))}
</div>
            <div className="text-center mt-10 ">
              <Link
                to="/photos"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#167fdb] to-[#b8211a] text-white rounded-full font-semibold hover:bg-[#167fdb] transition-colors shadow-lg hover:shadow-xl text-center"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;
