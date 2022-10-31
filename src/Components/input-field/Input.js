import styles from "./Input.module.css";

const Input = ({ name, placeholder, type, changeHandler, value }) => {
  return (
    <div className={`${styles.input__wrapper}`}>
      <input
        type={type}
        name={name}
        className={`${styles.input__field}`}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
      {value && <i className={`fa-solid fa-circle-check ${styles.icon}`}></i>}
    </div>
  );
};

export default Input;
