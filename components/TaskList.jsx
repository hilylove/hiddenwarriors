import styles from "../styles/TaskList.module.css";
import Category from "./Category";
import TaskCard from "./TaskCard";
import axios from "axios";
import { useState, useEffect } from "react";

const TaskList = () => {
  const [taskerList, setTaskerList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8080/taskers");
    setTaskerList(result.data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FIND YOUR BEST WAY TO SOLVE PROBLEM</h1>
      <div className={styles.category}>
        <Category />
      </div>
      <div className={styles.wrapper}>
        {taskerList.map((tasker) => {
          return (
            <TaskCard
              task={tasker.Name}
              cate={tasker.Category}
              loca={tasker.Location}
              pric={tasker.Price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
