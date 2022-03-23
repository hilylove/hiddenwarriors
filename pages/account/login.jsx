import styles from "../../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Login Dashboard</h1>
        <input placeholder="username" className={styles.input} />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
        />
        <button className={styles.button}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
