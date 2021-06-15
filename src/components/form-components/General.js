import React from 'react';

const General = ({ info, onChange, onSubmit, loadTemplate, resetForm }) => {
	return (
		<div className="general">
			<div className="header-main">
				<h2>{/* <i className="fas fa-info"></i> */} General Information</h2>
				<div className="main-btn ">
					<button className="btn template" onClick={loadTemplate}>
						Template
					</button>
					<button className="btn reset" onClick={resetForm}>
						Reset
					</button>
				</div>
			</div>

			<div className="general-form">
				<form onSubmit={onSubmit}>
					<div className="info1">
						<label htmlFor="fullName" className="form-label">
							Full Name
						</label>
						<input
							type="text"
							className="form-control"
							name="fullName"
							onChange={onChange}
							value={info.general.fullName}
						/>
					</div>
					<div className="info2">
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input
							type="text"
							className="form-control"
							name="title"
							onChange={onChange}
							value={info.general.title}
						/>
					</div>
					<div className="info3">
						<label htmlFor="email" className="form-label">
							Email Address
						</label>
						<input
							type="text"
							className="form-control"
							name="email"
							onChange={onChange}
							value={info.general.email}
						/>
					</div>
					<div className="info4">
						<label htmlFor="phone" className="form-label">
							Phone Number
						</label>
						<input
							type="text"
							className="form-control"
							name="phone"
							onChange={onChange}
							value={info.general.phone}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default General;
