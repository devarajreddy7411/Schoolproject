import React from 'react'
import './schoolcalendar.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MdMargin } from 'react-icons/md';


const Schoolcalendar = () => {
  return (
    <div className='schoolcalendar'>
      <h1>School Calendar</h1>
      
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider> 
        
    </div>
  )
}

export default Schoolcalendar