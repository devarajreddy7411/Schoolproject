import React,{ useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Login = () => {
    
    let [userid,setUserid] = useState('')
    let [password,setPassword] = useState('')
    const [error,setError] = useState("");
    let navigate = useNavigate()
    // let handlechange = (e)=>{
    //     setUserid(e.target.value)
    //     setPassword(e.target.value)
    // }
    const dbdata = [{
        name: 'Deva raj',
        userid: "devaraj@gmail.com",
        type: "Admin",
        password: "deva1234"
    },
    {
        name: 'Admin',
        userid: "admin@gmail.com",
        type: "Admin",
        password: "admin123"
    },
    ]

    useEffect(()=>{
        window.alert('Login with using credentials  admin@gmail.com, admin123 / devaraj@gmail.com ,deva1234')
    },[])
    
    let handlelogin = () => {


        //   data.userid === userid && data.password === password
        let userchek = dbdata.find((userchek) => userchek.userid === userid);
        let userpass = dbdata.find((userpass) => userpass.password === password);
        // let data = this.userchek
        if (userchek) {
            if (userpass) {
                console.log('login done')
                navigate(`/dashbord`,{ state: userchek })
            }
            else {
                if (password == '') {
                    setError('please enter password')
                }
                else {
                    setError('invalid password')
                }
            }
        }
        else {
            if (userid == '') {
                setError('please enter userid')
            }
            else {
                setError('invaliduser')
            }
        }

        // if(data){
        // // navigate(`/Home`, {state: dbdata} )
        // console.log('login done')
        // setError("")

        // }
        // else{
        //     console.log("incorrect userid or password")
        //     setError("error")
        // }   
    }

    let handlepopup =()=>{
        alert('Thank you for visiting. Please log in using the following credentials: User- admin@gmail.com Password- admin123 or User-devaraj@gmail.com Password-deva1234')

    }
    // console.log(userid);
    // console.log(password);

    return (
        <div className="loginbody">
            <div className="companylogo">
                <img src={logo} alt="logo" /> <h2>Akademi</h2>
            </div>



            <div className='login'>
                
                <div className="loginbox">
                    <h1>Admin login</h1>
                    <div>
                        <label >User ID</label>
                        <input onChange={(e) => {
                            setUserid(e.target.value)
                            setError('')
                        }} type="email" value={userid || ""} />
                    </div>

                    <div>
                        <label >Password</label>
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                            setError('')
                        }} type="password" name="" value={password || ""} />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button className='clicking' onClick={handlelogin}>Login</button>
                            <p className='clicking' onClick={handlepopup} ><abbr title="admin@gmail.com, admin123 / devaraj@gmail.com ,deva1234">Click Me*</abbr></p>

                    <div className="boxstyle"></div>
                </div>

            </div>


        </div>



    )
}

export default Login