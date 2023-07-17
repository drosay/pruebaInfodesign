import { Box, Divider, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { COLORS, SIZES } from "../../../constants/constants";
import { menuItems } from "../../../constants/items";

export default function Home() {
  return (
    <Box sx={{padding:"10px"}}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: { sm: SIZES.titleSM, xs: SIZES.titleXS },
          color: COLORS.secondary,
          display: { sm: "inline-block", xs: "block" },
          mt: "20px",
        }}
      >
        Prueba de desarrollo Infodesign
        <Divider
          sx={{
            mt: { sm: "10px", xs: "5px" },
            mb: { sm: "5px", xs: "3px" },
            backgroundColor: COLORS.secondary,
            opacity: 0.4,
          }}
        />
      </Typography>
      <Typography variant="body1" sx={{ color: COLORS.text_primary }}>
        Oprime alguno de los 3 botones para comenzar a vizualizar los
        datos
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: { sm: "400px", xs: "100%" },
          mt: "10px",
        }}
      >
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{ backgroundColor: COLORS.tertiary }}
          >
            <Link
              style={{
                color: COLORS.text_primary,
                fontWeight: "bold",
                textDecoration: "none",
              }}
              to={item.to}
            >
              {item.text}
            </Link>
          </Button>
        ))}
      </Box>
    </Box>
  );
}
