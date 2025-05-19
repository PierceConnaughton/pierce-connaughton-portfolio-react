/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#4FD1C5',
            main: '#008080',
            dark: '#005959',
        },
        secondary: {
            light: '#FF9A8B',
            main: '#FF6F61',
            dark: '#C94A3B',
        },
        background: {
            default: '#E6F2F2',
        },
        text: {
            primary: '#1A1A1A',
        },
    },
    typography: {
        fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
        h4: {
            fontFamily: `'Poppins', 'Inter', 'Roboto', sans-serif`,
            fontWeight: 600,
            color: '#222',
            letterSpacing: '0.01em',
        },
        h5: {
            fontFamily: `'Poppins', 'Inter', 'Roboto', sans-serif`,
            fontWeight: 500,
            color: '#222',
            letterSpacing: '0.01em',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#ebfaf8',
                },
            },
        },
    },
});

export default theme;

