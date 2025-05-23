import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';




 
   
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
    title: "Dental Cleaning",
    description:
      "Dental cleaning removes plaque, tartar, and stains. It prevents cavities, gum disease, and bad breath.",
    img: "https://img.freepik.com/free-photo/woman-patient-dentist_1303-9364.jpg?ga=GA1.1.243284326.1744971010&semt=ais_hybrid&w=740",
  },
  {
    title: "Dental Checkup",
    description:
      "A checkup detects cavities, gum issues, and keeps teeth and gums healthy through regular monitoring.",
    img: "https://img.freepik.com/free-photo/female-patient-opening-her-mouth-doctor-look-her-throat-otolaryngologist-examines-sore-throat-patient_657921-181.jpg?ga=GA1.1.243284326.1744971010&semt=ais_hybrid&w=740",
  },
  {
    title: "Fluoride Treatment",
    description:
      "Fluoride strengthens enamel, prevents cavities, and supports oral health during routine visits.",
    img: "https://img.freepik.com/free-photo/dentist-treats-childs-tooth-using-rubber-dam-closeup-tooth-treatment_169016-66928.jpg?ga=GA1.1.243284326.1744971010&semt=ais_hybrid&w=740",
  },
  {
    title: "Oral Cancer Screening",
    description:
      "This quick exam helps detect early signs of oral cancer, identifying issues before symptoms show.",
    img: "https://img.freepik.com/free-photo/young-female-patient-with-open-mouth-examining-dental-inspection-dentist-office_496169-976.jpg?ga=GA1.1.243284326.1744971010&semt=ais_hybrid&w=740",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Used to save decayed or infected teeth by removing pulp and cleaning the tooth’s inside.",
    img: "https://img.freepik.com/premium-photo/dentist-examining-female-patient-with-tools_107420-49844.jpg?ga=GA1.1.243284326.1744971010&semt=ais_hybrid&w=740",
  },
  {
    title: "Dental Crowns",
    description:
      "Custom caps that restore damaged teeth, improving shape, strength, and appearance.",
    img: "https://img.freepik.com/free-photo/close-up-dentist-instruments_23-2151042896.jpg?ga=GA1.1.243284326.1744971010&semt=ais_hybrid&w=740",
  },
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
      <div className="text-center md:text-left max-w-md text-blue-950">
        <h1 className="text-9xl md:text-5xl font-bold mb-4">Welcome to Dental Clinic</h1>
        <p className="text-base md:text-xl">Your trusted dental care provider.</p>
      </div>
    </div>

   
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className="w-full max-w-md bg-opacity-90 p-3 shadow-lg rounded-lg  bg-white opacity-80 transform transition duration-500 hover:translate-x-1 hover:scale-[1.02]">
        <p className="text-blue-600 font-bold text-2xl mb-6 text-center">Book Appointment Today!</p>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="  text-blue-600  font-bold border p-3 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="  text-blue-600    font-bold border p-3 rounded w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact number"
            required
            className="  text-blue-600  font-bold border p-3 rounded w-full"
          />
          <select className="  text-blue-600  font-bold border p-3 rounded w-full" required>
            <option>Select Doctor</option>
            <option>Meera</option>
            <option>Shyam</option>
            <option>Sneha</option>
          </select>
          <select className="  text-blue-600  font-bold border p-3 rounded w-full" required>
            <option>Select Department</option>
            <option>Dental Cleaning</option>
            <option>Dental Checkup</option>
            <option>Fluoride Treatment</option>
            <option>Dental Sealants</option>
            <option>Oral Cancer Screening</option>
          </select>
          <input
            type="text"
            name="date"
            placeholder="DD/MM/YY"
            required
            className="  text-blue-600  font-bold border p-3 rounded w-full"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-3 px-6 rounded text-lg hover:bg-blue-700 transition duration-300">
            Make Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

 

      <div className="flex flex-col md:flex-row  mt-10">
  
        <div className="bg-black text-white p-8 md:w-1/2 flex flex-col justify-center slide-in-left">
          <h2 className="text-blue-400 text-lg font-semibold uppercase">About Us</h2>
          <h1 className="text-4xl font-bold mt-2 ">Our Mission.</h1>
          <p className="mt-4 text-lg">
            Providing exemplary physical, emotional and spiritual care for each of our patients and their families.
            Balancing the continued commitment to the care of the poor and those most in need with the provision of
            highly specialized neuro services. Building a healthy environment where each person is valued, respected
            and has an opportunity for personal and professional growth. Advancing excellence in health services
            education with best neuro care.
          </p>
          <h1 className="text-4xl font-bold mt-8">Our Vision.</h1>
          <p className="mt-4 text-lg">
            Delivering quality neuro care and advanced technology with the faith in values, integrity, respect,
            teamwork and innovation to achieve complete patient delight.
          </p>
        </div>

   
        <div className="md:w-1/2 animate-pulse md:h-auto relative">
          <img
            src="\smiling-female-patient-sitting-chair-showing-thumb-up-dental-clinic.jpg"
            alt="Smiling patient"
            className="absolute  w-full h-full object-cover"
          />
        </div>
      </div>




      <div className="bg-cyan-700 ">
        <div className="section py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col items-center">
              <p className="text-center text-white text-lg mt-10">
                Why People Recommend Us!
              </p>
              <h1 className="text-center font-bold text-4xl sm:text-5xl mt-2">
                Salient Features about Clink
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
                <div className="flex flex-col items-center text-center hover:bg-amber-50 shadow-sky-300 border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                  <i className="bi bi-hospital text-5xl"></i>
                  <h2 className="font-bold text-xl mt-4">Root Canal Treatment </h2>
                  <p className="mt-2 text-gray-600">
                    We have an ultra modern 11 bedded ICU  Stroke unit which has
                    special features of Central Oxygen system.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center hover:bg-amber-50 shadow-sky-300  border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                  <i className="bi bi-hospital text-5xl"></i>
                  <h2 className="font-bold text-xl mt-4">Cosmetic Dentitstry</h2>
                  <p className="mt-2 text-gray-600">
                    We have an ultra modern 11 bedded ICU  Stroke unit which has
                    special features of Central Oxygen system.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center hover:bg-amber-50 shadow-sky-300  border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
                  <i className="bi bi-hospital text-5xl"></i>
                  <h2 className="font-bold text-xl mt-4">Dental Implants</h2>
                  <p className="mt-2 text-gray-600">
                    We have an ultra modern 11 bedded ICU  Stroke unit which has
                    special features of Central Oxygen system.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center hover:bg-amber-50 shadow-sky-300   border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                  <i className="bi bi-hospital text-5xl"></i>
                  <h2 className="font-bold text-xl mt-4">Braces Treatment</h2>
                  <p className="mt-2 text-gray-600">
                    We have an ultra modern 11 bedded ICU  Stroke unit which has
                    special features of Central Oxygen system.
                  </p>
                </div>
              </div>
            </div>
           <div className="w-full mt-5">
  <img
    src="https://thebraintower.com/wp-content/uploads/2024/12/Teamphotos-3.png"
    alt="Team Photo"
    className="w-full h-auto "
  
  />
</div>
          </div>
        </div>
      </div>  

      <div className="py-5  bg-blue-100">
      <div className="container mx-auto px-40">
           <p className="text-center text-blue-600 text-lg mt-10">
                Why People Recommend Us!
              </p>
              <h1 className="text-center font-bold text-4xl sm:text-5xl mt-2">
              Services of medical health care
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
                  className="rounded-full h-[300px] w-[300px] object-cover mb-6"
                />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div> 





        <div className="flex flex-col md:flex-row  bg-gray-100">
       
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Operating Room"
              className="w-full h-full object-cover"
            />
          </div>

         
          <div className="md:w-1/2 w-full bg-gray-900 text-white p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">DENTAL CLICK</h1>
            <h2 className="text-3xl font-semibold mb-6">OUR FACILITIES</h2>
            <p className="text-lg mb-6">
              After treating more than 30,000 Patients of Epilepsy & Stroke (Paralysis), his AIM & Mission is to set Stroke & Epilepsy center in each & every district of the State rather than leaving them on their fate to fight with crippling disease.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▶</span>
                <span>Elevator.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▶</span>
                <span>We have the world class ICU attendant rooms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▶</span>
                <span>24Hrs. Pharmacy, Ambulance, R.O. water facility, Power Back-up.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▶</span>
                <span>Very Accessible-Very near to Gaurav Tower and world Trade Park.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▶</span>
                <span>Centrally Air cooled spacious ward & Air Conditioned Rooms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▶</span>
                <span>Well Maintained Canteen to offer Tailor-Made Meals Supervised by Dietitian.</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-blue-600 text-lg font-semibold text-center mb-2">MEET OUR TEAM</h2>
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">LOOK AT GALLERY FOR DETAILS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

    </>

  );
}

export default Home;
