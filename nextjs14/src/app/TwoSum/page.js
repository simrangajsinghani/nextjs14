"use client";
import { useState } from "react";

const TwoSumPage = () => {
  const [numbers, setNumbers] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState([]);

  // Function to handle two sum logic
  function findTwoSum(numbersArray, targetValue) {
    const map = new Map();

    for (let i = 0; i < numbersArray.length; i++) {
      const num = numbersArray[i];
      const complement = targetValue - num;

      if (map.has(complement)) {
        return [map.get(complement) + 1, i + 1];
      }
      map.set(num, i);
    }

    return [];
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const numbersArray = numbers.split(",").map(Number);
    const targetValue = parseInt(target, 10);

    const twoSumResult = findTwoSum(numbersArray, targetValue);
    setResult(twoSumResult);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl mb-4">Two Sum Problem</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter numbers (comma separated):
          </label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="e.g., 2,7,11,15"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter target sum:
          </label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="e.g., 9"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Find Two Sum
        </button>
      </form>

      {result.length > 0 ? (
        <div className="mt-4 text-lg">
          <p>
            Indices: [{result[0]}, {result[1]}]
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default TwoSumPage;
