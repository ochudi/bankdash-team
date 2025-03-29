import React from "react";
import CustomHeading from "./CustomHeading";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Bill Expense", value: 15 },
  { name: "Entertainment", value: 30 },
  { name: "Investment", value: 30 },
  { name: "Others", value: 25 },
];

const COLORS = ["#FC7900", "#343C6A", "#FA00FF", "#1814F3"];

const ExpenseStatistics = ({ className }) => {
  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    payload,
  }) => {
    // Calculate position for the label
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    // Format percent value
    const formattedPercent = `${(percent * 100).toFixed(0)}%`;

    return (
      <g>
        <text
          x={x}
          y={y - 10}
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={12}
          fontWeight="bold"
        >
          {formattedPercent}
        </text>
        <text
          x={x}
          y={y + 10}
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={12}
          fontWeight="bold"
        >
          {payload.name}
        </text>
      </g>
    );
  };

  return (
    <div className={`${className} flex flex-col`}>
      <CustomHeading title="Expense Statistics" />
      {/* Card container with responsive width and height */}
      <div className="bg-white rounded-xl shadow-lg w-full h-full">
        {/* Chart container with responsive dimensions */}
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                stroke="#FFFFFF"
                strokeWidth={8}
                fill="#8884d8"
                dataKey="value"
                label={CustomLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
