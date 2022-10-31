import Headers from "../Components/header-component/Headers";

const Layout = ({ children }) => {
  return (
    <>
      <Headers />
      {children}
    </>
  );
};

export default Layout;
