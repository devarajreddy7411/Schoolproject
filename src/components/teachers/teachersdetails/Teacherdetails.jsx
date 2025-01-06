import React, { useState } from 'react'
import './teacherdetails.css'
import Profile from '../../profile/Profile'
import cover from '../../../assets/Masking.png'
import profilepicture from '../../../assets/placeholder.png'
import { BsSearch,BsThreeDots } from 'react-icons/bs'
import { BiEnvelope,BiLeftArrow,BiLocationPlus } from 'react-icons/bi'
import { PiPhone } from 'react-icons/pi'
import { CalendarIcon,ClockIcon } from '@mui/x-date-pickers'
import Teachers from '../teacherspage/Teachers'
import Addteachers from '../addteachers/Addteachers';
import eventsdata from '../../../events.js'

const Teacherdetails = (props) => {

    let [eventdata, setEventdata] = useState(eventsdata);
    let [count, setCount] = useState(3);
    let [viewbtn, setViewbtn] = useState('Veiw More')



    let handlingviewmore = ()=>{
        if(count < 8){
            setCount(count + 1)
            if(count == 7){
                setViewbtn('View Less')
            }
        }
        else {
            if(viewbtn == 'View Less'){
                setCount(3)
                setViewbtn('View More')
            }
        }
    }


    // if (!props.teachersdata) {
    //     return <Addteachers/>
    // }
    // console.log(props)
        let [getback,setGetback] = useState(false);
    
        let teachersdata = props.teachersdata
        
        // console.log(teacher)
        // console.log("de")
        // console.log(teachersdata)
    
    return (
        <div>
            {getback ? (
            <Teachers/>
          ) : (<div className='teacherdetails'>
            <div className="Teacherhead">
                <h2><button className='getbackbtn' onClick={()=>{setGetback(true)}}>  <BiLeftArrow/> </button>Teacher Details</h2>

                <div className="financeheadright">
                    <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
                    <Profile />
                </div>

            </div>

            <div className='teacherdetalsbody'>
                <div className="cardstyle1">
                    <img className='coverimg' src={cover} alt="" />
                    <img className='profileimg' src={profilepicture} alt="" />
                    <button className='threedotsbtn'> <BsThreeDots /> </button>


                    <div className='cardcontent'>

                        <h3 className='mainname'>{teachersdata.name} <span>{teachersdata.subject}</span> </h3>

                        <div className='adressdiv'>
                            <p><BiLocationPlus className='icon' /> {teachersdata.location} </p>
                            <p><PiPhone className='icon' /> {teachersdata.phone}</p>
                            <p><BiEnvelope className='icon' /> {teachersdata.email}</p>
                        </div>

                        <div>
                            <h4>About:</h4>
                            <p>{teachersdata.about} </p>

                        </div>

                        <div>
                            <h4>Education:</h4>
                            <ul className='eductionlist'>
                                <li>Master of {teachersdata.education[0].degree}, {teachersdata.education[0].university}
                                    <ul><li>{teachersdata.education[0].years}</li></ul>
                                </li>
                                <li>Master of {teachersdata.education[0].degree}, {teachersdata.education[0].university}
                                    <ul><li>{teachersdata.education[0].years}</li></ul>
                                </li>
                               
                            </ul>

                        </div>
                        <div>
                            <h4>Expertise:</h4>
                            <p>{teachersdata.expertise} </p>
                        </div>
                    </div>

                </div>


                <div className="teacherssideevents">

                {
                        eventdata.map((item,index) => {
                            return <div className='eventshedule'>
                                <div className='scheduledetails'>
                                    <h4>Schedule Details</h4>
                                    <p>{item.date}</p>
                                </div>
                               
                                {
                                    item.events.map((item, index)=>{
                                        if(index <count){
                                        return <div style={{borderLeft: `10px solid ${item.borderColor}`}} className="sidecards">
                                        <h4>{item.title} </h4>
                                        <p>{item.category} </p>
                                        <p className='colorone'> <CalendarIcon className='colororange' />{item.date} </p>
                                        <p className='colorone'> <ClockIcon className='coloryellow' /> {item.time} </p>
                                    </div>
                                    }
                                    })
                                }
                                
                            </div>
                        })
                    }


                    


                   <button className='viewmore'onClick={handlingviewmore}>{viewbtn}</button>

                </div>


            </div>




        </div>)}
        </div>
        
    )
}

export default Teacherdetails