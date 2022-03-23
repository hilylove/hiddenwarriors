import styles from "../styles/TaskCard.module.css";
import Image from "next/image";

const TaskCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/fixmen.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Tasker Name</h1>
      <span className={styles.category}>Category</span>
      <span className={styles.location}>Location</span>
      <span className={styles.price}>Price</span>
      <button className={styles.button}>Make an appointment</button>
    </div>
  );
};

export default TaskCard;
