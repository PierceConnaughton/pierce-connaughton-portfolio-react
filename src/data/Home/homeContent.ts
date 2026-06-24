/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

export interface HomeMetric {
    value: string;
    label: string;
}

export const homeContent = {
    role: 'Associate Software Engineer',
    employer: 'SITA',
    location: 'Letterkenny, Ireland',
    tagline: 'Event-driven systems for aviation baggage — from Kafka pipelines to customer-facing apps',
    paragraphs: [
        'Software engineer with a BSc in Computer Science from ATU Sligo (Academic Excellence Award). I build production systems that help airlines and passengers locate lost baggage, automate refunds, and process high-volume event streams.',
        'At SITA I work on an agile team shipping microservices, REST APIs, and web applications with Java, Spring Boot, Kafka, Kubernetes, Neo4j, Angular, and AWS — while driving delivery efficiency and AI-assisted development practices.',
    ],
    metrics: [
        { value: '1,000+', label: 'Kafka messages/sec' },
        { value: '30%', label: 'Sprint cycle time saved' },
        { value: '80%', label: 'Bug investigation cost cut' },
    ] as HomeMetric[],
    techStack: [
        'Java',
        'Spring Boot',
        'Kafka',
        'Kubernetes',
        'Angular',
        'React',
        'TypeScript',
        'AWS',
        'Neo4j',
        'MongoDB',
        'Docker',
        'REST APIs',
    ],
    email: 'pierce.connaught@gmail.com',
};
