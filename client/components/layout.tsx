import Head from 'next/head';

// components
import Header from './header';
import Footer from './footer';

export type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Simple Blog | {title}</title>
      </Head>
      <Header />
      <main className="container mx-auto mt-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
