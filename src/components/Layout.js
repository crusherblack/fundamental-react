const Layout = ({ children }) => {
  return (
    <div>
      <h1>Buka Layout</h1>
      <section>{children}</section>
      <h1>Tutup Layout</h1>
    </div>
  );
};

export default Layout;
