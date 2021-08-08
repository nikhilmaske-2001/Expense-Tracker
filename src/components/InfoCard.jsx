import React from "react";

// isIncome will be 0 or 1
// 0 and 1 have the same probability
const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying:
      <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "₹100 " : "₹50 "}
      in Category {isIncome ? "Business " : "House "}
      for {isIncome ? "Monday " : "Tuesday "}
    </div>
  );
};

export default InfoCard;
