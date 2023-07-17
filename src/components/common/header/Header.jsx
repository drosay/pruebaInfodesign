import { useState, Fragment } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { COLORS } from "../../../constants/constants";
import { menuItems } from "../../../constants/items";

export default function Header() {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const handleDrawerToggle = () => {
    setActive((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "right" }}>
      <Typography
        variant="h5"
        sx={{ margin: "5px", color: COLORS.secondary, fontWeight: "bold" }}
      >
        Infodesign test
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  style={{
                    color: COLORS.text_primary,
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginLeft: "auto",
                  }}
                  to={item.to}
                >
                  {item.text}
                </Link>
              </ListItemButton>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: COLORS.primary }}
        elevation={1}
      >
        <Toolbar>
          {/* HERO */}
          <Typography
            variant="h4"
            sx={{ flexGrow: { xs: 1, sm: 0 }, fontWeight: "bold" }}
          >
            Infodesign
          </Typography>
          {/* MENU DESKTOP*/}
          <Box sx={{ display: { xs: "none", sm: "block" }, marginX: "auto" }}>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  textDecoration: "none",
                  margin: "10px",
                }}
                to={item.to}
              >
                {item.text}
              </Link>
            ))}
          </Box>
          {/* BURGUER MENU */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={active}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            ".MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 230,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
