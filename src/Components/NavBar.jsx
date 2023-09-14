import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton ,Drawer,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { blueGrey, grey } from '@mui/material/colors';
import {  DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
const navItems = ['Home', 'About', 'Contact'];
function NavBar({toggleDarkMode,darkMode}) {
  const [mobileOpen,setMobileOpen]=React.useState(false)
  const [openDrawer,setOpenDrawer]=React.useState(false)
  const [dark,setDark]=React.useState(darkMode||false)
  useEffect(()=>{
    if(window.innerWidth<480){
      setMobileOpen(true)
    }else{
      setMobileOpen(false)
    }
  },[window.innerWidth])
  function handleDrawerToggle(){
    setOpenDrawer(!openDrawer)
  }
  function toggle(){
    toggleDarkMode()
    setDark(!dark)
  }
  function ShowcaseList(){
    return (
      <div style={{backgroundColor:dark?blueGrey[800]:'white',height:'100vh'}}>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" ,width:'40vw'}}>
          <Typography variant="h6" sx={{ my: 2,color:dark?'white':'black' }}>
            LOGO
          </Typography>
          <Divider sx={{borderColor:dark?'#DCD7C9':grey[400]}}/>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center",color:dark?'white':'black' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    );
  }
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <AppBar
            component={"nav"}
            color="transparent"
            sx={{
              backdropFilter: blur("15px"),
              WebkitBackdropFilter: blur("15px"),
              background:dark?blueGrey[800]:'white',
              transition:'background 2s ease-out',
              filter: blur("10px"),
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                {mobileOpen &&
                  <>
                    <IconButton onClick={handleDrawerToggle} sx={{color:dark?'#DCD7C9':'black'}}>
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      open={openDrawer}
                      onClose={() => setOpenDrawer(false)}
                    >
                      <ShowcaseList />
                    </Drawer>
                  </>
                }
                <AdbIcon
                  sx={{
                    display: { xs: "flex", sm: "block", md: "flex" },
                    mr: { md: "1" },
                    ml: { xs: "30vw", sm: "0", md: "0" },
                   color:dark?'#DCD7C9':'black'
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", sm: "block", md: "flex" },
                    flex: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color:dark?'#DCD7C9':'black',
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
                <IconButton onClick={toggle}>
                  {dark?<LightModeOutlined sx={{color:'#dcd7c9'}}/>:<DarkModeOutlined/>}
                </IconButton>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", md: "flex" },
                    mr: 2,
                  }}
                >
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color:dark?'#DCD7C9':'black'}}>
                      {item}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </div>
    );
}

export default NavBar;