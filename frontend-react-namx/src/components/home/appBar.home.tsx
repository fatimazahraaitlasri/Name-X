import * as React from "react";
import "./container.intro.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import Logo from "../../assets/textures/ffLogo.png"
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Sidebar from "./appSide.home";
import CardMedia from '@mui/material/CardMedia';



function ResponsiveAppBar() {
    const [open, setOpen] = React.useState(true);

    const newfun = () =>{
       setOpen(!open)
    }
    // const toggleDrawer =
    //     (open: boolean) =>
    //         (event: React.KeyboardEvent | React.MouseEvent) => {
    //             if (
    //                 event.type === 'keydown' &&
    //                 ((event as React.KeyboardEvent).key === 'Tab' ||
    //                     (event as React.KeyboardEvent).key === 'Shift')
    //             ) {
    //                 return;
    //             }
    //             setOpen(open);
    //         };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={newfun}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>


                    <Grid
                        direction="column"
                        justifyContent="center"
                        component="a"
                        href=""
                        sx={{
                            display: { xs: "flex" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        <Avatar
                            component="a"
                            sx={{
                                width: 50,
                                height: 50,
                                display: { xs: "flex" },
                            }}
                            src={Logo}
                            alt="logo"

                        />
                        Namx
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
