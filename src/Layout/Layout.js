import Headers from "../Components/header-component/Headers";
import Navbar from "../Components/navbar-component/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Headers />
      <div className={`${styles.container}`}>{children}</div>
      <Navbar />
    </>
  );
};

export default Layout;
