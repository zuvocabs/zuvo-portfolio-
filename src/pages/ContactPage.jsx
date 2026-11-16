import React, { useEffect } from 'react';
import Contact from '../Components/Contact';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact ZUVO India Pvt. Ltd. — Corporate Enquiries & Office Location";
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#F7F5FC]">
      <Contact />
    </div>
  );
}

