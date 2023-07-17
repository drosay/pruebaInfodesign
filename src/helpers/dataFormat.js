import { COLORS } from "../constants/constants";

export const dataTramos = (data) => {
  return data?.reduce(
    (prev, curr) => {
      return [
        [...prev[0], curr.consumo],
        [...prev[1], curr.perdidas],
        [...prev[2], curr.costo],
        [...prev[3], curr.Linea],
      ];
    },
    [[], [], [], []]
  );
};

export const makeDatasets = (data) => {
  const tramos = [];
  const consumoResidencial = [];
  const consumoComercial = [];
  const consumoIndustrial = [];
  const perdidasResidencial = [];
  const perdidasComercial = [];
  const perdidasIndustrial = [];
  const costoResidencial = [];
  const costoComercial = [];
  const costoIndustrial = [];

  data?.forEach((item) => {
    tramos.push(item.Linea);
    consumoResidencial.push(item.consumo_residencial);
    consumoComercial.push(item.consumo_comercial);
    consumoIndustrial.push(item.consumo_industrial);
    perdidasResidencial.push(item.perdidas_residencial);
    perdidasComercial.push(item.perdidas_comercial);
    perdidasIndustrial.push(item.perdidas_industrial);
    costoResidencial.push(item.costo_residencial);
    costoComercial.push(item.costo_comercial);
    costoIndustrial.push(item.costo_industrial);
  });

  return [
    {
      labels: tramos,
      datasets: [
        {
          label: "Residencial",
          data: consumoResidencial,
          backgroundColor: COLORS.primary,
        },
        {
          label: "Comercial",
          data: consumoComercial,
          backgroundColor: COLORS.secondary,
        },
        {
          label: "Industrial",
          data: consumoIndustrial,
          backgroundColor: COLORS.tertiary,
        },
      ],
    },
    {
      labels: tramos,
      datasets: [
        {
          label: "Residencial",
          data: perdidasResidencial,
          backgroundColor: COLORS.cian,
        },
        {
          label: "Comercial",
          data: perdidasComercial,
          backgroundColor: COLORS.orange,
        },
        {
          label: "Industrial",
          data: perdidasIndustrial,
          backgroundColor: COLORS.text_primary,
        },
      ],
    },
    {
      labels: tramos,
      datasets: [
        {
          label: "Residencial",
          data: costoResidencial,
          backgroundColor: COLORS.orange,
        },
        {
          label: "Comercial",
          data: costoComercial,
          backgroundColor: COLORS.primary,
        },
        {
          label: "Industrial",
          data: costoIndustrial,
          backgroundColor: COLORS.tertiary,
        },
      ],
    },
  ];
};
