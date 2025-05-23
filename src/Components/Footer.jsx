import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

      
        <div className="">
          <h3 className="text-xl font-semibold mb-4">About Campany</h3>
          <p className='text-blue-500'>A dental company typically provides products or services related to oral health, such as dental equipment, supplies, or clinical care. Major players include Align Technology (Invisalign), Dentsply Sirona, and Henry Schein. </p>

          <div className="flex items-start gap-4">
            <div className=" flex items-center justify-center">
              📍
            </div>
            <div>
           
              <p className='text-blue-500'>123 Street Name City, State, 12345</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center">
              ✉️
            </div>
            <div>
             
              <p className='text-blue-500'>support@example.com</p>
            </div>
          </div>

          <div className="flex items-start ">
            <div className=" flex items-center justify-center">
              ☎️
            </div>
            <div>
          
              <p className='text-blue-500'>+1 (234) 567-8900</p>
            </div>
          </div>
        </div>

   
        <div>
          <h3 className="text-xl font-semibold mb-4">Treatments</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Root Canal Treatments",
              "Cosmetic Dentistry",
              "Dental Implants",
              "Braces Treatments",
              "Routine Treatments",
              "Full Mouth Reconstruction",
              "Dentures & Repair",
              "Children's Dentistry"
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400">{item}</a>
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["About Us", ],
              ["Doctors", ],
              ["Our Blogs", "/blogs"],
              ["ICU", ],
              ["Modular OT", ],
              ["OPD", ],
              ["Gallery", ],
              ["Contact Us", ]
            ].map(([text, link], index) => (
              <li key={index}>
                <a href={link} className="hover:text-blue-400">{text}</a>
              </li>
            ))}
          </ul>
        </div>

<div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["About Us", ],
              ["Teams and Condition", ],
              ["disclaimer", ""],
              ["", ],
              ["", ],
              ["", ],
              ["Gallery", ],
              ["Contact Us", ]
            ].map(([text, link], index) => (
              <li key={index}>
                <a href={link} className="hover:text-blue-400">{text}</a>
              </li>
            ))}
          </ul>
        </div>



      </div>





      <div className="flex justify-center gap-6 text-white mt-10 text-2xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
          <FaYoutube />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6">
        <p>© 2024 Advanced Dental Clinc. Designed by SevenUnique@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;