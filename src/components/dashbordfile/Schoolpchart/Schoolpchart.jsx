import React from 'react'

import "./schoolpchart.css"

// import  { PureComponent } from 'react';
import { AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts';

const Schoolpchart = () => {
    const data = [
        {
            name: 'Jan',
            uv: 5,
            pv: 20,

        },
        {
            name: 'Feb',
            uv: 40,
            pv: 28,

        },
        {
            name: 'Mar',
            uv: 80,
            pv: 48,

        },
        {
            name: 'Apr',
            uv: 40,
            pv: 25,

        },
        {
            name: 'May',
            uv: 0,
            pv: 10,

        },
        {
            name: 'Jun',
            uv: 25,
            pv: 28,

        },
        {
            name: 'Jul',
            uv: 55,
            pv: 60,

        },
        {
            name: 'Aug',
            uv: 40,
            pv: 28,

        },
        {
            name: 'Sep',
            uv: 25,
            pv: 10,

        },
        {
            name: 'Oct',
            uv: 48,
            pv: 28,

        },
        {
            name: 'Nov',
            uv: 70,
            pv: 90,

        },
        {
            name: 'Dec',
            uv: 55,
            pv: 27,

        },
    ];

    return (
        <div className="schoolpchart">
            <div className="wavechart">
                <div className="content">
                    <h3 className="subheadings">School Performance</h3>
                    <div className="rightcontent">
                        <div className="rightcontent1 "><h5 className='colorpartanone'><span className='circlediv'></span>This Week </h5><p>1.245</p></div>
                        <div className="rightcontent2 "><h5 className='colorpartanone'> <span className='circlediv'></span>Last Weeks </h5><p>1.356</p></div>
                    </div>
                </div>
                <div className='chartsize'>
                    <ResponsiveContainer width={'100%'} height={'100%'}>
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area  type="natural" dataKey="uv" strokeWidth="4"  stroke="#FCC43E"  fill='#FCC43E' fillOpacity="0.2" />
                            <Area type="natural" dataKey="pv"  strokeWidth="4" stroke="#FB7D5B" fill="#FB7D5B" fillOpacity="0.2" />
                            {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>



        </div>
    )
}

export default Schoolpchart