import React, { Component } from 'react';
import General from './form-components/General';
import GeneralOutput from './form-components/GeneralOutput';
import Work from './form-components/Work';
import WorkOutput from './form-components/WorkOutput';
import Education from './form-components/Education';
import EducationOutput from './form-components/EducationOutput';
import Skill from './form-components/Skill';
import SkillOutput from './form-components/SkillOutput';

import uniqid from 'uniqid';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			fullName: 'Azerty Qwerty',
			title: 'Full Stack Engineer',
			email: 'azerty@jmel.kom',
			phone: '0102030405',
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
		this.handleChange = this.handleChange.bind(this);
		this.onSubmitGeneralInfo = this.onSubmitGeneralInfo.bind(this);
	}
	// General
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onSubmitGeneralInfo = (event) => {
		const { fullName, title, email, phone } = this.state;
		event.preventDefault();
		console.log(`
		  Your Details:\n
		  fullName : ${fullName}
		  title : ${title}
		  email : ${email}
		  phone : ${phone}
		`);
	};

	// Work
	handleChangeWork = (event, id) => {
		const { name, value } = event.target;
		const workCurrentItem = this.state.works.map((work) => {
			if (work.id === event.target.parentNode.parentNode.id) {
				return { ...work, [name]: value };
			}
			return work;
		});
		this.setState({
			works: workCurrentItem,
		});
	};

	onSubmitWorkInfo = (event) => {
		event.preventDefault();
		//console.log(event.target.companyName.value);
		// const companyName = event.target.companyName.value;
		// const positionTitle = event.target.positionTitle.value;
		// const from = event.target.from.value;
		// const to = event.target.to.value;
		// const description = event.target.description.value;
		// const id = uniqid();
		// const work = {
		// 	companyName: companyName,
		// 	positionTitle: positionTitle,
		// 	from: from,
		// 	to: to,
		// 	description: description,
		// 	id: id,
		// };
		// const works = [...this.state.works, work];
		// //add info to works array
		// this.setState({
		// 	works: works,
		// });
		//console.log(works);
	};

	addWorkExperience = () => {
		const work = {
			companyName: '',
			positionTitle: '',
			from: '',
			to: '',
			description: '',
			id: uniqid(),
		};

		//add info to works array
		this.setState({
			works: this.state.works.concat(work),
		});
	};

	deleteWorkExperience = (event, id) => {
		const remainingWorkItem = this.state.works.filter((work) => work.id !== id);
		this.setState({
			works: remainingWorkItem,
		});
	};

	// Education
	handleChangeEducation = (event, id) => {
		const { name, value } = event.target;
		const educationCurrentItem = this.state.education.map((edu) => {
			if (edu.id === event.target.parentNode.parentNode.id) {
				return { ...edu, [name]: value };
			}
			return edu;
		});
		this.setState({
			education: educationCurrentItem,
		});
	};

	onSubmitEducationInfo = (event) => {
		event.preventDefault();
	};

	addEducationBackground = () => {
		const edu = {
			schoolName: '',
			degree: '',
			from: '',
			to: '',
			id: uniqid(),
		};
		this.setState({
			education: this.state.education.concat(edu),
		});
	};

	deleteEducationBackground = (event, id) => {
		const remainingEducationItem = this.state.education.filter(
			(edu) => edu.id !== id
		);
		this.setState({
			education: remainingEducationItem,
		});
	};

	// Skill
	handleChangeSkill = (event, id) => {
		const { name, value } = event.target;
		const skillCurrentItem = this.state.skills.map((skill) => {
			if (skill.id === event.target.parentNode.parentNode.id) {
				return { ...skill, [name]: value };
			}
			return skill;
		});
		this.setState({
			skills: skillCurrentItem,
		});
	};

	onSubmitSkill = (event) => {
		event.preventDefault();
	};

	addSkill = () => {
		const skill = {
			skillName: '',
			id: uniqid(),
		};
		this.setState({
			skills: this.state.skills.concat(skill),
		});
	};

	deleteSkill = (event, id) => {
		const remainingSkillItem = this.state.skills.filter(
			(skill) => skill.id !== id
		);
		this.setState({
			skills: remainingSkillItem,
		});
	};

	render() {
		const { fullName, title, email, phone, works, education, skills } =
			this.state;
		return (
			<>
				<div className="main">
					<div className="input">
						<General
							fullName={fullName}
							title={title}
							email={email}
							phone={phone}
							onChange={this.handleChange}
							onSubmit={this.onSubmitGeneralInfo}
						/>
						<Work
							works={works}
							addWorkExperience={this.addWorkExperience}
							deleteWorkExperience={this.deleteWorkExperience}
							handleChangeWork={this.handleChangeWork}
							onSubmit={this.onSubmitWorkInfo}
						/>
						<Education
							education={education}
							addEducationBackground={this.addEducationBackground}
							deleteEducationBackground={this.deleteEducationBackground}
							handleChangeEducation={this.handleChangeEducation}
							onSubmit={this.onSubmitEducationInfo}
						/>
						<Skill
							skills={skills}
							addSkill={this.addSkill}
							deleteSkill={this.deleteSkill}
							handleChangeSkill={this.handleChangeSkill}
							onSubmit={this.onSubmitSkill}
						/>
					</div>
					<div className="output">
						<GeneralOutput
							fullName={fullName}
							title={title}
							email={email}
							phone={phone}
						/>
						<WorkOutput works={works} />
						<EducationOutput education={education} />
						<SkillOutput skills={skills} />
					</div>
				</div>
			</>
		);
	}
}

export default Main;
