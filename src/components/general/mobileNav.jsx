import Logo from './Logo'
import Navigation from './Navigation'

function MobileNav({ showNav, setShowNav, viewPage, navFunc }) {
  
  function hideNav(){
    setShowNav(false)
  }

  const displayStyle = {
    display: `${showNav ? 'flex' : 'none'}`
  }

  const bottomBorderStyle = {
    borderBottom: '5px double #718EBF'
  }

  return (
    <div style={displayStyle} className='bg-white w-screen h-screen header-mobile-nav-container' onClick={hideNav}>
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full h-30" style={bottomBorderStyle}>
          <Logo />
        </div>

        <Navigation viewPage={viewPage} navFunc={navFunc} />
      </div>
    </div>
  )
}

export default MobileNav