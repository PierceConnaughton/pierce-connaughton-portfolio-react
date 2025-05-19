/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { FaLinkedin, FaGithub, FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

/*
 * Footer component displays quick links, contact information, and social media links.
 */
const Footer = () => (
    <Box component="footer" className={styles.footer}>
        {/* Main Content Section */}
        <Box
            className={styles.footerbody}
            sx={{
                maxWidth: 'lg',
                mx: 'auto',
                gap: 3,
            }}
        >
            {/* Quick Links */}
            <Box sx={{ flex: 1, minWidth: 0, display: { xs: 'none', md: 'block' } }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Quick links
                </Typography>
                <Typography variant="body2">
                    <MuiLink component={Link} to="/" color="inherit" underline="hover">
                        HOME
                    </MuiLink>
                </Typography>
                <Typography variant="body2">
                    <MuiLink component={Link} to="/projects" color="inherit" underline="hover">
                        PROJECTS
                    </MuiLink>
                </Typography>
                <Typography variant="body2">
                    <MuiLink component={Link} to="/work-experience" color="inherit" underline="hover">
                        WORK EXPERIENCE
                    </MuiLink>
                </Typography>
                <Typography variant="body2">
                    <MuiLink component={Link} to="/about" color="inherit" underline="hover">
                        ABOUT
                    </MuiLink>
                </Typography>
            </Box>
            {/* Contact */}
            <Box sx={{ flex: 1, minWidth: 0, display: { xs: 'none', md: 'block' } }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom align="center">
                    Contact
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <FaMapMarker style={{ marginRight: 8 }} /> Letterkenny, Co.Donegal, Republic Of Ireland.
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <FaEnvelope style={{ marginRight: 8 }} />
                        <MuiLink
                            href="mailto:pierce.connaught@gmail.com"
                            color="inherit"
                            underline="always"
                            sx={{ fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            pierce.connaught@gmail.com
                        </MuiLink>
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <FaPhone style={{ marginRight: 8 }} /> +353 083-074-7786
                    </Typography>
                </Box>
            </Box>
            {/* Social Media */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Social Media
                </Typography>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/pierce-connaughton/"
                    target="_blank"
                    rel="noopener"
                    className={styles.linkedin}
                    color="inherit"
                >
                    <FaLinkedin />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://github.com/PierceConnaughton/"
                    target="_blank"
                    rel="noopener"
                    className={styles.github}
                    color="inherit"
                >
                    <FaGithub />
                </IconButton>
            </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', py: 1, mt: 1 }}>
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} <u>Pierce Connaughton</u> All rights reserved
            </Typography>
        </Box>
    </Box>
);

export default Footer;
