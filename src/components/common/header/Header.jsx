import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderDrawer from "./HeaderDrawer";
import { COLORS } from "../../../constants/constants";
import { menuItems } from "../../../constants/items";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleDrawerToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ position: "fixed", backgroundColor: COLORS.primary }}
        elevation={1}
      >
        <Toolbar>
          {/* HERO */}
          <Typography
            variant="h4"
            sx={{ flexGrow: { xs: 1, sm: 0 }, fontWeight: "bold" }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: COLORS.white,
              }}
            >
              Infodesign
            </Link>
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
        <HeaderDrawer handleDrawerToggle={handleDrawerToggle} active={active} />
      </Box>
    </Box>
  );
}