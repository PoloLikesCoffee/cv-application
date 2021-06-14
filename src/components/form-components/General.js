import React from 'react';

const General = ({ fullName, title, email, phone, onChange, onSubmit }) => {
	return (
		<div className="general">
			<div className="header-main">
				<h2>
					<i className="fas fa-info"></i> General Information
				</h2>
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
							value={fullName}
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
							value={title}
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
							value={email}
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
							value={phone}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default General;
