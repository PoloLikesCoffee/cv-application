import uniqid from 'uniqid';

const defaultInfo = {
	general: {
		fullName: '',
		title: '',
		email: '',
		phone: '',
	},
	works: [
		{
			companyName: '',
			positionTitle: '',
			from: '',
			to: '',
			description: '',
			id: uniqid(),
		},
	],
	education: [
		{
			schoolName: '',
			degree: '',
			from: '',
			to: '',
			id: uniqid(),
		},
	],
	skills: [
		{
			skillName: '',
			id: uniqid(),
		},
	],
};

export default defaultInfo;
