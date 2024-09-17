const INFO = {
	main: {
		title: "Jack Eakle",
		name: "Jack Eakle",
		email: "jackeakle@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/jaeakle",
		linkedin: "https://www.linkedin.com/in/jack-eakle-a730961b3",
	},

	homepage: {
		title: "Senior Computer Science Student focusing in Information Security",
		description:
			"Hello I am Jack Eakle. I am a senior at the University of Florida studying Computer Science and Information Technology with a minor in Engineering innovation. I currently work for the University of Florida Research Computing department as a Helpdesk Support Assistant. My biggest passion is computer security, having participated in numerous CTF's and Red/Blue team competitions. I have a stong drive for growth, and constanlty look to build my knowledge base as a professional.",
	},

	about: {
		title: "whoami?!",
		description:
			"I currently live in Gainesville Florida as a student at the University of Florida. From a young age I have had a deep passion for computing, learning to create (albeit bad) minecraft mods at the age of 10. Throughout high school and university, I have worked on numerous projects to build experience. Starting as my high schools robotics team captain as a programmer, I have developed my dynamic experience through college. As a dedicated student set to graduate in Spring 2025, I am deeply passionate about expanding my knowledge and experience in Cybersecurity. My academic journey has been intensely focused on this field, with coursework spanning Penetration Testing and Ethical Hacking, Adversarial Tradecraft, Cyber-Physical Systems, Networking, and Ethical Security. At the University of Florida, I’ve earned certifications in Project Management and Cybersecurity, reflecting my commitment to both technical and managerial aspects of the industry. Currently, I am preparing for the Security+ exam, which I plan to tackle this Winter. \nOutside the classroom, I stay actively engaged with the Cybersecurity community. Every weekend, I participate in Capture The Flag (CTF) competitions with UFSIT/Kernel Sanders, my university’s security club. I also share my insights and write-ups from these competitions in the articles section of this website."
	},

	articles: {
		title: "My CTF Write-Ups",
		description:
			"Every Saturday I particiapte in CTF competitions with my schools team Kernel Sanders. Here I will post my Write-Ups to document learning.",
	},

	projects: [
		{
			title: "NetCat-rs",
			description:
				"NetCat-rs is the Rust implementation of an extremely influential tool called Netcat. With this implementation I added TLS/SSL support with the encryption library rustls. The goal of this project was to expand my understanding of network sockets, backdoors, reverse shells, and encryption.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
			linkText: "View Project",
			link: "https://github.com/jaeakle/netcat-rs",
		},

		{
			title: "HiPerGator System Applications Testing",
			description:
				"Written for work, I was tasked with testing over 2000 applications installed on the HPC. Using the ReFrame-HPC testing library in python, my code was able to effectivley document and test every application. The testing suite would check if the application runs, on what nodes it is able to run on, and configuration the user needs. Ensures admins that each application on the system either works, or we are notified of an error.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		},

		{
			title: "Unix Fuse Filesystem",
			description:
				"Written for my Operating Systems class, I was challenged with creating my own VFS (Virtual Fily System) using the library FUSE. Using the WAD file type, my file system was able to create a standard layout able to read, write, create, and delete files/dirs from the system.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
		},

		{
			title: "$1 Unistroke Recognizer",
			description:
				"Written for a class, this algorithm is an instance-based nearest-neighbor classifier with a 2-D Euclidean distance function. In human words, it detects 16 unique, multipoint handwritten gestures from an input device.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/jaeakle/HCIRAProject1",
		},
	],
};

export default INFO;
