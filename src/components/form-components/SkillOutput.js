import React from 'react';

const SkillOutput = (props) => {
	const { info } = props;

	return (
		<div className="skill-output">
			<div className="header-output">
				<h2>Skills</h2>
			</div>
			<ul className="skill-main">
				{info.skills.map((skill) => {
					return <li key={skill.id}>{skill.skillName}</li>;
				})}
			</ul>
		</div>
	);
};

export default SkillOutput;
