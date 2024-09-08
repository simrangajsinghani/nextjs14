// pages/calculator.js
"use client";
import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState(null);

  const handleAdd = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      setTotal(number1 + number2);
    } else {
      alert("Please enter valid numbers");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold mb-6">Simple Calculator</h1>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="mb-4 p-3 w-full border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="mb-4 p-3 w-full border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAdd}
          className="mb-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
        <div className="text-lg">
          {total !== null ? `Total: ${total}` : "Total: "}
        </div>
      </div>
    </div>
  );
}
