import React from 'react';

const EducationOutput = (props) => {
	const { education } = props;

	return (
		<div className="education-output">
			<div className="header-output">
				<h2>Education Background</h2>
			</div>
			<ul>
				{education.map((edu) => {
					return (
						<li key={edu.id}>
							<div className="header-education">
								<h4>{edu.degree}</h4>
								<div className="details-education">
									{edu.schoolName}
									<span>
										{edu.from} - {edu.to}
									</span>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default EducationOutput;
