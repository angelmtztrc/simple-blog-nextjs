const Footer = () => {
  return (
    <footer className="container mx-auto flex justify-between items-center mt-14 py-4">
      <div>
        <p className="text-base text-gray-600">
          Made with ❤️ by{' '}
          <a className="text-gray-900" href="https://github.com/angelmtztrc">
            @angelmtztrc
          </a>
        </p>
      </div>
      <div>
        <a href="https://www.buymeacoffee.com/angelmtztrc" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
            alt="Buy Me A Coffee"
            className="h-12 w-44"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
