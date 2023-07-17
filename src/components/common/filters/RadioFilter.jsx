import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { COLORS, SIZES } from "../../../constants/constants";
import { useFilterContext } from "../../../context/FilterContext";
import { radioItems } from "../../../constants/items";

export default function RadioFilter() {
  const {
    filterData: { mostrarComo },
    setFilterData,
  } = useFilterContext();

  const handleChange = (e) => {
    setFilterData((prev) => ({ ...prev, mostrarComo: e.target.value }));
  };

  return (
    <FormControl sx={{ textAlign: "end" }}>
      <FormLabel
        sx={{
          color: COLORS.secondary,
          fontSize: { sm: SIZES.subtitleSM, xs: SIZES.subtitleXS },
          "&.Mui-focused": {
            color: COLORS.secondary,
          },
        }}
      >
        Mostrar como
      </FormLabel>
      <RadioGroup value={mostrarComo} onChange={handleChange}>
        {radioItems.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            label={item.label}
            labelPlacement="start"
            control={
              <Radio
                sx={{
                  color: COLORS.secondary,
                  "&.Mui-checked": { color: COLORS.secondary },
                }}
              />
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
