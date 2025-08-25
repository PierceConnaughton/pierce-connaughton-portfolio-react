/*
 * © 2025 Pierce Connaughton
 * All rights reserved.
 *
 * This source code is licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import * as React from 'react';
import { useEffect } from 'react';
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
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import pcLogo from '../../assets/icons/android-chrome-512x512.png';

/*
 * Header component displays the navigation bar with links to different sections of the website.
 * It includes a brand logo, navigation links, and a download resume button.
 */

const pages = [
    { name: 'Home', path: '/', icon: <HomeIcon sx={{ fontSize: '1.1rem', mr: 1 }} /> },
    { name: 'Projects', path: '/projects', icon: <WorkIcon sx={{ fontSize: '1.1rem', mr: 1 }} /> },
    { name: 'Work Experience', path: '/work-experience', icon: <BusinessCenterIcon sx={{ fontSize: '1.1rem', mr: 1 }} /> },
    { name: 'About', path: '/about', icon: <PersonIcon sx={{ fontSize: '1.1rem', mr: 1 }} /> },
];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const location = useLocation();

    const handleToggleNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        if (anchorElNav) {
            setAnchorElNav(null);
        } else {
            setAnchorElNav(event.currentTarget);
        }
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const isActivePage = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    // Close mobile menu when route changes
    useEffect(() => {
        if (anchorElNav) {
            setAnchorElNav(null);
        }
    }, [location.pathname]);

    return (
        <AppBar position="fixed" className={styles.appBar}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: { xs: '56px', md: '64px' } }}>
                    {/* Left: Brand */}
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        className={styles.brand}
                        sx={{ 
                            display: { xs: 'none', lg: 'flex' }, 
                            alignItems: 'center', 
                            gap: 2, 
                            mr: 4,
                            fontSize: '1.25rem'
                        }}
                    >
                        <img 
                            src={pcLogo} 
                            alt="PC Logo" 
                            className={styles.logo}
                            style={{ 
                                height: 40, 
                                width: 40, 
                                borderRadius: '50%',
                                border: '2px solid rgba(255, 255, 255, 0.2)'
                            }} 
                        />
                        Pierce Connaughton
                    </Typography>
                    
                    {/* Mobile Nav */}
                    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="toggle navigation"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleToggleNavMenu}
                            color="inherit"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    transform: 'scale(1.05)'
                                },
                                transition: 'all 0.2s ease'
                            }}
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
                            sx={{ 
                                display: { xs: 'block', lg: 'none' },
                                zIndex: 1000,
                                '& .MuiPaper-root': {
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    mt: 1,
                                    minWidth: '200px',
                                    maxWidth: '280px',
                                    maxHeight: '275px'
                                }
                            }}
                            className={styles.mobileMenu}
                        >
                            {pages.map((page) => {
                                const handleMenuClick = () => {
                                    handleCloseNavMenu();
                                    // Use React Router navigation instead of window.location
                                    // This ensures proper routing and state management
                                };
                                
                                return (
                                    <MenuItem 
                                        key={page.name} 
                                        onClick={handleMenuClick} 
                                        component={Link}
                                        to={page.path}
                                        className={styles.menuItem}
                                        sx={{
                                            color: 'white',
                                            fontWeight: 500,
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                transform: 'translateX(4px)'
                                            },
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {page.icon}
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </Box>
                    
                    {/* Mobile Brand */}
                    <Box sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'flex', lg: 'none' }, 
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>
                        <Link 
                            to="/" 
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                textDecoration: 'none',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '1.1rem'
                            }}
                            className={styles.brand}
                        >
                            <img 
                                src={pcLogo} 
                                alt="PC Logo" 
                                className={styles.logo}
                                style={{ 
                                    height: 36, 
                                    width: 36,
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                    marginRight: '0.5rem'
                                }} 
                            />
                        </Link>
                    </Box>
                    
                    {/* Center: Nav Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                className={`${styles.navButton} ${isActivePage(page.path) ? styles.active : ''}`}
                                sx={{ 
                                    my: 2, 
                                    display: 'block',
                                    mx: 1
                                }}
                            >
                                {page.icon}
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    
                    {/* Right: Custom Content */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>
                        <Button
                            color="inherit"
                            href="/Pierce Connaughton resume.pdf"
                            download
                            className={styles.resumeButton}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '0.75rem',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    borderColor: 'rgba(255, 255, 255, 0.4)',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <DownloadIcon sx={{ fontSize: '1.1rem', mr: 1 }} />
                            Download Resume
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;