import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const NumericBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis tickFormatter={(value) => `$${value}`} />
        <Tooltip />
        <Bar dataKey="value" fill="#DC3912" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default NumericBarChart;
