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
            main: '#008080',
        },
        secondary: {
            main: '#FFD700',
        },
        background: {
            default: '#F9F9F9',
        },
        text: {
            primary: '#1A1A1A',
        },
    },
});

export default theme;
