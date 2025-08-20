import React from "react";
import { useParams } from "react-router-dom";

const TasksAndJobs = () => {
  const { task_and_job } = useParams();
  return <div>Tasksand {task_and_job}</div>;
};

export default TasksAndJobs;
