/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React, { useState } from 'react';
import { Typography, Box, Stack, Chip, Button } from '@mui/material';
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import { Modal } from '../../../components';
import styles from './ProjectList.module.scss';
import {projects} from "../../../data/Projects/Projects.ts";
import type {Project} from "../../../data/Projects/ProjectsInterface.ts";

/*
 * ProjectList component displays a list of projects. Each project can be clicked to open a modal with more details.
 * The modal includes the project title, description, technologies used, and links to GitHub and live demo (if available).
 * The modal can be closed by clicking the close button.
 */
const ProjectList: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleClose = () => setSelectedProject(null);

    return (
        <>
            <div className={styles.projectGrid}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            <Modal open={!!selectedProject} onClose={handleClose}>
                {selectedProject && (
                    <>
                        <Typography className={styles.modalTitle}>
                            {selectedProject.title}
                        </Typography>
                        <Typography className={styles.modalDescription}>
                            {selectedProject.description}
                        </Typography>

                        <Box className={styles.modalTechnologies}>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {selectedProject.technologies.map((tech) => (
                                    <Chip 
                                        key={tech} 
                                        label={tech} 
                                        className={styles.techChip}
                                        size="medium"
                                    />
                                ))}
                            </Stack>
                        </Box>

                        <Box className={styles.modalActions}>
                            <Button
                                variant="outlined"
                                href={selectedProject.githubLink}
                                target="_blank"
                                rel="noopener"
                                className={`${styles.actionButton} ${styles.outlined}`}
                            >
                                View on GitHub
                            </Button>
                            {selectedProject.liveDemo && (
                                <Button
                                    variant="contained"
                                    href={selectedProject.liveDemo}
                                    target="_blank"
                                    rel="noopener"
                                    className={styles.actionButton}
                                >
                                    Live Demo
                                </Button>
                            )}
                        </Box>
                    </>
                )}
            </Modal>
        </>
    );
};

export default ProjectList;


