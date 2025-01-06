import React, { useState } from 'react'
import './schoolexpences.css'
import schexpimg from '../../../assets/schexpimg.png'
import { IoMdArrowDropleft,IoMdArrowDropright } from 'react-icons/io'

const Schoolexpences = () => {

  let schoolexp = [
    { id: '#123456778',paydate: '2 March 2021, 13:45 PM',paidamount: '$50000',paystatus: 'Complete' },
    { id: '#123456779',paydate: '21 March 2021, 13:45 PM',paidamount: '$50000',paystatus: 'Pending' },
    { id: '#123456780',paydate: '2 April 2021, 15:45 PM',paidamount: '$50000',paystatus: 'Complete' },
    { id: '#123456781',paydate: '2 June 2021, 17:45 PM',paidamount: '$50000',paystatus: 'Canceled' },
    { id: '#123456782',paydate: '2 March 2022, 13:45 PM',paidamount: '$50000',paystatus: 'Complete' },
    { id: '#123456783',paydate: '2 April 2022, 13:05 PM',paidamount: '$50000',paystatus: 'Pending' },
    { id: '#123456784',paydate: '2 October 2022, 11:45 AM',paidamount: '$50000',paystatus: 'Complete' },
    { id: '#123456785',paydate: '2 January 2024, 16:45 PM',paidamount: '$50000',paystatus: 'Complete' },
    { id: '#123456786',paydate: '2 March 2024, 14:45 PM',paidamount: '$50000',paystatus: 'Pending' },
  ]

  let itratableitems = 5;

  let [start,setStart] = useState(0);

  let [end,setEnd] = useState(itratableitems)

  let [result,setResult] = useState(schoolexp)

  let handlenext = () => {
      let newstart = start + itratableitems;
      let newend = Math.min(newstart + 5,schoolexp.length)
      if (end < schoolexp.length) {
          setStart(newstart);
          setEnd(newend);
          let itratedvalue = schoolexp.slice(newstart,newend)
          setResult(itratedvalue)
      }

  }
  let handleprevios = () => {
      if (start > 0) {
          let newend = start;
          let newstart = Math.max(newend - itratableitems,0);
          setStart(newstart);
          setEnd(newend);

          let itratedvalue = schoolexp.slice(newstart,newend)
          setResult(itratedvalue)
      }
  }


  return (
    <div className='schoolexpences'>
      <div className='schoolexpences2'>
        <h2>School Expense</h2>

        <div className="schoolexpencdiv">

          {
            result.map((item,index) => {
              if (index < 5) {
                return <div className="scexpcard">
                  <div className='scexpcardsub1'>
                    <img src={schexpimg} alt="" />
                    <p className='iddate'>{item.id} <span>{item.paydate}</span></p>
                  </div>
                  <p>{item.paidamount}</p>
                  <p style={{ color: (item.paystatus == 'Complete') ? 'green' : (item.paystatus == 'Pending') ? 'rgba(160, 152, 174, 1)' : (item.paystatus == 'Canceled') ? 'red' : '' }}>{item.paystatus}</p>
                </div>
              }
            })
          }


        </div>
      </div>




      <div className="pegination schoolexppagination">
        <p>Showing {start} - {end} from {schoolexp.length} data</p>

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

export default Schoolexpences