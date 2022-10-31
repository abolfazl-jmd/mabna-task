import Headers from "../Components/header-component/Headers";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Headers />
      <div class={`${styles.container}`}>{children}</div>
    </>
  );
};

export default Layout;
