import { IMAGES } from "../assets";
import MainHeading from "../components/MainHeading";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "React Query",
    "TypeScript",
    "Sass",
    "Material-UI",
    "GIT",
    "Vite",
    "Zustand",
    "NodeJS",
    "Express",
    "MongoDB",
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
            return <p className="skill_chips">{ele}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
