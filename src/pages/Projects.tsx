import React from 'react';
import ProjectCard from '../components/ProjectCard';
import AnimatedElement from '../components/AnimatedElement';
import { useNavigate } from 'react-router-dom';
import type { ProjectData } from '../types/ProjectData';

const projectsData: ProjectData[] = [
	{
		id: 1,
		title: 'Portfolio Website',
		description:
			'A personal portfolio website built with React, TypeScript and Tailwind CSS. Features modern design, dark mode, and responsive layout.',
		tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
		image: 'https://placehold.co/400x250/svg?text=Portfolio',
		link: '/projects/3',
		github: 'https://github.com/username/portfolio',
	},
	{
		id: 2,
		title: 'E-commerce Platform',
		description:
			'An online shopping platform with product listings, cart functionality, and checkout process. Includes user authentication, product filtering, and payment integration.',
		tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express'],
		image: 'https://placehold.co/400x250/svg?text=E-commerce',
		link: '/projects/1',
		github: 'https://github.com/username/ecommerce',
	},
	{
		id: 3,
		title: 'Task Management App',
		description:
			'A productivity application for managing tasks, projects, and deadlines. Features include drag-and-drop task organization, priority levels, and progress tracking.',
		tech: ['React', 'Firebase', 'Material UI', 'Redux'],
		image: 'https://placehold.co/400x250/svg?text=Task+App',
		link: '/projects/2',
	},
	{
		id: 4,
		title: 'Weather Dashboard',
		description:
			'Real-time weather information dashboard with location-based forecasts. Features interactive maps, hourly forecasts, and severe weather alerts.',
		tech: ['JavaScript', 'Weather API', 'Chart.js', 'Leaflet'],
		image: 'https://placehold.co/400x250/svg?text=Weather+App',
		link: '#',
		github: 'https://github.com/username/weather-app',
	},
	{
		id: 5,
		title: 'Social Media Dashboard',
		description:
			'Analytics dashboard for social media platforms that integrates multiple accounts and provides engagement metrics and content performance data.',
		tech: ['React', 'D3.js', 'Node.js', 'OAuth'],
		image: 'https://placehold.co/400x250/svg?text=Social+Media',
		link: '#',
		github: 'https://github.com/username/social-dashboard',
	},
];

const Projects: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="max-w-6xl mx-auto py-12 md:py-16 px-2 md:px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{projectsData.map((project, index) => (
					<AnimatedElement
						key={project.id}
						animation="fade-up"
						duration={800}
						delay={300 + index * 100}
					>
						<div
							onClick={() => navigate(`/projects/${project.id}`)}
							className="cursor-pointer h-full"
						>
							<ProjectCard
								project={project}
								className="h-full text-xs md:text-sm"
							/>
						</div>
					</AnimatedElement>
				))}
			</div>
		</div>
	);
};

export default Projects;
