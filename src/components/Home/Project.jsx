import React from 'react'





function Project({project}){
  return(
    <div className="project">

      <div className = 'content dark-surface'>
  
        <h2 className = 'title'>{project.title}</h2>
        
        <div className = 'company'>
          <h3 >@{project.company}</h3>
          <div className = 'flex column jc-c'>
            <span>{project.date}</span>
          </div>
        </div>

        <h4 className = 'project-name'>{project.project}</h4>

        <ul className = 'bullets'>
          {project.bullets.map((bullet, index) => {
            return <li key = {index}>{bullet}</li>
          })}
        </ul>

        <div className = 'tech-stack'>
          {project.techStack.map((tech, index) => {
            return (
              <div className = 'tech'>
                <div className = 'logo' key = {index}>
                  <span>
                    {tech.logo}
                  </span>
                </div>
                <span>{tech.name}</span>
              </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Project;