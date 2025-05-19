/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React, {useState} from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import {
    softSkills,
    programmingLanguages,
    frameworks,
    cloudWeb,
    toolsAndTechnologies
} from '../../data/Skills/skills.ts';
import { university } from "../../data/University/university.ts";
import * as SiIcons from 'react-icons/si';
import * as LgIcons from '@meronex/icons/lg';
import { MdBuild } from 'react-icons/md';
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './About.module.scss';

/*
    * About component displays information about the author, including a brief bio, education details, and a list of skills.
    * The education section includes a Google Maps showing the location of the university.
    * The skills section is divided into categories, each expandable to show the relevant skills.
 */
const About: React.FC = () => {
    const [expanded, setExpanded] = useState<string[]>([]);

    const handleAccordionChange = (key: string) => (
        _event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(prev =>
            isExpanded
                ? [...prev, key]
                : prev.filter(k => k !== key)
        );
    };

    const getIconComponent = (iconName?: string) => {
        if (!iconName) return MdBuild;
        // @ts-ignore
        return SiIcons[iconName] || LgIcons[iconName] || MdBuild;
    };

    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            {/* Title */}
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>

            {/* Bio */}
            <Paper
                elevation={2}
                className={styles.bioPaper}
            >
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500, mb: 1 }}>
                    I am a passionate software developer with a strong foundation in programming languages and frameworks. I have experience in developing web applications, working with cloud technologies, and utilizing various tools to enhance productivity and collaboration.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                    I am always eager to learn new technologies and improve my skills. I thrive in collaborative environments and enjoy tackling challenging problems. My goal is to contribute to innovative projects that make a positive impact.
                </Typography>
            </Paper>

            {/* Education */}
            <Box mt={5}>
                <Typography variant="h5" gutterBottom>
                    Education
                </Typography>
                <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant="h6">{university.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {university.degree} - {university.results}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {university.startDate} - {university.endDate}
                    </Typography>
                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}>
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '13.75rem', borderRadius: 8 }}
                            center={{ lat: university.latitude, lng: university.longitude }}
                            zoom={14}
                        >
                            <Marker position={{ lat: university.latitude, lng: university.longitude }} />
                        </GoogleMap>
                    </LoadScript>
                </Paper>
            </Box>

            {/* Skills */}
            <Box mt={5}>
                <Typography variant="h5" gutterBottom>
                    Skills
                </Typography>
                <div className={styles.skillsGrid}>
                <Accordion className={styles.skillAccordion}
                           expanded={expanded.includes('programmingLanguages')}
                           onChange={handleAccordionChange('programmingLanguages')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Programming Languages</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {programmingLanguages.map((lang) => (
                                <ListItem key={lang.name} sx={{ display: 'flex', alignItems: 'center' }}>
                                    {lang.icon && (
                                        <Box component={getIconComponent(lang.icon)} className={styles.skillIcon} />
                                    )}
                                    <ListItemText primary={lang.name} sx={{ fontWeight: 500 }} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.skillAccordion}
                           expanded={expanded.includes('frameworks')}
                           onChange={handleAccordionChange('frameworks')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Frameworks & Libraries</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {frameworks.map((framework) => (
                                <ListItem key={framework.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {framework.icon && (
                                        <Box component={getIconComponent(framework.icon)} className={styles.skillIcon} />
                                    )}
                                    <ListItemText primary={framework.name} sx={{ fontWeight: 500 }} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.skillAccordion}
                           expanded={expanded.includes('cloudWeb')}
                           onChange={handleAccordionChange('cloudWeb')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Cloud & Web Tech</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {cloudWeb.map((tech) => (
                                <ListItem key={tech.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {tech.icon && (
                                        <Box component={getIconComponent(tech.icon)} className={styles.skillIcon} />
                                    )}
                                    <ListItemText primary={tech.name} sx={{ fontWeight: 500 }} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.skillAccordion}
                           expanded={expanded.includes('softSkills')}
                           onChange={handleAccordionChange('softSkills')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Soft Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {softSkills.map((skill) => (
                                <ListItem key={skill}>
                                    <ListItemText primary={skill} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles.skillAccordion}
                           expanded={expanded.includes('toolsAndTechnologies')}
                           onChange={handleAccordionChange('toolsAndTechnologies')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Tools & Technologies</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {toolsAndTechnologies.map((tool) => (
                                <ListItem key={tool.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {tool.icon && (
                                        <Box component={getIconComponent(tool.icon)} className={styles.skillIcon} />
                                    )}
                                    <ListItemText primary={tool.name} sx={{ fontWeight: 500 }} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </div>
            </Box>
        </Container>
    );
};

export default About;
