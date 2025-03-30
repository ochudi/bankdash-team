import { NavLink } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi"; //Home
import { FaFileInvoiceDollar } from "react-icons/fa6";; //Transactions
import { IoPerson } from "react-icons/io5"; //Account
import { LuChartNoAxesCombined } from "react-icons/lu"; //Investments
import { BsCreditCardFill } from "react-icons/bs"; //Credit Cards
import { FaHandHoldingUsd } from "react-icons/fa"; //Loans
import { BsTools } from "react-icons/bs"; //Services
import { VscLightbulbAutofix } from "react-icons/vsc"; //My Privileges
import { FaGear } from "react-icons/fa6"; //Setting


function Navigation({ viewPage, navFunc }) {
  const menu = [
    {
      tabTitle: 'Dashboard',
      destination: '/',
      icon: <BiSolidHome />,
      headerText: 'Overview'
    },
    
    {
      tabTitle: 'Transactions',
      destination: '/transactions',
      icon: <FaFileInvoiceDollar />,
      headerText: 'Transactions'
    },

    {
      tabTitle: 'Accounts',
      destination: '/accounts',
      icon: <IoPerson />,
      headerText: 'Accounts'
    },
    
    {
      tabTitle: 'Investments',
      destination: '/investments',
      icon: <LuChartNoAxesCombined />,
      headerText: 'Investments'
    },

    {
      tabTitle: 'Credit Cards',
      destination: '/credit_cards',
      icon: <BsCreditCardFill />,
      headerText: 'Credit Cards'
    },
    
    {
      tabTitle: 'Loans',
      destination: '/loans',
      icon: <FaHandHoldingUsd />,
      headerText: 'Loans'
    },

    {
      tabTitle: 'Services',
      destination: '/services',
      icon: <BsTools />,
      headerText: 'Services'
    },

    // Left out of the Nav menu because no content was provided for "My Privileges" page in the Figma design
    // {
    //   tabTitle: 'My Privileges',
    //   destination: '/privileges',
    //   icon: <VscLightbulbAutofix />,
    //   headerText: 'My Privileges'
    // },

    {
      tabTitle: 'Setting',
      destination: '/setting',
      icon: <FaGear />,
      headerText: 'Setting'
    },

  ]

  return (
    <nav className="w-full flex flex-col mt-4 gap-2">
      {
        menu.map(
          item => {
            return (
              <NavLink to={item.destination}>
                <div 
                  className={`flex justify-start items-center gap-3 h-12 p-3 nav-item ${viewPage === item.headerText ? 'active-tab' : 'nav-text-gray'}`}
                  onClick={() => {navFunc(item.headerText)}}
                >
                  <span className="text-2xl">{item.icon}</span>{item.tabTitle}
                </div>
              </NavLink>
            )
          }
        )
      }
    </nav>
  )
}

export default Navigation