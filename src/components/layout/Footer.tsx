import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-12">
      <div className="flex gap-8 mb-6">
        <a href="#"><img src="/vite.svg" alt="Facebook" className="w-8 h-8" /></a>
        <a href="#"><img src="/vite.svg" alt="Instagram" className="w-8 h-8" /></a>
        <a href="#"><img src="/vite.svg" alt="Twitter" className="w-8 h-8" /></a>
        <a href="#"><img src="/vite.svg" alt="LinkedIn" className="w-8 h-8" /></a>
      </div>
      <p className="text-sm text-[#21243D]">Copyright ©2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;