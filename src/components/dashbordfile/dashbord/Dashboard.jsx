import React from 'react'
import './dashboard.css'
import linegraph from './../../../assets/chart.png'
import { BsSearch } from 'react-icons/bs'
import { PiStudent } from 'react-icons/pi'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { MdEvent } from 'react-icons/md'
import { GiKnifeFork } from 'react-icons/gi'
import Profile from '../../profile/Profile'
import Schoolpchart from '../Schoolpchart/Schoolpchart'
import Unpaidstudent from '../unpaidstudents/Unpaidstudent'
import Schoolfinance from '../Schoolfinance/Schoolfinance'
import Schoolcalendar from '../Schoolcalendar/Schoolcalendar'
import Recentstudents from '../recentstudents/Recentstudents'
import Messages from '../messages/Messages'
import { useLocation } from 'react-router-dom'
import Dashfood from '../dashfood/Dashfood'
import studentdatafile from '../../../studentdata.js'
import teachersdata from "../../../data"
import fooddata from '../../../fooddata.js'
import eventdata from '../../../events.js'

          

const Dashboard = () => {

  

  return (
    <section className='dashboardsec'>
      <div className='dashboardcontent'>
        <div className='dheader'>
          <h2 className='headings'>Dashboard</h2>
          <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
        </div>
        <div className="dashstatus">

          <div className='status'>
            <span className='spanicon spanicon1 '><PiStudent /></span>
            <h5>Students <span className='headings'>{studentdatafile.length}</span></h5>
          </div>
          <div className='status'>
            <span className='spanicon spanicon2'>  <LiaChalkboardTeacherSolid /></span>
            <h5>Teachers <span className='headings'> {teachersdata.length} </span></h5>
          </div>
          <div className='status'>
            <span className='spanicon spanicon3'><MdEvent /></span>
            <h5>Events <span className='headings'>{eventdata[0].events.length} </span></h5>
          </div>
          <div className='status'>
            <span className='spanicon spanicon4'><GiKnifeFork /></span>
            <h5>Food <span className='headings'>{fooddata.length}</span></h5>
          </div>
        </div>

        <Schoolpchart />
        <div className='schoolfc'>
        
        <Schoolcalendar/>
        <Schoolfinance/>
        </div>
        <Unpaidstudent/>
       
      </div>
 

      <div className='dashbordprofile'>
        <Profile />
        <Recentstudents/>
        <Messages/>
        <Dashfood/>
      </div>

    </section> 
  )
}

export default Dashboard