import React from "react";

function ProjectItem({ name, about, technologies }) {
  const Technology = technologies.map((tech) => {
    return (<span>{tech}</span>)
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {Technology}
      </div>
    </div>
  );
}

export default ProjectItem;
