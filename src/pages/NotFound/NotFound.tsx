/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/PageMeta/PageMeta';
import { pageSeo } from '../../config/seo';

const NotFound: React.FC = () => (
    <>
        <PageMeta {...pageSeo.notFound} noIndex />
        <Container>
            <Typography variant="h4" gutterBottom>
                404 – Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Back to home
            </Button>
        </Container>
    </>
);

export default NotFound;
