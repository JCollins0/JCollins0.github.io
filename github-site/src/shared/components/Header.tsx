import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { routes } from "../../routes";

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/*  */}
          {routes.map((route) => (
            <Typography
              key={route.to}
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
              {/* <Link to={route.to}>{route.name}</Link> */}
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
