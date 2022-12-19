import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import Logo from "../../components/global/Logo/Logo"
import useOpen from "../../context/menuContext"
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Sidebar from "../appSide.home";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(): any {
    const [anchorElNav, setAnchorElNav] = React.useState<boolean | HTMLElement>(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleNavMenu = () => {
        anchorElNav ? setAnchorElNav(false) : setAnchorElNav(true)
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    ;

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="static" >
                <Container maxWidth="xl" sx={{ bgcolor: anchorElNav ? "#393533" : "", overflow: "hidden", position: "absolute", zIndex: 100, borderBottomWidth: "1px", borderBottomColor: "white", paddingTop: "1%", paddingBottom: "1%" }}>
                    <Toolbar disableGutters>

                        <Logo {...{ xs: 'none', md: 'flex' }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                        <Logo {...{ xs: 'flex', md: 'none' }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleNavMenu}
                                    sx={{ my: 2, fontWeight: "bold", color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box >

                        <Box sx={{ flexGrow: 0, width: "full" }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container >
            </AppBar >
            <Sidebar open={anchorElNav} setOpen={handleNavMenu} />
        </>



    );
}

export default ResponsiveAppBar;
