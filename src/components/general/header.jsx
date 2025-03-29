import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { LuBellDot } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import MobileNav from './MobileNav';
import SearchResults from './SearchResults';
import { NavLink } from 'react-router-dom';

function Header({ pageTitle, navFunc }) {

  const [showNav, setShowNav ] = useState(false)
  const [showSearchList, setShowSearchList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const userImageURL = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  const pageTitleStyle = {
    color: '#343C6A'
  }

  const headerBlueColorStyle = {
    color: '#718EBF'
  }

  const headerRedColorStyle = {
    color: '#FE5C73'
  }


  return (
    <>
      <div className='header-grid w-full h-full sm:px-5 md:px-10'>
        {/* Hamburger Menu, only visible on mobile screens */}
        <div className="hamburger-menu w-12 h-12 flex items-center justify-center text-2xl sm:flex md:hidden"
          style={pageTitleStyle}
          onClick={() => {setShowNav(true)}}
        >
          <FiMenu />
        </div>

        {/* Page Title */}
        <p className="header-page-title sm:text-2xl md:text-3xl font-semibold h-12 flex items-center" style={pageTitleStyle}>{pageTitle}</p>
        
        {/* Search Box */}

        <div 
          className="header-search-box relative bg-gray-fill h-12 w-full flex justify-start pl-4 gap-3 items-center rounded-full"
          style={headerBlueColorStyle}
        >
          <IoIosSearch className='text-xl' />
          <input 
            type="text" 
            placeholder='Search for something'
            onFocus={() => setShowSearchList(true)}
            value={searchTerm}
            onChange={() => {setSearchTerm(event.target.value)}}
          />

          <div 
            className="search-overlay fixed top-0 left-0 w-screen h-screen bg-black opacity-50 flex justify-center items-center"
            style={{display: `${showSearchList ? 'flex' : 'none'}`}}
            
          >
            <div onClick={() => {setSearchTerm(''); setShowSearchList(false)}} className="fixed top-0 left-0 w-screen h-screen opacity-50 bg-black"></div>
            <div 
              className="search-drop-down z-10 rounded-xl flex flex-col gap-10 p-5 w-4/6 h-1/2 bg-white"
            >
              <div style={pageTitleStyle} className="px-5 bg-gray-fill rounded-xl">
                <input 
                  type="text" 
                  className='w-full h-15 rounded-lg text-inherit'
                  placeholder='Search for something'
                  onChange={() => {setSearchTerm(event.target.value)}}
                  value={searchTerm}
                />
              </div>
              <div style={headerBlueColorStyle} className='overflow-y-auto'>
                <SearchResults 
                  searchTerm={searchTerm} 
                  navFunc={navFunc} 
                  searchToggle={setShowSearchList}
                  setSearchTerm={setSearchTerm} 
                />
              </div>
              
            </div>
          </div>
        </div>

        {/* Setting Icon */}

        <div 
          className="header-gear-icon cursor-pointer text-2xl bg-gray-fill h-12 w-12 flex justify-center items-center rounded-full sm:hidden md:flex large-screens-only"
          style={headerBlueColorStyle}
          onClick={() => navFunc('Setting')}
        >
          <NavLink to={'/setting'}><GoGear /></NavLink>
        </div>

        {/* Bell Icon */}

        <div 
          className="header-bell-icon cursor-pointer text-2xl bg-gray-fill h-12 w-12 flex justify-center items-center rounded-full sm:hidden md:flex large-screens-only"
          style={headerRedColorStyle}
        >
          <LuBellDot />
        </div>

        {/*User Image  */}
        <div className="header-user-image h-15 w-15 rounded-full bg-gray-fill">
          <img src={userImageURL} alt=""  />
        </div>
      </div>


      <MobileNav 
        showNav={showNav} 
        setShowNav={setShowNav}
        viewPage={pageTitle}
        navFunc={navFunc} 
      />
    </>
  )
}

export default Header