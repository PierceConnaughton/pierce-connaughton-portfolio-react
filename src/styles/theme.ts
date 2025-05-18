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
            main: '#008080', // Teal
        },
        secondary: {
            main: '#FF6F61', // Coral
        },
        background: {
            default: '#F5F5F5', // Light background
        },
        text: {
            primary: '#1A1A1A', // Almost black
        },
    },
    typography: {
        fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
});

export default theme;

