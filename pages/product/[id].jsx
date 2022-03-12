import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [hour, setHour] = useState(0);
  const task = {
    id: 1,
    img: "/img/task.png",
    name: "TASK NAME",
    duration: [1, 2, 3],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={task.img} objectFit="contain" alt="" layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{task.name}</h1>
        <span className={styles.price}>${task.duration[hour]}</span>
        <p className={styles.desc}>{task.desc}</p>
        <h3 className={styles.choose}>Choose the time</h3>
        <div className={styles.hours}>
          <div className={styles.hour} onClick={() => setHour(0)}>
            <Image src="/img/hour.png" alt="" layout="fill" />
            <span className={styles.number}>1</span>
          </div>
          <div className={styles.hour} onClick={() => setHour(1)}>
            <Image src="/img/hour.png" alt="" layout="fill" />
            <span className={styles.number}>2</span>
          </div>
          <div className={styles.hour} onClick={() => setHour(2)}>
            <Image src="/img/hour.png" alt="" layout="fill" />
            <span className={styles.number}>3</span>
          </div>
        </div>
        <h3 className={styles.choose}>Write additional details</h3>
        <div className={styles.details}>
          <input
            type="text"
            name="double"
            id="double"
            className={styles.text}
          />
        </div>
        <div className={styles.add}>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
