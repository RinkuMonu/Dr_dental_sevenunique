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

        <div className="py-5  bg-cyan-600">
      <div className="container mx-auto px-40">
           <h1 className="text-center text-blue-600 text-lg mt-10">
            Meet Our Team
              </h1>
             
        <Swiper
          modules={[Pagination, FreeMode, Autoplay]}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full h-[600px] mt-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center p-4 border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7) hover:bg-blue-500 ">
                <img
                  src={service.img}
                  alt={service.title}
                  className=" h-[300px] w-[300px] object-cover mb-6"
                />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div> 





      
    </>
  )
}

export default Team