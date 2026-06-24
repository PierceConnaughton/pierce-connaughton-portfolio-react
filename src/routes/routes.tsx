/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React, { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

const Home = lazy(() => import('../pages/Home/Home.tsx'));
const ProjectsPage = lazy(() => import('../pages/Projects/ProjectsPage.tsx'));
const WorkExperience = lazy(() => import('../pages/WorkExperience/WorkExperience.tsx'));
const About = lazy(() => import('../pages/About/About.tsx'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound.tsx'));

const PageLoader = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress color="primary" />
    </Box>
);

const withSuspense = (element: React.ReactNode) => (
    <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

interface RouteType {
    path?: string;
    element: React.ReactNode;
    index?: boolean;
}

const routes: RouteType[] = [
    {
        index: true,
        element: withSuspense(<Home />),
    },
    {
        path: 'projects',
        element: withSuspense(<ProjectsPage />),
    },
    {
        path: 'work-experience',
        element: withSuspense(<WorkExperience />),
    },
    {
        path: 'about',
        element: withSuspense(<About />),
    },
    {
        path: '*',
        element: withSuspense(<NotFound />),
    },
];

export default routes;
