import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/footer.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, YOU CAN ALWAYS FIND THE RIGHT PERSON TO SOLVE YOUR PROBLEM.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>AVAILABLE SERVICE HERE</h1>
          <p className={styles.text}>
            XXX King Street
            <br /> Waterloo,Ontario
          </p>
          <p className={styles.text}>
            XXX Queen Street
            <br /> Guelph,Ontario
          </p>
          <p className={styles.text}>
            XXX Man Street
            <br /> London,Ontario
          </p>
          <p className={styles.text}>
            XXX Happy Street
            <br /> Toronto,Ontario
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 20:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
