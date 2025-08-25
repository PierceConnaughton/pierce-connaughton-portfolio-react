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
import type {Project} from "../../../data/Projects/ProjectsInterface.ts";

interface Props {
    project: Project;
    onClick: () => void;
}

/*
 * ProjectCard component displays a card for each project with its title and technologies used.
 */
const ProjectCard: React.FC<Props> = ({ project, onClick }) => (
    <Box
        onClick={onClick}
        className={styles.projectCard}
    >
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


