const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-6 h-[320px]">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Kraila Mohammed Islam. All Rights
          Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/kraila-mohammed-islam-912358241"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Kislame?tab=repositories"
            className="hover:text-gray-400"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="mailto:krailamohammedislam@gmail.com"
            className="hover:text-gray-400"
            aria-label="Email"
          >
            Email
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Designed and built by Kraila Mohammed Islam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
