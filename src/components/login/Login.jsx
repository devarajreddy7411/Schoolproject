import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Login = () => {
    
    let [userid,setUserid] = useState('')
    let [password,setPassword] = useState('')
    const [error,setError] = useState("");
    let navigate = useNavigate()

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
        // Check if credentials match
        let userchek = dbdata.find((user) => user.userid === userid);
        let userpass = dbdata.find((user) => user.password === password);
        
        if (userchek && userpass) {
            // If both userid and password match, navigate to home
            navigate('/home')
        } else {
            // Show error if credentials don't match
            if (!userid) {
                setError('Please enter userid')
            } else if (!password) {
                setError('Please enter password')
            } else if (!userchek) {
                setError('Invalid userid')
            } else {
                setError('Invalid password')
            }
        }
    }

    let handlepopup =()=>{
        alert('Thank you for visiting. Please log in using the following credentials: User- admin@gmail.com Password- admin123 or User-devaraj@gmail.com Password-deva1234')
    }

    return (
        <div className="loginbody">
            <div className="companylogo">
                <img src={logo} alt="logo" /> <h2>Akademi</h2>
            </div>

            <div className='login'>
                
                <div className="loginbox">
                    <h1>Admin login</h1>
                    <div>
                        <label>User ID</label>
                        <input 
                            onChange={(e) => {
                                setUserid(e.target.value)
                                setError('')
                            }} 
                            type="email" 
                            value={userid || ""} 
                            placeholder="Enter user ID"
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input 
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setError('')
                            }} 
                            type="password" 
                            value={password || ""} 
                            placeholder="Enter password"
                        />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button className='clicking' onClick={handlelogin}>Login</button>
                    <p className='clicking' onClick={handlepopup} >
                        <abbr title="admin@gmail.com, admin123 / devaraj@gmail.com ,deva1234">Click Me*</abbr>
                    </p>

                    <div className="boxstyle"></div>
                </div>

            </div>
        </div>
    )
}

export default Login