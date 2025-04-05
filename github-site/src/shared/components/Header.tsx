import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

import { routes } from "../../routes";
import { useState } from "react";

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              {routes.map((route) => (
                <MenuItem key={route.to} onClick={handleCloseNavMenu}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    sx={{
                      mr: 2,
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <Link component={RouterLink} to={route.to} underline="none">
                      {route.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {routes.map((route) => (
            <Typography
              key={route.to}
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                display: { xs: "none", sm: "flex" },
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link component={RouterLink} to={route.to} underline="none">
                {route.name}
              </Link>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
