import React from "react";
import CustomHeading from "./CustomHeading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sat", deposit: 320, withdraw: 240 },
  { day: "Sun", deposit: 300, withdraw: 139 },
  { day: "Mon", deposit: 200, withdraw: 400 },
  { day: "Tue", deposit: 278, withdraw: 308 },
  { day: "Wed", deposit: 189, withdraw: 100 },
  { day: "Thu", deposit: 239, withdraw: 250 },
  { day: "Fri", deposit: 349, withdraw: 230 },
];

// Custom Legend for the bar chart
const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="flex justify-end items-center text-sm mb-2 capitalize">
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center ml-4">
          <div
            className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-1"
            style={{ backgroundColor: entry.color }}
          />
          <span style={{ color: "#718EBF" }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const WeeklyActivity = ({ className = "" }) => {
  return (
    <div className={`${className} flex flex-col`}>
      <CustomHeading title="Weekly Activity" />
      {/* <div className="w-full h-[calc(100%-30px)] max-w-full rounded-lg"> */}
      {/* Card container with responsive width and height */}
      <div className="bg-white rounded-xl shadow-lg p-4 w-full h-full">
        {/* Chart container with responsive dimensions */}
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 5,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF", fontSize: 12 }}
              />
              <YAxis
                domain={[0, 500]}
                axisLine={false}
                tickLine={false}
                tickCount={6}
                tick={{ fill: "#718EBF", fontSize: 12 }}
              />
              <Tooltip />
              <Legend
                content={<CustomLegend />}
                verticalAlign="top"
                align="right"
              />
              <Bar
                dataKey="deposit"
                fill="#1814F3"
                radius={[4, 4, 4, 4]}
                barSize={10}
              />
              <Bar
                dataKey="withdraw"
                fill="#16DBCC"
                radius={[4, 4, 4, 4]}
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default WeeklyActivity;
