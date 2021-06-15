import React, { useState } from 'react';
import uniqid from 'uniqid';
import defaultInfo from './form-components/defaultInfo';
import templateInfo from './form-components/templateInfo';
import General from './form-components/General';
import GeneralOutput from './form-components/GeneralOutput';
import Work from './form-components/Work';
import WorkOutput from './form-components/WorkOutput';
import Education from './form-components/Education';
import EducationOutput from './form-components/EducationOutput';
import Skill from './form-components/Skill';
import SkillOutput from './form-components/SkillOutput';

const Main = () => {
	const [info, setInfo] = useState(defaultInfo);

	// General
	const handleChange = (event) => {
		const { name, value } = event.target;
		setInfo((prevState) => ({
			...prevState,
			general: {
				...prevState.general,
				[name]: value,
			},
		}));
	};

	// Work
	const handleChangeWork = (event, id) => {
		const { name, value } = event.target;
		setInfo((prevState) => {
			const currentWork = prevState.works.map((work) => {
				if (work.id === id) {
					return { ...work, [name]: value };
				}
				return work;
			});
			return { ...prevState, works: [...currentWork] };
		});
	};

	const addWorkExperience = () => {
		setInfo((prevState) => ({
			...prevState,
			works: [
				...prevState.works,
				{
					companyName: '',
					positionTitle: '',
					from: '',
					to: '',
					description: '',
					id: uniqid(),
				},
			],
		}));
	};

	const deleteWorkExperience = (event, id) => {
		setInfo((prevState) => {
			const remainingWork = prevState.works.filter((work) => work.id !== id);
			return { ...prevState, works: [...remainingWork] };
		});
	};

	// Education
	const handleChangeEducation = (event, id) => {
		const { name, value } = event.target;
		setInfo((prevState) => {
			const currentEducation = prevState.education.map((edu) => {
				if (edu.id === id) {
					return { ...edu, [name]: value };
				}
				return edu;
			});
			return { ...prevState, education: [...currentEducation] };
		});
	};

	const addEducationBackground = () => {
		setInfo((prevState) => ({
			...prevState,
			education: [
				...prevState.education,
				{
					schoolName: '',
					degree: '',
					from: '',
					to: '',
					id: uniqid(),
				},
			],
		}));
	};

	const deleteEducationBackground = (event, id) => {
		setInfo((prevState) => {
			const remainingEducation = prevState.education.filter(
				(edu) => edu.id !== id
			);
			return { ...prevState, education: [...remainingEducation] };
		});
	};

	// Skill
	const handleChangeSkill = (event, id) => {
		const { name, value } = event.target;
		setInfo((prevState) => {
			const currentSkill = prevState.skills.map((skill) => {
				if (skill.id === id) {
					return { ...skill, [name]: value };
				}
				return skill;
			});
			return { ...prevState, skills: [...currentSkill] };
		});
	};

	const addSkill = () => {
		setInfo((prevState) => ({
			...prevState,
			skills: [
				...prevState.skills,
				{
					skillName: '',
					id: uniqid(),
				},
			],
		}));
	};

	const deleteSkill = (event, id) => {
		setInfo((prevState) => {
			const remainingSkill = prevState.skills.filter(
				(skill) => skill.id !== id
			);
			return { ...prevState, skills: [...remainingSkill] };
		});
	};

	// global
	const onSubmit = (event) => {
		event.preventDefault();
	};

	const loadTemplate = () => {
		setInfo(templateInfo);
	};

	const resetForm = () => {
		setInfo(defaultInfo);
	};

	return (
		<>
			<div className="main">
				<div className="input">
					<General
						info={info}
						onChange={handleChange}
						onSubmit={onSubmit}
						loadTemplate={loadTemplate}
						resetForm={resetForm}
					/>
					<Work
						info={info}
						addWorkExperience={addWorkExperience}
						deleteWorkExperience={deleteWorkExperience}
						handleChangeWork={handleChangeWork}
						onSubmit={onSubmit}
					/>
					<Education
						info={info}
						addEducationBackground={addEducationBackground}
						deleteEducationBackground={deleteEducationBackground}
						handleChangeEducation={handleChangeEducation}
						onSubmit={onSubmit}
					/>
					<Skill
						info={info}
						addSkill={addSkill}
						deleteSkill={deleteSkill}
						handleChangeSkill={handleChangeSkill}
						onSubmit={onSubmit}
					/>
				</div>
				<div className="output">
					<GeneralOutput info={info} />
					<WorkOutput info={info} />
					<EducationOutput info={info} />
					<SkillOutput info={info} />
				</div>
			</div>
		</>
	);
};

export default Main;
