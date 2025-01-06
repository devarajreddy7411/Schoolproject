import React, { useState } from 'react'
import './dashfood.css'
import foodplaceholder from '../../../assets/foodplaceholder.png'
import fooddata from '../../../fooddata.js'

const Dashfood = () => {

    let [foodData, setFoodData] = useState(fooddata);
    let [count, setCount] = useState(3);
    let [viewbtn, setViewbtn] = useState('Veiw More')



    let handlingviewmore = ()=>{
        if(count < 5){
            setCount(count + 1)
            if(count == 4){
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
        <div className='dashfood'>
            <h2>Current Foods Menu</h2>

            <div className="foodboxdiv">
            {
            foodData.slice(0, count).map((item, index)=>{
                if(index < count){
                    return <div className="foodbox">
                    <img src={item.foodimage} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.description} </p>
                </div>
                    
                }
            })
           }
                
            </div>

            <button className='viewmore' onClick={handlingviewmore}>{viewbtn}</button>
        </div>
    )
}

export default Dashfood