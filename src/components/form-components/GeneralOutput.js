import React from 'react';

const GeneralOutput = (props) => {
	const { info } = props;

	return (
		<>
			<div className="general-output">
				<div className="main-info">
					<h1>{info.general.fullName}</h1>
					<h2>{info.general.title}</h2>
				</div>
				<div className="contact-info">
					<span>
						{/* <i className="fas fa-at"></i> */} {info.general.email}
					</span>
					<span>
						{/* <i className="fas fa-mobile-alt"></i> */} {info.general.phone}
					</span>
				</div>
			</div>
		</>
	);
};

export default GeneralOutput;
