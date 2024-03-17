import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: 'May 25',
    sales: 4000
  },
  {
    date: 'May 27',
    sales: 6000
  },
  {
    date: 'May 28',
    sales: 2000
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300} aspect={3}>
      <AreaChart
        width={600} 
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
