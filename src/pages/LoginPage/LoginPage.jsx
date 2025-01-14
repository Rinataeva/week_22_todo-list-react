import { useState } from "react";
import styles from "./loginPage.module.css";

export function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("Please enter user name and password");
      return;
    }  
    console.log('Login successful');
    setError("");
  };
 
  return (
    <main className={styles.login__content}>
      <h1>Please log in</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__inputGroup}>
          <label htmlFor="userName" className={styles.label}>
            User name
          </label>
          <input
            type="text"
            id="userName"
            className={styles.input}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
          />
        </div>

        <div className={styles.form__inputGroup}>
          {" "}
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />{" "}
        </div>
        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          Log in
        </button>
      </form>
    </main>
  );
}
