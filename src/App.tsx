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
import { Container, Box } from '@mui/material';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 80%, rgba(0, 128, 128, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 188, 212, 0.03) 0%, transparent 50%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }
            }}
        >
            <Header />
            <Container 
                component="main" 
                sx={{ 
                    py: 4, 
                    pt: 10, 
                    pb: { xs: 3, sm: 5 }, 
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1400px'
                }}
            >
                <Outlet />
            </Container>
            <Footer />
            <Analytics />
        </Box>
    );
};

export default App;
