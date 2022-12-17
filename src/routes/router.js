import Home from "../pages/Home";
import TaskManage from "../pages/TaskManage";
import { Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<TaskManage/>}/>
    </Routes>
  );
};

export default routes;
