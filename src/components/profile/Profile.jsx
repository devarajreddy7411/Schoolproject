import { React,useContext,useState } from 'react'
import './profile.css'
import dpimg from '../../assets/dpimg.png'
import { IoNotificationsOutline,IoSettingsOutline } from 'react-icons/io5'
import { useLocation,useNavigate } from 'react-router-dom'


const Profile = () => {
  let navigate = useNavigate();

  let location = useLocation()
  let userdata = location.state
         
  let [openprofile,setOpenprofile] = useState(false);
  // console.log(location.state)

  return (
    <div className='profile'>
      <div className="profilelapto">
      <button className='profilebutton'><IoNotificationsOutline /> </button>
      <button className='profilebutton'><IoSettingsOutline /> </button>
      <div className='profpicdiv'>
        <p>{userdata.name} <span>{userdata.type}</span></p>
        <div className='dpdiv clicking'>
          <img src={dpimg} alt="" onClick={() => { setOpenprofile((prev) => !prev) }} />
          {
            openprofile && <ul className='profiledropdown'>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={() => { navigate('/') }}>Logout</li>
            </ul>
          }


        </div>
      </div>
      </div>
      

    </div>

  )
}

export default Profile