// import  from 'react'
import { React,useState } from 'react'
import './users.css'
import Profile from '../profile/Profile'
import { BsEnvelope,BsSearch,BsThreeDots } from 'react-icons/bs'
import { BiEnvelope,BiLocationPlus,BiUser } from 'react-icons/bi'
import { PiPhone } from 'react-icons/pi'
import admincover from '../../assets/admincover.png'
import profilepicture from '../../assets/placeholder.png'
import stddata from '../../studentdata.js'
import placeholder from '../../assets/placeholder.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Users = () => {

    let location = useLocation()
  let userdata = location.state 

    let [studentdatafile,setStudentdatafile] = useState(stddata);
    let [count,setCount] = useState(4);
    let [viewbtn,setViewbtn] = useState('Veiw More')
    let [searchvalue,setSearchvalue] = useState('')

    // console.log(studentdatafile)
    let date = new Date()
    let time = date.getHours()
    let mins = date.getMinutes()
    let msgdata = [
        { name: 'samnathe',msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',image: '' },
        { name: 'joshope',msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',image: '' },
        { name: 'sopiyan',msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',image: '' },
        { name: 'riyan',msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',image: '' },
        { name: 'ravikumar',msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',image: '' },
        { name: 'lucifer',msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',image: '' },
        { name: 'lopeze',msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',image: '' }
    ]
    let [msgdatas, setMsgdatas] = useState(msgdata)
    let [msgsearch, setMsgseacrh] = useState('')
    let [veiwbtn1,setViewbn1] = useState('Veiw More')
    let [count1,setCount1] = useState(3)
    let handlingview = () => {
        if (count1 < msgdatas.length) {
            setCount1(count1 + 1)
            if (count1 == msgdata.length - 1) {
                setViewbn1('View Less')
            }
        } else {
            if (veiwbtn1 == 'View Less') {
                setCount1(3)
                setViewbn1('View More')
            }

        }
    }
    let handlingviewmore = () => {
        if (count < 7) {
            setCount(count + 1)
            if (count == 6) {
                setViewbtn('View Less')
            }
        }
        else {
            if (viewbtn == 'View Less') {
                setCount(4)
                setViewbtn('View More')
            }
        }
    }





let handlingsearch = (event) => {


    let filterdata = event.target.value.toLowerCase()


    if ((filterdata) === "") {

        setStudentdatafile(stddata)

        setSearchvalue('')
    }
    else {
        // let filterdata = event.target.value.toLowerCase()
        setSearchvalue(filterdata)
        // setSearchvalue(event.target.value.toLowerCase())
        let filtered = stddata.filter((item) =>
            item.stdname && item.stdname.toLowerCase().includes(filterdata)

        );
        setStudentdatafile(filtered)

    }
}


let handlingsearchmsg = (event) => {


    let filterdata = event.target.value.toLowerCase()
// console.log(filterdata)

    if ((filterdata) === "") {

        setMsgdatas(msgdata)

        setMsgseacrh('')
    }
    else {
        
        setMsgseacrh(filterdata)
        
        let filtered = msgdata.filter((item) =>
            item.name && item.name.toLowerCase().includes(filterdata)

        );
        setMsgdatas(filtered)

    }
}







return (
    <section className='dashboardsec'>
        <div className='dashboardcontent'>
            <div className='dheader'>
                <h2 className='headings'>User Dashboard</h2>
                <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
            </div>


            <div className="cardstyle1">
                <img className='coverimg' src={admincover} alt="" />
                <img className='profileimg' src={profilepicture} alt="profile pic" />
                <button className='threedotsbtn'> <BsThreeDots /> </button>


                <div className='cardcontent'>

                    <h3 className='mainname'> {userdata.name} <span>{userdata.type} </span> </h3>

                    <div className='adressdiv'>

                        <div className='boxstyle1'>
                            <h5 className='colorone'>Address:</h5>
                            <p><BiLocationPlus className='icon' /> city ,country </p>
                        </div>
                        <div className='boxstyle1'>
                            <h5 className='colorone'>Phone:</h5>
                            <p><PiPhone className='icon' /> 78945623</p>
                        </div>

                        <div className='boxstyle1'>
                            <h5 className='colorone'>Email:</h5>
                            <p><BiEnvelope className='icon' /> {userdata.userid} </p>
                        </div>
                    </div>


                </div>
            </div>


            <div className='schoolfc'>

                <div className=' contacts'>

                    <div className="rshead">
                        <h3>Contacts <span>You have {studentdatafile.length} Contacts</span></h3>

                        <button>+</button>
                    </div>
                    <div className='searchbox contactsearch'><BsSearch /><input type="search" name="" value={searchvalue} onChange={handlingsearch} placeholder='Search here' id="" /></div>


                    {
                        studentdatafile.slice(0,count).map((item,index) => {
                            if (index < count) {
                                return <div className='rsbox contactmsgperson'>

                                    <div className='rsboxnameimg'>
                                        <img src={item.profileimg} alt="" />
                                        <p> {item.stdname} <span>Class {item.grade} </span></p>
                                    </div>

                                    <button><BsEnvelope /> </button>


                                </div>
                            }
                        })
                    }

                    <button className='viewmore' onClick={handlingviewmore}> {viewbtn} </button>


                </div>

                <div className='messages contacts'>


                    <h3 className='msghead'>Messages </h3>

                    <div className='searchbox contactsearch'><BsSearch /><input type="search" name="" value={msgsearch} onChange={handlingsearchmsg} placeholder='Search here' id="" /></div>
                    <div className='msgbody'>

                        {
                            msgdatas.slice(0,count1).map((item,index) => {

                                if (index < count1) {
                                    return <div className='msgbox msgboxwidth'>
                                        <img src={placeholder} alt="" />
                                        <div className='msgboxcontent'>
                                            <p className='msgname'>{item.name} <span> {time}:{mins}</span></p>
                                            <p className='msgchat'>{item.msgchat} </p>
                                        </div>
                                    </div>
                                }
                            })
                        }

                        <button className='viewmore' onClick={handlingview}> {veiwbtn1} </button>


                    </div>

                </div>
            </div>

        </div>


        <div className='dashbordprofile  contactdashbordprofile '>
            <Profile />

            <div className="plancard">
                <button className='tdots'><BsThreeDots /> </button>
                <p>Your Plan</p>
                <h3>Free</h3>
                <ul><li>50 GB Storage</li><li>Limited Features</li></ul>
                <p>Upgrade to Premium Plan to get more Features & Storage memory </p>
                <button className='upgradebtn'>Upgrade Plan</button>

            </div>
        </div>

    </section>

)
    }

export default Users