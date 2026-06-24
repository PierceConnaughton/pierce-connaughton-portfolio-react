/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import type { Project } from './ProjectsInterface.ts';

export const projects: Project[] = [
    {
        title: 'WrestleGraph',
        description: 'A live web application that visualizes professional wrestling statistics scraped from Cagematch.net. Full-stack project with an Angular frontend and Spring Boot backend — demonstrates data pipelines, charting, and deployed production UX.',
        technologies: ['Angular', 'Spring Boot', 'Material-UI'],
        githubLink: 'https://github.com/PierceConnaughton/wrestlegraph-frontend',
        liveDemo: 'https://www.wrestlegraph.com',
        featured: true,
        image: '/projects/wrestlegraph.png',
    },
    {
        title: 'Personal Portfolio',
        description: 'Responsive portfolio built with React and TypeScript to showcase professional experience, projects, and contact channels. Deployed on Vercel with Material-UI and SCSS modules.',
        technologies: ['React', 'TypeScript', 'Material-UI', 'Vite'],
        githubLink: 'https://github.com/PierceConnaughton/pierce-connaughton-portfolio-react',
        liveDemo: 'https://www.pierce-connaughton-portfolio.ie',
        featured: true,
        image: '/projects/portfolio.png',
    },
    {
        title: 'AI Tweet Generator',
        description: 'Final-year university project: a Python/Kivy mobile app integrating the X API to generate context-aware tweets and run sentiment analysis (positive, neutral, or negative).',
        technologies: ['Python', 'Kivy', 'KivyMD', 'X API'],
        githubLink: 'https://github.com/PierceConnaughton/Project-400',
    },
    {
        title: 'WPF Black Jack Game',
        description: 'Second-year programming project: a fully playable blackjack game built with WPF and C#, contributing to a 90% module grade.',
        technologies: ['C#', 'WPF', 'XAML'],
        githubLink: 'https://github.com/PierceConnaughton/BlackJack',
    },
    {
        title: 'PC Part Picker',
        description: 'Angular web app for building custom PCs with component compatibility checks and price comparisons via the Rainforest API.',
        technologies: ['Angular', 'TypeScript', 'Rainforest API'],
        githubLink: 'https://github.com/PierceConnaughton/OpenStackProject',
    },
    {
        title: 'Ruby Social',
        description: 'Social media app built with Ruby on Rails to practice full-stack development — posts, follows, comments, likes, and follower listings with PostgreSQL.',
        technologies: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
        githubLink: 'https://github.com/PierceConnaughton/ruby-social'
    },
    {
        title: 'First Unity Game',
        description: '2D Unity game in C# — collect coins, avoid traps. Built to learn game development fundamentals.',
        technologies: ['Unity', 'C#'],
        githubLink: 'https://github.com/PierceConnaughton/First-2D-Game'
    }
];

export const featuredProjects = projects.filter((project) => project.featured);
