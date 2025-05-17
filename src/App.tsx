/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See LICENSE file in the project root for license information.
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@mui/material';

const App: React.FC = () => {
    return (
        <>
            <Header />

            <Container component="main" sx={{ py: 4, pt: 10 }}>
                <Outlet />
            </Container>

            <Footer />
        </>
    );
};

export default App;
