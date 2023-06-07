import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const YesNoPieChart = ({ yesCount, noCount }) => {
  const data = [
    { name: 'Yes', value: yesCount },
    { name: 'No', value: noCount }
  ];

  // BLUE: #3366CC
  // YELLOW: #FF9900
  // RED: #DC3912
  // GREEN: #109618

  const COLORS = ['#3366CC', '#FF9900'];

  return (
    <div>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default YesNoPieChart;
