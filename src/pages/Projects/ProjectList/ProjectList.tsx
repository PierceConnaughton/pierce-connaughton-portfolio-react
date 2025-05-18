/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React, { useState } from 'react';
import { Modal, Box, Typography, Stack, Chip, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
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
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                />
            ))}

            <Modal open={!!selectedProject} onClose={handleClose}>
                <Box className={styles.projectModalBox}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedProject && (
                        <>
                            <Typography variant="h5">{selectedProject.title}</Typography>
                            <Typography variant="body1" sx={{ my: 2 }}>
                                {selectedProject.description}
                            </Typography>

                            <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
                                {selectedProject.technologies.map((tech) => (
                                    <Chip key={tech} label={tech} />
                                ))}
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="outlined"
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    GitHub
                                </Button>
                                {selectedProject.liveDemo && (
                                    <Button
                                        variant="contained"
                                        href={selectedProject.liveDemo}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Live Demo
                                    </Button>
                                )}
                            </Stack>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default ProjectList;


