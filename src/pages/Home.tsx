/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                Hi, I’m Pierce Connaughton
            </Typography>

            <Typography variant="h6" color="text.secondary">
                I’m a software developer passionate about building clean, user-focused web applications.
                Explore my work and learn more about me.
            </Typography>

            <Button variant="contained" color="primary" component={Link} to="/projects" sx={{ mt: 4 }}>
                View Projects
            </Button>
        </Box>
    );
};

export default Home;
