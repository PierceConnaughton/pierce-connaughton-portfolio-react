/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Typography, Button, Avatar, Stack, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/profile.jpg';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className={styles.root}>
            <Paper elevation={12} className={styles.card}>
                <Stack spacing={3} alignItems="center">
                    <Avatar
                        src={profileImg}
                        alt="Pierce Connaughton"
                        className={styles.avatar}
                        sx={{ width: '9rem', height: '9rem' }}
                    />
                    <Typography
                        variant="h4"
                        gutterBottom
                        className={styles.heading}
                    >
                        Portfolio of Pierce Connaughton
                    </Typography>
                    <Typography
                        variant="h5"
                        className={styles.subheading}
                    >
                        Software Engineer
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 400, marginY: 2 }}
                    >
                        I’m a passionate software developer with a BSc in Computing (Distinction) from Atlantic Technological University.
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: 400, marginBottom: 2 }}
                    >
                        Currently, I work as an Associate Software Engineer at SITA, developing a range of applications—including web applications, event-driven systems, APIs, and cloud solutions.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/projects"
                        className={styles.button}
                    >
                        View Projects
                    </Button>
                </Stack>
            </Paper>
        </div>
    );
};

export default Home;