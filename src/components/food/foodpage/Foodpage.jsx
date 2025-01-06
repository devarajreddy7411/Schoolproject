import React,{ useState } from 'react'
import './foodpage.css'
import { BsSearch,BsThreeDots } from 'react-icons/bs'
import Profile from '../../profile/Profile'
import { BiBarChart,BiStar } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

import Fooddetail from '../fooddetails/Fooddetail'
import { IoMdArrowDropleft,IoMdArrowDropright } from 'react-icons/io'
import fooddata from '../../../fooddata.js'


const Foodpage = () => {
    let [foodobj,setFoodobj] = useState(fooddata);
    let [selectstyle,setSelectstyle] = useState('AllMenus')
    
    let [fooddetails,setFooddetails] = useState(false)
    let [slectedfood,setSelectedfood] = useState(null)
    let handlingfooddetails = (item) => {
        setFooddetails(true)
        setSelectedfood(item)
    }
    let itemsinpage = 5;
    let [start,setStart] = useState(0);
    let [end,setEnd] = useState(itemsinpage)

    let handlenext = () => {
        if (end < fooddata.length) {
            let newstart = start + itemsinpage;
            let newend = Math.min(newstart + 5 , fooddata.length)
            setStart(newstart)
            setEnd(newend)
            let filteritem = fooddata.slice(newstart,newend)
            setFoodobj(filteritem)
        } 
    }
    let handleprev = () => {
        if(start > 0){
            let prevend = start;
            let prevstart = Math.max(prevend -itemsinpage, 0)
            setStart(prevstart)
            setEnd(prevend)
            
       
        let filteritem = fooddata.slice(prevstart,prevend)
            setFoodobj(filteritem)
        }
        
    }

    return (
        <div style={{ width: '100%',height: '100%' }}>
            {fooddetails ? <Fooddetail slectedfood={slectedfood} /> : <div className='foodpage pattern1'>
                <div className="topnavpattern1 ">
                    <h2>Food</h2>

                    <div className="topnavpattern1_a">
                        <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
                        <Profile />
                    </div>
                </div>

                <div className='bodytype1'>
                    <div className='contentstyle1'>
                        <div className="foodcardhead">
                            <h4>Food Menu</h4>

                            <ul className='clicking'>
                                <li onClick={() => { setFoodobj(fooddata); setSelectstyle('AllMenus') }} className={(selectstyle == 'AllMenus') ? 'active' : ''}>All Menus</li>
                                <li onClick={() => { setFoodobj(fooddata.filter((item) => item.type == 'Breakfast')); setSelectstyle('Breakfast') }} className={(selectstyle == 'Breakfast') ? 'active' : ''} >Breakfast</li>
                                <li onClick={() => { setFoodobj(fooddata.filter((item) => item.type == 'Lunch')); setSelectstyle('Lunch') }} className={(selectstyle == 'Lunch') ? 'active' : ''}>Lunch</li>
                                <li onClick={() => { setFoodobj(fooddata.filter((item) => item.type == 'Snack')); setSelectstyle('Snack') }} className={(selectstyle == 'Snack') ? 'active' : ''}>Snack</li>
                            </ul>
                        </div>

                        <div className="foodcardbody">
                            {
                                foodobj.map((item,index) => {
                                    let progres = parseInt(item.progress);
                                    


                                    if (index < 5) {
                                        return <div className="foodcard">
                                            <img src = {item.foodimage} alt="" />
                                            <p className='foodname clicking' onClick={() => { handlingfooddetails(item) }} >{item.name} <span>{item.type}</span></p>
                                            <p className='foodrating'><FaStar className='goldstar' /> {item.rating} </p>
                                            <div className='ftempone'>
                                                <BiBarChart className='foodicon' />
                                                <p>{item.totalOrder} <span>Total Order</span></p>
                                            </div>
                                            <div className='ftempone'>
                                                <MdArrowOutward className='foodicon' />
                                                <p> {item.interest} <span>Interest</span></p>
                                            </div>
                                            <CircularProgressbar className='circlebar' value={progres / 100} maxValue={1} text={item.progress} />
                                            <BsThreeDots className='icon' />

                                        </div>
                                    }
                                })
                            }




                        </div>

                        <div className="pegination">
                            <p>Showing {start} - {end} from  data {fooddata.length}</p>

                            <div className='peginationbtndiv'>
                                <button className='arrowbtn' onClick={handleprev}  ><IoMdArrowDropleft /></button>
                                <button style={{backgroundColor : (start == 0) ? 'rgba(77, 68, 181, 1)' : "", color : (start == 0) ? 'white' : ""  }}>1</button>
                                <button style={{backgroundColor : (start == 5) ? 'rgba(77, 68, 181, 1)' : "", color : (start == 5) ? 'white' : ""  }}>2</button>
                                <button style={{backgroundColor : (start == 10) ? 'rgba(77, 68, 181, 1)' : "", color : (start == 10) ? 'white' : ""  }}>3</button>
                                <button className='arrowbtn' onClick={handlenext} ><IoMdArrowDropright /></button>

                            </div>
                        </div>
                    </div>






                </div>
            </div>}

        </div>
    )
}

export default Foodpage