import React, { useState } from 'react'
import { BsSearch,BsThreeDots } from 'react-icons/bs'
import Profile from '../../profile/Profile'
import placeholder from '../../../assets/placeholder.png'
import './fooddetail.css'
import comma from '../../../assets/comma.png'
import { FaStar } from 'react-icons/fa'
import { BiBarChart, BiLeftArrow } from 'react-icons/bi'
import { MdArrowOutward } from 'react-icons/md'
import { CircularProgressbar } from 'react-circular-progressbar'
import Foodpage from '../foodpage/Foodpage'

const Fooddetail = (props) => {
    let slectedfood = props.slectedfood

    let [getback, setGetback] = useState(false)
    
    const value = parseInt(slectedfood.progress);
    return (
        <div style={{ width: "100%", height:'100%' }}> 
            {
                getback ? <Foodpage/> : <div className='fooddetails pattern1'>
                <div className="topnavpattern1 ">
                    <h2> <button className='getbackbtn' onClick={() => {setGetback(true) }}>  <BiLeftArrow /> </button> Food Details</h2>
    
                    <div className="topnavpattern1_a">
                    
                        <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
                        <Profile />
                    </div>
                </div>
    
    
                <div className='bodytype1'>
                    <div className='contentstyle1'>
    
                        <div className="fooddetaiscard">
                            <div className='fooddetaiscard1'>
                                <img src={slectedfood.foodimage} alt="" />
                                <div className='fooddetaiscard1-a'>
                                    <p className='fooddetailname'>{slectedfood.name} <span>{slectedfood.type} </span></p>
                                    <p> {slectedfood.description} </p>
    
                                </div>
                            </div>
    
                            <div className='fooddetaiscard2'>
                                <p className='foodrating'><FaStar className='goldstar' /> {slectedfood.rating} </p>
                                <div className='ftempone'>
                                    <BiBarChart className='foodicon' />
                                    <p> {slectedfood.totalOrder} <span>Total Order</span></p>
                                </div>
                                <div className='ftempone'>
                                    <MdArrowOutward className='foodicon' />
                                    <p> {slectedfood.interest} <span>Interest</span></p>
                                </div>
                                <CircularProgressbar className='circlebar' value={value} maxValue={100} text={slectedfood.progress} />
                            </div>
                            <BsThreeDots className='threedots' />
    
    
                            <div className='foodingrediants'>
    
                                <div>
                                    <h4>Ingredients</h4>
                                    <ul className='list'>
                                    {
                                        slectedfood.ingredients.map((item)=>{
                                           return <li> {item} </li>
                                        })
                                    }
                                    
                                        {/* <li>2 tablespoons butter, softened, divided</li>
                                        <li>1 teaspoon minced fresh parsley</li>
                                        <li>1/2 teaspoon minced garlic</li>
                                        <li>1/4 teaspoon reduced-sodium soy sauce</li>
                                        <li>1 beef flat iron steak or boneless top sirloin steak (3/4 pound)</li>
                                        <li>1/8 teaspoon salt</li>
                                        <li>1/8 teaspoon pepper</li> */}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Nutrition:</h4>
                                    <ul className='list'>
                                        <li>Calories: 217.</li>
                                        <li>Water: 61%</li>
                                        <li>Protein: 26.1 grams.</li>
                                        <li>Carbs: 0 grams.</li>
                                        <li>Sugar: 0 grams.</li>
                                        <li>
                                            Fiber: 0 grams.</li>
                                        <li>Fat: 11.8 grams.</li>
                                    </ul>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
    
    
    
                    <aside className="">
    
    
                        <h4>Student Comments</h4>
    
    
    
                        <div className="sidecardstyle2">
    
    
                            <p className='foodstdcoment'><span><img src={comma} alt="" /> <img src={comma} alt="" /></span> Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.</p>
    
                            <div className='foodstdcomentperson'>
                                <img src={placeholder} alt="" />
                                <h4>Samantha W. <span>5 days ago</span></h4>
                            </div>
                        </div>
    
    
    
    
    
                    </aside>
    
    
                </div>
    
            </div>
            }
        </div>

    )
}

export default Fooddetail