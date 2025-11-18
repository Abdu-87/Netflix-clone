import React from 'react'
import "./header.css"
import Netflix from "../../assets/images/Netflix.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='outer-container'>
    <div className="header-container">
        <div className="header-left">
            <ul className="">
                <li className=""> <img src={Netflix} alt="Netflixlogo" width="100"/></li>
                <li className="">Home</li>
                <li className="">TvShow</li>
                <li className="">Movies</li>
                <li className="">Latest</li>
                <li className="">MyList</li>
                <li className="">Phone by Language</li>
            </ul>
        </div>
       <div className="header-right">
        <ul className="">
            <li className=""><SearchIcon/></li>
            <li className=""> <NotificationsNoneIcon/> </li>
            <li className=""><AccountBoxIcon/></li>
            <li className=""><ArrowDropDownIcon/></li>
        </ul>
       </div>
    </div>
    </div>
  )
}

export default Header
