import React from 'react'
import './finance.css'
import Balancechart from '../balancechart/Balancechart'
import Unpaidstudent from '../../dashbordfile/unpaidstudents/Unpaidstudent'
import Schoolexpences from '../schoolexpences/Schoolexpences'
import { BsSearch } from 'react-icons/bs'
import Profile from '../../profile/Profile'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { PiStudent } from 'react-icons/pi'
import { GiReceiveMoney } from 'react-icons/gi'
import Graph from '../../../assets/Graph.png'
import stddata from '../../../studentdata'
import teacherdata from '../../../data.js'

const Finance = () => {
  return (
    <div className='finance'>

      <div className="financehead">
        <h2>Finance</h2>

        <div className="financeheadright">
          <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
          <Profile />
        </div>

      </div>

      <div className='financestatus'>
        <div className="fianancstatsboxs ">
          <div className="imgdiv imgdivstudent"> <PiStudent /> </div>
          <div className="contentstatus">
            <p>Total Students</p>
            <div className="count">{stddata.length} </div>
            <div className="percentcontent"><span style={{color: "green", fontWeight: '600'}}>+10%</span>than last month</div>
          </div>
        </div>
        <div className="fianancstatsboxs">
          <div className="imgdiv imgdivtecher"><LiaChalkboardTeacherSolid /></div>
          <div className="contentstatus">
            <p>Total Teachers</p>
            <div className="count">{teacherdata.length} </div>
            <div className="percentcontent"><span style={{color: "red", fontWeight: '600'}}>-0.5%</span>than last month</div>
          </div>
        </div>
        <div className="fianancstatsboxs">
          <div className="imgdiv imgdivschbal"> <GiReceiveMoney />  </div>
          <div className="contentstatus">
            <p>School Balance</p>
            <div className="count">$123,456</div>
            <div className="percentcontent"><span style={{color: "green", fontWeight: '600'}}>+23%</span>than last month</div>
          </div>
          <img src={Graph} alt="" />
        </div>


      </div>
      <Balancechart />
      <div className='containarbox'>
        <Unpaidstudent   />
        <Schoolexpences />
      </div>

    </div>
  )
}

export default Finance