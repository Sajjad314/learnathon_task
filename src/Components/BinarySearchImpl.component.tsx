import { useState } from "react";
import React from "react";

type stepObject = {
  left: number;
  right: number;
  middle: number;
  middleValue: number;
};

const BinarySearchImplementation = () => {
  const [arrayInput, setArrayInput] = useState("");
  const [targetInput, setTargetInput] = useState("");
  const [steps, setSteps] = useState<stepObject[]>([]);
  const [result, setResult] = useState(-1);
  const [isSearched, setIsSearched] = useState(false);

  const handleArrayInputChange = (event) => {
    setIsSearched(false);
    setArrayInput(event.target.value);
  };

  const handleTargetInputChange = (event) => {
    setIsSearched(false);
    setTargetInput(event.target.value);
  };

  const binarySearch = () => {
    setIsSearched(true);
    const arr = arrayInput
      .split(",")
      .map((item) => parseInt(item.trim()))
      .sort((a, b) => a - b);
    const target = parseInt(targetInput);
    let left = 0;
    let right = arr.length - 1;
    let newSteps: stepObject[] = [];

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const middleValue = arr[middle];
      newSteps.push({
        left,
        right,
        middle,
        middleValue,
      });

      if (middleValue === target) {
        setResult(middle);
        setSteps(newSteps);
        return;
      } else if (middleValue < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    setResult(-1);
    setSteps(newSteps);
  };

  return (
    <div>
      <div>
        <label>Sorted Array (comma-separated):</label>
        <input
          type="text"
          value={arrayInput}
          onChange={handleArrayInputChange}
        />
      </div>
      <div>
        <label>Target Value:</label>
        <input
          type="number"
          value={targetInput}
          onChange={handleTargetInputChange}
        />
      </div>
      <button onClick={binarySearch}>Search</button>
      {isSearched && arrayInput && targetInput && (
        <div>
          {result !== -1 ? (
            <p>
              Element {targetInput} found at index {result}
            </p>
          ) : (
            <p>Element {targetInput} not found in the array</p>
          )}
        </div>
      )}
      {isSearched && arrayInput && targetInput && (
        <div>
          <h2>Search Steps:</h2>
          <ul>
            {steps.map((step, index) => (
              <li key={index}>
                Left: {step.left}, Right: {step.right}, Middle: {step.middle},
                Middle Value: {step.middleValue}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BinarySearchImplementation;
