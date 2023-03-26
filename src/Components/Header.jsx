import React from 'react'
import AccountCircle from './AccountCircle'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img width='50px' src="https://cdn-icons-png.flaticon.com/512/7803/7803267.png" alt="Logo" />
        </div>
        <div className="user-btn">
            <AccountCircle/>
        </div>
    </div>
  )
}

export default Header