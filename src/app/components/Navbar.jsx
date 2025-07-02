"use client"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FaHome, FaImages, FaTshirt, FaCut, FaLink } from 'react-icons/fa'
import { GiClothes } from 'react-icons/gi'


// Add this style to your css file


const Navbar = () => {

  const [state, setState] = useState(false)
  const navRef = useRef()

  // Updated navigation with all page links and icons
  const navigation = [
      { title: "Home", path: "/", icon: FaHome },
      { title: "Adieyiee", path: "/adieyielinks", icon: GiClothes },
      { title: "Gallery", path: "/gallerylinks", icon: FaImages },
      { title: "Clothing", path: "/clothinglinks", icon: FaTshirt },
      { title: "Fabric", path: "/fabriclinks", icon: FaCut },
      { title: "Links", path: "/links", icon: FaLink }
  ]

  useEffect(() => {
      
      const body = document.body

      // Disable scrolling
      const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
      if (state) body.classList.add(...customBodyStyle)
      // Enable scrolling
      else body.classList.remove(...customBodyStyle)

    //   // Sticky strick
    //   const customStyle = ["sticky-nav", "fixed", "border-b"]
    //   window.onscroll = () => {
    //       if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
    //       else navRef.current.classList.remove(...customStyle)
    //   }
    }, [state])
    

  return (
      <nav ref={navRef} className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 lg:h-20">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                      <Link href="/" className="flex items-center">
                          <img
                              src="images/4stylelogo.jpg" 
                              width={120} 
                              height={50}
                              alt="4Style Logo"
                              className="h-10 w-auto lg:h-12"
                          />
                      </Link>
                  </div>

                  {/* Desktop Navigation - Centered */}
                  <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
                      <div className="flex items-center space-x-10">
                          {navigation.map((item, idx) => {
                              const IconComponent = item.icon
                              return (
                                  <Link 
                                      key={idx} 
                                      href={item.path}
                                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200 relative group text-center flex flex-col items-center"
                                  >
                                      <IconComponent className="w-5 h-5 mb-1" />
                                      {item.title}
                                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                  </Link>
                              )
                          })}
                      </div>
                  </div>
                      
                  {/* CTA Buttons */}
                  <div className="hidden lg:flex lg:items-center lg:space-x-4">
                      <a 
                          href="tel:+233543645082" 
                          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200 text-center"
                      >
                          Contact
                      </a>
                      <a 
                          href="https://4stylegh.store/" 
                          target="_blank"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
                      >
                          Shop Now
                      </a>
                  </div>

                  {/* Mobile menu button */}
                  <div className="lg:hidden">
                      <button 
                          className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
                          onClick={() => setState(!state)}
                          aria-label="Toggle menu"
                      >
                          {state ? (
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                          ) : (
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                          )}
                      </button>
                  </div>
              </div>
          </div>

          {/* Mobile Navigation - Overlay */}
          <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${state ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="px-4 py-4 space-y-1">
                  {navigation.map((item, idx) => {
                      const IconComponent = item.icon
                      return (
                          <Link
                              key={idx}
                              href={item.path}
                              className="block px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 text-center flex items-center justify-center space-x-3"
                              onClick={() => setState(false)}
                          >
                              <IconComponent className="w-5 h-5" />
                              <span>{item.title}</span>
                          </Link>
                      )
                  })}
                  
                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 pb-3 border-t border-gray-100">
                      <a 
                          href="tel:+233543645082" 
                          className="block px-3 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 text-center"
                      >
                          Contact Us
                      </a>
                      <a 
                          href="https://4stylegh.store/" 
                          target="_blank"
                          className="block mt-2 px-3 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 text-center"
                      >
                          Shop Now
                      </a>
                  </div>
              </div>
          </div>
      </nav>
  )
}


export default Navbar