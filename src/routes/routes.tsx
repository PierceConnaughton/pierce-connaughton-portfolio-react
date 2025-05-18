/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import React from 'react';
import Home from '../pages/Home/Home.tsx';
import About from '../pages/About/About.tsx';
import Projects from '../pages/Projects/Projects.tsx';
import Contact from '../pages/Contact/Contact.tsx';
import Experience from "../pages/Experience/Experience.tsx";
import University from "../pages/University/University.tsx";

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
        path: 'about',
        element: <About />,
    },
    {
        path: 'projects',
        element: <Projects />,
    },
    {
        path: 'contact',
        element: <Contact />,
    },
    {
        path: 'work-experience',
        element: <Experience />,
    },
    {
        path: 'university',
        element: <University />,
    },
];

export default routes;
