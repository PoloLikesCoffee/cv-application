import uniqid from 'uniqid';

const templateInfo = {
	general: {
		fullName: 'Azerty Qwerty',
		title: 'Full Stack Engineer',
		email: 'azerty@jmel.kom',
		phone: '0102030405',
	},
	works: [
		{
			companyName: 'Panasonic',
			positionTitle: 'Senior Web Developper',
			from: '2019-02',
			to: '2021-06',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut leo quis augue ultricies rutrum. Proin pretium ultrices nulla, id aliquam purus. Mauris scelerisque gravida rhoncus. Integer at maximus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat mattis tempor.',
			id: uniqid(),
		},
		{
			companyName: 'Samsung',
			positionTitle: 'Junior Web Developper',
			from: '2017-02',
			to: '2019-01',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut leo quis augue ultricies rutrum. Proin pretium ultrices nulla, id aliquam purus. Mauris scelerisque gravida rhoncus. Integer at maximus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat mattis tempor.',
			id: uniqid(),
		},
		{
			companyName: 'New Start up',
			positionTitle: 'Junior Web Designer',
			from: '2016-09',
			to: '2017-01',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut leo quis augue ultricies rutrum. Proin pretium ultrices nulla, id aliquam purus. Mauris scelerisque gravida rhoncus. Integer at maximus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat mattis tempor.',
			id: uniqid(),
		},
	],
	education: [
		{
			schoolName: 'Lorem ipsum University',
			degree: 'Consectetur adipiscing elit',
			from: '2012-04',
			to: '2016-03',
			id: uniqid(),
		},
		{
			schoolName: 'Keio University',
			degree: 'Morbi ut leo quis',
			from: '2012-04',
			to: '2016-03',
			id: uniqid(),
		},
		{
			schoolName: 'Lorem University',
			degree: 'Ultricies rutrum',
			from: '2012-04',
			to: '2016-03',
			id: uniqid(),
		},
		{
			schoolName: 'Ipsum University',
			degree: 'Ultrices nulla',
			from: '2012-04',
			to: '2016-03',
			id: uniqid(),
		},
	],
	skills: [
		{
			skillName: 'HTML',
			id: uniqid(),
		},
		{
			skillName: 'CSS',
			id: uniqid(),
		},
		{
			skillName: 'Javascript',
			id: uniqid(),
		},
		{
			skillName: 'React',
			id: uniqid(),
		},
		{
			skillName: 'Ruby',
			id: uniqid(),
		},
		{
			skillName: 'HTML',
			id: uniqid(),
		},
		{
			skillName: 'CSS',
			id: uniqid(),
		},
		{
			skillName: 'Javascript',
			id: uniqid(),
		},
		{
			skillName: 'React',
			id: uniqid(),
		},
		{
			skillName: 'Ruby',
			id: uniqid(),
		},
		{
			skillName: 'Ruby',
			id: uniqid(),
		},
	],
};

export default templateInfo;
