import React, { useEffect, useState } from 'react'
import './teachers.css'
import Profile from '../../profile/Profile'
import { BiEnvelope,BiSearch } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { PiPhone } from 'react-icons/pi'
import placehoder from '../../../assets/placeholder.png'
import Teacherdetails from '../teachersdetails/Teacherdetails'
import Addteachers from '../addteachers/Addteachers'
import data from "../../../data"
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const Teachers = () => {
    let [newdata, setNewdata] = useState(data) 
    // let [teacherdata12, setTeacherdata12] = useState(data)
    let tdata1 = localStorage.getItem('tdata')
    let [selectedTeacher, setSelectedTeacher] = useState(null);
    // console.log(data)
   
   
    let [searchvalue,setSearchvalue] = useState('')
   

    let [teachdetal,setTeachdetal] = useState(false);
    let [addteacher,setAddteacher] = useState(false);
    let handlingteachercard = (item)=>{
        // console.log(item)
        setSelectedTeacher(item); 
        setTeachdetal(true);
        setAddteacher(false)
    }
    let handleaddteacher = ()=>{
        setAddteacher(true)
        setTeachdetal(false);
    }
    // let data  = JSON.parse(localStorage.getItem('tdata'));
    // let data2  = JSON.parse(localStorage.getItem('itdata'));

    
    // useEffect(()=>{
    //     let data  = JSON.parse(localStorage.getItem('tdata'));

    //     if(data){
    //         setTeacherdata12(data)
    //     }
    // },[])
    

    
    // console.log(tdata1)
// useEffect(()=>{
        
//             setTeacherdata12(tdata1)
       
// },[])


let [result,setResult] = useState(newdata)
let itritem = 8;
let [start,setStart] = useState(0);

    let [end,setEnd] = useState(itritem)

   

    let handlenext = () => {
        let newstart = start + itritem;
        let newend = Math.min(newstart + itritem, newdata.length)
            if (end < newdata.length) {
            setStart(newstart);
            setEnd(newend);
            let itrteditem = newdata.slice(newstart,newend)
            setResult(itrteditem)
        }
      
    }
    let handleprevios = () => {

        if(start > 0){
            let newend = start;
            let newstart = Math.max(newend -itritem, 0)
            setStart(newstart)
            setEnd(newend)
            
       
        let itrteditem = newdata.slice(newstart,newend)
        setResult(itrteditem)
        }
    
   
    }

    


    let handlesearch = (event)=>{
    
        let filterdata = event.target.value.toLowerCase()
        console.log(filterdata)
        if((event.target.value)==""){
        //    setNewdata(teacherdata12)
            setResult(newdata)
          
            setSearchvalue('')
        }
        else{
        
        // setSearchvalue(filterdata)
        setSearchvalue(filterdata)
        let filtered = newdata.filter((item) =>
            item.name && item.name.toLowerCase().includes(filterdata) 
          );
    
        // setNewdata(filtered)
        setResult(filtered)
        
        }
        
        // setData1(newdata = data1)
        // console.log(searchvalue)
        // console.log(newdata)
    }
// console.log(tdata1)
    // console.log(teacherdata12)
    return (
       <div style={{width : "100%", height:"100%"}}>
         {(teachdetal ||  addteacher ) ? (
           (teachdetal ?  <Teacherdetails teachersdata={selectedTeacher}/> :"") ||  (addteacher ? <Addteachers  />:"" )
          ) : (<div className='teacher'>
            <div className="Teacherhead">
                <h2>Teachers</h2>
                <Profile />
            </div>

            <div className="searchbardiv">
                <div className="inputdiv">
                    <BiSearch />
                    <input type="search" value={searchvalue} onChange={(e)=>handlesearch(e)} name="" id="" />
                </div>
                <div className="newoldfilter">
                    <select name="" id="">
                        <option value="">Newest</option>
                        <option value="">Bydate</option>
                    </select>
                    <button onClick={handleaddteacher}>+ New Teacher</button>
                </div>
            </div>


            <div className="teachercarddiv">

                 {
                    result.map( (item,index)=>{
                        if (index < 8) {
                                
                            return  <div className="teachercard"  key={index}>
                            <button className='tcardthreedot' onClick={()=>{handlingteachercard(item)}}> <BsThreeDots className='contacticon' /> </button>
                            <img src={placehoder} alt="" />
                            <p className='teachercardname clicking' onClick={()=>{handlingteachercard(item)}} id={item.name}>{item.name} <span> {item.subject}</span></p>
                            <div className="callmaildiv">
                                <button> <PiPhone className='contacticon' /> </button>
                                <button> <BiEnvelope className='contacticon' /> </button>
                            </div>
                        </div>
                        }
                    })
                } 

                

            </div>






            <div className="pegination">
                <p>Showing {start}-{end} from {data.length} data</p>

                <div className='peginationbtndiv'>
                    <button className='arrowbtn' onClick={handleprevios} ><IoMdArrowDropleft /></button>
                        <button style={{backgroundColor : (start == 0) ? 'rgba(77, 68, 181, 1)' : "", color : (start == 0) ? 'white' : ""  }}>1</button>
                        <button style={{backgroundColor : (start == 8) ? 'rgba(77, 68, 181, 1)' : "", color : (start == 8) ? 'white' : "" }}>2</button>
                        <button style={{backgroundColor : (start == 16) ? 'rgba(77, 68, 181, 1)' : "", color : (start == 16) ? 'white' : "" }}>3</button>
                        <button className='arrowbtn' onClick={handlenext}><IoMdArrowDropright /></button>
                </div>
            </div>


        </div>)}
       </div>
        
    )
}

export default Teachers