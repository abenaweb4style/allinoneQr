import React from 'react';
import Navbar from '../components/Navbar';
import { FaYoutube, FaTiktok, FaFacebook, FaInstagram, FaWhatsapp, FaPinterest, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtu.be/mjZnCyJZOWk',
    icon: FaYoutube,
    color: 'bg-red-600',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/4style.gh/',
    icon: FaInstagram,
    color: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400',
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.ca/apeafaustina123/',
    icon: FaPinterest,
    color: 'bg-red-500',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@4styleclothingbya?_t=8mQ5S6zL8X0&_r=',
    icon: FaTiktok,
    color: 'bg-black',
  },
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/4styleclothin/?_rdc=1&_rdr',
    icon: FaFacebook,
    color: 'bg-blue-700',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/4styleclothing/',
    icon: FaLinkedin,
    color: 'bg-blue-600',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/233543645082',
    icon: FaWhatsapp,
    color: 'bg-green-500',
  },
];

export default function ClothingLinks() {
  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Overlay for readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.85)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="block md:hidden">
          <Navbar />
        </div>
        {/* Clothing Hero Image Section */}
        <div 
          className="w-full h-[300px] relative bg-cover bg-center bg-no-repeat mb-10"
          style={{
            backgroundImage: `url('/clothing.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black" style={{ opacity: 0.2 }}></div>
        </div>
        {/* Styled Header Section */}
        <div className="text-center py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 rounded-2xl mx-4 mb-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg" style={{ backgroundColor: '#e0e0e0' }}>
                <img
                  src="/adinkra-clothing.PNG"
                  alt="Adinkra Clothing Symbol"
                  className="w-10 h-10 object-contain"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(80,0,120,0.08))' }}
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Connect with Clothing
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {`Step into the world of 4Style Clothing, where contemporary fashion meets timeless elegance. Follow our journey, from initial design sketches to the final stitch. Connect with us for style tips, new collection alerts, and a behind-the-scenes look at how we're shaping the future of fashion.`}
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <span className="mr-2">👗</span> Fashion
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <span className="mr-2">🎨</span> Creativity
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                <span className="mr-2">💫</span> Style
              </span>
            </div>
          </div>
        </div>
        {/* Placeholder for social links/cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 px-4">
          {socialLinks.map(({ name, url, icon: Icon, color }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center rounded-xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl bg-white group`}
              style={{ minHeight: '160px' }}
            >
              <span className={`rounded-full p-4 mb-3 text-white text-4xl ${color} group-hover:scale-110 transition-transform`}>
                <Icon />
              </span>
              <span className="font-semibold text-lg text-gray-800 group-hover:text-blue-600">{name}</span>
              <span className="text-sm text-gray-500 mt-1">Follow us</span>
            </a>
          ))}
        </div>
        {/* Online Shop Card Section */}
        <div className="flex justify-center mb-6 px-4">
          <a
            href="https://4stylegh.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl shadow-lg p-8 bg-gradient-to-tr from-purple-100 via-pink-100 to-red-100 hover:from-purple-200 hover:via-pink-200 hover:to-red-200 transition-all duration-200 max-w-md w-full text-center group"
            style={{ minHeight: '180px' }}
          >
            <span className="text-3xl mb-3 text-purple-600 group-hover:scale-110 transition-transform">🛍️</span>
            <span className="font-bold text-xl text-gray-800 mb-2 group-hover:text-purple-700">Shop Our Latest Collection</span>
            <span className="text-base text-gray-600 mb-4">Discover our curated selection of trendy clothing, accessories, and fashion essentials. Shop with confidence and style!</span>
            <span className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow-md animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 transition-all duration-300">Visit Online Shop</span>
          </a>
        </div>
      </div>
    </div>
  );
} 