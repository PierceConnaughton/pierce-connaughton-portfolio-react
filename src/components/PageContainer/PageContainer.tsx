/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Container } from '@mui/material';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
    children: React.ReactNode;
    className?: string;
}

/*
 * PageContainer component provides a consistent page layout structure.
 * Used by Projects, Work Experience, and other pages for consistent styling.
 */
const PageContainer: React.FC<PageContainerProps> = ({ children, className }) => (
    <div className={`${styles.pageContainer} ${className || ''}`}>
        <Container maxWidth="xl">
            {children}
        </Container>
    </div>
);

export default PageContainer;
