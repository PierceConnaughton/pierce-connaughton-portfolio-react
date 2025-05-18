/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React, { useState } from 'react';
import { Typography, Box, Paper, Stack, Modal, IconButton, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { workExperiences } from '../../../data/WorkExperience/WorkExperience.ts';
import styles from './WorkExperienceList.module.scss';
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
            <Stack spacing={3}>
                {workExperiences.map((companyExp) => (
                    <Paper
                        key={companyExp.company}
                        className={styles.workExperienceCard}
                        sx={{ p: 3, cursor: 'pointer' }}
                        onClick={() => setSelectedCompany(companyExp)}
                    >
                        <Typography variant="h6">{companyExp.company}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {companyExp.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            {companyExp.roles.map((role) => role.title).join(', ')}
                        </Typography>
                    </Paper>
                ))}
            </Stack>

            <Modal open={!!selectedCompany} onClose={handleClose}>
                <Box className={styles.workExperienceModalBox}
                sx={{
                    maxHeight: '70vh',
                    overflowY: 'auto'
                }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedCompany && (
                        <>
                            <Typography variant="h5">{selectedCompany.company}</Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                {selectedCompany.location}
                            </Typography>
                            {selectedCompany && selectedCompany.latitude && selectedCompany.longitude && (
                                <Box sx={{ my: 2 }}>
                                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}>
                                        <GoogleMap
                                            mapContainerStyle={{ width: '100%', height: '220px', borderRadius: 8 }}
                                            center={{ lat: selectedCompany.latitude, lng: selectedCompany.longitude }}
                                            zoom={14}
                                        >
                                            <Marker position={{ lat: selectedCompany.latitude, lng: selectedCompany.longitude }} />
                                        </GoogleMap>
                                    </LoadScript>
                                </Box>
                            )}
                            <Stack spacing={2} mt={2}>
                                {selectedCompany.roles.map((role) => (
                                    <Box key={role.title + role.startDate}>
                                        <Typography variant="subtitle1">{role.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {role.startDate} – {role.endDate ?? 'Present'}
                                        </Typography>
                                        <List>
                                            {role.description.map((point, i) => (
                                                <ListItem
                                                    key={i}
                                                    disablePadding
                                                    sx={{
                                                        backgroundColor: 'background.paper',
                                                        boxShadow: 1,
                                                        px: 2,
                                                        py: 1,
                                                    }}
                                                >
                                                    <ListItemText primary={point}/>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                ))}
                            </Stack>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default WorkExperienceList;
