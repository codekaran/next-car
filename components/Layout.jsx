import Nav from "./Nav.jsx";

const Layout = ({ children }) => {
  console.log(children);
  return (
    //
    <>
      <Nav></Nav>
      {children}
    </>
  );
};

export default Layout;
