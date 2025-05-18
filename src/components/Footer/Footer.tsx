/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box component="footer" sx={{ mt: 4, py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Pierce Connaughton. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;
