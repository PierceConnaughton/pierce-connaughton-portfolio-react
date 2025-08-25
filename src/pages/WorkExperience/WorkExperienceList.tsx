/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React, { useState } from 'react';
import { Typography, Box, Stack, List, ListItem, ListItemText } from '@mui/material';
import { workExperiences } from "../../data/WorkExperience/WorkExperience.ts";
import { Modal } from '../../components';
import styles from './WorkExperience.module.scss';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

/*
 * WorkExperienceList component displays a list of work experiences. Each experience can be clicked to open a modal with more details.
 * The modal includes the company name, location, roles, and a map showing the company's location.
 */
const WorkExperienceList: React.FC = () => {
    const [selectedCompany, setSelectedCompany] = useState<typeof workExperiences[0] | null>(null);

    const handleClose = () => setSelectedCompany(null);

    return (
        <>
            <Stack spacing={2}>
                {workExperiences.map((companyExp) => (
                    <Box
                        key={companyExp.company}
                        className={styles.workExperienceCard}
                        onClick={() => setSelectedCompany(companyExp)}
                    >
                        <Typography className={styles.companyName}>
                            {companyExp.company}
                        </Typography>
                        <Typography className={styles.location}>
                            {companyExp.location}
                        </Typography>
                        <Typography className={styles.roles}>
                            {companyExp.roles.map((role) => role.title).join(', ')}
                        </Typography>
                    </Box>
                ))}
            </Stack>

            <Modal open={!!selectedCompany} onClose={handleClose}>
                {selectedCompany && (
                    <>
                        <Typography className={styles.modalTitle}>
                            {selectedCompany.company}
                        </Typography>
                        <Typography className={styles.modalLocation}>
                            {selectedCompany.location}
                        </Typography>
                        
                        {selectedCompany && selectedCompany.latitude && selectedCompany.longitude && (
                            <Box className={styles.mapContainer}>
                                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}>
                                    <GoogleMap
                                        mapContainerStyle={{ width: '100%', height: '13.75rem', borderRadius: 8 }}
                                        center={{ lat: selectedCompany.latitude, lng: selectedCompany.longitude }}
                                        zoom={14}
                                    >
                                        <Marker position={{ lat: selectedCompany.latitude, lng: selectedCompany.longitude }} />
                                    </GoogleMap>
                                </LoadScript>
                            </Box>
                        )}
                        
                        <Stack spacing={2}>
                            {selectedCompany.roles.map((role) => (
                                <Box key={role.title + role.startDate} className={styles.roleSection}>
                                    <Typography className={styles.roleTitle}>
                                        {role.title}
                                    </Typography>
                                    <Typography className={styles.roleDates}>
                                        {role.startDate} – {role.endDate ?? 'Present'}
                                    </Typography>
                                    <List disablePadding>
                                        {role.description.map((point, i) => (
                                            <ListItem
                                                key={i}
                                                disablePadding
                                                className={styles.descriptionItem}
                                            >
                                                <ListItemText primary={point} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            ))}
                        </Stack>
                    </>
                )}
            </Modal>
        </>
    );
};

export default WorkExperienceList;
