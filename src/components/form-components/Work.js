import React from 'react';
import WorkItem from './WorkItem';

const Work = ({
	info,
	addWorkExperience,
	deleteWorkExperience,
	handleChangeWork,
	onSubmit,
}) => {
	const workItems = info.works.map((work) => (
		<WorkItem
			key={work.id}
			id={work.id}
			work={work}
			handleChangeWork={handleChangeWork}
			deleteWorkExperience={deleteWorkExperience}
			onSubmit={onSubmit}
		/>
	));
	return (
		<div className="work">
			<div className="header-main">
				<h2>{/* <i className="fas fa-briefcase"></i> */} Work Experience</h2>
				<button type="button" className="btn add" onClick={addWorkExperience}>
					<i className="fas fa-plus-square"></i>
				</button>
			</div>
			{workItems}
		</div>
	);
};

export default Work;
