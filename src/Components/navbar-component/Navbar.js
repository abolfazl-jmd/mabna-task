import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`${styles.navbar__list}`}>
        <li className={`${styles.navbar__list__item}`}>
          <i className={`fa-regular fa-message ${styles.icon}`}></i>
          <span className={`${styles.list__item__name}`}>پیام ها</span>
        </li>
        <li className={`${styles.navbar__list__item}`}>
          <i className={`fa-regular fa-clock ${styles.icon}`}></i>
          <span className={`${styles.list__item__name}`}>فعالیت های اخیر</span>
        </li>
        <li className={`${styles.navbar__list__item}`}>
          <i className={`fa-regular fa-credit-card ${styles.icon}`}></i>
          <span className={`${styles.list__item__name}`}>سفارش ها</span>
        </li>
        <li
          className={`${styles.navbar__list__item} ${styles.navbarActiveItem}`}
        >
          <i className={`fa-regular fa-user ${styles.icon}`}></i>
          <span className={`${styles.list__item__name}`}>پروفایل</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
