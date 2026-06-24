/*

 * © 2025 Pierce Connaughton

 * All rights reserved.

 *

 * This source code is licensed under the MIT License.

 * See the LICENSE file in the project root for license information.

 */



import React from 'react';

import {

    Typography,

    Button,

    Avatar,

    Stack,

    Paper,

    Grid,

    Box,

    Divider,

    Chip,

} from '@mui/material';

import { Link } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import profileImg from '../../assets/images/profile.jpg';

import { homeContent } from '../../data/Home/homeContent';

import { featuredProjects } from '../../data/Projects/Projects';

import styles from './Home.module.scss';
import PageMeta from '../../components/PageMeta/PageMeta';
import JsonLd from '../../components/JsonLd/JsonLd';
import { pageSeo, personJsonLd } from '../../config/seo';



const Home: React.FC = () => {

    return (

        <>

            <PageMeta {...pageSeo.home} />

            <JsonLd data={personJsonLd} />

        <div className={styles.root}>

            <Paper elevation={0} className={styles.card}>

                <Stack spacing={3} alignItems="center">

                    <Box sx={{ position: 'relative', textAlign: 'center' }}>

                        <Avatar

                            src={profileImg}

                            alt="Pierce Connaughton"

                            className={styles.avatar}

                            sx={{

                                width: '9rem',

                                height: '9rem',

                                border: '4px solid rgba(255, 255, 255, 0.9)',

                                mx: 'auto',

                            }}

                        />

                    </Box>



                    <Box sx={{ textAlign: 'center', width: '100%' }}>

                        <Typography variant="h2" gutterBottom className={styles.heading} sx={{ mb: 1 }}>

                            Pierce Connaughton

                        </Typography>

                        <Typography variant="h5" className={styles.subheading} sx={{ mb: 0.5 }}>

                            {homeContent.role}

                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>

                            {homeContent.employer} · {homeContent.location}

                        </Typography>

                        <Divider

                            sx={{

                                width: '50px',

                                mx: 'auto',

                                mb: 2,

                                borderColor: 'rgba(0, 128, 128, 0.3)',

                                borderWidth: '2px',

                            }}

                        />

                        <Typography

                            variant="body1"

                            color="primary"

                            sx={{ fontWeight: 600, fontSize: '1.05rem', maxWidth: '34rem', mx: 'auto' }}

                        >

                            {homeContent.tagline}

                        </Typography>

                    </Box>



                    <Grid container spacing={2} className={styles.metricsGrid}>

                        {homeContent.metrics.map((metric) => (

                            <Grid key={metric.label} size={{ xs: 12, sm: 4 }}>

                                <Paper elevation={0} className={styles.metricCard}>

                                    <Typography variant="h5" className={styles.metricValue}>

                                        {metric.value}

                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" className={styles.metricLabel}>

                                        {metric.label}

                                    </Typography>

                                </Paper>

                            </Grid>

                        ))}

                    </Grid>



                    <Box sx={{ maxWidth: '36rem', width: '100%' }}>

                        {homeContent.paragraphs.map((paragraph) => (

                            <Typography

                                key={paragraph.slice(0, 40)}

                                variant="body1"

                                color="text.secondary"

                                className={styles.body}

                                sx={{ mb: 2, fontSize: '1.05rem', textAlign: 'center' }}

                            >

                                {paragraph}

                            </Typography>

                        ))}

                    </Box>



                    <Box sx={{ width: '100%' }}>

                        <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600, textAlign: 'center' }}>

                            Core stack

                        </Typography>

                        <Box className={styles.techChips}>

                            {homeContent.techStack.map((tech) => (

                                <Chip key={tech} label={tech} size="small" className={styles.techChip} />

                            ))}

                        </Box>

                    </Box>



                    <Box sx={{ width: '100%' }}>

                        <Typography

                            variant="h6"

                            sx={{ mb: 2, color: 'text.primary', fontWeight: 600, textAlign: 'center' }}

                        >

                            Featured projects

                        </Typography>

                        <Stack spacing={2}>

                            {featuredProjects.map((project) => (

                                <Paper key={project.title} elevation={0} className={styles.featuredCard}>

                                    <Typography variant="h6" sx={{ mb: 0.5, color: 'primary.main', fontWeight: 700 }}>

                                        {project.title}

                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.95rem' }}>

                                        {project.description}

                                    </Typography>

                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>

                                        {project.liveDemo && (

                                            <Button

                                                variant="contained"

                                                color="primary"

                                                href={project.liveDemo}

                                                target="_blank"

                                                rel="noopener noreferrer"

                                                endIcon={<OpenInNewIcon />}

                                                className={styles.featuredButton}

                                                sx={{ flex: 1, minWidth: '10rem' }}

                                            >

                                                Live demo

                                            </Button>

                                        )}

                                        <Button

                                            variant="outlined"

                                            color="primary"

                                            href={project.githubLink}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            sx={{ flex: 1, minWidth: '10rem' }}

                                        >

                                            GitHub

                                        </Button>

                                    </Box>

                                </Paper>

                            ))}

                        </Stack>

                    </Box>



                    <Box sx={{ width: '100%', mt: 1 }}>

                        <Grid container spacing={2}>

                            <Grid size={{ xs: 12, sm: 6 }}>

                                <Button

                                    variant="contained"

                                    color="primary"

                                    component="a"

                                    href={`mailto:${homeContent.email}`}

                                    startIcon={<EmailIcon />}

                                    className={styles.primaryCta}

                                    fullWidth

                                    sx={{ height: '3rem' }}

                                >

                                    Get in touch

                                </Button>

                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>

                                <Button

                                    variant="outlined"

                                    color="primary"

                                    href="/Pierce Connaughton resume.pdf"

                                    download

                                    fullWidth

                                    sx={{ height: '3rem' }}

                                >

                                    Download resume

                                </Button>

                            </Grid>

                            <Grid size={{ xs: 6 }}>

                                <Button

                                    variant="outlined"

                                    color="primary"

                                    component={Link}

                                    to="/projects"

                                    className={styles.button}

                                    fullWidth

                                    sx={{ height: '3rem' }}

                                >

                                    Projects

                                </Button>

                            </Grid>

                            <Grid size={{ xs: 6 }}>

                                <Button

                                    variant="outlined"

                                    color="primary"

                                    component={Link}

                                    to="/work-experience"

                                    className={styles.button}

                                    fullWidth

                                    sx={{ height: '3rem' }}

                                >

                                    Experience

                                </Button>

                            </Grid>

                            <Grid size={{ xs: 12 }}>

                                <Button

                                    variant="outlined"

                                    color="primary"

                                    component={Link}

                                    to="/about"

                                    className={styles.button}

                                    fullWidth

                                    sx={{ height: '3rem' }}

                                >

                                    About me

                                </Button>

                            </Grid>

                        </Grid>

                    </Box>



                    <Box sx={{ mt: 1, opacity: 0.6 }}>

                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>

                            Built with React, TypeScript & Material-UI

                        </Typography>

                    </Box>

                </Stack>

            </Paper>

        </div>

        </>

    );

};



export default Home;

