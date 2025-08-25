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
                <Stack spacing={3} alignItems="center">
                    {/* Profile Section */}
                    <Box sx={{ position: 'relative', textAlign: 'center' }}>
                        <Avatar
                            src={profileImg}
                            alt="Pierce Connaughton"
                            className={styles.avatar}
                            sx={{ 
                                width: '9rem', 
                                height: '9rem',
                                border: '4px solid rgba(255, 255, 255, 0.9)',
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
                            sx={{ mb: 1 }}
                        >
                            Pierce Connaughton
                        </Typography>
                        <Typography
                            variant="h4"
                            className={styles.subheading}
                            sx={{ mb: 2 }}
                        >
                            Software Engineer
                        </Typography>
                        
                        {/* Decorative divider */}
                        <Divider 
                            sx={{ 
                                width: '50px', 
                                mx: 'auto', 
                                mb: 2,
                                borderColor: 'rgba(0, 128, 128, 0.3)',
                                borderWidth: '2px'
                            }} 
                        />
                    </Box>
                    
                    {/* Content Section */}
                    <Box sx={{ maxWidth: '32rem', width: '100%' }}>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            className={styles.body}
                            sx={{ mb: 2, fontSize: '1.1rem' }}
                        >
                            Hi I'm Pierce, a passionate software developer with a BSc in Computing (Distinction). Committed to providing high-level solutions that drive business.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            className={styles.body}
                            sx={{ mb: 2, fontSize: '1.1rem' }}
                        >
                            Currently working as an Associate Software Engineer, developing web applications, event-driven systems, APIs, and cloud solutions.
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            className={styles.body}
                            sx={{ 
                                fontStyle: 'italic', 
                                mb: 3,
                                fontSize: '1rem',
                                opacity: 0.8,
                                textAlign: 'center'
                            }}
                        >
                            This portfolio is my first React project, built to showcase my ability to quickly upskill and learn new technologies.
                        </Typography>
                    </Box>
                    
                    {/* Featured Project Section */}
                    <Box sx={{ width: '100%', mb: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ 
                                mb: 2, 
                                color: 'text.primary',
                                fontWeight: 600,
                                textAlign: 'center'
                            }}
                        >
                            Latest Project
                        </Typography>
                        <Paper 
                            elevation={0} 
                            sx={{ 
                                p: 3, 
                                background: 'linear-gradient(135deg, rgba(0, 128, 128, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%)',
                                border: '1px solid rgba(0, 128, 128, 0.1)',
                                borderRadius: '1rem',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(0, 128, 128, 0.15)',
                                    borderColor: 'rgba(0, 128, 128, 0.2)'
                                }
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ 
                                    mb: 1, 
                                    color: 'primary.main',
                                    fontWeight: 700
                                }}
                            >
                                WrestleGraph
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2, fontSize: '0.95rem' }}
                            >
                                A webapp that visualizes statistics scraped from cagematch.net. Built with Angular and Spring.
                            </Typography>
                            <Button
                                variant="contained"
                                href="https://www.wrestlegraph.com"
                                target="_blank"
                                rel="noopener"
                                className={styles.featuredButton}
                                fullWidth
                                sx={{ 
                                    height: '2.5rem',
                                    background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
                                        transform: 'translateY(-1px)'
                                    }
                                }}
                            >
                                View WrestleGraph
                            </Button>
                        </Paper>
                    </Box>
                    
                    {/* Action Buttons */}
                    <Box sx={{ width: '100%', mt: 1 }}>
                        <Grid container spacing={2} columns={{ xs: 4, md: 8 }}>
                            <Grid size={4}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    component={Link}
                                    to="/projects"
                                    className={styles.button}
                                    fullWidth
                                    sx={{ height: '3rem' }}
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
                                    sx={{ height: '3rem' }}
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
                                    sx={{ height: '3rem' }}
                                >
                                    About Me
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    
                    {/* Footer note */}
                    <Box sx={{ mt: 1, opacity: 0.6 }}>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: '0.8rem' }}
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