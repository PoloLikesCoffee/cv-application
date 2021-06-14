import React from 'react';

const EducationItem = ({
	edu,
	id,
	handleChangeEducation,
	onSubmit,
	deleteEducationBackground,
}) => {
	return (
		<div className="education-form">
			<form onSubmit={onSubmit} id={id}>
				<div className="info1">
					<label htmlFor="schoolName" className="form-label">
						School Name
					</label>
					<input
						type="text"
						className="form-control"
						name="schoolName"
						onChange={(e) => handleChangeEducation(e, id)}
						value={edu.schoolName}
					/>
				</div>
				<div className="info2">
					<label htmlFor="degree" className="form-label">
						Degree
					</label>
					<input
						type="text"
						className="form-control"
						name="degree"
						onChange={(e) => handleChangeEducation(e, id)}
						value={edu.degree}
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
						onChange={(e) => handleChangeEducation(e, id)}
						value={edu.from}
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
						onChange={(e) => handleChangeEducation(e, id)}
						value={edu.to}
					/>
				</div>
				<button
					type="button"
					className="btn delete"
					onClick={(e) => deleteEducationBackground(e, id)}
				>
					<i className="fas fa-trash-alt"></i>
				</button>
			</form>
		</div>
	);
};

export default EducationItem;
