import React, { useState } from 'react'
import Profile from '../profile/Profile'
import { BsSearch,BsThreeDots } from 'react-icons/bs'
import { BiEnvelope,BiLocationPlus,BiUser } from 'react-icons/bi'
import { PiPhone } from 'react-icons/pi'
import { CalendarIcon,ClockIcon } from '@mui/x-date-pickers'
import { IoMdTrendingUp } from 'react-icons/io'
import { Calendar,momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './events.css'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MdMargin } from 'react-icons/md';
import eventsdata from '../../events.js'


const Eventspage = () => {

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


    // const localizer = momentLocalizer(moment);
    // const myEventsList = [
    //     {
    //       title: 'Team Meeting',
    //       start: new Date(2024, 8, 30, 9, 0), // September 30, 2024, 9:00 AM
    //       end: new Date(2024, 8, 30, 10, 0),  // September 30, 2024, 10:00 AM
    //     },
    //     {
    //       title: 'Lunch Break',
    //       start: new Date(2024, 8, 30, 12, 0), // September 30, 2024, 12:00 PM
    //       end: new Date(2024, 8, 30, 13, 0),   // September 30, 2024, 1:00 PM
    //     } 
    //   ];
    return (
        <div className='eventspage pattern1'>
            <div className="topnavpattern1">
                <h2>Events</h2>

                <div className="topnavpattern1_a">
                    <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
                    <Profile />
                </div>
            </div>

            <div className='bodytype1'>
                <div className='contentstyle1'>









                    <div className='eventscalenderstyle'>
                        <h2>Calendar</h2>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>

                        {/* <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    /> */}
                    </div>



                </div>




                <aside className="">

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

                </aside>


            </div>

        </div>
    )
}

export default Eventspage