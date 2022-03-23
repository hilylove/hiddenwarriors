import styles from "../../styles/Register.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Register Here</h1>
        <input placeholder="username" className={styles.input} />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        <button className={styles.button}>Cancel</button>
      </div>
    </div>
  );
};

export default Login;
