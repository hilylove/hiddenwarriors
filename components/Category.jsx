import styles from "../styles/Category.module.css";
import Image from "next/image";

const Category = ({ onFilter }) => {
  const categories = [
    "cleaning",
    "gardening",
    "grooming",
    "electrician",
    "plumbing",
    "painting",
    "carpenter",
  ];

  console.log(`1`, onFilter);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ul className={styles.buttons}>
          {categories.map((item) => (
            <li className={styles.buttonItem}>
              <button onClick={() => onFilter(item)} className={styles.button}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
