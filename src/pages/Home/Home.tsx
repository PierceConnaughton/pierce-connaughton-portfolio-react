/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Typography, Button, Avatar, Stack, Paper, Grid, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/profile.jpg';
import styles from './Home.module.scss';

/*
 * Home component serves as the landing page of the portfolio, showcasing a brief introduction and a call to action.
 */
const Home: React.FC = () => {
    return (
        <div className={styles.root}>
            <Paper elevation={0} className={styles.card}>
                <Stack spacing={5} alignItems="center">
                    {/* Profile Section */}
                    <Box sx={{ position: 'relative', textAlign: 'center' }}>
                        <Avatar
                            src={profileImg}
                            alt="Pierce Connaughton"
                            className={styles.avatar}
                            sx={{ 
                                width: '11rem', 
                                height: '11rem',
                                border: '5px solid rgba(255, 255, 255, 0.9)',
                                mx: 'auto'
                            }}
                        />
                    </Box>
                    
                    {/* Header Section */}
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography
                            variant="h2"
                            gutterBottom
                            className={styles.heading}
                            sx={{ mb: 2 }}
                        >
                            Pierce Connaughton
                        </Typography>
                        <Typography
                            variant="h4"
                            className={styles.subheading}
                            sx={{ mb: 3 }}
                        >
                            Software Engineer
                        </Typography>
                        
                        {/* Decorative divider */}
                        <Divider 
                            sx={{ 
                                width: '60px', 
                                mx: 'auto', 
                                mb: 3,
                                borderColor: 'rgba(0, 128, 128, 0.3)',
                                borderWidth: '2px'
                            }} 
                        />
                    </Box>
                    
                    {/* Content Section */}
                    <Box sx={{ maxWidth: '34rem', width: '100%' }}>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            className={styles.body}
                            sx={{ mb: 3, fontSize: '1.15rem' }}
                        >
                            Hi I'm Pierce, a passionate software developer with a BSc in Computing (Distinction). Committed to providing high-level solutions that drive business.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            className={styles.body}
                            sx={{ mb: 3, fontSize: '1.15rem' }}
                        >
                            Currently, I work as an Associate Software Engineer, developing a range of applications—including web applications, event-driven systems, APIs, and cloud solutions.
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            className={styles.body}
                            sx={{ 
                                fontStyle: 'italic', 
                                mb: 4,
                                fontSize: '1.05rem',
                                opacity: 0.8,
                                textAlign: 'center'
                            }}
                        >
                            This portfolio is my first React project, built to showcase my ability to quickly upskill and learn new technologies.
                        </Typography>
                    </Box>
                    
                    {/* Action Buttons */}
                    <Box sx={{ width: '100%', mt: 2 }}>
                        <Grid container spacing={3} columns={{ xs: 4, md: 8 }}>
                            <Grid size={4}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    component={Link}
                                    to="/projects"
                                    className={styles.button}
                                    fullWidth
                                    sx={{ height: '3.5rem' }}
                                >
                                    View Projects
                                </Button>
                            </Grid>
                            <Grid size={4}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    component={Link}
                                    to="/work-experience"
                                    className={styles.button}
                                    fullWidth
                                    sx={{ height: '3.5rem' }}
                                >
                                    Work Experience
                                </Button>
                            </Grid>
                            <Grid size={8}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    component={Link}
                                    to="/about"
                                    className={styles.button}
                                    fullWidth
                                    sx={{ height: '3.5rem' }}
                                >
                                    About Me
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    
                    {/* Footer note */}
                    <Box sx={{ mt: 2, opacity: 0.6 }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: '0.85rem' }}
                        >
                            Built with React & Material-UI
                        </Typography>
                    </Box>
                </Stack>
            </Paper>
        </div>
    );
};

export default Home;