/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React, {useState} from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { PageHeader, PageContainer } from '../../components';
import {
    softSkills,
    programmingLanguages,
    frameworks,
    cloudWeb,
    toolsAndTechnologies,
    ides
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
        <PageContainer className={styles.aboutPage}>
            {/* Page Header */}
            <PageHeader 
                title="About Me"
                description="Learn more about my background, education, and technical skills. Discover the technologies and tools I work with, and understand my approach to software development."
            />

            {/* Bio Section */}
            <Box className={styles.bioSection}>
                <Paper elevation={0} className={styles.bioPaper}>
                    <Typography variant="body1" className={styles.bioText}>
                        I am a passionate software developer with a strong foundation in programming languages and frameworks. I have experience in developing web applications, working with cloud technologies, and utilizing various tools to enhance productivity and collaboration.
                    </Typography>
                    <Typography variant="body1" className={styles.bioText}>
                        I am always eager to learn new technologies and improve my skills. I thrive in collaborative environments and enjoy tackling challenging problems. My goal is to contribute to innovative projects that make a positive impact.
                    </Typography>
                </Paper>
            </Box>

            {/* Education Section */}
            <Box className={styles.educationSection}>
                <Typography variant="h5" className={styles.sectionTitle} gutterBottom>
                    Education
                </Typography>
                <Paper elevation={0} className={styles.educationPaper}>
                    <Typography variant="h6" className={styles.universityName}>
                        {university.name}
                    </Typography>
                    <Typography variant="subtitle1" className={styles.degreeInfo}>
                        {university.degree} - {university.results}
                    </Typography>
                    <Typography variant="body2" className={styles.degreeDates}>
                        {university.startDate} - {university.endDate}
                    </Typography>
                    <Box className={styles.mapContainer}>
                        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}>
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '13.75rem', borderRadius: 8 }}
                                center={{ lat: university.latitude, lng: university.longitude }}
                                zoom={14}
                            >
                                <Marker position={{ lat: university.latitude, lng: university.longitude }} />
                            </GoogleMap>
                        </LoadScript>
                    </Box>
                </Paper>
            </Box>

            {/* Skills Section */}
            <Box className={styles.skillsSection}>
                <Typography variant="h5" className={styles.sectionTitle} gutterBottom>
                    Skills
                </Typography>
                <div className={styles.skillsGrid}>
                    <Accordion 
                        className={styles.skillAccordion}
                        expanded={expanded.includes('programmingLanguages')}
                        onChange={handleAccordionChange('programmingLanguages')}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordionSummary}>
                            <Typography variant="h6" className={styles.accordionTitle}>Programming Languages</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <List dense>
                                {programmingLanguages.map((lang) => (
                                    <ListItem key={lang.name} className={styles.skillItem}>
                                        {lang.icon && (
                                            <Box component={getIconComponent(lang.icon)} className={styles.skillIcon} />
                                        )}
                                        <ListItemText primary={lang.name} className={styles.skillText} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion 
                        className={styles.skillAccordion}
                        expanded={expanded.includes('frameworks')}
                        onChange={handleAccordionChange('frameworks')}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordionSummary}>
                            <Typography variant="h6" className={styles.accordionTitle}>Frameworks & Libraries</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <List dense>
                                {frameworks.map((framework) => (
                                    <ListItem key={framework.name} className={styles.skillItem}>
                                        {framework.icon && (
                                            <Box component={getIconComponent(framework.icon)} className={styles.skillIcon} />
                                        )}
                                        <ListItemText primary={framework.name} className={styles.skillText} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion 
                        className={styles.skillAccordion}
                        expanded={expanded.includes('cloudWeb')}
                        onChange={handleAccordionChange('cloudWeb')}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordionSummary}>
                            <Typography variant="h6" className={styles.accordionTitle}>Cloud & Web Tech</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <List dense>
                                {cloudWeb.map((tech) => (
                                    <ListItem key={tech.name} className={styles.skillItem}>
                                        {tech.icon && (
                                            <Box component={getIconComponent(tech.icon)} className={styles.skillIcon} />
                                        )}
                                        <ListItemText primary={tech.name} className={styles.skillText} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion 
                        className={styles.skillAccordion}
                        expanded={expanded.includes('softSkills')}
                        onChange={handleAccordionChange('softSkills')}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordionSummary}>
                            <Typography variant="h6" className={styles.accordionTitle}>Soft Skills</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <List dense>
                                {softSkills.map((skill) => (
                                    <ListItem key={skill} className={styles.skillItem}>
                                        <ListItemText primary={skill} className={styles.skillText} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion 
                        className={styles.skillAccordion}
                        expanded={expanded.includes('toolsAndTechnologies')}
                        onChange={handleAccordionChange('toolsAndTechnologies')}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordionSummary}>
                            <Typography variant="h6" className={styles.accordionTitle}>Tools & Technologies</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <List dense>
                                {toolsAndTechnologies.map((tool) => (
                                    <ListItem key={tool.name} className={styles.skillItem}>
                                        {tool.icon && (
                                            <Box component={getIconComponent(tool.icon)} className={styles.skillIcon} />
                                        )}
                                        <ListItemText primary={tool.name} className={styles.skillText} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion 
                        className={styles.skillAccordion}
                        expanded={expanded.includes('ides')}
                        onChange={handleAccordionChange('ides')}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordionSummary}>
                            <Typography variant="h6" className={styles.accordionTitle}>IDEs</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <List dense>
                                {ides.map((tool) => (
                                    <ListItem key={tool.name} className={styles.skillItem}>
                                        {tool.icon && (
                                            <Box component={getIconComponent(tool.icon)} className={styles.skillIcon} />
                                        )}
                                        <ListItemText primary={tool.name} className={styles.skillText} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Box>
        </PageContainer>
    );
};

export default About;
