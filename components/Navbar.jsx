import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Find your solution HERE</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Home</li>
          </Link>
          {/* <Link href="/category">
            <li className={styles.listItem}>Category</li>
          </Link> */}
          <Link href="/appointment/id">
            <li className={styles.listItem}>Appointment</li>
          </Link>
          <Link href="/orders/id">
            <li className={styles.listItem}>Orders</li>
          </Link>

          <Image src="/img/logo.png" alt="" width="260px" height="163px" />
          <li className={styles.listItem}>Video</li>
          <li className={styles.listItem}>Partners</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/account/register">
          <button className={styles.button}>Register</button>
        </Link>
        <Link href="/account/login">
          <button className={styles.button}>Login</button>
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/cart">
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          </Link>

          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
