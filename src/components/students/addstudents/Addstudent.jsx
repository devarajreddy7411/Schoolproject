import React,{ useEffect,useState } from 'react'
import './addstudents.css'
import Profile from '../../profile/Profile'
import Student from '../Student/Student';
import { BiLeftArrow } from 'react-icons/bi';
import studentdatafile from '../../../studentdata.js';
import studentdata from '../../../studentdata.js';

const Addstudent = () => {
    let [addstdback,setAddstdback] = useState(false)
    // let [getcancle, setGetcancle] = useState(false)
    let [enab,setEnab] = useState(true)
    let [stddataform,setStddataform] = useState(
        {
            id: '',
            profileimg: '',
            stdname: '',
            firstname: '',
            lastname: '',
            dateofjoin: '',
            grade: '',
            studentemail: '',
            city: '',
            country: '',
            studaddress: '',
            parentname: '',
            parentfirstname: '',
            parentlastname: '',
            parentemail: '',
            parentphone: '',
            parentaddress: '',
            paymentmode: '',

        }
    )
    let [datastudents,setDatastudents] = useState(studentdatafile);
    let [errors, setErrors] = useState({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    
    // useEffect(()=>{
    //     setStddataform((prevdata)=>({
    //         ...prevdata,
    //         stdname: `${prevdata.firstname} ${prevdata.lastname}`
    //     }))
    // })

    let handlechange = (e) => {
        let { name,value } = e.target;

        setStddataform((prevdata) => ({
            ...prevdata,[name]: value,
            stdname: `${prevdata.firstname.charAt(0).toUpperCase() + prevdata.firstname.slice(1)} ${prevdata.lastname.charAt(0).toUpperCase() + prevdata.lastname.slice(1)}`,
            parentname: `${prevdata.parentfirstname} ${prevdata.parentlastname}`
        }))

       

      
    }
    let validate = () => {
        const newErrors = {};
        let isValid = true;

       
        if (!stddataform.firstname.trim()) {
            newErrors.firstname = 'is required';
            isValid = false;
        }
        if (!stddataform.lastname.trim()) {
            newErrors.lastname = 'is required';
            isValid = false;
        }
        if (!stddataform.dateofjoin) {
            newErrors.dateofjoin = 'is required';
            isValid = false;
        }
        if ( !stddataform.grade) {
            newErrors.grade = 'is required';
            isValid = false;
        }
        if (!emailRegex.test(stddataform.studentemail)) {
            newErrors.studentemail = 'Invalid student email';
            isValid = false;
        }
        if (!stddataform.city.trim()) {
            newErrors.city = 'is required';
            isValid = false;
        }
        if (!stddataform.country.trim()) {
            newErrors.country = 'is required';
            isValid = false;
        }
        if (!stddataform.studaddress.trim()) {
            newErrors.studaddress = 'is required';
            isValid = false;
        }
        if (!stddataform.parentfirstname.trim()) {
            newErrors.parentfirstname = 'is required';
            isValid = false;
        }
        if (!stddataform.parentlastname.trim()) {
            newErrors.parentlastname = 'is required';
            isValid = false;
        }
        if (!emailRegex.test(stddataform.parentemail)) {
            newErrors.parentemail = 'Invalid parent email';
            isValid = false;
        }
        if (!phoneRegex.test(stddataform.parentphone)) {
            newErrors.parentphone = 'Parent phone number must be 10 digits';
            isValid = false;
        }
        if (!stddataform.parentaddress.trim()) {
            newErrors.parentaddress = 'is required';
            isValid = false;
        }
        if (!stddataform.paymentmode) {
            newErrors.paymentmode = 'is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


  
    



    let handlongsubmit = () => {
        if (validate()) {
           
            setStddataform(stddataform)
            let iddata = Math.floor(Math.random()  * (12345682 - 12345782)+12345782 )
            stddataform.id = iddata
            let studentaddeddata1 = []
            studentaddeddata1 = datastudents.unshift(stddataform);
            setDatastudents(localStorage.setItem('studentaddeddata',studentaddeddata1))
            console.log(datastudents)
            setAddstdback(true)
        }
        else{
            console.log('fill form')
        }

        
    }



    return (
        <div style={{ width: "100%" }}>
            {
                addstdback ? <Student /> : <div className='addteachers pattern1'>
                    <div className="topnavpattern1">
                        <h2><button className='getbackbtn' onClick={() => { setAddstdback(true) }}>  <BiLeftArrow /> </button> Add New Student</h2>

                        <div className="topnavpattern1_a">
                            {/* <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div> */}
                            <Profile />
                        </div>
                    </div>

                    <div className='addcardstyle'>
                        <h3>Student Details</h3>
                        
                        <div className=' addstdformdiv formdivspacing' >
                            <div className='addinputstyle'>
                                <label htmlFor="">Photo *</label>
                                <input className='photoinput' type="file" accept="image/png, image/jpeg" name="profileimg" value={stddataform.profileimg} onChange={handlechange} id="" placeholder='' />
                            </div>
                            <div className='formdiv'>
                                <div className='addinputstyle'>
                                    <label htmlFor="">First Name * {errors.firstname && <p className='error'>{errors.firstname}</p>}</label>
                                    <input type="text" name="firstname" id="" value={stddataform.firstname} onChange={handlechange} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Last Name *{errors.lastname && <p className='error'>{errors.lastname}</p>}</label>
                                    <input type="text" required  name="lastname" value={stddataform.lastname} onChange={handlechange} id="" />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Date of Join & Grade* { <p className='error'>{errors.grade || errors.dateofjoin} </p>}</label>
                                    <div className='inputyear'><input type="date" name="dateofjoin" id="" value={stddataform.dateofjoin} onChange={handlechange} />
                                        <select className='selectgrade' id="" name="grade" value={stddataform.grade} onChange={handlechange}>
                                            <option value="">Select Grade</option>
                                            <option value="VII A">VII A</option>
                                            <option value="VII B">VII B</option>
                                            <option value="VII C">VII C</option>
                                        </select></div>
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Email * {errors.studentemail && <p className='error'>{errors.studentemail}</p>}</label>
                                    <input type="text" name="studentemail" id="" value={stddataform.studentemail} onChange={handlechange} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">City * {errors.city && <p className='error'>{errors.city}</p>}</label>
                                    <input type="text" name="city" id="" value={stddataform.city} onChange={handlechange} />
                                </div>


                                <div className='addinputstyle'>
                                    <label htmlFor="">Country *{errors.country && <p className='error'>{errors.country}</p>}</label>
                                    <input type="text" name="country" id="" value={stddataform.country} onChange={handlechange} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Address *{errors.studaddress && <p className='error'>{errors.studaddress}</p>}</label>
                                    <textarea name="studaddress" id="" value={stddataform.studaddress} onChange={handlechange} cols="30" rows="7" ></textarea>
                                </div>


                            </div>






                        </div>
                    </div>

                    <div className='addcardstyle'>
                        <h3>Parent Details</h3>
                        <div className='formdiv formdivspacing'  >
                            <div className='addinputstyle'>
                                <label htmlFor="">First Name * {errors.parentfirstname && <p className='error'>{errors.parentfirstname}</p>}</label>
                                <input type="text" name="parentfirstname" id="" value={stddataform.parentfirstname} onChange={handlechange} />
                            </div>
                            <div className='addinputstyle'>
                                <label htmlFor="">Last Name * {errors.parentlastname && <p className='error'>{errors.parentlastname}</p>}</label>
                                <input type="text" name='parentlastname' value={stddataform.parentlastname} onChange={handlechange} />
                            </div>
                            <div className='addinputstyle'>
                                <label htmlFor="">Email * {errors.parentemail && <p className='error'>{errors.parentemail}</p>}</label>
                                <input type="email" name="parentemail" id="" value={stddataform.parentemail} onChange={handlechange} />
                            </div>
                            <div className='addinputstyle'>
                                <label htmlFor="">Phone *{errors.parentphone && <p className='error'>{errors.parentphone}</p>}</label>
                                <input type="number" name="parentphone" id="" value={stddataform.parentphone} onChange={handlechange} />
                            </div>
                            <div className='addinputstyle'>
                                <label htmlFor="">Address * {errors.parentaddress && <p className='error'>{errors.parentaddress}</p>}</label>
                                <textarea name="parentaddress" id="" value={stddataform.parentaddress} onChange={handlechange} cols="30" rows="6"></textarea>
                            </div>
                            <div className='addinputstyle'>
                                <label htmlFor="">Payments * {errors.paymentmode && <p className='error'>{errors.paymentmode}</p>}</label>
                                <div className='payselectstyle' >
                                    <input type="radio" name="paymentmode" value='Cash' checked={stddataform.paymentmode === 'Cash'} onChange={handlechange} id="" />Cash  <input type="radio" name="paymentmode" value='Debit' checked={stddataform.paymentmode === 'Debit'} onChange={handlechange} id="" /> Debit
                                </div>


                            </div>

                        </div>
                    </div>

                    <div className='addbtndiv'>

                        <button className='savedraftbtn'>Save as Draft</button>
                        <button className='addsubmit' type="submit" onClick={handlongsubmit}  >Submit</button>
                    </div>

                </div>
            }

        </div>

    )
}

export default Addstudent