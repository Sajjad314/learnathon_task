import React from "react";
import { AlgorithmList } from "../../Constant/AlgorithmDescription";
import BinarySearchImplementation from "../../Components/BinarySearchImpl.component";

const BinarySearchPage = () => {
  return (
    <div className="container">
      <div className="mt-4">
        <h2>
          {
            AlgorithmList.find(() => (obj) => obj.title === "Binary Search")
              .title
          }
        </h2>
        <p>
          {
            AlgorithmList.find(() => (obj) => obj.title === "Binary Search")
              .desc
          }
        </p>
      </div>

      <div className="mt-4">
        <BinarySearchImplementation />
      </div>
    </div>
  );
};

export default BinarySearchPage;
