import styles from "../styles/Category.module.css";
import Image from "next/image";

const Category = () => {
  const categories = [
    "cleaning",
    "gardening",
    "grooming",
    "electrician",
    "plumbing",
    "painting",
    "carpenter",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ul className={styles.buttons}>
          {categories.map((item) => (
            <li className={styles.buttonItem}>
              <button className={styles.button}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
