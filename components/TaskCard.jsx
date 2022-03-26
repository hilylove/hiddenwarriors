import styles from "../styles/TaskCard.module.css";
import Image from "next/image";

const TaskCard = ({ task, cate, loca, pric }) => {
  console.log(task, cate, loca, pric);
  return (
    <div className={styles.container}>
      <Image src="/img/fixmen.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>{task}</h1>
      <span className={styles.category}>{cate}</span>
      <span className={styles.location}>{loca}</span>
      <span className={styles.price}>{pric}</span>
      <button className={styles.button}>Make an appointment</button>
    </div>
  );
};

export default TaskCard;
