import React,{ useState } from 'react'
import './chat.css'
import { BsSearch,BsThreeDots } from 'react-icons/bs'
import Profile from '../profile/Profile'
import placehoder from '../../assets/placeholder.png'
import { LuSendHorizonal,LuVideo } from 'react-icons/lu'
import { onSpaceOrEnter } from '@mui/x-date-pickers/internals'

const Chat = () => {
    let date = new Date()
    let time = date.getHours()
    let mins = date.getMinutes()
    let [selected,setSelcted] = useState(false);
    let [msg,setMsg] = useState('')
    let chatdata = [
        { name: "ravi",lst: [""] },
        { name: "asldnqe",lst: [""] }
    ]

    let [name,setName] = useState(null)

    let [list,setList] = useState([])

    let handlingmsgview = (index) => {
        // setSelcted(item)
        setList(chatdata[index].lst)
        console.log(chatdata[index].lst)
        setName(chatdata[index].name)

    }
    // console.log(selected)
    let [msg2,setMsg2] = useState('')
    let handleSend = () => {
        if (msg.trim() !== '') {
            // Create a new array with the updated messages
            setList([...list,msg]);
            setMsg2("reply");
            // setList(list.push(msg2))
            // setTimeout(setList([...list, msg2]),1000)
            setMsg(''); // Clear the input field after sending the message

        }
    };

    return (
        <div className='chat pattern1'>

            <div className="topnavpattern1">
                <h2>Chat</h2>

                <div className="topnavpattern1_a">
                    <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>
                    <Profile />
                </div>
            </div>

            <div className='bodytype1  chatdiv'>
                <div className='contentstyle1 chatmsgdiv'>
                    <h2>Messages</h2>

                    <div className='searchbox msgsearch'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div>

                    <div className="contactpersons">
                        {
                            chatdata.map((item,index) => {

                                return <div className='msgbox' key={index} onClick={() => {
                                    handlingmsgview(index)
                                }}>
                                    <img src={placehoder} alt="" />
                                    <div className='msgboxcontent clicking'>
                                        <p className='msgname'>{item.name} <span>{time}:{mins} </span></p>
                                        <p className='msgchat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                </div>
                            })
                        }


                    </div>

                </div>

                <div className="chatdisply">
                    <div className="chatdisplyhead">
                        <div className='msgbox clicking'>
                            <img src={placehoder} alt="" />
                            <div className='msgboxcontent'>
                                <p className='msgname'>{name} <span></span></p>
                                <p className='msgchat'>Online  </p>
                            </div>


                        </div>
                        <div className='chatdisplyheadbtn'>
                            <LuVideo />
                            <BsThreeDots />
                        </div>


                    </div>

                    <div className="msgbody">
                        {
                            list.map((item) => {
                                return <div className="message ">
                                    <p className='sendmsgdisplay'>{item}</p>
                                    <p className='sendmsgreply'>{msg2}</p>
                                </div>
                            })
                        }
                    </div>
                    {(list.length > 0) ?
                        <div className="msgsenddiv">
                            <div className="msgsendstyle">
                                <input className='msgsendinput' type="text" placeholder='Write your message...' value={msg} onChange={(e) => {

                                    setMsg(e.target.value)
                                }} />
                                {/* <input className='msgatachinput' type="submit" name="" id="" /> */}
                                <button onClick={handleSend}>Send <LuSendHorizonal /></button>
                            </div>
                        </div> : ""
                    }
                </div>









            </div>


        </div>
    )
}

export default Chat