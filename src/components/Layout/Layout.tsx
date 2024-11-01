import Header from './Header/Header.tsx';
import Footer from './Footer/Footer.tsx';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
