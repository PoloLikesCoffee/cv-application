import React from 'react';

const SkillItem = ({ skill, id, handleChangeSkill, deleteSkill, onSubmit }) => {
	return (
		<div className="skill-form">
			<form onSubmit={onSubmit} id={id}>
				<div className="info1">
					<label htmlFor="skillName" className="form-label"></label>
					<input
						type="text"
						className="form-control"
						name="skillName"
						onChange={(e) => handleChangeSkill(e, id)}
						value={skill.skillName}
					/>
				</div>
				<button
					type="button"
					className="btn delete-skill"
					onClick={(e) => deleteSkill(e, id)}
				>
					{/* <i className="fas fa-backspace"></i> */}
					<i className="fas fa-trash-alt"></i>
				</button>
			</form>
		</div>
	);
};

export default SkillItem;
