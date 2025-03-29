import logoIcon from '../../assets/images/icons/credit-card-img.png'

function Logo() {
  const logoStyle = {
    fontSize: '23px',
    color:  '#343C6A',
    fontWeight: '900'
  }

  return (
    <div className='w-full h-full p-4 flex justify-center items-center gap-2'>
      <img src={logoIcon} alt="BankDash Logo" className='w-8 h-8' />
      <div className="logo-text font-black" style={logoStyle}>BankDash.</div>
    </div>
  )
}

export default Logo