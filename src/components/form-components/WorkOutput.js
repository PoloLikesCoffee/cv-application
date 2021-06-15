import React from 'react';

const WorkOutput = (props) => {
	const { info } = props;

	return (
		<div className="work-output">
			<div className="header-output">
				<h2>Work Experience</h2>
			</div>
			<ul>
				{info.works.map((work) => {
					return (
						<li key={work.id}>
							<div className="header-work">
								<h4>{work.positionTitle}</h4>
								<div className="details-work">
									{work.companyName}
									<span>
										{work.from} - {work.to}
									</span>
								</div>
							</div>
							<p>{work.description}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default WorkOutput;
