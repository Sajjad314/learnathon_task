import React from "react";
import { AlgorithmList } from "../../Constant/AlgorithmDescription";
import BinarySearchImplementation from "../../Components/BinarySearchImpl.component";

const BinarySearchPage = () => {
  return (
    <div>
      <div>
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
      <BinarySearchImplementation />
    </div>
  );
};

export default BinarySearchPage;
