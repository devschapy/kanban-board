import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TaskManage from "../pages/TaskManage";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<TaskManage/>}/>
    </Routes>
  );
};

export default routes;
