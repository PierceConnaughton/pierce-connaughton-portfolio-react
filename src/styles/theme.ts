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
        h6: {
            fontFamily: `'Inter', 'Roboto', sans-serif`,
            fontWeight: 600,
            letterSpacing: '0.02em',
        },
        button: {
            fontFamily: `'Inter', 'Roboto', sans-serif`,
            fontWeight: 500,
            letterSpacing: '0.02em',
            textTransform: 'none',
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
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '64px !important',
                    '@media (min-width: 600px)': {
                        minHeight: '64px !important',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.75rem',
                    textTransform: 'none',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                    },
                },
                outlined: {
                    borderWidth: '2px',
                    '&:hover': {
                        borderWidth: '2px',
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderRadius: '1rem',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                    margin: '0.25rem 0.5rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateX(4px)',
                    },
                },
            },
        },
    },
});

export default theme;

