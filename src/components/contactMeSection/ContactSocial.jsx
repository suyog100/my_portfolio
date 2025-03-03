import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/suyog-manandhar-a68589280/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial link="https://github.com/suyog100" Icon={FiGithub} />
      <SingleContactSocial
        link="https://www.facebook.com/profile.php?id=100087345199735"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
