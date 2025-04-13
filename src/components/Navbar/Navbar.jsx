import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate, useLocation } from "react-router-dom";
import theme from "../../Theme/Theme";
import CartDrawer from "../Card/Card";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const { isLoggedIn, userData, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userData');
    
    if (token && user && user !== 'undefined') {
      setIsLoggedIn(true);
      try {
        const parsedUser = JSON.parse(user);
        setUserData(parsedUser);
      } catch {
        // If parsing fails, clear invalid data
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
      }
    }
  }, []);
  const handleLogout = () => {
    logout();
    navigate("/");
  };


  const baseNavItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const navItems = isLoggedIn
    ? [...baseNavItems, { name: "Dashboard", path: "/dashboard" }]
    : baseNavItems;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: theme.colors.primary.main }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, color: theme.colors.background.paper }}
      >
        BRAND NAME
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            sx={{
              justifyContent: "center",
              borderBottom:
                location.pathname === item.path
                  ? `3px solid ${theme.colors.background.paper}`
                  : "3px solid transparent",
            }}
            onClick={() => navigate(item.path)}
          >
            <ListItemText
              primary={item.name}
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: theme.colors.background.paper,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const userSection = (
    <Box sx={{ display: "flex", gap: 2 }}>
      <CartDrawer />
      {isLoggedIn ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: theme.colors.background.paper, mr: 1 }}>
            {userData?.name}
          </Typography>
          <IconButton
            sx={{ color: theme.colors.background.paper }}
            onClick={handleLogout}
          >
            <PersonIcon />
          </IconButton>
        </Box>
      ) : (
        <IconButton
          sx={{ color: theme.colors.background.paper }}
          onClick={() => navigate("/login")}
        >
          <PersonIcon />
        </IconButton>
      )}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.colors.primary.main,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              sx={{ color: theme.colors.background.paper }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: isMobile ? 0 : 1,
              color: theme.colors.background.paper,
              fontWeight: 700,
              letterSpacing: ".5px",
            }}
          >
            BRAND NAME
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{
                    color: theme.colors.background.paper,
                    fontSize: "1rem",
                    textTransform: "none",
                    borderBottom:
                      location.pathname === item.path
                        ? `3px solid ${theme.colors.background.paper}`
                        : "3px solid transparent",
                    borderRadius: 0,
                    paddingBottom: "4px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.colors.primary.light,
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {userSection}
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              bgcolor: theme.colors.primary.main,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default Navbar;
