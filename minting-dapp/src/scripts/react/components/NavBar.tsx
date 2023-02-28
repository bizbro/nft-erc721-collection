import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { makeStyles } from '@mui/styles';
import "./Styling.css";
import { TwitterShareButton } from 'react-share';


const pages = ['Twitter', 'Discord', 'FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

  const useStyles = makeStyles(theme => ({
    appBar: {
      top: "auto",
      bottom: 0,
      textAlign:"center"
    },
  }));
  const classes = useStyles();


  return (
    <AppBar sx={{ borderRadius: 1 }} position="static"  style={{ background: '#ffffff' }} className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link to="/">
              <img className='favlogo' id="fav" src="/build/images/fav.png" alt="Fav"/>
            </Link>
          
          <Link to="/" style={{textDecoration: 'none'}}>
            <Typography
              align="center"
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: "#1f2624",
                textDecoration: 'none',
                paddingLeft: '2.5rem',
                
              }}
            >
              RareBits Canvas
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1,  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#1f2624",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { lg: 'block', md: 'block' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                    <a style={{ textDecoration: 'none', boxShadow: 'none', color: '#1f2624' }} href="https://twitter.com/RareBitsCanvas" target="_blank">
                      Twitter
                    </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <a style={{ textDecoration: 'none', boxShadow: 'none', color: '#1f2624' }} href="https://t.co/8YadElAbwp" target="_blank">
                       Discord
                    </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Typography 
                    textAlign="center"
                    component={Link}
                    to="/faq"
                    sx={{
                        color: "#1f2624",
                    }}
                    style={{ textDecoration: 'none', boxShadow: 'none', color: '#1f2624' }}
                    >
                    FAQ
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Typography 
                    textAlign="center"
                    component={Link}
                    to="/about"
                    sx={{
                        color: "#1f2624",
                    }}
                    style={{ textDecoration: 'none', boxShadow: 'none', color: '#1f2624' }}
                    >
                    About ChanGirl
                  </Typography>
                </MenuItem>
              
            </Menu>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

