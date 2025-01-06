import React, { useState } from 'react'
import './messages.css'
import placeholder from '../../../assets/placeholder.png'

const Messages = () => {
let date= new Date()
let time = date.getHours()
let mins = date.getMinutes()

let msgdata = [
    {name:'samnathe', msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.', image:''},
    {name:'samnathe1', msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.', image:''},
    {name:'samnathe2', msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.', image:''},
    {name:'samnathe3', msgchat: 'lorem ipsum dolor sit amet consectetur adipisicing elit.', image:''}
]
let [veiwbtn, setViewbnt] = useState('Veiw More')
let [count, setCount] = useState(1)
let handlingview = ()=>{
   if(count < msgdata.length){
setCount(count+1)
    if(count == msgdata.length-1){
        setViewbnt('View Less')
    }
}else{
   if(veiwbtn == 'View Less' ){
    setCount(1)
    setViewbnt('View More')
   }
    
}


}

    return (
        <div className='messages'>

    
                <h3 className='msghead'>Messages </h3>
            

            <div className='msgbody'>

                {
                    msgdata.slice(0, count).map((item,index) =>{
                    
                      if(index < count){
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

                <button className='viewmore' onClick={handlingview}> {veiwbtn} </button>


            </div>

        </div>
    )
}

export default Messages