import Header from './Header/Header.tsx';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
