import React,{ createContext,useState } from 'react'
import './home.css'
import Navbar from '../navbar/Navbar'
import Dashboard from '../dashbordfile/dashbord/Dashboard'
import Student from '../students/Student/Student'
import Balancechart from '../finance/balancechart/Balancechart'
import Schoolexpences from '../finance/schoolexpences/Schoolexpences'
import Finance from '../finance/financemain/Finance'
import Teachers from '../teachers/teacherspage/Teachers'
import Teacherdetails from '../teachers/teachersdetails/Teacherdetails'
import Studentdetails from '../students/studentdetails/Studentdetails'
import Eventspage from '../events/Eventspage'
import Foodpage from '../food/foodpage/Foodpage'
import Fooddetail from '../food/fooddetails/Fooddetail'
import { LuHome } from 'react-icons/lu'
import { PiStudent } from 'react-icons/pi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { MdEvent } from 'react-icons/md';
import { GiKnifeFork,GiReceiveMoney } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { FiActivity } from 'react-icons/fi';
import logo from './../../assets/logo.png'
import { useLocation } from 'react-router-dom'
import Chat from '../chat/Chat'
import Users from '../users/Users'
import Profilemob from '../profilemob/Profilemob'



const Home = () => {

    let [render,setRender] = useState("dashboard")
    let [mobnav,setMobnav] = useState(false)
    let [mobnavlist,setMobnavlist] = useState(false)
    let handlerender = (p) => {
        setRender(p)
        // setUserobj(userdata)
    }
    let Usercontext = createContext();
    let location = useLocation();
    let userdata = location.state
    // console.log(userdata)
    // let [userobj,setUserobj] = useState(userdata);

    // console.log(userobj)
    let handlenav = () => {
        setMobnav(!mobnav)
    }


    return (
        <Usercontext.Provider value={userdata}>
            <div className='home'>
                {
                    mobnav ? <div className="mobnav">


                        {
                            mobnavlist ? '' : <div className='mobnav2'>
                                <div className='navlogo2'>
                                    <img src={logo} onClick={handlenav} alt="logo" />


                                </div>
                                <ul className='mobnavlist'>
                                    <li onClick={() => handlerender("dashboard")} className={(render == "dashboard") ? "navselectedstyle" : ""}><LuHome className='icon' /> Dashboard</li>
                                    <li onClick={() => handlerender('students')} className={(render == "students") ? "navselectedstyle" : ""}><PiStudent className='icon' /> Students</li>
                                    <li onClick={() => handlerender('teachers')} className={(render == "teachers") ? "navselectedstyle" : ""}><LiaChalkboardTeacherSolid className='icon' /> Teachers</li>
                                    <li onClick={() => handlerender('events')} className={(render == "events") ? "navselectedstyle" : ""}><MdEvent className='icon' /> Events</li>
                                    <li onClick={() => handlerender('finance')} className={(render == "finance") ? "navselectedstyle" : ""}><GiReceiveMoney className='icon' /> Finance</li>
                                    <li onClick={() => handlerender('food')} className={(render == "food") ? "navselectedstyle" : ""}><GiKnifeFork className='icon' /> Food</li>
                                    <li onClick={() => handlerender('user')} className={(render == "user") ? "navselectedstyle" : ""}><FaRegUser className='icon' /> User</li>
                                    <li onClick={() => handlerender('chat')} className={(render == "chat") ? "navselectedstyle" : ""}><HiOutlineChatBubbleLeftRight className='icon' /> Chat</li>
                                    {/* <li onClick={() => handlerender('lastactivity')} className={(render == "lastactivity") ? "navselectedstyle" : ""}><FiActivity className='icon' /> Lastest Activity</li> */}
                                </ul>
                            </div>

                        }

                    </div> : <div className="mobnav1">
                        <div className='navlogo'>
                            <img src={logo} onClick={handlenav} alt="logo" />
                            <Profilemob/>
                        </div>

                        {/* {
                            mobnavlist ? '' : <ul className='mobnavlist'>
                            <li onClick={() => handlerender("dashboard")} className={(render == "dashboard") ? "navselectedstyle" : ""}><LuHome className='icon' /> Dashboard</li>
                            <li onClick={() => handlerender('students')} className={(render == "students") ? "navselectedstyle" : ""}><PiStudent className='icon' /> Students</li>
                            <li onClick={() => handlerender('teachers')} className={(render == "teachers") ? "navselectedstyle" : ""}><LiaChalkboardTeacherSolid className='icon' /> Teachers</li>
                            <li onClick={() => handlerender('events')} className={(render == "events") ? "navselectedstyle" : ""}><MdEvent className='icon' /> Events</li>
                            <li onClick={() => handlerender('finance')} className={(render == "finance") ? "navselectedstyle" : ""}><GiReceiveMoney className='icon' /> Finance</li>
                            <li onClick={() => handlerender('food')} className={(render == "food") ? "navselectedstyle" : ""}><GiKnifeFork className='icon' /> Food</li>
                            <li onClick={() => handlerender('user')} className={(render == "user") ? "navselectedstyle" : ""}><FaRegUser className='icon' /> User</li>
                            <li onClick={() => handlerender('chat')} className={(render == "chat") ? "navselectedstyle" : ""}><HiOutlineChatBubbleLeftRight className='icon' /> Chat</li>
                            <li onClick={() => handlerender('lastactivity')} className={(render == "lastactivity") ? "navselectedstyle" : ""}><FiActivity className='icon' /> Lastest Activity</li>
                        </ul>
                        }
                         */}
                    </div>
                }
                <nav className='sidenav'>
                    <div className='navlogo'>
                        <img src={logo} alt="logo" />
                        <h2 className='headings'>Akademi</h2>
                    </div>

                    <ul>
                        <li onClick={() => handlerender("dashboard")} className={(render == "dashboard") ? "navselectedstyle" : ""}><LuHome className='icon' /> Dashboard</li>
                        <li onClick={() => handlerender('students')} className={(render == "students") ? "navselectedstyle" : ""}><PiStudent className='icon' /> Students</li>
                        <li onClick={() => handlerender('teachers')} className={(render == "teachers") ? "navselectedstyle" : ""}><LiaChalkboardTeacherSolid className='icon' /> Teachers</li>
                        <li onClick={() => handlerender('events')} className={(render == "events") ? "navselectedstyle" : ""}><MdEvent className='icon' /> Events</li>
                        <li onClick={() => handlerender('finance')} className={(render == "finance") ? "navselectedstyle" : ""}><GiReceiveMoney className='icon' /> Finance</li>
                        <li onClick={() => handlerender('food')} className={(render == "food") ? "navselectedstyle" : ""}><GiKnifeFork className='icon' /> Food</li>
                        <li onClick={() => handlerender('user')} className={(render == "user") ? "navselectedstyle" : ""}><FaRegUser className='icon' /> User</li>
                        <li onClick={() => handlerender('chat')} className={(render == "chat") ? "navselectedstyle" : ""}><HiOutlineChatBubbleLeftRight className='icon' /> Chat</li>
                        {/* <li onClick={() => handlerender('lastactivity')} className={(render == "lastactivity") ? "navselectedstyle" : ""}><FiActivity className='icon' /> Lastest Activity</li> */}
                    </ul>
                    <br />
                    <div>
                        <p className='sidenavfootcontent'>Akademi - School Admission Dashboard</p><br />
                        <p className='sidenavfootcontent2'>Made with <span>♥</span> by Peterdraw</p>
                    </div>
                    <br />
                </nav>



                <div className='homecontent'>
                    {
                        (render == "dashboard") ? <Dashboard /> : ''
                    }
                    {
                        (render == "students") ? <Student /> : ''
                    }
                    {
                        (render == "teachers") ? <Teachers /> : ''
                    }
                    {
                        (render == "events") ? <Eventspage /> : ''
                    }
                    {
                        (render == "finance") ? <Finance /> : ''
                    }
                    {
                        (render == "food") ? <Foodpage /> : ''
                    }
                    {
                        (render == "user") ? <Users /> : ''
                    }
                    {
                        (render == "chat") ? <Chat /> : ''
                    }

                </div>




            </div>
        </Usercontext.Provider>

    )
}

export default Home