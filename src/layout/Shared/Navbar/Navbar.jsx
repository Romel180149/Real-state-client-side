// import * as React from 'react';
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
import { Link, NavLink } from 'react-router-dom';
// import contexts
import { useContext } from 'react';
import { ProviderContext } from '../../../Provider/Provider';
// import Nav css
import './Navbar.css'
// import black sbg logo
import blackLogo from '../../../assets/BeryImg/logo.svg'
import useWishData from '../../../hooks/useWishData';
import useAdmin from '../../../hooks/useAdmin';
import useAgent from '../../../hooks/useAgent';
import { Grid } from '@mui/material';
import useProperty from '../../../hooks/useProperty';
// const pages = ['Home', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navbar() {
    const { user, logOut } = useContext(ProviderContext)
    const [wishlist] = useWishData()
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isAgent, isAgentLoading] = useAgent()
    // console.log( 'wishlist',wishlist)
    const [property]= useProperty()

    // this event handler is to log out users from the server
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out')
            })
            .catch(error => console.log('error logging out', error))
    }

    const navlinks = <>
     
     <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to='/'>Home</NavLink>
        <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to='all_properties'>All Properties</NavLink>
        <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to={`dashboard/${isAdmin && 'admin_profile' || isAgent && 'agent_profile' || 'user_profile'}`}>Dashboard</NavLink>
        <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to='login'>Login</NavLink>
     
    </>

    return (
        <AppBar position="static" className='py-[20px]' sx={{ backgroundColor: '#e9f1ff' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters className='flex justify-between flex-col md:flex-row'>
                    <Box>
                        {/* <img src="https://i.ibb.co/XtqfBDk/logo-white.png" alt="" /> */}
                        <Link to="/"><img src={blackLogo} alt="" /></Link>

                    </Box>

                    {/* Menu bar */}
                    <Box className="flex flex-col gap-5 md:flex-row justify-center md:gap-[60px] w-1/3 my-5 md:my-0" >
                        {navlinks}
                    </Box>

                    {/* user logo */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Grid className='flex'>
                        <Tooltip title="Open settings" className=''> 
                        <Box className={`${user? 'border border-[#0b2c3d] rounded-full pr-3 mr-3' : ''}`}>
                                <IconButton
                                    //   onClick={handleOpenUserMenu}
                                    className='flex gap-2'
                                    sx={{ p: 0, }}>
                                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                    <Typography>{user?.displayName}</Typography>
                                </IconButton>
                            </Box>
                         </Tooltip>
                         <Tooltip title="open setting">
                              <Link to={user ? '/' : 'login'}>
                                <Button
                                    onClick={handleLogOut}
                                    sx={{
                                        backgroundColor: '#0b2c3d',
                                        '&:hover': {
                                            backgroundColor: '#b39359'
                                        }
                                    }}
                                    variant="contained"
                                >
                                    {user ? 'Log Out' : 'Login'}
                                </Button>
                            </Link>
                         </Tooltip>
                        </Grid>
                  

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
