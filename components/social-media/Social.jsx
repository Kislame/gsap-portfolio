import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex  lg:justify-start   gap-4">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/kraila-mohammed-islam-912358241/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin fontSize={'32px'} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Kislame?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub fontSize={'32px'} />
      </a>

      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="instagram-link"
          src="/assets/instagram-svgrepo-com.svg"
          className="w-10 h-10"
        />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
