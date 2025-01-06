import React from 'react'
import './Nav.css'
import logo from './../../assets/logo.png'
// import dashbordimg from './../../assets/Home.png'
import { LuHome } from "react-icons/lu";
// import studentsimg from './../../assets/Vector.png'
// import teachersimg from './../../assets/Teacher.png'
// import eventsimg from './../../assets/Calendar.png'
// import financeimg from './../../assets/Finance.png'
// import foodimg from './../../assets/food.png'
// import userimg from './../../assets/User.png'
// import chatimg from './../../assets/Chat.png'
// import lactivityimg from './../../assets/Activity.png'
import { PiStudent } from 'react-icons/pi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { MdEvent } from 'react-icons/md';
import { GiKnifeFork, GiReceiveMoney } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { FiActivity } from 'react-icons/fi';

const Navbar = () => {
  return (
  
    <nav className='sidenav'>
      <div className='navlogo'>
        <img src={logo} alt="logo" />
        <h2 className='headings'>Akademi</h2>
      </div>

      <ul>
        <li><LuHome className='icon'/> Dashboard</li>
        <li><PiStudent className='icon'/> Students</li>
        <li><LiaChalkboardTeacherSolid className='icon'/> Teachers</li>
        <li><MdEvent className='icon'/> Events</li>
        <li><GiReceiveMoney className='icon'/> Finance</li>
        <li><GiKnifeFork className='icon'/> Food</li>
        <li><FaRegUser className='icon'/> User</li>
        <li><HiOutlineChatBubbleLeftRight className='icon'/> Chat</li>
        <li><FiActivity className='icon'/> Lastest Activity</li>
      </ul>
    </nav>
   
  )
}

export default Navbar