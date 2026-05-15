import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sobadanuwahab" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/soba-danu-wahab-5154a1203/" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/sobadanu/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
