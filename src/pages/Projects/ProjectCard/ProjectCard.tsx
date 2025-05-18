/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import type {Project} from "../../../data/Projects.ts";
import styles from './ProjectCard.module.scss';

interface Props {
    project: Project;
    onClick: () => void;
}

/*
 * ProjectCard component displays a card for each project with its title and technologies used.
 */
const ProjectCard: React.FC<Props> = ({ project, onClick }) => (
    <Card
        onClick={onClick}
        className={styles.projectCard}
        sx={{ cursor: 'pointer', mb: 2 }}
    >
        <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} mt={1} alignItems="flex-start">
                {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" sx={{ width: 'auto' }} />
                ))}
            </Stack>
        </CardContent>
    </Card>
);

export default ProjectCard;


