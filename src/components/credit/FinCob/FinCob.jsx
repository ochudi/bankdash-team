import React from "react";
import CardExpense from "../Expelist/CardExpense";
import CardList from "../Expelist/CardList";
import "./FinCob.css";
const FinalCob = () => {
  return (
    <div
      className="parent-container"
      style={{
        display: "flex",
        gap: "0%", // Adds space between the two components
        alignItems: "flex-start", // Aligns them properly at the top
        justifyContent: "center", // Centers them on the page
      }}>
      {/* Card Expense Component */}
      <div
        style={{
          flex: 1,
          maxWidth: "360px",
          marginLeft: "0",
          position: "relative",
          left: "2%",
        }}>
        <CardExpense />
      </div>

      {/* Card List Component */}
      <div style={{ flex: 1, maxWidth: "750px", marginRight: "0" }}>
        <CardList />
      </div>
    </div>
  );
};

export default FinalCob;
