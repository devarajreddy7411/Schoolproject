import React, { useState } from 'react'
import './recentstudents.css'
import placeholder from '../../../assets/placeholder.png'
import { BsEnvelope } from 'react-icons/bs'
import stddata from '../../../studentdata.js'
import Student from '../../students/Student/Student.jsx'

const Recentstudents = () => {

    
    let [studentdatafile, setStudentdatafile] = useState(stddata);
    let [count, setCount] = useState(3);
    let [viewbtn, setViewbtn] = useState('Veiw More')

    console.log(studentdatafile)

    let handlingviewmore = ()=>{
        if(count < 7){
            setCount(count + 1)
            if(count == 6){
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

    return (
        <div className='recentstudents'>

            <div className="rshead">
                <h3>Recent Students <span>You have {studentdatafile.length} students</span></h3>

                <button>+</button>
            </div>

           {
            studentdatafile.slice(0, count).map((item, index)=>{
                if(index < count){
                    return  <div className='rsbox'>

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
    )
}

export default Recentstudents