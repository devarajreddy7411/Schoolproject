import React, { createContext, useState } from 'react'
import { Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom'
import './home.css'

import Dashboard from '../dashbordfile/dashbord/Dashboard'
import Student from '../students/Student/Student'
import Teachers from '../teachers/teacherspage/Teachers'
import Eventspage from '../events/Eventspage'
import Finance from '../finance/financemain/Finance'
import Foodpage from '../food/foodpage/Foodpage'
import Chat from '../chat/Chat'
import Users from '../users/Users'
import Profilemob from '../profilemob/Profilemob'

import { LuHome } from 'react-icons/lu'
import { PiStudent } from 'react-icons/pi'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { MdEvent } from 'react-icons/md'
import { GiKnifeFork, GiReceiveMoney } from 'react-icons/gi'
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

import logo from './../../assets/logo.png'

export const Usercontext = createContext()

const Home = () => {
    const location = useLocation()
    const userdata = {
        name: 'Admin',
        userid: 'admin@gmail.com',
        role: 'Admin'
    }
    const [mobnav, setMobnav] = useState(false)

    // Helper function to check if current path matches
    const isActivePath = (path) => {
        // For home/dashboard, we need to check both
        if (path === 'dashboard') {
            return location.pathname.endsWith('/dashboard') || location.pathname.endsWith('/home') || location.pathname.endsWith('/home/')
        }
        return location.pathname.includes(`/${path}`)
    }

    return (
        <Usercontext.Provider value={userdata}>
            <div className="home">

                {/* ===== Mobile Header ===== */}
                <div className="mobnav1">
                    <div className="navlogo">
                        <img src={logo} onClick={() => setMobnav(!mobnav)} alt="logo" />
                        <Profilemob />
                    </div>
                </div>

                {/* ===== Mobile Menu ===== */}
                {mobnav && (
                    <div className="mobnav">
                        <ul className="mobnavlist" onClick={() => setMobnav(false)}>
                            <li className={isActivePath('dashboard') ? 'navselectedstyle' : ''}>
                                <NavLink to="dashboard"><LuHome /> Dashboard</NavLink>
                            </li>
                            <li className={isActivePath('students') ? 'navselectedstyle' : ''}>
                                <NavLink to="students"><PiStudent /> Students</NavLink>
                            </li>
                            <li className={isActivePath('teachers') ? 'navselectedstyle' : ''}>
                                <NavLink to="teachers"><LiaChalkboardTeacherSolid /> Teachers</NavLink>
                            </li>
                            <li className={isActivePath('events') ? 'navselectedstyle' : ''}>
                                <NavLink to="events"><MdEvent /> Events</NavLink>
                            </li>
                            <li className={isActivePath('finance') ? 'navselectedstyle' : ''}>
                                <NavLink to="finance"><GiReceiveMoney /> Finance</NavLink>
                            </li>
                            <li className={isActivePath('food') ? 'navselectedstyle' : ''}>
                                <NavLink to="food"><GiKnifeFork /> Food</NavLink>
                            </li>
                            <li className={isActivePath('users') ? 'navselectedstyle' : ''}>
                                <NavLink to="users"><FaRegUser /> User</NavLink>
                            </li>
                            <li className={isActivePath('chat') ? 'navselectedstyle' : ''}>
                                <NavLink to="chat"><HiOutlineChatBubbleLeftRight /> Chat</NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                {/* ===== Sidebar ===== */}
                <nav className="sidenav">
                    <div className="navlogo">
                        <img src={logo} alt="logo" />
                        <h2 className="headings">Akademi</h2>
                    </div>

                    <ul>
                        <li className={isActivePath('dashboard') ? 'navselectedstyle' : ''}>
                            <NavLink to="dashboard"><LuHome /> Dashboard</NavLink>
                        </li>
                        <li className={isActivePath('students') ? 'navselectedstyle' : ''}>
                            <NavLink to="students"><PiStudent /> Students</NavLink>
                        </li>
                        <li className={isActivePath('teachers') ? 'navselectedstyle' : ''}>
                            <NavLink to="teachers"><LiaChalkboardTeacherSolid /> Teachers</NavLink>
                        </li>
                        <li className={isActivePath('events') ? 'navselectedstyle' : ''}>
                            <NavLink to="events"><MdEvent /> Events</NavLink>
                        </li>
                        <li className={isActivePath('finance') ? 'navselectedstyle' : ''}>
                            <NavLink to="finance"><GiReceiveMoney /> Finance</NavLink>
                        </li>
                        <li className={isActivePath('food') ? 'navselectedstyle' : ''}>
                            <NavLink to="food"><GiKnifeFork /> Food</NavLink>
                        </li>
                        <li className={isActivePath('users') ? 'navselectedstyle' : ''}>
                            <NavLink to="users"><FaRegUser /> User</NavLink>
                        </li>
                        <li className={isActivePath('chat') ? 'navselectedstyle' : ''}>
                            <NavLink to="chat"><HiOutlineChatBubbleLeftRight /> Chat</NavLink>
                        </li>
                    </ul>

                    <div>
                        <p className="sidenavfootcontent">Akademi - School Admission Dashboard</p>
                        <p className="sidenavfootcontent2">Made with <span>♥</span> by Peterdraw</p>
                    </div>
                </nav>

                {/* ===== Page Content (ROUTING) ===== */}
                <div className="homecontent">
                    <Routes>
                        <Route index element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="students" element={<Student />} />
                        <Route path="teachers" element={<Teachers />} />
                        <Route path="events" element={<Eventspage />} />
                        <Route path="finance" element={<Finance />} />
                        <Route path="food" element={<Foodpage />} />
                        <Route path="users" element={<Users />} />
                        <Route path="chat" element={<Chat />} />
                    </Routes>
                </div>

            </div>
        </Usercontext.Provider>
    )
}

export default Home