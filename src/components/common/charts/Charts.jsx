import { useFilterContext } from "../../../context/FilterContext";
import { chartsItems } from "../../../constants/items";
import BarChart from "./BarChart";

export default function Charts({ data, indexAxis = "x", dataSets = null }) {
  const {
    filterData: { consumption, losses, charge },
  } = useFilterContext();

  const options = {
    responsive: true,
    indexAxis,
    animation: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <>
      {(dataSets !== null || data) &&
        [consumption, losses, charge].map((item, index) => {
          return (
            <BarChart
              key={index}
              enabled={item}
              options={options}
              title={chartsItems[index].title}
              data={
                dataSets === null
                  ? {
                      labels: data[3],
                      datasets: [
                        {
                          label: chartsItems[index].title,
                          data: data[index],
                          backgroundColor: chartsItems[index].colors,
                        },
                      ],
                    }
                  : dataSets[index]
              }
            />
          );
        })}
    </>
  );
}
