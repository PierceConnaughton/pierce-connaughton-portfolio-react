/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

export const SITE_URL = 'https://www.pierce-connaughton-portfolio.ie';

export const SITE_NAME = 'Pierce Connaughton';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/thumbnail.png`;

export const LINKEDIN_URL = 'https://www.linkedin.com/in/pierce-connaughton';

export const GITHUB_URL = 'https://github.com/PierceConnaughton';

export const DEFAULT_DESCRIPTION =
    'Associate Software Engineer at SITA. Full-stack developer building event-driven aviation baggage systems with Java, Kafka, Spring Boot, Kubernetes, and Angular.';

export const pageSeo = {
    home: {
        title: 'Pierce Connaughton | Software Engineer',
        description: DEFAULT_DESCRIPTION,
        path: '/',
    },
    projects: {
        title: 'Projects',
        description:
            'Portfolio projects by Pierce Connaughton — WrestleGraph, React portfolio, AI Tweet Generator, and full-stack apps across Angular, Spring, Python, and more.',
        path: '/projects',
    },
    workExperience: {
        title: 'Work Experience',
        description:
            'Professional experience at SITA, WBT Systems, and Codec Ireland — event-driven APIs, lost-luggage systems, Kafka microservices, and enterprise web applications.',
        path: '/work-experience',
    },
    about: {
        title: 'About',
        description:
            'About Pierce Connaughton — BSc Computer Science (ATU Sligo), Associate Software Engineer at SITA, skills in Java, Kafka, Spring Boot, React, AWS, and agile delivery.',
        path: '/about',
    },
    notFound: {
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist on pierce-connaughton-portfolio.ie.',
        path: '',
    },
} as const;

export const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    jobTitle: 'Associate Software Engineer',
    url: SITE_URL,
    email: 'pierce.connaught@gmail.com',
    sameAs: [LINKEDIN_URL, GITHUB_URL],
    worksFor: {
        '@type': 'Organization',
        name: 'SITA',
    },
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Atlantic Technological University',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Letterkenny',
        addressRegion: 'Donegal',
        addressCountry: 'IE',
    },
    knowsAbout: [
        'Java',
        'Spring Boot',
        'Apache Kafka',
        'Kubernetes',
        'Angular',
        'React',
        'TypeScript',
        'AWS',
        'Microservices',
        'REST APIs',
    ],
};
