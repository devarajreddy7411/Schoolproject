import React,{ useState } from 'react'
import './studentdetails.css'
import Profile from '../../profile/Profile'
import studentcover from '../../../assets/studentcoverpic.png'
import profilepicture from '../../../assets/placeholder.png'
import { BsSearch,BsThreeDots } from 'react-icons/bs'
import { BiEnvelope,BiLeftArrow,BiLocationPlus,BiUser } from 'react-icons/bi'
import { PiPhone } from 'react-icons/pi'
import { CalendarIcon,ClockIcon } from '@mui/x-date-pickers'
import { IoMdTrendingUp } from 'react-icons/io'
import Student from '../Student/Student'
import eventsdata from '../../../events.js'


const Studentdetails = (props) => {

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

    let paymentdata = [
        { id: '#123456778',paydate: '2 March 2021, 13:45 PM',paidamount: '$50000',paystatus: 'Complete' },
        { id: '#123456779',paydate: '21 March 2021, 13:45 PM',paidamount: '$50000',paystatus: 'Pending' },
        { id: '#123456780',paydate: '2 April 2021, 15:45 PM',paidamount: '$50000',paystatus: 'Complete' },
        { id: '#123456781',paydate: '2 June 2021, 17:45 PM',paidamount: '$50000',paystatus: 'Canceled' },
        { id: '#123456782',paydate: '2 March 2022, 13:45 PM',paidamount: '$50000',paystatus: 'Complete' },
        { id: '#123456783',paydate: '2 April 2022, 13:05 PM',paidamount: '$50000',paystatus: 'Pending' },
        { id: '#123456784',paydate: '2 October 2022, 11:45 AM',paidamount: '$50000',paystatus: 'Complete' },
        { id: '#123456785',paydate: '2 January 2024, 16:45 PM',paidamount: '$50000',paystatus: 'Complete' },
        { id: '#123456786',paydate: '2 March 2024, 14:45 PM',paidamount: '$50000',paystatus: 'Pending' },
    ]

    let selctedstudent = props.selctedstudent

    let [studentdetailsback,setStudentdetailsback] = useState(false);
    console.log(selctedstudent)


    return (
        <div style={{ width: "100%", height:'100%' }}>
            {
                studentdetailsback ? <Student /> : <div className='studentdetails pattern1'>
                    <div className="topnavpattern1">
                        <h2><button className='getbackbtn' onClick={() => { setStudentdetailsback(true) }}>  <BiLeftArrow /> </button>Student Details</h2>

                        <div className="topnavpattern1_a">
                            <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
                            <Profile />
                        </div>
                    </div>

                    <div className='bodytype1'>
                        <div className='contentstyle1'>
                            <div className="cardstyle1">
                                <img className='coverimg' src={studentcover} alt="" />
                                <img className='profileimg' src={selctedstudent.profileimg || profilepicture} alt="profile pic" />
                                <button className='threedotsbtn'> <BsThreeDots /> </button>


                                <div className='cardcontent'>

                                    <h3 className='mainname'>{selctedstudent.stdname} <span>Student</span> </h3>

                                    <div className='adressdiv'>
                                        <div className='boxstyle1'>
                                            <h5 className='colorone'>Parents:</h5>
                                            <p><BiUser className='icon' /> {selctedstudent.parentname} </p>
                                        </div>
                                        <div className='boxstyle1'>
                                            <h5 className='colorone'>Address:</h5>
                                            <p><BiLocationPlus className='icon' /> {selctedstudent.city}, {selctedstudent.country} </p>
                                        </div>
                                        <div className='boxstyle1'>
                                            <h5 className='colorone'>Phone:</h5>
                                            <p><PiPhone className='icon' /> {selctedstudent.parentphone}</p>
                                        </div>

                                        <div className='boxstyle1'>
                                            <h5 className='colorone'>Email:</h5>
                                            <p><BiEnvelope className='icon' /> {selctedstudent.parentemail} </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='unpaidstudent'>


                                <div className="unpaidcontent">
                                    <h3>Payment History</h3>

                                </div>

                                <div className="paymentlistdiv">
                                    {
                                        paymentdata.map((item,index) => {
                                            if(index<5){
                                            return <div className="paymentlist">
                                                <p><IoMdTrendingUp className='circlicon' /> {item.id}</p>
                                                <p className='colorone'>{item.paydate}</p>
                                                <p>{item.paidamount} </p>
                                                <p style={{ color: (item.paystatus == 'Complete') ? 'green' : (item.paystatus == 'Pending') ? 'rgba(160, 152, 174, 1)' : (item.paystatus == 'Canceled') ? 'red' : '' }}>{item.paystatus}</p>
                                            </div>
                                            }
                                        })
                                    }

                                </div>

                                {/* <div className="pegination">
                            <p>Showing 1-5 from  data</p>

                            <div className='peginationbtndiv'>
                             
                                <button onClick={handleprevios} >	&lt;</button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button onClick={handlenext}>	&ge;</button>
                            </div>
                        </div> */}

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
            }
        </div>

    )
}

export default Studentdetails