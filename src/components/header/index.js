import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header-container'>
      <div className="header">
        <div className="header-logo">
            Xpenser. <i class="fi fi-rr-credit-card"></i>
        </div>
        <div className="header-button">
            <a href='https://github.com' target="_blank" rel='noopener noreferrer'>
            <i class="devicon-github-original"></i>Github
          </a>
        </div>
      </div>

    </div>
  )
}
 
export default Header
 