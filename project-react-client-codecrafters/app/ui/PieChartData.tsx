import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const sampleData = [
  { duration: "1 night", value: 80 },
  { duration: "2 nights", value: 15 },
  { duration: "3 nights", value: 50 },
  { duration: "4-5 nights", value: 25 },
  { duration: "6-7 nights", value: 30 },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0000', '#00FF00', '#0000FF'];

const DurationChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={sampleData}
          nameKey="duration"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          cx="50%"
          cy="50%"
          paddingAngle={3}
        >
          {sampleData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          wrapperStyle={{ width: '30%' }} 
          layout="vertical"
          iconSize={15}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DurationChart;
