/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import type {CompanyExperience} from "./WorkExperienceInterface.ts";

/*
 * workExperiences is an array of objects representing the work experiences of a person.
 * Each object contains information about the company, location, roles, and responsibilities.
 * The data is used to display the work experience section on a website or application.
 */

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
                    'Collaborated with developers in designing and contributing to the implementation of design to complete user stories.',
                    'Worked with Neo4j, Spring, AWS, and Angular to develop a web application.',
                    'Developed and maintained RESTful APIs using Java, Kafka and Spring Boot.',
                    'Presented demos to stakeholders at the end of 2-week sprint cycles.',
                ]
            },
            {
                title: 'Graduate Software Engineer',
                startDate: 'July 2023',
                endDate: 'July 2024',
                description: [
                    'Worked on the same cross-functional team as above, contributing to full-stack feature development.',
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
                    'Helped develop patches and updates for products.',
                    'Worked with SQL Server, Java, Jaspersoft, and eWebscripting.',
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
                    'Completed internship as part of my ATU Sligo program.',
                    'Gained hands-on experience with Microsoft Dynamics 365.',
                    'Supported clients and delivered responsive technical solutions.',
                ]
            }
        ]
    },
    {
        company: 'Waterpoint Leisure & Sunset Spa',
        location: 'Enniscrone, Sligo, Ireland',
        latitude:  54.21735903771566,
        longitude: -9.089281155742155,
        roles: [
            {
                title: 'Lifeguard',
                startDate: 'June 2016',
                endDate: 'Aug 2022',
                description: [
                    'Oversaw pool safety, trained kids on climbing wall, and managed daily operations.',
                    'Handled cleaning, reception, chemical balancing, and facility opening/closing.',
                ]
            }
        ]
    },
];