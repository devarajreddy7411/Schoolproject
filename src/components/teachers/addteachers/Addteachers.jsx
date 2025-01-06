import React,{ useEffect,useState } from 'react'
import './addteachers.css';
import Profile from '../../profile/Profile'
import Teachers from '../teacherspage/Teachers';
import { BiLeftArrow } from 'react-icons/bi';
import teachersData from "../../../data"
const Addteachers = () => {


    // let teacherdata_file = teacherdata ;
    
    let [teacherdata,setTeacherdata] = useState(teachersData)
    let [errors, setErrors] = useState({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;


    let [getcancle,setGetcancle] = useState(false);

    let [getdata,setGetdata] = useState({
        id: '',
        firstname: '',
        lastname: '',
        name: '',
        subject: "",
        phone: "",
        email: "",
        address: '',
        image: '',
        dob: '',
        pob: '',
        location: "",
        about: "",
        education: [
            {
                university: "",
                startyears: "",
                endtyears: "",
            },
            {
                degree: "",
                startyears: "",
                endyears: "",
            }


        ],
        expertise: [

        ],
        schedule: [
            {
                subject: "Genetics",
                class: "IX-A",
                date: "February 12, 2022",
                time: "09:00 - 10:00 AM"
            }
        ]


    });
    useEffect(() => {
        setGetdata((prevData) => ({
            ...prevData,
            name: `${prevData.firstname} ${prevData.lastname}`
        }));
    }, [getdata.firstname, getdata.lastname]);

    let validate = () => {
        const newErrors = {};
        let isValid = true;

       
        if (!getdata.firstname.trim()) {
            newErrors.firstname = 'firstname is required';
            isValid = false;
        }
        if (!getdata.lastname.trim()) {
            newErrors.lastname = 'lastname is required';
            isValid = false;
        }
        if (!getdata.subject.trim()) {
            newErrors.subject = ' subject is required';
            isValid = false;
        }
        if ( !getdata.about.trim()) {
            newErrors.about = 'about is required';
            isValid = false;
        }

        if (!getdata.dob.trim()) {
            newErrors.dob = 'dob is required';
            isValid = false;
        }
        if (getdata.expertise == '') {
            newErrors.expertise = 'expertise is required';
            isValid = false;
        }
        if (!getdata.location.trim()) {
            newErrors.location = 'address is required';
            isValid = false;
        }
    
        if (!emailRegex.test(getdata.email)) {
            newErrors.email = 'Invalid  email';
            isValid = false;
        }
        if (!phoneRegex.test(getdata.phone)) {
            newErrors.phone = 'must be 10 digits';
            isValid = false;
        }
        if (!getdata.education[0].university.trim()) {
            newErrors.university = 'university is required';
            isValid = false;
        }
        if (!getdata.education[0].startyears.trim()) {
            newErrors.startyearsu = 'Start Year';
            isValid = false;
        }
        if (!getdata.education[0].endtyears.trim()) {
            newErrors.endtyearsu = 'End Year';
            isValid = false;
        }
        if (!getdata.education[1].degree.trim()) {
            newErrors.degree = 'is required';
            isValid = false;
        }
        if (!getdata.education[1].startyears.trim()) {
            newErrors.startyearsd = 'Start Year';
            isValid = false;
        }
        if (getdata.education[1].endyears == "") {
            newErrors.endyearsd = 'End Year';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const handleChange = (e) => {
        const { name,value } = e.target;


        setGetdata((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // setGetdata((prevData) => ({
        //     ...prevData,
        //     [name]: value
        // }));
    };


    const handleEducationChange = (e,index) => {
        const { name,value } = e.target;
        const updatedEducation = getdata.education.map((edu,i) =>
            i === index ? { ...edu,[name]: value } : edu
        );

        setGetdata((prevData) => ({
            ...prevData,
            education: updatedEducation
        }));



    };

 
      
    
    
    

     
    let handleSubmit = () => {
        // e.preventDefault();    
        // .every(value =>  value === undefined);
        if ( validate()) {
            console.log('yes')

            // localStorage.setItem('itdata', JSON.stringify(getdata))
            // teacherdata.push(getdata)
            setGetdata(getdata)
            let iddata = Math.floor(Math.random()  * (12345682 - 12345782)+12345782 )
            getdata.id = iddata

            let teacherdata1 = []
            teacherdata1 = teacherdata.unshift(getdata)

            setTeacherdata(localStorage.setItem("tdata",teacherdata1))

           
            
            console.log(teacherdata)
        // console.log('Form data:',getdata);
        // console.log(teacherdata);
        setGetcancle(getcancle = true);



        }

        // console.log(typeof (getdata.about))
       

    };


  
    // localStorage.setItem('tdata',JSON.stringify(teacherdata))



    // let data  = localStorage.getItem('data');
    // console.log(data)


    return (
        <div>
            {
                getcancle ? <Teachers /> :
                    <div className='addteachers pattern1'>
                        <div className="topnavpattern1">
                            <h2><button className='getbackbtn' onClick={() => { setGetcancle(true) }}>  <BiLeftArrow /> </button> Add New Teacher</h2>

                            <div className="topnavpattern1_a">
                                {/* <div className='searchbox'><BsSearch /><input type="search" name="" placeholder='Search here' id="" /></div> */}
                                <Profile />
                            </div>
                        </div>

                        <div className='addcardstyle'>
                            <h3> Personal Details</h3>

                            <div className='formdiv formdivspacing' >
                                <div className='addinputstyle'>
                                    <label htmlFor="">First Name * {errors.firstname && <p className='error'>{errors.firstname}</p>} </label>
                                    <input type="text" name="firstname" value={getdata.firstname} onChange={handleChange} id="" />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Last Name * {errors.lastname && <p className='error'>{errors.lastname}</p>}</label>
                                    <input type="text" name="lastname" value={getdata.lastname} onChange={handleChange} id="" />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Email * {errors.email && <p className='error'>{errors.email}</p>}</label>
                                    <input type="text" name="email" value={getdata.email} onChange={handleChange} id="" />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Phone * {errors.phone && <p className='error'>{errors.phone}</p>}</label>
                                    <input type="number" name="phone" value={getdata.phone} onChange={handleChange} id="" />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">About * {errors.about && <p className='error'>{errors.about}</p>}</label>
                                    <textarea name="about" id="" cols="30" rows="7" value={getdata.about} onChange={handleChange}></textarea>
                                </div>
                                <div className='addinputstyle '>
                                    <label htmlFor="">Photo </label>
                                    <input className='photoinput' type="file" name="image" id="" placeholder='' value={getdata.image} onChange={handleChange} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Date of Birth * {errors.dob && <p className='error'>{errors.dob}</p>}</label>
                                    <input type="date" name="dob" id="" value={getdata.dob} onChange={handleChange} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">City, Country * {errors.location && <p className='error'>{errors.location}</p>}</label>
                                    <input type="text" name="location" id="" value={getdata.location} placeholder=' city , country' onChange={handleChange} />
                                </div>







                            </div>
                        </div>

                        <div className='addcardstyle'>
                            <h3>Education</h3>
                            <div className='formdiv formdivspacing'  >
                                <div className='addinputstyle'>
                                    <label htmlFor="">University * {errors.university && <p className='error'>{errors.university}</p>}</label>
                                    <input type="text" name="university" id="" value={getdata.education[0].university}
                                        onChange={(e) => handleEducationChange(e,0)} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">University Start & End Date * {<p className='error'>{ errors.startyearsu } {errors.endtyearsu}</p>}</label>
                                    <div className='inputyear'>
                                        <input type="month" name="startyears" id=""  value={getdata.education[0].startyears}
                                            onChange={(e) => handleEducationChange(e,0)} />
                                        <input type="month" name="endtyears" id=""  value={getdata.education[0].endtyears}
                                            onChange={(e) => handleEducationChange(e,0)} />
                                    </div>
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Degree * {errors.degree && <p className='error'>{errors.degree}</p>}</label>
                                    <input type="text" name="degree" id="" value={getdata.education[1].degree}
                                        onChange={(e) => handleEducationChange(e,1)} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Degree Start & End Date * {<p className='error'>{ errors.startyearsd } {errors.endyearsd}</p>}</label>
                                    <div className='inputyear'>
                                        <input type="month" name="startyears" id="" value={getdata.education[1].startyears}
                                            onChange={(e) => handleEducationChange(e,1)} />
                                        <input type="month" name="endyears" id="" value={getdata.education[1].endyears}
                                            onChange={(e) => handleEducationChange(e,1)} />
                                    </div>

                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Expertise * {errors.expertise && <p className='error'>{errors.expertise}</p>}</label>
                                    <input type="text" name="expertise" id="" value={getdata.expertise} onChange={handleChange} />
                                </div>
                                <div className='addinputstyle'>
                                    <label htmlFor="">Subject * {errors.subject && <p className='error'>{errors.subject}</p>}</label>
                                    <input type="text" name="subject" id="" value={getdata.subject} onChange={handleChange} />
                                </div>

                            </div>
                        </div>

                        <div className='addbtndiv'>

                            <button className='savedraftbtn'>Save as Draft</button>
                            <button className='addsubmit' type="submit" onClick={handleSubmit}>Submit</button>
                        </div>

                    </div>

            }
        </div>

    )
}

export default Addteachers