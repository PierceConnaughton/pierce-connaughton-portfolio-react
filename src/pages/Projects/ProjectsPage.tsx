/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Typography, Box } from '@mui/material';
import ProjectList from "./ProjectList/ProjectList.tsx";

/*
 * ProjectsPage component displays a list of projects with a brief description.
 */
const ProjectsPage: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Projects
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Explore a selection of my personal and academic projects. Click on any project to see more details, technologies used, and links to source code or live demos.
            </Typography>
            <ProjectList />
        </Box>
    );
};

export default ProjectsPage;


