/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See LICENSE file in the project root for license information.
 */

import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

interface RouteType {
    path?: string;
    element: React.ReactNode;
    index?: boolean;
}

const routes: RouteType[] = [
    {
        index: true,   // this matches path '/'
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
];

export default routes;
