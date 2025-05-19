/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Typography, Button, Avatar, Stack, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/profile.jpg';
import styles from './Home.module.scss';

/*
 * Home component serves as the landing page of the portfolio, showcasing a brief introduction and a call to action.
 */
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
                        className={styles.body}
                        sx={{ marginY: 2 }}
                    >
                        Hi I’m Pierce, a passionate software developer with a BSc in Computing (Distinction). Committed to providing high-level solutions that drive business.
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        className={styles.body}
                        sx={{ marginBottom: 2 }}
                    >
                        Currently, I work as an Associate Software Engineer, developing a range of applications—including web applications, event-driven systems, APIs, and cloud solutions.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.body}
                        sx={{ fontStyle: 'italic', marginBottom: 2 }}
                    >
                        This portfolio is my first React project, built to showcase my ability to quickly upskill and learn new technologies.
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={Link}
                                to="/projects"
                                className={styles.button}
                            >
                                View Projects
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={Link}
                                to="/work-experience"
                            >
                                Work Experience
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={Link}
                                to="/about"
                            >
                                About Me
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>
        </div>
    );
};

export default Home;