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
        title: 'Personal Portfolio',
        description: 'A personal portfolio website built using React and TypeScript. It showcases my projects, skills, and experience. This is the first project I created using React and TypeScript, and it helped me learn the basics of both technologies.',
        technologies: ['React', 'TypeScript', 'Material-UI'],
        githubLink: 'https://github.com/PierceConnaughton/pierce-connaughton-portfolio-react',
        liveDemo: 'https://pierce-connaughton.ie'
    },
    {
        title: 'AI Tweet Generator',
        description: 'A tweet generator that uses the Twitter API to generate tweets based on a given topic. It allows users to input a topic and generates a tweet based on that topic, as well as detect the sentiment of the topic. This was used as my final project for university, using technologies I had not used upto that point.',
        technologies: ['Python', 'Kivy', 'KivyMD', 'Twitter API'],
        githubLink: 'https://github.com/PierceConnaughton/Project-400',
    },
    {
        title: 'WPF Black Jack Game',
        description: 'In my second year in About, I created a working blackjack game using WPF for my programming project. This project helped earn me my 90% in my final grade.',
        technologies: ['C#', 'WPF', 'XAML'],
        githubLink: 'https://github.com/PierceConnaughton/BlackJack',
    },
    {
        title: 'PC Part Picker',
        description: 'A web application that allows users to create a custom PC build by selecting components from a list of available parts. The app provides compatibility checks and price comparisons for each component.',
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Rainforest API'],
        githubLink: 'https://github.com/PierceConnaughton/OpenStackProject',
    },
    {
        title: 'Ruby Social',
        description: 'A small social media application built using Ruby on Rails, to help upskill myself on Ruby. it is a social media website that will allow a user to login create posts, follow other users, comment and like on others posts. You will also be able to see a full list of all the accounts a user follows and who is following them',
        technologies: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
        githubLink: 'https://github.com/PierceConnaughton/ruby-social'
    },
    {
        title: 'First Unity Game',
        description: 'A small game created using Unity and C# to help upskill myself on Unity. It is a simple game where you have to collect coins and avoid traps.',
        technologies: ['Unity', 'C#'],
        githubLink: 'https://github.com/PierceConnaughton/First-2D-Game'
    }
];
