import { Box, Typography } from "@mui/material";
import DateFilter from "./DateFilter";
import RadioFilter from "./RadioFilter";
import CheckFilter from "./CheckFilter";
import { COLORS, SIZES } from "../../../constants/constants";
import { useFilterContext } from "../../../context/FilterContext";
import SelectFilter from "./SelectFilter";

export default function Filters({ title, type = 1 }) {
  const {
    filterData: { mostrarComo },
  } = useFilterContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: { xs: "10px auto", sm: "10px" },
        p: { xs: "2px", sm: "10px" },
        width: { xs: "90%", sm: "600px" },
        textAlign: "center",
        // border: { xs: "none", sm: `solid 2px ${COLORS.primary}` },
        // borderRadius: "5px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: COLORS.secondary,
          fontWeight: "bold",
          fontSize: { sm: SIZES.titleSM, xs: SIZES.titleXS },
          m: "20px",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { sm: "space-evenly", xs: "space-between" },
        }}
      >
        <DateFilter />
        {type === 1 ? <RadioFilter /> : <SelectFilter />}
      </Box>
      {type === 1 && (mostrarComo === "graph" || mostrarComo === "both") && (
        <CheckFilter />
      )}
    </Box>
  );
}
