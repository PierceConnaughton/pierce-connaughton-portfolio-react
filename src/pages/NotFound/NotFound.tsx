/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound: React.FC = () => (
    <Container>
        <Typography variant="h4" gutterBottom>
            404 – Page Not Found
        </Typography>
        <Typography variant="body1">
            Sorry, the page you are looking for does not exist.
        </Typography>
    </Container>
);

export default NotFound;