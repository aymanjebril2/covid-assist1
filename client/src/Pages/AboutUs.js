import React from "react";
import Katherine from "./img/kathreen.png";
import shan from "./img/shan.png";
import Ayman from "./img/ayman.png";

const AboutUs = () => {
	const team = [
		{
			firstName: "Ayman",
			lastName: "Omer",
			teamTitle: "Full-Stack Web Developer",
			teamImage: Ayman,
			linkedin: "https://www.linkedin.com/in/ayman-omer-b2429b1ab/",
		},
		{
			firstName: "Katherine",
			lastName: "Fernandez",
			teamTitle: "Product Designer",
			teamImage: Katherine,
			linkedin: "https://www.linkedin.com/in/katfernandez22/",
		},
		{
			firstName: "Shan",
			lastName: "Siddiqui",
			teamTitle: "Front-End Web Developer",
			teamImage: shan,
			linkedin: "https://www.linkedin.com/in/ssiddiqui007/",
		},
	];
	return (
		<div>
			<h1 className="head-title">Meet the Team</h1>
			<div className="team-page">
				<br />
				{team.map((member) => {
					return (
						<div className="teamdiv">
							<img className="profile" src={member.teamImage} alt="" />
							<p className="teamname">{`${member.firstName} ${member.lastName}`}</p>
							<p className="title">{member.teamTitle}</p>
							<a href={member.linkedIn}>
								<img className="linkedin" src="https://www.svgrepo.com/show/144550/linkedin.svg" alt={member.linkedIn} />
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AboutUs;
