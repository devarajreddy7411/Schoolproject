import React,{ useState } from 'react'
import './profilemob.css'

import dpimg from '../../assets/dpimg.png'
import { IoNotificationsOutline,IoSettingsOutline } from 'react-icons/io5'
import { useLocation,useNavigate } from 'react-router-dom'

const Profilemob = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let userdata = location.state
    let [openprofile,setOpenprofile] = useState(false)
    return (<div className='profilemob'>
        
        <div className='dpdiv'>
            <img src={dpimg} alt="" className='mobprofileimg' onClick={() => { setOpenprofile((prev) => !prev) }} />
            {
                openprofile && <ul className='mobdropdown mobdrop'>


                    <li className='profilename'>{userdata.name} <span className='colorpartanone'>{userdata.type}</span></li>
                  
                    <li>Notification</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li onClick={() => { navigate('/') } } style={{color:'rgba(160, 152, 174, 1)'}}>Logout</li>
                </ul>

            }
        </div>
    </div>

       
    )
}

export default Profilemob