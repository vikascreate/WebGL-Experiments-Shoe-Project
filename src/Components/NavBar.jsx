import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton ,Drawer,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
const navItems = ['Home', 'About', 'Contact'];
function NavBar(props) {
  const [mobileOpen,setMobileOpen]=React.useState(false)
  const [openDrawer,setOpenDrawer]=React.useState(false)
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
  function ShowcaseList(){
    return (
      <div>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" ,width:'40vw'}}>
          <Typography variant="h6" sx={{ my: 2 }}>
            LOGO
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
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
              background: "rgba(255, 255, 255, .95)",
              filter: blur("10px"),
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                {mobileOpen &&
                  <>
                    <IconButton onClick={handleDrawerToggle}>
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
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", md: "flex" },
                    mr: 2,
                  }}
                >
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color: "black" }}>
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