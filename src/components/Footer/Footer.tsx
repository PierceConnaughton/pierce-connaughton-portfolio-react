/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Box, Typography, IconButton, Button } from '@mui/material';
import { FaLinkedin, FaGithub, FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/fa';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

/*
 * Footer component displays quick links, contact information, and social media links.
 */
const Footer = () => (
    <Box component="footer" className={styles.footer}>
        {/* Main Content Section */}
        <Box className={styles.footerbody}>
            {/* Contact */}
            <Box className={styles.footerSection}>
                <Typography variant="h6" className={styles.footerHeader}>
                    Contact
                </Typography>
                <Box className={styles.contactInfo}>
                    <Box className={styles.contactItem}>
                        <FaMapMarker className={styles.icon} />
                        <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
                            Donegal, Ireland
                        </Typography>
                    </Box>
                    <Box className={styles.contactItem}>
                        <FaPhone className={styles.icon} />
                        <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
                            +353 083-074-7786
                        </Typography>
                    </Box>
                </Box>
            </Box>
            
            {/* Connect */}
            <Box className={styles.footerSection}>
                <Typography variant="h6" className={styles.footerHeader}>
                    Connect
                </Typography>
                <Box className={styles.socialLinks}>
                    <IconButton
                        component="a"
                        href="mailto:pierce.connaught@gmail.com"
                        target="_blank"
                        rel="noopener"
                        className={styles.socialButton}
                        aria-label="Email"
                        size="small"
                    >
                        <FaEnvelope />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/pierce-connaughton/"
                        target="_blank"
                        rel="noopener"
                        className={styles.socialButton}
                        aria-label="LinkedIn"
                        size="small"
                    >
                        <FaLinkedin />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/PierceConnaughton/"
                        target="_blank"
                        rel="noopener"
                        className={styles.socialButton}
                        aria-label="GitHub"
                        size="small"
                    >
                        <FaGithub />
                    </IconButton>
                </Box>
            </Box>
            
            {/* Resume Download */}
            <Box className={styles.footerSection}>
                <Typography variant="h6" className={styles.footerHeader}>
                    Resume
                </Typography>
                <Button
                    component="a"
                    href="/Pierce Connaughton resume.pdf"
                    download
                    variant="outlined"
                    size="small"
                    className={styles.resumeButton}
                    startIcon={<DownloadIcon sx={{ fontSize: '1rem' }} />}
                    sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, 0.4)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                    }}
                >
                    Download CV
                </Button>
            </Box>
        </Box>

        {/* Copyright */}
        <Box className={styles.copyright}>
            <Typography className={styles.copyrightText}>
                &copy; {new Date().getFullYear()}{' '}
                <Link to="/" className={styles.name}>
                    Pierce Connaughton
                </Link>{' '}
                All rights reserved
            </Typography>
        </Box>
    </Box>
);

export default Footer;
