import Head from 'next/head';
import Header from './header';

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
    </div>
  );
};

export default Layout;
