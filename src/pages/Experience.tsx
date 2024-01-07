import { useState } from "react";
import MainHeading from "../components/MainHeading";

const Experience = () => {
  const List = [
    {
      title: "Celebal Technologies",
      role: "Associate",
      duration: "September 2021 - present",
      description: [
        "Adept in React.js, leading the implementation of dynamic and efficient user interfaces, contributing to the success of projects.",
        "Extensive experience in various frontend technologies beyond React, including HTML, CSS, and JavaScript, ensuring a comprehensive approach to development.",
        "Proven leadership in a team environment, guiding frontend development efforts and successfully delivering multiple projects, showcasing effective project management and collaboration skills",
      ],
    },
    {
      title: "Celebal Technologies",
      role: "Associate",
      duration: "September 2021 - present",
      description: [
        "Adept in React.js, leading the implementation of dynamic and efficient user interfaces, contributing to the success of projects.",
        "Extensive experience in various frontend technologies beyond React, including HTML, CSS, and JavaScript, ensuring a comprehensive approach to development.",
        "Proven leadership in a team environment, guiding frontend development efforts and successfully delivering multiple projects, showcasing effective project management and collaboration skills",
      ],
    },
  ];
  const [selectedList, setSelectedList] = useState(List[0]);
  return (
    <div className="container experience">
      <MainHeading title="Experience" className="" />
      <div className="experience_container">
        <div className="experience_container-left">
          {List.map((ele) => (
            <p className="experience_title">{ele.title}</p>
          ))}
        </div>
        <div className="experience_container-right">
          <h3>{`${selectedList.role} @ ${selectedList.title}`}</h3>
          <p>{selectedList.duration}</p>
          <ul>
            {selectedList.description.map((item) => (
              <li>
                <span>{`->`} </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
