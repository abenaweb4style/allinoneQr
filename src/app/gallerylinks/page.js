import React from 'react';
import Navbar from '../components/Navbar';
import { FaYoutube, FaTiktok, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/', // Replace with actual URL
    icon: FaYoutube,
    color: 'bg-red-600',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@4stylegallery?_t=ZM-8xUsBBgItGC&_r=1', // Replace with actual URL
    icon: FaTiktok,
    color: 'bg-black',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1T6c7Lrm4s/', // Replace with actual URL
    icon: FaFacebook,
    color: 'bg-blue-700',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/4style.artgallery?igsh=MzJnbnlvYmpjdTN6', // Replace with actual URL
    icon: FaInstagram,
    color: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400',
  },
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/', // Replace with actual URL
    icon: FaPinterest,
    color: 'bg-red-500',
  },
];

export default function GalleryLinks() {
  return (
    <>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <div className="">
        <div 
          className="w-full h-[300px] relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/gallery.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black" style={{ opacity: 0.2 }}></div>
        </div>
        <div className="text-center py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 rounded-2xl mx-4 mb-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg" style={{ backgroundColor: '#e32922' }}>
                <img
                  src="/adinkra-gyenyame.PNG"
                  alt="Adinkra Gye Nyame Symbol"
                  className="w-10 h-10 object-contain"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(80,0,120,0.08))' }}
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Connect with our art Gallery
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {`Join our vibrant community! Follow us across all platforms and stay updated with the latest fashion trends, 
              behind-the-scenes content, and exclusive offers. Let's create something beautiful together! ✨`}
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
        {/* Learn to Paint Card Section */}
        <div className="flex justify-center mb-6 px-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScLsl_1K_m_9eOS4hEKldVlsssrWJuPqOg3pLzhgL9kEWlc_w/viewform?usp=header" // Replace with actual Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl shadow-lg p-8 bg-gradient-to-tr from-blue-100 via-purple-100 to-teal-100 hover:from-blue-200 hover:via-purple-200 hover:to-teal-200 transition-all duration-200 max-w-md w-full text-center group"
            style={{ minHeight: '180px' }}
          >
            <span className="text-3xl mb-3 text-blue-600 group-hover:scale-110 transition-transform">🎨</span>
            <span className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-700">Want to Learn How to Paint?</span>
            <span className="text-base text-gray-600 mb-4">Click here to sign up for our painting lessons and workshops!</span>
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md group-hover:bg-blue-700 transition-colors">Go to Registration Form</span>
          </a>
        </div>
        {/* Google Map Card Section */}
        <div className="flex justify-center mb-6 px-4">
          <div className="rounded-xl shadow-lg bg-white p-0 max-w-xs w-full flex flex-col items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.27410169608265!2d-0.11712506389312871!3d5.685251634796531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d7edf0feff9%3A0xb700798e6efd9c0d!2s4style%20Clothing%2Fgallery!5e0!3m2!1sen!2sgh!4v1750947048697!5m2!1sen!2sgh"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '12px 12px 0 0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gallery Location Map"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/E2C87C2MfmDr3u6w8?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[90%] -mt-4 mb-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md text-center transition-colors text-base"
              style={{ zIndex: 2 }}
            >
              Visit Gallery
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 