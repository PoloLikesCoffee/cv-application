import React from 'react';
import EducationItem from './EducationItem';

const Education = ({
	education,
	addEducationBackground,
	deleteEducationBackground,
	handleChangeEducation,
	onSubmit,
}) => {
	const educationItems = education.map((edu) => (
		<EducationItem
			key={edu.id}
			id={edu.id}
			edu={edu}
			handleChangeEducation={handleChangeEducation}
			deleteEducationBackground={deleteEducationBackground}
			onSubmit={onSubmit}
		/>
	));
	return (
		<div className="education">
			<div className="header-main">
				<h2>
					<i className="fas fa-school"></i> Education Background
				</h2>
				<button
					type="button"
					className="btn add"
					onClick={addEducationBackground}
				>
					<i className="fas fa-plus-square"></i>
				</button>
			</div>
			{educationItems}
		</div>
	);
};

export default Education;
