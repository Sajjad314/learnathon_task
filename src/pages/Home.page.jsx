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
    <div>
      {methodList.map((method, index) => {
        return (
          <div key={index}>
            <button onClick={() => handleButtonClick(method)}>{method}</button>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
