import styles from "../styles/TaskCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/fixmen.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Task Number</h1>
      <span className={styles.price}>$19.90/hour</span>
      <p className={styles.desc}>Write some description here.</p>
    </div>
  );
};

export default PizzaCard;
