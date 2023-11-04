import { useNavigate } from "react-router-dom";
import { uiPaths } from "../paths";

const HomePage = () => {
  const methodList = ["Binary Search"];

  const navigate = useNavigate();

  const handleButtonClick = (methodName) => {
    if (methodName === "Binary Search") {
      navigate(uiPaths.BinarySearch);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center my-4">List of Methods</h1>
      <ul className="list-group">
        {methodList.map((method, index) => {
          return (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleButtonClick(method)}
            >
              {method}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
