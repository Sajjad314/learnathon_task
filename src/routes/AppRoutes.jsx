import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home.page";
import { uiPaths } from "../paths";
import BinarySearchPage from "../pages/methods/BinarySearch.page";

const AppRoutes = () => {
  const { BinarySearch, Index } = uiPaths;
  return (
    <Routes>
      <Route path={Index} element={<HomePage />}></Route>
      <Route path={BinarySearch} element={<BinarySearchPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
