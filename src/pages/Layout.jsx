import { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/general/Logo'
import Navigation from '../components/general/Navigation'
import Header from '../components/general/Header'
import SearchOverlay from '../components/general/SearchOverlay'


function Layout() {
  const [contentPage, setContentPage] = useState('Overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [showSearchList, setShowSearchList] = useState(false)

  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-gray-fill">
        <div className="header-container sm:h-35 md:h-25 w-screen flex gap-1">
          <div className="w-56 bg-white sm:hidden md:flex large-screens-only">
            {/*Brand logo here */}
            <Logo />
          </div>
          <div className="w-full bg-white">
            {/*Header here */}
            <Header 
              pageTitle={contentPage} 
              navFunc={setContentPage}
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm}
              showSearchList={showSearchList}
              setShowSearchList={setShowSearchList}
            />
          </div>
        </div>
        <div className="flex h-full gap-1">
          <div className="w-56 h-full bg-white sidebar md:flex sm:hidden large-screens-only">
            <Navigation viewPage={contentPage} navFunc={setContentPage} />
          </div>
          <div className="w-full h-full main-content">
            {/*Main content here */}
            <Outlet />
          </div>
        </div>
      <SearchOverlay
        showSearchList={showSearchList}
        setShowSearchList={setShowSearchList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        navFunc={setContentPage}
      />
      </div>
    </>
  );
}

export default Layout