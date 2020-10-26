import React from "react";

const Skill = ({skills}) => {

  return (
    <table>
      <thead>
        <th>Skill name</th>
        <th>Description</th>
      </thead>
      <tbody>
        {skills.map(item => (
          <tr>
            <td>{item.skill_name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Skill;
