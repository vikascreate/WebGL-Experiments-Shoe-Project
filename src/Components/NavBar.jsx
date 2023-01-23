import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
const navItems = ['Home', 'About', 'Contact'];
function NavBar(props) {

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
                <AdbIcon
                  sx={{
                    display: { xs: "none", sm: "block", md: "flex" },
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", sm: "block", md: "flex" },
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