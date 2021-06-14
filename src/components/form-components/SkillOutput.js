import React from 'react';

const SkillOutput = (props) => {
	const { skills } = props;

	return (
		<div className="skill-output">
			<div className="header-output">
				<h2>Skills</h2>
			</div>
			<ul className="skill-main">
				{skills.map((skill) => {
					return <li key={skill.id}>{skill.skillName}</li>;
				})}
			</ul>
		</div>
	);
};

export default SkillOutput;
