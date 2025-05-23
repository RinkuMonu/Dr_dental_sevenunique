import React, { useRef, useEffect, useState } from 'react';

// ✅ Reusable Section Wrapper with Scroll Animation
const FadeInSection = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

// ✅ Your Original Component with Animation Applied
function Servies() {
  return (
    <>
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Replacement of missing teeth</h2>
          <p className="text-blue-900 mb-8">
            We offer different procedures for replacing missing teeth e.g. dental implants, fixed caps or bridges and removable dentures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "\\missing-teeth-dental-bridges-300x225.jpg", label: "Dental bridge" },
              { src: "\\missing-teeth-flexible-partial-300x225.jpg", label: "Flexible, partial denture" },
              { src: "\\missing-teeth-implant-300x225.jpg", label: "Dental implant" },
              { src: "\\missing-teeth-implant-with-magnetic-denture-300x225.jpg", label: "Full denture with magnetic implant" },
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 border"
                />
                <p className="text-center text-blue-900 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Cavity Filling</h2>
          <p className="text-blue-900 mb-8">
            At our clinic, we use silver, ceramic and cosmetic fillings, depending on need and circumstance of the patient, in order to fill cavities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "\\missing-teeth-dental-bridges-300x225.jpg", label: "Before (left) and After (right) treatmentet" },
              { src: "\\missing-teeth-flexible-partial-300x225.jpg", label: "Before (left) and After (right) treatment" },
              { src: "\\missing-teeth-implant-300x225.jpg", label: "Before Treatment" },
              { src: "\\missing-teeth-implant-with-magnetic-denture-300x225.jpg", label: "After Treatment" },
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 border"
                />
                <p className="text-center text-blue-900 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Orthodontic Treatment</h2>
          <p className="text-blue-900 mb-8">
            Teeth straightening treatments are performed at our clinic using invisible braces too, among other alternative methods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/braces-multi-coloured-edited-300x225.jpg", label: "Multi-coloured Braces" },
              { src: "/braces-steel-300x225.jpg", label: "Steel Braces" },
              { src: "/braces-ceramic02-300x225.jpg", label: "Aligners" },
              { src: "/braces-invisiline-300x225.jpg", label: "Ceramic Braces" },
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 border"
                />
                <p className="text-center text-blue-900 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </FadeInSection>
    </>
  );
}

export default Servies;
