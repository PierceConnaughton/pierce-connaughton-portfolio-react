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
