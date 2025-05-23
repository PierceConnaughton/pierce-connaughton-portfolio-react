/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import pcLogo from '../../assets/icons/android-chrome-512x512.png';

/*
 * Header component displays the navigation bar with links to different sections of the website.
 * It includes a brand logo, navigation links, and a download resume button.
 */

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Work Experience', path: '/work-experience' },
    { name: 'About', path: '/about' },
];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" className={styles.appBar}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Left: Brand */}
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        className={styles.brand}
                        sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2, mr: 4 }}
                    >
                        <img src={pcLogo} alt="PC Logo" style={{ height: 36, width: 36, borderRadius: '50%' }} />
                    </Typography>
                    {/* Mobile Nav */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Mobile Brand */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img src={pcLogo} alt="PC Logo" style={{ height: 42, width: 42}} />
                        </Link>
                    </Box>
                    {/* Center: Nav Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                className={`${styles.navButton} ${location.pathname === page.path ? 'active' : ''}`}
                                sx={{ my: 2, display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    {/* Right: Custom Content */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            color="inherit"
                            href="/Pierce Connaughton resume.pdf"
                            download
                            className={styles.resumeButton}
                        >
                            Download Resume
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;