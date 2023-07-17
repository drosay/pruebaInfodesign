import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useFilterContext } from "../../../context/FilterContext";

export default function SelectFilter() {
  const {
    filterData: { tramo },
    setFilterData,
  } = useFilterContext();

  const handleChange = (e) => {
    setFilterData((prev) => ({ ...prev, tramo: e?.target?.value || "" }));
  };

  return (
    <Box
      sx={{
        width: { sm: "240px", xs: "30%" },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tramo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tramo}
          label="Tramo"
          onChange={handleChange}
        >
          <MenuItem value={"Tramo 1"}>Tramo 1</MenuItem>
          <MenuItem value={"Tramo 2"}>Tramo 2</MenuItem>
          <MenuItem value={"Tramo 3"}>Tramo 3</MenuItem>
          <MenuItem value={"Tramo 4"}>Tramo 4</MenuItem>
          <MenuItem value={"Tramo 5"}>Tramo 5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
