import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function Chart_v2(){
    const data = [
        {
          name: "Item 1",
          score: 1700
        },
        {
          name: "Item 2",
          score: 4000
        },
        {
          name: "Item 3",
          score: 2700
        },
        {
          name: "Item 4",
          score: 4300
        },
        {
          name: "Item 5",
          score: 6300
        }
      ];
    return(
        <>    
    <ResponsiveContainer width="50%" height={400}>
      <BarChart data={data}>
        <Bar dataKey="score" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Tooltip />
        <CartesianGrid />
      </BarChart>
    </ResponsiveContainer>
    </>
    );
}