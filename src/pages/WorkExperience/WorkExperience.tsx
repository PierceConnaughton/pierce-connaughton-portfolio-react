/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import {Container, Typography} from '@mui/material';
import WorkExperienceList from "./WorkExperienceList/WorkExperienceList.tsx";

/*
 * WorkExperience component displays a list of work experiences with a brief description.
 * It includes a title and a short introduction.
 */
const WorkExperience: React.FC = () => (
    <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            Work Experience
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
            Here are some of the companies I have worked for, along with my roles and responsibilities. Click on any company to see more details about my experience there.
        </Typography>
        <WorkExperienceList />
    </Container>
);

export default WorkExperience;
