import React from 'react'
import './schoolfinance.css'
import { BarChart,Bar,Rectangle,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from 'recharts';
import { MdRoundedCorner } from 'react-icons/md';
import { TbTriangleFilled } from 'react-icons/tb';


const Schoolfinance = () => {

    const data = [
        {
            name: 'Mon',
            uv: 98,
            pv: 75,
        
        },
        {
            name: 'Tue',
            uv: 43,
            pv: 57,
            
        },
        {
            name: 'Wed',
            uv: 38,
            pv: 31,
            
        },
        {
            name: 'Thu',
            uv: 45,
            pv: 39,
            
        },
        {
            name: 'Fri',
            uv: 30,
            pv: 20,
            
        },
        {
            name: 'Sat',
            uv: 64,
            pv: 82,
            
        },
        {
            name: 'Sun',
            uv: 75,
            pv: 55,
            
        },
    ];

    return (
        <div className='schoolfinance'>
            <div className="wavechart">
                <div className="content">
                    <h3 className="subheadings">School Finance</h3>
                    <div className="rightcontent">
                        <div className="rightcontent1"><h5 className='colorpartanone'><span className='circlediv'></span>This Week </h5><p>1.245</p></div>
                        <div className="rightcontent2"><h5 className='colorpartanone'> <span className='circlediv'></span>Last Weeks </h5><p>1.356</p></div>
                    </div>
                </div>
                <div className='financechart'>
                    <ResponsiveContainer width={'100%'} height={'100%'}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                             
                            margin={{
                                top: 20,
                                right: 0,
                                left: 5,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Bar dataKey="pv" shape='MdRoundedCorner' fill="#FB7D5B" barSize={10} radius={[20,20,0,0]}  activeBar={<Rectangle radius={[20,20,0,0]} fill="#ef3c0a" stroke="#ef3c0a" />} />
                            <Bar dataKey="uv" fill="#FCC43E"  radius={[20,20,0,0]} barSize={10} activeBar={<Rectangle fill="#f6ae06" radius={[20,20,0,0]} stroke="#f6ae06" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>




        </div>
    )
}

export default Schoolfinance