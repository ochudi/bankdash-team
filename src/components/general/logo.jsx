import logoIcon from '../../assets/images/icons/credit-card-img.png'

function Logo() {
  const logoStyle = {
    fontSize: '25px',
    color:  '#343C6A',
    fontWeight: '900'
  }

  return (
    <div className='w-full h-full p-4 flex justify-center items-center gap-2'>
      <img src={logoIcon} alt="BankDash Logo" className='w-9 h-9' />
      <div className="logo-text font-black" style={logoStyle}>BankDash.</div>
    </div>
  )
}

export default Logo