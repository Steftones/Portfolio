import React from 'react'

const TechSkills = ({ skills }) => {

  const mapSkills2 = skills.map((skill, index) => <div key={index} className="iconContainer">
  <div className={`devicon-${skill[0]} iconLogo`}></div>
  <div style={{ fontSize: '13px' }}>{skill[1]}</div>
  </div>)

  return <div className={"skillIcons"}>{mapSkills2}</div>
  
}

export default TechSkills