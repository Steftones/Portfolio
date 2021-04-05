import React from 'react'

const TechSkills = ({ skills, classes }) => {

  const mapSkills = skills.map((skill, index) => <div key={index} className="skillBox">
    <div className={`${classes} devicon-${skill[0]}`} title={skill[1]}/>
      {classes === 'smallSkillIcons' ? null : <span className={`skillIcons ${classes}`}>{skill[1]}</span>}
    </div>
  )

  return <div className={"skillIcons"}>{mapSkills}</div>
  
}

export default TechSkills