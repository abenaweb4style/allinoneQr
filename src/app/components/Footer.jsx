import React from 'react'

const Footer = () => {
  return (
    <div className='footer' style={{ background: 'black', color: 'white' }}>
        <div style={{ background: 'white', padding: '5px', borderRadius: '8px', display: 'inline-block' }}>
            <img
                src='images/4stylelogo.jpg'
                width={70}
                alt='4style logo'
            />
        </div>

        <h1>Powered By 4style Clothing</h1>
        <p>All rights reserved @ 2024</p>
    </div>
  )
}

export default Footer