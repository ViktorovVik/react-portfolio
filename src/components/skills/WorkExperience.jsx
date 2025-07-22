import experience from "../../data/workExperience.js";

const WorkExperience = () => {
  return (
    <div className="education work-exp">
      <h3 className="work-exp-title">Work & Experience</h3>
      <div className="skills-info">
        {experience.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="upper">
              <h3>{item.title}</h3>
              <h5>{item.employment}</h5>
              <span>{item.period}</span>
            </div>
            <div className="hr"></div>
            <h4 className="label">{item.company}</h4>
            <p>{item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;