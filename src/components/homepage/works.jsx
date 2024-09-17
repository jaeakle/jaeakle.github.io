import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://brandcenter.ufl.edu/wp-content/uploads/2022/07/NEW-IMAGES_UF-Logo_University-Logo-768x789.png"
								alt="UFRC"
								className="work-image"
							/>
							<div className="work-title">UF Research Computing</div>
							<div className="work-subtitle">
								Research Computing Helpdesk Support
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://www.tzpgroup.com/images/Portfolio/Logo/original/feg.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Family Entertainment Group</div>
							<div className="work-subtitle">
								Arcade Attendant
							</div>
							<div className="work-duration">2022 - 2022</div>
						</div>

						<div className="work">
							<img
								src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-1/341019999_907815787170148_5655963599987028260_n.png?stp=dst-png_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=vT8si9lYPzkQ7kNvgF4g6oF&_nc_ht=scontent-mia3-2.xx&_nc_gid=A0v8xWw7dl4mKSMnZP0-Jl5&oh=00_AYA-48jnWAEPNLf4u9fNZBZ5iJMQyMhDGlp229rKB6g1GA&oe=66EF6989"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Ritters Ice Cream</div>
							<div className="work-subtitle">
								Customer Support 
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
