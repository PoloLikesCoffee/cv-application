import React from 'react';

const WorkItem = ({
	work,
	id,
	handleChangeWork,
	onSubmit,
	deleteWorkExperience,
}) => {
	return (
		<div className="work-form">
			<form onSubmit={onSubmit} id={id}>
				<div className="info1">
					<label htmlFor="companyName" className="form-label">
						Company Name
					</label>
					<input
						type="text"
						className="form-control"
						name="companyName"
						onChange={(e) => handleChangeWork(e, id)}
						value={work.companyName}
					/>
				</div>
				<div className="info2">
					<label htmlFor="positionTitle" className="form-label">
						Position Title
					</label>
					<input
						type="text"
						className="form-control"
						name="positionTitle"
						onChange={(e) => handleChangeWork(e, id)}
						value={work.positionTitle}
					/>
				</div>
				<div className="info3">
					<label htmlFor="from" className="form-label">
						From
					</label>
					<input
						type="month"
						className="form-control"
						name="from"
						onChange={(e) => handleChangeWork(e, id)}
						value={work.from}
					/>
				</div>
				<div className="info4">
					<label htmlFor="to" className="form-label">
						To
					</label>
					<input
						type="month"
						className="form-control"
						name="to"
						onChange={(e) => handleChangeWork(e, id)}
						value={work.to}
					/>
				</div>
				<div className="info5">
					<label htmlFor="to" className="form-label">
						Description of the job
					</label>
					<textarea
						type="text"
						rows="3"
						className="form-control"
						name="description"
						onChange={(e) => handleChangeWork(e, id)}
						value={work.description}
					/>
				</div>
				<button
					type="button"
					className="btn delete"
					onClick={(e) => deleteWorkExperience(e, id)}
				>
					<i className="fas fa-trash-alt"></i>
				</button>
			</form>
		</div>
	);
};

export default WorkItem;
