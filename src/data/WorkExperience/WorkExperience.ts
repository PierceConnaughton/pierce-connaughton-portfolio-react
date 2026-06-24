/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import type {CompanyExperience} from "./WorkExperienceInterface.ts";

export const workExperiences: CompanyExperience[] = [
    {
        company: 'SITA',
        location: 'Letterkenny, County Donegal, Ireland',
        latitude:  54.965128237750164,
        longitude: -7.717927231103309,
        roles: [
            {
                title: 'Associate Software Engineer',
                startDate: 'July 2024',
                endDate: 'Present',
                description: [
                    'Collaborate with 3 developers and 1 tester on system architecture and user stories from the product owner.',
                    'Translated technical and business requirements into 150+ precise user stories, reducing cycle time by 30%.',
                    'Developed and maintained RESTful APIs with Java, Kafka, Kubernetes, and Spring Boot — processing 1,000+ messages per second.',
                    'Deployed a web application with Neo4j, Spring, AWS, and Angular to help customers find lost luggage and belongings.',
                    'Automated stale-data identification and expiration in the data retention workflow, reducing backend storage load.',
                    'Built a refund adjudicator with Java, Kafka, Kubernetes, Spring Boot, and MongoDB to determine compensation for delayed baggage.',
                    'Improved QA by enhancing log visibility, cutting environment setup from 40 to 10 minutes per user story and reducing bug-investigation costs by 80%.',
                ]
            },
            {
                title: 'Graduate Software Engineer',
                startDate: 'June 2023',
                endDate: 'June 2024',
                description: [
                    'Collaborated across teams to deliver a web application that streamlined user interactions and improved customer satisfaction.',
                    'Led end-of-sprint demonstrations to product owners and technical leads — live walkthroughs and decks covering progress and blockers.',
                    'Integrated AI-powered engineering tools including GitHub Copilot and coding agents across the full SDLC.',
                    'Established prompt-engineering best practices and clarification workflows for ambiguous requirements with coding agents.',
                ]
            },
        ],
    },
    {
        company: 'WBT Systems',
        location: 'Dublin, Ireland',
        latitude:  53.33340020426137,
        longitude: -6.262797744681188,
        roles: [
            {
                title: 'Junior Application Support Engineer',
                startDate: 'Aug 2022',
                endDate: 'Dec 2022',
                description: [
                    'Provided Tier 3 support for customer tickets using Jira and Freshdesk.',
                    'Developed patches and updates for production products.',
                    'Resolved 50+ tickets using SQL Server, Java, Jaspersoft, and eWebscripting.',
                ]
            }
        ]
    },
    {
        company: 'Codec Ireland',
        location: 'Dublin, Ireland',
        latitude:  53.33303292347404,
        longitude: -6.257500375363399,
        roles: [
            {
                title: 'Technical Consultant Intern',
                startDate: 'May 2021',
                endDate: 'Sept 2021',
                description: [
                    'Completed internship as part of my ATU Sligo degree programme.',
                    'Gained hands-on experience with Microsoft Dynamics 365.',
                    'Supported clients and delivered responsive technical solutions.',
                ]
            }
        ]
    },
];
