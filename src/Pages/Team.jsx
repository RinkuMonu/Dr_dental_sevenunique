import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

const services =[
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
    img: "\docter-holding-xray-film-tuch-260nw-603551345.webp",
  },
  {
    title: "Dr. Ayesha Khan",
    description:
      "Dr. Ayesha Khan provides expert fluoride treatments and is passionate about educating patients on enamel protection and cavity prevention.",
    img: "\harihar_vert-29f551e3c06efd802eecc9582e1d8eb434b5471f.jpg",
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
    img: "\a2bea0202b7b2f8a81719592aa810938.jpg",
  },
  {
    title: "Dr. Arjun Desai",
    description:
      "Dr. Arjun Desai specializes in restorative dentistry, crafting custom dental crowns that improve both functionality and aesthetics of damaged teeth.",
    img: "\pexels-photo-8376333-scaled.jpg",
  }
];

function Team() {
  return (
    <>
      


      
 
      <div className="w-full h-[60vh] sm:h-[70vh] lg:h-screen overflow-hidden">
        <img
          src="\41407_2020_340_Fig1_HTML.jpg"
          alt="NIC Near Banjara Hills"
          className="w-full h-full object-cover"
        />
      </div>

    <div className="py-16 bg-[#167fdb]/10 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-10 left-10 w-20 h-20 bg-[#b8211a]/10 rounded-full opacity-80"></div>
  <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#167fdb]/10 rounded-full opacity-80"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider text-[#167fdb] uppercase bg-white rounded-full shadow-sm mb-4">
        Our Specialists
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-[#b8211a] mb-4">
        Meet Our Dental Team
      </h1>
      <div className="w-20 h-1 bg-[#b8211a] mx-auto"></div>
    </div>

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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            {/* Image with overlay */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-[#b8211a] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                Specialist
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-[#167fdb] mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <button className="flex items-center text-[#b8211a] font-medium group">
                <span className="mr-2 group-hover:underline">View Profile</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      {/* Custom pagination */}
      <div className="team-pagination mt-8 !relative !bottom-0 flex justify-center gap-2">
        {services.map((_, i) => (
          <div 
            key={i}
            className="swiper-pagination-bullet w-3 h-3 rounded-full bg-[#167fdb]/30 transition-all duration-300 swiper-pagination-bullet-active:bg-[#b8211a]"
          ></div>
        ))}
      </div>
    </Swiper>
  </div>
</div>


      
    </>
  )
}

export default Team