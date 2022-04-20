import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../components/header'
import Subheader from '../components/subheader'

const hello = () => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

  return (
      <>
        <Header />
        <Subheader />
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
         // width={100}
         // height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </>
    );
  
}

export default hello

/*
"@synthetixio/queries": "^2.67.0-alpha",
    "next": "12.1.5",
    "react": "18.0.0",
    "react-dom": "18.0.0",
    "recharts": "^2.1.9",
    "styled-components": "^5.3.5"
  },
  "devDependencies": {
    "@types/node": "17.0.24",
    "@types/react": "18.0.5",
    "@types/react-dom": "18.0.1",
    "eslint": "8.13.0",
    "eslint-config-next": "12.1.5",
    "typescript": "4.6.3"
  }
}
*/