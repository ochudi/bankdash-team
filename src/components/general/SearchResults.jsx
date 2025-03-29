import React from 'react'
import { NavLink } from 'react-router-dom'

function SearchResults({ searchTerm, navFunc, searchToggle, setSearchTerm }) {
  
  const searchMap = [
    {
      tab: 'Overview',
      destination: '/',
      keywords: [
        'Quick Transfer', 'Balance History', 'Expense Statistics', 'Weekly Activity', 'My Cards', 'Recent Transactions'
      ]
    },
    {
      tab: 'Transactions',
      destination: '/transactions',
      keywords: [
        'My Cards', 'My Expense', 'Add Card', 'Recent Transactions', 
        'All Transactions', 'Income', 'Expense', 'Description', 'Transaction ID',
        'Type','Card','Date','Amount','Receipt'
      ]
    },
    {
      tab: 'Accounts',
      destination: '/accounts',
      keywords: [
        'My Balance', 'Income', 'Expense', 'Total Saving', 'Invoices Sent', 'My Card', 'Debit & Credit Overview'
      ]
    },
    {
      tab: 'Investments',
      destination: '/investments',
      keywords: [
        'Total Investment Amount', 'Number of Investments', 'Rate of Return', 'Yearly Total Investment', 
        'Monthly Revenue', 'My Investment', 'Trending Stock'
      ]
    },
    {
      tab: 'Credit Cards',
      destination: '/credit_cards',
      keywords: [
        'My Cards', 'Balance', 'Card Holder', 'Valid Thru', 'Card Expenses Statistics', 'Card List',
        'Card Type', 'Bank', 'Card Number', 'Add New Card', 'Expiration Date', 'Card Setting',
        'Block Card', 'Add to Google Pay', 'Add to Apple Pay', 'Add to Apple Store', 'Name on Card'
      ]
    },
    {
      tab: 'Loans',
      destination: '/loans',
      keywords: [
        'Personal Loans', 'Corporate Loans', 'Business Loans', 'Custom Loans','Repay','Installment',
        'Duration','Left to repay', 'Loan Money', 'Interest rate'
      ]
    },
    {
      tab: 'Services',
      destination: '/services',
      keywords: [
        'Life Insurance', 'Shopping', 'Safety', 'Bank Services List'
      ]
    },
    {
      tab: 'Setting',
      destination: '/setting',
      keywords: [
        'Edit Profile', 'Preferences', 'Security', 'Your Name', 'User Name', 'Email', 'Password',
        'Date of Birth', 'Present Address', 'Permanent Address', 'City', 'Postal Code', 'Country',
        'Currency', 'Time Zone', 'Notification', 'Two-factor Authentication', 'Change Password'
      ]
    },
    
  ]

  function navigationOperation(str){
    navFunc(str)
    setSearchTerm('')
    searchToggle(false)
  }

  function getSearchResults( searchTerm ){
    const searchResult = searchMap.filter(
      tab => tab.keywords.filter(word => word.toLowerCase().includes(searchTerm.toLowerCase())).length > 0
    ).map(
      tab => {
        return {...tab, keywords: tab.keywords.filter(word => word.toLowerCase().includes(searchTerm.toLowerCase()))}
      }
    )

    return (
      
      searchResult.map(
        item => {
          return (
            <div className="w-full flex flex-col gap-4 ">
              <div className="navlink text-lg italic font-semibold px-2">
                <span className='cursor-pointer text-blue-600' onClick={() => {navigationOperation(item.tab)}}><NavLink to={item.destination}>{item.tab}</NavLink></span>
                {searchTerm && <div> <small>| </small> 
                  {
                    item.keywords.map(
                      word => {
                        return(
                          <small className='text-gray-600'>{word} | </small>
                        )
                      }
                    )
                  }
                </div>}
              </div>

            </div>
          )
        }
      )
    )
  }

  return (
    <div>{getSearchResults(searchTerm)}</div>
  )
}

export default SearchResults