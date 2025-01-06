import { Pagination,Stack } from '@mui/material'
import './unpaidstudent.css'
import placeholderimg from '../../../assets/placeholder.png'
import standarsimg from '../../../assets/standardimg.png'
import React,{ useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { IoMdArrowDropleft,IoMdArrowDropright,IoMdPrint } from 'react-icons/io'
import { PiPrinterThin } from 'react-icons/pi'

const Unpaidstudent = () => {




    const unpaiddata = [
        { name: 'Samantha William',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Ravi ',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Deva William',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Vijai Malothra',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'ravi William',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Deva ',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Tony ',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Jordon Nico',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Karan Hope',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Sanjay',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Kavya',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Sharath',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Manoj ',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'William',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Leo',id: "123456789",standard: "VII A",amount: "50,048",},
        { name: 'Jackson',id: "123456789",standard: "VII A",amount: "50,048",},
    ]

    let itratableitems = 5;

    let [start,setStart] = useState(0);

    let [end,setEnd] = useState(itratableitems)

    let [result,setResult] = useState(unpaiddata)

    let handlenext = () => {
        let newstart = start + itratableitems;
        let newend = Math.min(newstart + 5,unpaiddata.length)
        if (end < unpaiddata.length) {
            setStart(newstart);
            setEnd(newend);
            let itratedvalue = unpaiddata.slice(newstart,newend)
            setResult(itratedvalue)
        }

    }
    let handleprevios = () => {
        if (start > 0) {
            let newend = start;
            let newstart = Math.max(newend - itratableitems,0);
            setStart(newstart);
            setEnd(newend);

            let itratedvalue = unpaiddata.slice(newstart,newend)
            setResult(itratedvalue)
        }
    }




    return (
        <div className='unpaidstudent'>


            <div className="unpaidcontent">
                <h3>Unpaid Student Intuition</h3>

            </div>
            <div className='financechart'>
                {

                    result.map((item,index) => {
                        if (index < 5) {



                            // setState(state++)

                            return <div className='unpaidstudentbox'>
                                <div className='namediv'>
                                    <img src={placeholderimg} alt="" />
                                    <p className='name'>{item.name} </p>
                                </div>
                                <p className='idnum'>ID {item.id} </p>
                                <div className='standardbox'>
                                    <img src={standarsimg} alt="" />
                                    <p className='standard'>
                                        class <span>{item.standard}</span>
                                    </p>
                                </div>
                                <p className='amount'>&#36;{item.amount} </p>

                                <button className='print'><PiPrinterThin /> </button>

                                <button className='threedots'><BsThreeDots /> </button>

                            </div>
                        }

                    })
                }




            </div>
            <div className="pegination">
                <p>Showing {start} - {end} from {unpaiddata.length} data</p>

                <div className='peginationbtndiv'>

                    <button className='arrowbtn' onClick={handleprevios} ><IoMdArrowDropleft /></button>
                    <button style={{ backgroundColor: (start == 0) ? 'rgba(77, 68, 181, 1)' : "",color: (start == 0) ? 'white' : "" }}>1</button>
                    <button style={{ backgroundColor: (start == 5) ? 'rgba(77, 68, 181, 1)' : "",color: (start == 5) ? 'white' : "" }}>2</button>
                    <button style={{ backgroundColor: (start == 10) ? 'rgba(77, 68, 181, 1)' : "",color: (start == 10) ? 'white' : "" }}>3</button>
                    <button className='arrowbtn' onClick={handlenext}><IoMdArrowDropright /></button>
                </div>
            </div>

        </div>
    )
}

export default Unpaidstudent