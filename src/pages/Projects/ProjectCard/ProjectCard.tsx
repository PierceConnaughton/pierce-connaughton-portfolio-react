/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './ProjectCard.module.scss';
import type { Project } from '../../../data/Projects/ProjectsInterface.ts';
import { createKeyboardClickHandler } from '../../../utils/keyboardClickable';

interface Props {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => (
    <Box
        {...createKeyboardClickHandler(onClick)}
        className={styles.projectCard}
        aria-label={`View details for ${project.title}`}
    >
        {project.image && (
            <Box className={styles.imageWrapper}>
                <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className={styles.projectImage}
                    loading="lazy"
                />
            </Box>
        )}
        <Typography variant="h5" className={styles.cardTitle}>
            {project.title}
        </Typography>
        <Box className={styles.techStack}>
            {project.technologies.map((tech) => (
                <Typography
                    key={tech}
                    component="span"
                    className={styles.techChip}
                >
                    {tech}
                </Typography>
            ))}
        </Box>
    </Box>
);

export default ProjectCard;
