import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FriendContext } from '../../Context/FriendProvider';

const InteractionChart = () => {
  const { storeCall, storeText, storeVideo } = useContext(FriendContext);

  const data = [
    { name: 'Call', value: storeCall.length, color: '#244D3F' }, // Your theme green
    { name: 'Text', value: storeText.length, color: '#8B5CF6' }, // Purple
    { name: 'Video', value: storeVideo.length, color: '#5BA46F' }, // Lighter green
  ];

  return (
    <div className="card bg-white shadow-sm border border-gray-100 p-8 rounded-2xl w-full h-[450px]">
      <h3 className="text-xl font-bold text-[#1F2937] mb-4">By Interaction Type</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="95%"
            paddingAngle={8}
            cornerRadius={40} // Creates the rounded ends shown in your reference
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend 
            verticalAlign="bottom" 
            align="center"
            iconType="circle"
            formatter={(value) => <span className="text-gray-500 font-medium ml-2">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InteractionChart;