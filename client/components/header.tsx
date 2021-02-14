import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center container mx-auto py-8">
      <div className="text-gray-900 text-4xl font-extrabold">Simple Blog.</div>
      <nav className="flex items-center space-x-2">
        <Link href="/">
          <a className="text-base text-gray-900 uppercase">Home</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
