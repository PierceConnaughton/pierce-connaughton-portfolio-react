/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import { Container } from '@mui/material';
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Container component="main" sx={{ py: 4, pt: 10, pb: { xs: 3, sm: 5 }, flex: 1 }}>
                <Outlet />
            </Container>
            <Footer />
            <Analytics />
        </div>
    );
};

export default App;
