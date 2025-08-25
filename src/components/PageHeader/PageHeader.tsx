/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './PageHeader.module.scss';

interface PageHeaderProps {
    title: string;
    description: string;
}

/*
 * PageHeader component provides a consistent header layout for pages.
 * Used by Projects, Work Experience, and other pages for consistent styling.
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
    <Box className={styles.pageHeader}>
        <Typography variant="h1" className={styles.pageTitle}>
            {title}
        </Typography>
        <Typography variant="body1" className={styles.pageDescription}>
            {description}
        </Typography>
    </Box>
);

export default PageHeader;
