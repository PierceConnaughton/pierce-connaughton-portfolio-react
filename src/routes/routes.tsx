/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import Home from '../pages/Home/Home.tsx';
import ProjectsPage from '../pages/Projects/ProjectsPage.tsx';
import WorkExperience from "../pages/WorkExperience/WorkExperience.tsx";
import About from "../pages/About/About.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";

interface RouteType {
    path?: string;
    element: React.ReactNode;
    index?: boolean;
}

const routes: RouteType[] = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: 'projects',
        element: <ProjectsPage />,
    },
    {
        path: 'work-experience',
        element: <WorkExperience />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default routes;
