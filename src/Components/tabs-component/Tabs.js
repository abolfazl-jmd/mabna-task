import styles from "./Tabs.module.css";

const Tabs = () => {
  return (
    <div className={`${styles.tabs}`}>
      <span className={`${styles.tabs__item} ${styles.activeTab}`}>
        شرکت ایرانی
      </span>
      <span className={`${styles.tabs__item}`}>نماینده شرکت خارجی</span>
    </div>
  );
};

export default Tabs;
