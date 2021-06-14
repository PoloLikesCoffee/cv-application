import React from 'react';

const GeneralOutput = (props) => {
	const { fullName, title, email, phone } = props;

	return (
		<>
			<div className="general-output">
				<div className="main-info">
					<h1>{fullName}</h1>
					<h2>{title}</h2>
				</div>
				<div className="contact-info">
					<span>
						<i className="fas fa-at"></i> {email}
					</span>
					<span>
						<i className="fas fa-mobile-alt"></i> {phone}
					</span>
				</div>
			</div>
		</>
	);
};

export default GeneralOutput;
