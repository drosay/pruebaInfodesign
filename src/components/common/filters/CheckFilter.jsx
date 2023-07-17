import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFilterContext } from "../../../context/FilterContext";
import { COLORS } from "../../../constants/constants";
import { checkItems } from "../../../constants/items";

export default function CheckFilter() {
  const { filterData, setFilterData } = useFilterContext();

  const handleChange = (e) => {
    setFilterData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  return (
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: { sm: "space-evenly", xs: "space-between" },
      }}
    >
      {checkItems.map((item, index) => {
        return (
          <FormControlLabel
            key={index}
            label={item.label}
            control={
              <Checkbox
                onChange={handleChange}
                name={item.name}
                checked={filterData[item.name]}
                sx={{
                  color: COLORS.secondary,
                  "&.Mui-checked": {
                    color: COLORS.secondary,
                  },
                }}
              />
            }
          />
        );
      })}
    </FormGroup>
  );
}
