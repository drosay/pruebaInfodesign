import { Box, Typography } from "@mui/material";
import { COLORS, SIZES } from "../../../constants/constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ enabled, options, data, title }) {
  return (
    <>
      {enabled && (
        <Box
          sx={{
            width: {
              sm: "390px",
              xs: "100%",
            },
            border: `solid 1.2px ${COLORS.primary}`,
            borderRadius: "5px",
            m: "2px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { sm: SIZES.textSM, xs: SIZES.textXS } }}
          >
            {title}
          </Typography>
          <Bar options={options} data={data} />
        </Box>
      )}
    </>
  );
}
