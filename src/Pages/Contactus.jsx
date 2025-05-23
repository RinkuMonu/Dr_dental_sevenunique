import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contactus() {
  return (
    <>
 
      <div className="w-full h-[60vh] sm:h-[70vh] lg:h-screen overflow-hidden">
        <img
          src="/nic-Near-Banjara-Hills.jpg"
          alt="NIC Near Banjara Hills"
          className="w-full h-full object-cover"
        />
      </div>

 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <p className="text-blue-600 text-lg">Why People Recommend Us!</p>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
            Services of Medical Health Care
          </h1>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
   
          <div className="flex flex-col items-center text-center hover:bg-amber-50 border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-6 rounded-lg transition duration-300">
            <FaMapMarkerAlt className="text-5xl text-blue-600" />
            <h2 className="font-bold text-xl mt-4">Our Location</h2>
            <p className="mt-2 text-gray-600">
              Relipay House, Plot No 42, 1st Floor, Kirti Nagar Industrial Area,
              New Delhi, India - 110015
            </p>
          </div>

     
          <div className="flex flex-col items-center text-center hover:bg-amber-50 border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-6 rounded-lg transition duration-300">
            <FaPhoneAlt className="text-5xl text-blue-600" />
            <h2 className="font-bold text-xl mt-4">Phone Number</h2>
            <p className="mt-2 text-gray-600 space-y-1">
              +91 11 4356 1085 <br />
              +91 11 4356 1085 <br />
              +91 11 4356 1085
            </p>
          </div>

    
          <div className="flex flex-col items-center text-center hover:bg-amber-50 border shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-6 rounded-lg transition duration-300">
            <FaEnvelope className="text-5xl text-blue-600" />
            <h2 className="font-bold text-xl mt-4">Email Address</h2>
            <p className="mt-2 text-gray-600 space-y-1">
              DentalClink@gmail.com <br />
              Contact@sevenunique.com
            </p>
          </div>
        </div>
      </div>


      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.154034499599!2d77.14121925086872!3d28.655106189722847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030e91b74311%3A0x4707bfeec4de5b2!2sCIPHERSQUARE%20PAYMENT%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1661252774584!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contactus;
