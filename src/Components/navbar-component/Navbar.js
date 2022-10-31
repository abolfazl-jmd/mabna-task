import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`${styles.navbar__list}`}>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles.navbar__list__item} ${styles.navbarActiveItem}`
                : `${styles.navbar__list__item} `
            }
            to="/notifications"
          >
            <i className={`fa-regular fa-message ${styles.icon}`}></i>
            <span className={`${styles.list__item__name}`}>پیام ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles.navbar__list__item} ${styles.navbarActiveItem}`
                : `${styles.navbar__list__item} `
            }
            to="/recent-activities"
          >
            <i className={`fa-regular fa-clock ${styles.icon}`}></i>
            <span className={`${styles.list__item__name}`}>
              فعالیت های اخیر
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles.navbar__list__item} ${styles.navbarActiveItem}`
                : `${styles.navbar__list__item} `
            }
            to="/submit-order"
          >
            <i className={`fa-regular fa-credit-card ${styles.icon}`}></i>
            <span className={`${styles.list__item__name}`}>سفارش ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles.navbar__list__item} ${styles.navbarActiveItem}`
                : `${styles.navbar__list__item} `
            }
            to="/"
          >
            <i className={`fa-regular fa-user ${styles.icon}`}></i>
            <span className={`${styles.list__item__name}`}>پروفایل</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
