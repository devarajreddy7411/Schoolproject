import React,{ useEffect, useState } from 'react'
import './student.css'
import Profile from '../../profile/Profile'
import { BsThreeDots } from 'react-icons/bs'
import { BiEnvelope, BiSearch } from 'react-icons/bi'
import { PiPhone } from 'react-icons/pi'
import { style } from '@mui/system'
import Studentdetails from '../studentdetails/Studentdetails'
import Addstudent from '../addstudents/Addstudent'
import placeholder from '../../../assets/placeholder.png'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import studentdatafile from '../../../studentdata.js'



const Student = () => {

    let [studentdata1, setStudentdata1] = useState(studentdatafile);

    let studentaddeddata = localStorage.getItem('studentaddeddata')
    let [searchvalue, setSearchvalue]= useState()
    let [newdata,setNewdata] = useState(studentdata1)

    // useEffect(()=>{
    //     setStudentdata1(studentaddeddata)
    // })

    let [output,setOutput] = useState(studentdata1)

    let itratebleitem = 5;
    let [start,setStart] = useState(0);

    let [previos,setPrevios] = useState(itratebleitem)

   

    let handlenext = () => {
       
        let newstart = start + itratebleitem;
        let newprev = Math.min(newstart + 5, studentdata1.length);
       if(previos < studentdata1.length){
       
        setStart(newstart);
        setPrevios(newprev);
        let itratedvalues = studentdata1.slice(newstart, newprev)
        setOutput(itratedvalues)
     
        
       }


    }
    let handleprev = () => {
        if(start > 0){
            let prevend = start;
            let prevstart = Math.max(prevend -itratebleitem, 0)
            setStart(prevstart)
            setPrevios(prevend)
            
       
        let filteritem = studentdata1.slice(prevstart,prevend)
            setOutput(filteritem)
        }
        
    }

    let searchfilter = (event)=>{

        let filterdata = event.target.value.toLowerCase()
        console.log(filterdata)

        if((filterdata)===""){
           
            setOutput(studentdatafile.slice(0,5))
           
            setSearchvalue('')
        }
        else{
        // let filterdata = event.target.value.toLowerCase()
        setSearchvalue(filterdata)
        // setSearchvalue(event.target.value.toLowerCase())
        let filtered = studentdata1.filter((item) =>
            item.stdname && item.stdname.toLowerCase().includes(filterdata)
        
          );
    
        setNewdata(filtered)
        setOutput(filtered)
        }

        console.log(newdata)
        console.log(output)

    }

  



 
    
    
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheck = (index) => {
        setCheckedItems(prev => 
            prev.includes(index) 
                ? prev.filter(item => item !== index) 
                : [...prev, index]
        );
    };
    let [addstudent, setAddstudent]=useState();
    let [viewstudent, setViewstudent] = useState();
    let handlingaddstudent = ()=>{
            setAddstudent(true)
    }
    let [selctedstudent, setSelctedstudent] = useState(null)
    let handlingstudentdetails = (item)=>{
        setViewstudent(true)
        setSelctedstudent(item)
    }
 




    return (
        <div style={{width: "100%", height:"100%"}}>
            { (addstudent || viewstudent)?  (viewstudent ?  <Studentdetails selctedstudent = {selctedstudent} /> :"") ||  (addstudent ? <Addstudent/> :"" ) : (
            <div className='student'>
            <div className="studenthead">
                <h2>Students</h2>
                <Profile />
            </div>

            <div className="searchbardiv">
                <div className="inputdiv">
                    <BiSearch />
                    <input type="search"   value={searchvalue} onChange={searchfilter} name="" id="" />
                </div>
                <div className="newoldfilter">
                    <select name="" id="">
                        <option value="">Newest</option>
                        <option value="">Bydate</option>
                    </select>
                    <button onClick={handlingaddstudent}>+ New Student</button>
                </div>
            </div>

            <div className='tablecontent'>

                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" className='chekboxstyle' name="" id="" /></th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Parent Name</th>
                            <th>City</th>
                            <th>Contact</th>
                            <th>Grade</th> 
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                               output.map((item, index)=> {
                                let colordata = (item.grade == 'VII A') ? 'rgba(251, 125, 91, 1)' : (item.grade == 'VII B') ? 'rgba(252, 196, 62, 1)' : (item.grade == 'VII C') ? 'rgba(77, 68, 181, 1)': '';
                                if (index < 5) {
                                    const isChecked = checkedItems.includes(index);
                                    return <tr className={isChecked ? "chekstyle" : ''} >
                                        <td className='checkboxtd'><input type="checkbox" className='clicking chekboxstyle' checked={isChecked}   onChange={() => handleCheck(index)}   name="" id={`row${index+1}`} /></td>
                                        <td className='imgnamebox clicking'onClick={()=>{handlingstudentdetails(item)}}><img  src={item.profileimg} alt="" /> {item.stdname}</td>
                                        <td className='stdid' > #{item.id}</td>
                                        <td className='stddate'>{item.dateofjoin} </td>
                                        <td className='stdpname'>{item.parentname} </td>
                                        <td className='stdpname'>{item.city} </td>
                                        <td><abbr title={item.parentphone}><PiPhone className='contacticon clicking' /></abbr> <abbr title={item.parentemail}><BiEnvelope className='clicking contacticon'/> </abbr></td>
                                        <td className='stdgrade'><p style={{backgroundColor: colordata }}>{item.grade}</p></td>
                                        <td><button onClick={()=>{handlingstudentdetails(item)}} className='threedots'><BsThreeDots /> </button></td>
                                    </tr>
                                }
                            })
                        }
                    </tbody>

                </table>


                <div className="pegination">
                    <p>Showing {start} - {previos} from {studentdata1.length} data</p>

                    <div className='peginationbtndiv'>
                      
                        <button className='arrowbtn' onClick={handleprev} ><IoMdArrowDropleft /></button>
                        <button style={{ backgroundColor: (start == 0) ? 'rgba(77, 68, 181, 1)' : "",color: (start == 0) ? 'white' : "" }}>1</button>
                    <button style={{ backgroundColor: (start == 5) ? 'rgba(77, 68, 181, 1)' : "",color: (start == 5) ? 'white' : "" }}>2</button>
                    <button style={{ backgroundColor: (start == 10) ? 'rgba(77, 68, 181, 1)' : "",color: (start == 10) ? 'white' : "" }}>3</button>
                        <button className='arrowbtn' onClick={handlenext}><IoMdArrowDropright /></button>
                    </div>
                </div>
            </div>

        </div>
        ) 
        }
        </div>
       
    )
}

export default Student