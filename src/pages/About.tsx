import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiReactquery,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { IMAGES } from "../assets";
import MainHeading from "../components/MainHeading";
const About = () => {
  const skills = [
    { icons: <FaHtml5 />, title: "HTML" },
    { icons: <FaCss3 />, title: "CSS" },
    { icons: <IoLogoJavascript />, title: "JavaScript" },
    { icons: <FaReact />, title: "ReactJS" },
    { icons: <SiReactquery />, title: "React Query" },
    { icons: <SiTypescript />, title: "TypeScript" },
    { icons: <FaSass />, title: "Sass" },
    { icons: <SiMui />, title: "Material-UI" },
    { icons: <FaGitAlt />, title: "GIT" },
    { icons: <SiVite />, title: "Vite" },
    { icons: <GiBearFace />, title: "Zustand" },
    { icons: <FaNodeJs />, title: "NodeJS" },
    { icons: <SiExpress />, title: "Express" },
    { icons: <SiMongodb />, title: "MongoDB" },
  ];

  return (
    <div className="about container">
      <div className="about_left">
        <div className="about_left-inner">
          <MainHeading className="about_mainHeading" title="About" />
          <p className="description">
            As a Frontend Developer based in India, I am deeply committed to
            delivering exceptional user experiences. With expertise in React.js
            and cutting-edge web technologies, I bring a unique fusion of
            creativity and technical proficiency to each project. From the
            outset of my professional journey, I have championed a relentless
            pursuit of excellence, recognizing the transformative impact of
            technology on user interactions. My work reflects a dedication to
            innovation and a passion for elevating digital experiences.
          </p>
        </div>
        <img src={IMAGES.skillsIllustration} />
      </div>
      <div className="about_right">
        <MainHeading title="Skills" className="" />
        <div className="about_right-skills">
          {skills.map((ele) => {
            const styleObj = [
              "ReactJS",
              "TypeScript",
              "NodeJS",
              "Sass",
              "Zustand",
            ].includes(ele.title)
              ? { fontWeight: 600, fontSize: "1rem" }
              : {};
            return (
              <div className="skill_chips">
                {ele.icons}
                <p style={styleObj}>{ele.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
