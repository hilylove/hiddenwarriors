import styles from "../styles/TaskList.module.css";
import Category from "./Category";
import TaskCard from "./TaskCard";

const TaskList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FIND YOUR BEST WAY TO SOLVE PROBLEM</h1>
      <div className={styles.category}>
        <Category />
      </div>
      <div className={styles.wrapper}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskList;
