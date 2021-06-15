import React from 'react';
import SkillItem from './SkillItem';

const Skill = ({
	info,
	addSkill,
	deleteSkill,
	handleChangeSkill,
	onSubmit,
}) => {
	const skillItems = info.skills.map((skill) => (
		<SkillItem
			key={skill.id}
			id={skill.id}
			skill={skill}
			handleChangeSkill={handleChangeSkill}
			deleteSkill={deleteSkill}
			onSubmit={onSubmit}
		/>
	));
	return (
		<div className="skill">
			<div className="header-main">
				<h2>{/* <i className="fas fa-tools"></i> */} Skills</h2>
				<button type="button" className="btn add" onClick={addSkill}>
					<i className="fas fa-plus-square"></i>
				</button>
			</div>
			{skillItems}
		</div>
	);
};

export default Skill;
