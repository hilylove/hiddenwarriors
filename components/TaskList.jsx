import styles from "../styles/TaskList.module.css";
import TaskCard from "./TaskCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FIND YOUR BEST WAY TO SOLVE PROBLEM</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
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

export default PizzaList;
