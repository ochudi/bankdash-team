import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "DBL Bank", value: 25, color: "#3464F3" },
  { name: "ABM Bank", value: 25, color: "#16DBCC" },
  { name: "BRC Bank", value: 25, color: "#FF82AC" },
  { name: "MCP Bank", value: 25, color: "#FFB11F" },
];

const CardExpense = () => {
  return (
    <div
      className="card-expense"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "350px", // Match width of CardList
        height: "310px", // Same height as CardList
        borderRadius: "20px",
        background: "transparent",
        padding: "20px",
      }}>
      {/* Heading outside the card at the top-left */}
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "22px",
          color: "#333B69",
          marginBottom: "10px",
        }}>
        Card Expense Statistics
      </h2>

      {/* Expense Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "350px",
          height: "310px",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}>
        {/* Pie Chart */}
        <PieChart
          width={188}
          height={186}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            paddingAngle={5}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Pie>
        </PieChart>

        {/* Legend Section - Grid Layout for Responsive Alignment */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
            marginTop: "10px",
            textAlign: "center",
            width: "100%",
            maxWidth: "300px",
            position: "relative",
            left: "20px",
          }}>
          {data.map((entry, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                color: "#718EBF",
              }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: entry.color,
                }}
              />
              {entry.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardExpense;
