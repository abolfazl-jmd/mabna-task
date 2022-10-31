import styles from "./Header.module.css";

const Headers = () => {
  return (
    <header className={`${styles.header}`}>
      <span className={`${styles.header__icon}`}>
        <i className={`fa-solid fa-home ${styles.icon}`}></i>
      </span>
      <h1 className={`${styles.header__name}`}>پروفایل</h1>
      <span className={`${styles.header__icon}`}>
        <i className={`fa-solid fa-arrow-left ${styles.icon}`}></i>
      </span>
    </header>
  );
};

export default Headers;
