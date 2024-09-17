import React from "react";

function article_1() {
	return {
		date: "14 September 2024",
		title: "This Weekends CTF #1",
		description:
			"This weekend I learn some crypto, web pen testing, and advanced nmap!",
		keywords: [
			"Capture the Flag",			
			"CTF",
			"Jack",
			"Jack E",
			"Jack Eakle",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1];

export default myArticles;
