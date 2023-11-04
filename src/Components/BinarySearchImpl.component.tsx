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
  const [numbers, setNumbers] = useState<number[]>([]);
  const [targetInput, setTargetInput] = useState("");
  const [steps, setSteps] = useState<stepObject[]>([]);
  const [result, setResult] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const handleArrayInputChange = (event) => {
    setIsSearched(false);
    setArrayInput(event.target.value);
  };

  const handleTargetInputChange = (event) => {
    setIsSearched(false);
    setTargetInput(event.target.value);
  };

  const addToList = () => {
    const arr = arrayInput.split(",").map((item) => parseInt(item.trim()));
    const validArr = arr.filter(
      (item) => typeof item === "number" && !isNaN(item)
    );

    setNumbers([...numbers, ...validArr].sort());
    setArrayInput("");
  };

  const binarySearch = (type) => {
    setIsSearched(true);
    const target = parseInt(targetInput);
    let left = 0;
    let right = numbers.length - 1;
    let newSteps: stepObject[] = [];
    if (type === "Exact") exactSearch(left, right, newSteps, target);
    else if (type === "Left")
      lowerBoundBinarySearch(left, right, newSteps, target);
    else upperBoundBinarySearch(left, right, newSteps, target);
  };

  const exactSearch = (left, right, newSteps, target) => {
    while (right - left >= 1) {
      const middle = Math.floor((left + right) / 2);
      const middleValue = numbers[middle];
      newSteps.push({
        left,
        right,
        middle,
        middleValue,
      });

      if (middleValue === target) {
        setResult("Element " + targetInput + " is present at index: " + middle);
        setSteps(newSteps);
        return;
      } else if (middleValue < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    setResult("Element " + targetInput + " not found in the array");

    setSteps(newSteps);
  };

  const upperBoundBinarySearch = (left, right, newSteps, target) => {
    while (right - left > 1) {
      const middle = Math.floor((left + right) / 2);
      const middleValue = numbers[middle];
      newSteps.push({
        left,
        right,
        middle,
        middleValue,
      });
      if (numbers[middle] <= target) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
    if (numbers[left] > target) {
      setResult("Upperbound for " + targetInput + " is at index: " + left);
    } else if (numbers[right] > target) {
      setResult("Upperbound for " + targetInput + " is at index: " + right);
    } else {
      setResult("Upperbound for " + targetInput + " not found in the array");
    }
    setSteps(newSteps);
  };

  const lowerBoundBinarySearch = (left, right, newSteps, target) => {
    while (right - left > 1) {
      const middle = Math.floor((left + right) / 2);
      const middleValue = numbers[middle];
      newSteps.push({
        left,
        right,
        middle,
        middleValue,
      });
      if (numbers[middle] >= target) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    if (numbers[left] >= target) {
      setResult("Lowerbound for " + targetInput + " is at index: " + left);
    } else if (numbers[right] >= target) {
      setResult("Lowerbound for " + targetInput + " is at index: " + right);
    } else {
      setResult("Lowerbound for " + targetInput + " not found in the array");
    }
    setSteps(newSteps);
  };

  return (
    <div className="container">
      {numbers && (
        <div>
          <h2>Numbers:</h2>
          <p>
            {numbers.map((number, index) => (
              <span key={index} className="badge bg-primary me-2">
                {number}
              </span>
            ))}
          </p>
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="arrayInput" className="form-label">
          Sorted Array (comma-separated):
        </label>
        <div className="input-group">
          <input
            type="text"
            id="arrayInput"
            className="form-control"
            value={arrayInput}
            onChange={handleArrayInputChange}
          />
          <button className="btn btn-primary" onClick={addToList}>
            Add
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="targetInput" className="form-label">
          Target Value:
        </label>
        <input
          type="number"
          id="targetInput"
          className="form-control"
          value={targetInput}
          onChange={handleTargetInputChange}
        />
      </div>

      <div className="mb-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => binarySearch("Exact")}
        >
          Exact Search
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => binarySearch("Left")}
        >
          Left Search
        </button>
        <button
          className="btn btn-primary"
          onClick={() => binarySearch("Right")}
        >
          Right Search
        </button>
      </div>

      {isSearched && numbers.length && targetInput && (
        <div className="mb-3">
          <h2>Result:</h2>
          <p className="badge bg-success">{result}</p>
        </div>
      )}

      {isSearched && numbers.length && targetInput && (
        <div className="mb-3">
          <h2>Search Steps:</h2>
          <ul className="list-group">
            {steps.map((step, index) => (
              <li key={index} className="list-group-item">
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
