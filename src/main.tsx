/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import routes from './routes/routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
    <BrowserRouter>f
        <Routes>
            <Route path="/" element={<App />}>
                {routes.map(({ path, element, index }) => (
                    <Route key={path || 'index'} path={path} element={element} index={index} />
                ))}
            </Route>
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
);
