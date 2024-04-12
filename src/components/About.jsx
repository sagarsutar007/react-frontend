import Navbar from "./Navbar";
import Style from "./css/Navbar.module.css";

const About = () => {
  return (
    <>
      <Navbar />
      <p className={Style.customText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id optio,
        iste maxime provident veniam impedit qui non a nobis labore mollitia
        vitae ea magnam quia dignissimos sapiente? Recusandae, corrupti.
      </p>
    </>
  );
};

export default About;
