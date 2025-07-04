import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Links() {
  return (
    <>
      <Navbar />
      <div className="block md:hidden flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-3xl font-bold">Links Page</h1>
        <p className="mt-4 text-lg text-gray-700">This is the Links page. Add your content here.</p>
      </div>
      <Footer />
    </>
  );
} 